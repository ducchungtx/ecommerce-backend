'use strict'

const mongoose = require('mongoose');
// const { countConnect } = require('../helpers/check.connnect');

const connectString = 'mongodb://localhost:27017/ecommerce';


class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose.connect(connectString).then(() => {
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.log(err);
    });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
