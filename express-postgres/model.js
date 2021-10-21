const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getAllData = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM data', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getLatestData = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM data ORDER BY id DESC LIMIT 1', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
    
  }) 
}

module.exports = {
  getAllData,
  getLatestData,
}