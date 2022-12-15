const { createPool, createConnection } = require("mysql2");

const connection = createConnection({
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   host: process.env.BD_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_DATABASE,
});

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//    host: process.env.BD_HOST,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    port: process.env.DB_PORT,
//    database: process.env.DB_DATABASE,
// });

connection.connect((error) => {
   if (error) {
      console.log("Error is:", error);
      return;
   }
   console.log("Connect succesfull");
});

module.exports = connection;
