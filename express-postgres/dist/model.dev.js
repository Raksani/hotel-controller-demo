"use strict";

var Pool = require('pg').Pool;

require('dotenv').config();

var pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

var getAllData = function getAllData() {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM data', function (error, results) {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};

var getLatestData = function getLatestData() {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM data ORDER BY id DESC LIMIT 1', function (error, results) {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};

module.exports = {
  getAllData: getAllData,
  getLatestData: getLatestData
};