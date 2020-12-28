const pool = require('../database/index.js');
const faker = require('faker');

const insert = (sqlString, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sqlString, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const generateUsers = (num) => {
  const promises = [];
  
  for (let i = 0; i < num; i++) {
    const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
    const randomPhotoNum = Math.floor((Math.random() * 100) + 1).toString().padStart(3, 0);

    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const neighborhood = faker.address.county();
    const avatar = `https://fec-project-images.s3-us-west-2.amazonaws.com/images/${randomPhotoNum}.jpg`;
    const month_moved = Math.floor((Math.random() * 12) + 1);
    const year_moved = 2000 + Math.floor(Math.random() * 21);
    const age_group = ageGroups[(Math.floor(Math.random() * 6))];
    const city_id = cityId;

    const sql = 'INSERT INTO users(first_name, last_name, email, username, password, neighborhood, avatar, month_moved, year_moved, age_group, city_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
    const values = [first_name, last_name, email, username, password, neighborhood, avatar, month_moved, year_moved, age_group, city_id];
    promises.push(insert(sql, values));
  }
  return Promise.all(promises);
};

const generateThreads = (num) => {
  const promises = [];
  for (let j = 0; j < num; j++) {
    const title = faker.lorem.sentence();
    const text = faker.lorem.sentences();
    const interest_id = Math.floor((Math.random() * 10) + 1);
    const city_id = cityId;
    const user_id = Math.floor((Math.random() * numUsers) + 1);

    const sql = 'INSERT INTO threads(title, text, interest_id, city_id, user_id) VALUES($1, $2, $3, $4, $5)';
    const values = [title, text, interest_id, city_id, user_id];
    promises.push(insert(sql, values));
  }
  return Promise.all(promises);
};

const generateReplies = (num) => {
  const promises = [];
  for (let k = 0; k < num; k++) {
    const text = faker.lorem.sentences();
    const user_id = Math.floor((Math.random() * numUsers) + 1);
    const thread_id = Math.floor((Math.random() * numThreads) + 1);

    const sql = 'INSERT INTO replies(text, user_id, thread_id) VALUES($1, $2, $3)';
    const values = [text, user_id, thread_id];
    promises.push(insert(sql, values));
  }
  return Promise.all(promises);
};

const numUsers = 100;
const cityId = 1; // just Seattle for now
const numThreads = 100;
const numReplies = 500;

generateUsers(numUsers)
  .then(() => {
    generateThreads(numThreads);
  })
  .then(() => {
    generateReplies(numReplies);
  })
  .catch(err => console.log(err));