const { Pool } = require('pg');
const login = require('./pg_config.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: login.USER,
  password: login.PASSWORD,
  database: 'hubbub'
});

//query to test that connection is working
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('database err: ', err);
  } else {
    console.log('connected to pg at: ', res.rows);
  }
});

module.exports = pool;