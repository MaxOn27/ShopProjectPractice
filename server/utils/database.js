const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'MaxUser',
    database: 'products',
    password: 'MyMySQL@271212!',
    // namedPlaceholders: true
});

module.exports = pool.promise();

// Errors to learn about
// TypeError: Bind parameters must be array if namedPlaceholders parameter is not enabled