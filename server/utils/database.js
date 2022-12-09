const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: '',
    database: 'products',
    password: '',
    // namedPlaceholders: true
});

module.exports = pool.promise();

// Errors to learn about
// TypeError: Bind parameters must be array if namedPlaceholders parameter is not enabled