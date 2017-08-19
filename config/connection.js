const mysql = require("mysql");
const sqlConfig = require("./sqlConfig");
let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{    
    connection = mysql.createConnection(sqlConfig.sqlConfig);
}

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;