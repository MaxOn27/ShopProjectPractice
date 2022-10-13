const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: '',
    database: '',
    password: '',
    // namedPlaceholders: true
});

module.exports = pool.promise();