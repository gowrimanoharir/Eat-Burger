const mysql = require("mysql");
const sqlConfig = require("./sqlConfig");

const connection = mysql.createConnection(sqlConfig.sqlConfig);

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;