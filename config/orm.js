const connection = require('./connection.js');

let orm = {
    selectAll: (tblName, cb) => {
        const queryString = "select * from "+tblName;
        connection.query(queryString, function(err, data){
            if(err) throw err;
            cb(data);
        });

    },
    insertOne: (tblName, newBurger, cb) => {
        const queryString = "insert into ?? (burger_name) values (?)";
        connection.query(queryString, [tblName, newBurger], function(err, data){
            if(err) throw err;
            cb(data);
        });        
    },
    updateOne: (tblName, dBurger, condition, cb) => {
        const queryString = `update ?? set ? where ?`;
        connection.query(queryString, [tblName, dBurger, condition], function(err, data){
            if(err) throw err;
            cb(data);
        });        
    },    


};

module.exports = orm;