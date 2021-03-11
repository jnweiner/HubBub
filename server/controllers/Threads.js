const pool = require('../../database/index.js');

const getAllThreads = (req, res) => {
  const sql = 'SELECT threads.*, interests.interest, interests.id AS interest_id, users.id AS user_id, users.username, users.month_moved, users.year_moved, users.avatar, users.neighborhood FROM threads, users, interests WHERE interests.id = threads.interest_id AND users.id = threads.user_id AND threads.city_id = $1 AND threads.interest_id = $2 ORDER BY threads.date DESC';
  const values = [req.query.cityId, req.query.interestId];
  pool
    .query(sql, values)
    .then(data => {
      // for each thread, get num of replies
      const threads = data.rows;
      const threadsWithReplyCount = threads.map(thread => {
        const sqlReplies = 'SELECT COUNT(*) FROM replies where thread_id = $1';
        const values = [thread.id];
        return new Promise((resolve, reject) => {
          pool.query(sqlReplies, values, (err, data) => {
            if (err) {
              reject(err);
            } else {
              thread.replyCount = data.rows[0].count;
              resolve(thread);
            }
          })
        });
      });
      return Promise.all(threadsWithReplyCount)
    })
    .then(threadsWithReplyCount => res.send(threadsWithReplyCount))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const addThread = (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const interest_id = req.params.interestId;
  const city_id = req.params.cityId;
  const user_id = req.body.userId;
  const sql = 'INSERT INTO threads(title, text, interest_id, city_id, user_id) VALUES($1, $2, $3, $4, $5)';
  const values = [title, text, interest_id, city_id, user_id];
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
  getAllThreads,
  addThread
}