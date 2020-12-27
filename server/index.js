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