const pool = require('../database/index.js');

const cities = [
  'Seattle'  // for now just populating Seattle with information, for demo purposes
];

const interests = [
  'Fitness',
  'Outdoors & Recreation',
  'Reading & Writing',
  'Arts & Crafts',
  'Tech',
  'Food & Drink',
  'Music',
  'Gaming',
  'Sports',
  'Pop Culture'
];

const insertCity = (value) => {
  const sql = 'INSERT INTO cities(city) VALUES($1)';
  pool
    .query(sql, [value])
    .then(res => {
      console.log('success');
    })
    .catch(err => console.log(err));
};

const insertInterest = (value) => {
  const sql = 'INSERT INTO interests(interest) VALUES($1)';
  pool
    .query(sql, [value])
    .then(res => {
      console.log('success');
    })
    .catch(err => console.log(err));
};

cities.forEach(city => {
  insertCity(city);
});

interests.forEach(interest => {
  insertInterest(interest);
});

