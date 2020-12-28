const pool = require('./index.js');

const cities = [
  'New York City',
  'Los Angeles',
  'Chicago',
  'Dallas',
  'Houston',
  'Washington, D.C.',
  'Miami',
  'Philadelphia',
  'Atlanta',
  'Phoenix',
  'Boston',
  'San Francisco',
  'Riverside',
  'Detroit',
  'Seattle',
  'Minneapolis',
  'San Diego',
  'Tampa',
  'Denver',
  'St. Louis'
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

// could abstract into just one insert function
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

