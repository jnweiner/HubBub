const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const pool = require('../database/index.js');

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// get all cities supported by app
app.get('/api/cities', (req, res) => {
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
});

// get all interests supported by app for that city
    // should create cities_interests table?
app.get('/api/cities/:cityId/interests', (req, res) => {
  const sql = 'SELECT * from interests';
  pool
    .query(sql)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// get num of users associated with a city
app.get('/api/cities/:cityId/users', (req, res) => {
  const sql = 'SELECT COUNT(*) FROM users WHERE city_id = $1';
  const values = [req.params.cityId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// get number of users associated with each interest within a city
app.get('/api/cities/:cityId/interests/:interestId/users', (req, res) => {
  const sql = 'SELECT COUNT(users.id) FROM users, users_interests WHERE users.city_id = $1 AND users.id = users_interests.user_id AND users_interests.interest_id = $2';
  const values = [req.params.cityId, req.params.interestId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// app.get('/api/cities/:cityId/interests/:interestId/meetup')
//   // get top 4 related meetups (by most recently active?)

// app.get('/api/cities/:cityId/interests/:interestId/yelp')
//   // get top 4 related yelp attractions (by rating)

// get all threads for an interest in a city, in order of most recent
// can't seem to get a count of all replies associated with that thread
app.get('/api/cities/:cityId/interests/:interestId/threads', (req, res) => {
  const sql = 'SELECT threads.*, users.id AS user_id, users.username, users.month_moved, users.year_moved, users.avatar, users.neighborhood FROM threads, users WHERE users.id = threads.user_id AND threads.city_id = $1 AND threads.interest_id = $2 ORDER BY threads.date DESC';
  const values = [req.params.cityId, req.params.interestId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// post a new thread (automatically add to watched table for current user)
app.post('/api/cities/:cityId/interests/:interestId/threads')

// get number of replies for a specific thread (or will this come back as part of the thread obj?)
// get all replies associated with specific thread
// stretch goal: patch/delete handlers for threads
// q: is this endpoint correct, when I only need the threadId?
app.get('/api/cities/:cityId/interests/:interestId/threads/:threadId', (req, res) => {
  const sql = 'SELECT * FROM replies WHERE thread_id = $1 ORDER BY date DESC';
  const values = [req.params.threadId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// post a new reply to thread
// stretch goal: patch/delete handlers for replies
app.post('/api/cities/:cityId/interests/:interestId/threads/:threadId')

// post new user information 
app.post('/api/users')

// get information for a specific user
// how to neatly get number of posts by a user?
// stretch goal: patch/delete handlers for this endpoint
app.get('/api/users/:userId', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = $1';
  const values = [req.params.userId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// path to validate username/password combo?
// path to validate that username is not already taken?

// get all interests for a specific user
app.get('/api/users/:userId/interests', (req, res) => {
  const sql = 'SELECT users_interests.*, interests.id AS interest_id, interests.interest from users_interests, interests WHERE users_interests.user_id = $1 AND users_interests.interest_id = interests.id';
  const values = [req.params.userId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});
  
app.post('/api/users/:userId/interests')
  // add an interest for current user

app.delete('/api/users/:userId/interests')
  // delete an interest for current user


// stretch goal: building out watching/unwatching threads functionality
// app.get('/api/users/:userId/watched')
//   // get all threads watched by a user

// app.post('/api/users/:userId/watched')
//   // post a new watched thread for a user (add a new user_id/thread_id combo to watched_threads table)

// app.delete('/api/users/:userId/watched')
//   // delete a watched thread