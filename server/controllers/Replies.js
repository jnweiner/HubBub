const pool = require('../../database/index.js');

const getAllReplies = (req, res) => {
  const sql = 'SELECT replies.*, users.id AS user_id, users.username, users.month_moved, users.year_moved, users.avatar, users.neighborhood FROM replies, users WHERE replies.user_id = users.id AND replies.thread_id = $1 ORDER BY date ASC';
  const values = [req.query.threadId];
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

const addReply = (req, res) => {
  const text = req.body.text;
  const user_id = req.body.userId;
  const thread_id = req.params.threadId;
  const sql = 'INSERT INTO replies(text, user_id, thread_id) VALUES($1, $2, $3)';
  const values = [text, user_id, thread_id];
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

const updateReply = (req, res) => {
  const text = req.body.text;
  const replyId = req.params.replyId;
  const sql = 'UPDATE replies SET text = $1 WHERE id = $2';
  const values = [text, replyId];
  pool
    .query(sql, values)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

const deleteReply = (req, res) => {
  const replyId = req.params.replyId;
  const sql = 'DELETE FROM replies WHERE id = $1';
  const values = [replyId];
  pool
    .query(sql, values)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};


module.exports = {
  getAllReplies,
  addReply,
  updateReply,
  deleteReply
}