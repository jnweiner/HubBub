const pool = require('../../database/index.js');

const addUser = (req, res) => {
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const neighborhood = req.body.neighborhood;
  const avatar = req.body.avatar;
  const month_moved = req.body.month;
  const year_moved = req.body.year;
  const age_group = req.body.ageGroup;
  const cityId = req.body.cityId;
  const sql = 'INSERT INTO threads(first_name, last_name, email, username, password, neighborhood, avatar, month_moved, year_moved, age_group, cityId) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id';
  const values = [first_name, last_name, email, username, password, neighborhood, avatar, month_moved, year_moved, age_group, cityId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const getSingleUser = (req, res) => {
  const sql = 'SELECT users.*, cities.id as city_id, cities.city FROM users, cities WHERE users.city_id = cities.id AND username = $1';
  const values = [req.params.username];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows[0])
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const getUserInterests = (req, res) => {
  const sql = 'SELECT users.username, users.id AS user_id, users_interests.*, interests.id, interests.interest AS name from users_interests, users, interests WHERE users.username = $1 AND users_interests.user_id = users.id AND users_interests.interest_id = interests.id ORDER BY interests.interest ASC';
  const values = [req.params.username];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const addUserInterest = (req, res) => {
  const user_id = req.body.userId;
  const interest_id = req.body.interestId;
  const sql = 'INSERT INTO users_interests(user_id, interest_id) VALUES($1, $2)';
  const values = [user_id, interest_id];
  pool
    .query(sql, values)
    .then(data => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const deleteUserInterest = (req, res) => {
  const user_id = req.body.userId;
  const interest_id = req.body.interestId;
  const sql = 'DELETE FROM users_interests WHERE user_id = $1 AND interest_id = $2';
  const values = [user_id, interest_id];
  pool
    .query(sql, values)
    .then(data => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

module.exports = {
  addUser,
  getSingleUser,
  getUserInterests,
  addUserInterest,
  deleteUserInterest
}