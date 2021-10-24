'use strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'bb0df8ce638a4a',
  password : 'ff74fb55',
  database : 'heroku_3505f68ddf230ae'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;