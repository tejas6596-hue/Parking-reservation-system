const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "parkeasy"
});

connection.connect((err) => {
    if (err) {
        console.error("Connection Error:");
        console.error(err);
        return;
    }

    console.log("✅ Connected to MySQL");
});

module.exports = connection;