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

// user onboarding flow
  // get all interests
  // get all cities
  // post new user information

// city hub landing page
  // get number of users associated with a city
  // get number of users associated with each interest within a city

// interest landing page
  // get top 5 threads for an interest in a city, in order of most recent 
  // get top 4 related meetups (by most recently active?)
  // get top 4 related yelp attractions (by rating)

// interest forum
  // get all threads for an interest in a city, in order of most recent
  // get number of replies for a specific thread (or will this come back as part of the thread obj?)
  // post a new thread (automatically add to watched table for current user)
  // stretch goal: update text of thread, delete thread

// thread page
  // get all replies associated with specific thread
  // post a new reply to that thread (automatically add to watched table for current user)
  // stretch goal: update text of reply, delete reply

// watching/unwatching threads
  // post a new watched thread (add a new user_id/thread_id combo to watched_threads table)
  // delete a watched thread
  // get all threads watched by a user

// user info
  // get number of posts by a user
  // update user information
  // post an interest for current user
  // delete an interest for a current user
  // get all interests for current user