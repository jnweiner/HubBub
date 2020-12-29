const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pool = require('../database/index.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

// get num of users associated with a city
app.get('/api/cities/:cityId/users', (req, res) => {
  const sql = 'SELECT COUNT(*) FROM users WHERE city_id = $1';
  const values = [req.params.cityId];
  pool
    .query(sql, values)
    .then(data => {
      res.send(data.rows[0])
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

// get all interests for city, along with follower counts
// should there be a cities_interests table, to account for diff cities having diff interests (stretch goal)
app.get('/api/cities/:cityId/interests', (req, res) => {
  const sql = 'SELECT id, interest AS name, icon from interests ORDER BY interest ASC';
  pool
    .query(sql)
    .then(data => {
      // for each interest, get num of users in city following that interest
      const interests = data.rows;
      const interestsWithUserCount = interests.map(interest => {
        const sqlUsers = 'SELECT COUNT(users.id) FROM users, users_interests WHERE users.city_id = $1 AND users.id = users_interests.user_id AND users_interests.interest_id = $2';
        const values = [req.params.cityId, interest.id];
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
});

// app.get('/api/cities/:cityId/interests/:interestId/meetup')
//   // get top 4 related meetups (by most recently active?)

// app.get('/api/cities/:cityId/interests/:interestId/yelp')
//   // get top 4 related yelp attractions (by rating)

// get all threads for an interest in a city, in order of most recent
// can't seem to get a count of all replies associated with that thread as part of single sql query
app.get('/api/cities/:cityId/interests/:interestId/threads', (req, res) => {
  const sql = 'SELECT threads.*, users.id AS user_id, users.username, users.month_moved, users.year_moved, users.avatar, users.neighborhood FROM threads, users WHERE users.id = threads.user_id AND threads.city_id = $1 AND threads.interest_id = $2 ORDER BY threads.date DESC';
  const values = [req.params.cityId, req.params.interestId];
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
});

// post a new thread
app.post('/api/cities/:cityId/interests/:interestId/threads', (req, res) => {
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
});

// get all replies associated with specific thread
// stretch goal: patch/delete handlers for threads
// q: is this endpoint correct, when I only need the threadId?
app.get('/api/cities/:cityId/interests/:interestId/threads/:threadId', (req, res) => {
  const sql = 'SELECT replies.*, users.id AS user_id, users.username, users.month_moved, users.year_moved, users.avatar, users.neighborhood FROM replies, users WHERE replies.user_id = users.id AND replies.thread_id = $1 ORDER BY date DESC';
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
app.post('/api/cities/:cityId/interests/:interestId/threads/:threadId', (req, res) => {
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
});

// post new user information 
app.post('/api/users', (req, res) => {
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
});

// get information for a specific user (getting based on username, from login)
// how to neatly get number of posts by a user?
// stretch goal: patch/delete handlers for this endpoint
app.get('/api/users/:username', (req, res) => {
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
});

// path to validate username/password combo?
// path to validate that username is not already taken?

// get all interests for a specific user
app.get('/api/users/:username/interests', (req, res) => {
  const sql = 'SELECT users.username, users.id AS user_id, users_interests.*, interests.id AS interest_id, interests.interest AS name from users_interests, users, interests WHERE users.username = $1 AND users_interests.user_id = users.id AND users_interests.interest_id = interests.id';
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
});

// add an interest for current user
app.post('/api/users/:username/interests', (req, res) => {
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
});

// delete an interest for current user
app.delete('/api/users/:userId/interests', (req, res) => {
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
})


// stretch goal: building out watching/unwatching threads functionality
// all posts users make will automatically be 'watched'

// app.get('/api/users/:userId/watched')
//   // get all threads watched by a user

// app.post('/api/users/:userId/watched')
//   // post a new watched thread for a user (add a new user_id/thread_id combo to watched_threads table)

// app.delete('/api/users/:userId/watched')
//   // delete a watched thread