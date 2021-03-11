const pool = require('../../database/index.js');

const getAllCities = (req, res) => {
  const sql = 'SELECT * from cities';
  pool
    .query(sql)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

// need to update to be for specific city
const getCityInterests = (req, res) => {
  const sql = 'SELECT id, interest AS name, icon from interests ORDER BY interest ASC';
  pool
    .query(sql)
    .then(data => {
      // for each interest, get num of users in city following that interest
      const interests = data.rows;
      const interestsWithUserCount = interests.map(interest => {
        const sqlUsers = 'SELECT COUNT(users.id) FROM users, users_interests WHERE users.city_id = $1 AND users.id = users_interests.user_id AND users_interests.interest_id = $2';
        const values = [req.query.cityId, interest.id];
        return new Promise((resolve, reject) => {
          pool.query(sqlUsers, values, (err, data) => {
            if (err) {
              reject(err);
            } else {
              interest.userCount = data.rows[0].count;
              resolve(interest);
            }
          })
        });
      });
      return Promise.all(interestsWithUserCount)
    })
    .then(interestsWithUserCount => res.send(interestsWithUserCount))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

module.exports = {
  getAllCities,
  getCityInterests
}