const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // address of the server
    user: 'root', // username
    password: 'ken2ken842',
    database: 'mvc',
});
module.exports = connection;