const orm = require('../config/orm.js');

let burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (data) => {
            cb(data);
        })
    },
    insertOne: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (data) => {
            cb(data);
        });
    },
    updateOne: (dBurger, condition, cb) => {
        orm.updateOne("burgers", dBurger, condition, (data) => {
            cb(data);
        });
    }    

};

module.exports = burger;