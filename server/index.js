const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pool = require('../database/index.js');
const Cities = require('./controllers/Cities.js');
const Users = require('./controllers/Users.js');
const Threads = require('./controllers/Threads.js');
const Replies = require('./controllers/Replies.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/api/login', (req, res) => {
  const sql = 'SELECT username, password from users where username = $1';
  const values = [req.query.username]
  pool
   .query(sql, values)
   .then(data => {
     if (data.rows[0].password === req.query.password) {
      res.sendStatus(200);
     } else {
       res.sendStatus(401);
     }
   })
   .catch(err => {
     console.log(err);
     res.sendStatus(500);
   })
});

// should there be a cities_interests table, to account for diff cities having diff interests? (stretch goal)
app.get('/api/cities', Cities.getAllCities);
app.get('/api/cities/:cityId/users', Cities.getCityUserCount)
app.get('/api/cities/:cityId/interests', Cities.getCityInterests);

app.get('/api/threads', Threads.getAllThreads)
app.get('/api/threads/:threadId', Threads.getSingleThread);
app.post('/api/threads', Threads.addThread);
app.patch('/api/threads/:threadId', Threads.updateThread);
app.patch('/api/threads/:threadId/title', Threads.updateThreadTitle);
app.delete('/api/threads/:threadId', Threads.deleteThread);

app.get('/api/replies', Replies.getAllReplies);
app.post('/api/replies', Replies.addReply);
app.patch('/api/replies/:replyId', Replies.updateReply);
app.delete('/api/replies/:replyId', Replies.deleteReply);

app.post('/api/users', Users.addUser);
app.get('/api/users/:username', Users.getSingleUser);

app.get('/api/users/:username/interests', Users.getUserInterests);
app.post('/api/users/:username/interests', Users.addUserInterest);
app.delete('/api/users/:username/interests', Users.deleteUserInterest);