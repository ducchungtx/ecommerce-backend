/**
 * Filename: app.js
 * Author: Chung Nguyen
 * Date: 11/27/2022
 * Version: 1.0
 * Last Updated: 11/27/2022
 * Description: This is the app file
 */

const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
// const { checkOverLoad } = require('./helpers/check.connnect');

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');
// checkOverLoad();

// init routes
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello World',
  });
});

// handling errors

module.exports = app;
