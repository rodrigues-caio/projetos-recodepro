const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'fseletro',
  user: 'root',
  password: '',
});
