// add your database connection here
const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false,
})
module.exports = {
    Sequelize,
    db,
};