const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3307,
  database: 'fseletro',
});
