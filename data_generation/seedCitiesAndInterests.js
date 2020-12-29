const pool = require('../database/index.js');

const cities = [
  'Seattle'  // for now just populating Seattle with information, for demo purposes
];

const interests = [
  {
    interest: 'Fitness',
    icon: 'fas fa-running'
  },
  {
    interest: 'Outdoors & Recreation',
    icon: 'fas fa-hiking'
  },
  {
    interest: 'Reading & Writing',
    icon: 'fas fa-book-open'
  },
  {
    interest: 'Arts & Crafts',
    icon: 'fas fa-palette'
  },
  {
    interest: 'Tech',
    icon: 'fas fa-robot'
  },
  {
    interest: 'Food & Drink',
    icon: 'fas fa-utensils'
  },
  {
    interest: 'Music',
    icon: 'fas fa-music'
  },
  {
    interest: 'Gaming',
    icon: 'fas fa-gamepad'
  },
  {
    interest: 'Sports',
    icon: 'fas fa-football-ball'
  },
  {
    interest: 'Pop Culture',
    icon: 'fas fa-film'
  }
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

const insertInterest = (interest, icon) => {
  const sql = 'INSERT INTO interests(interest) VALUES($1, $2)';
  pool
    .query(sql, [interest, icon])
    .then(res => {
      console.log('success');
    })
    .catch(err => console.log(err));
};

cities.forEach(city => {
  insertCity(city);
});

interests.forEach(interest => {
  insertInterest(interest.interest, interest.icon);
});