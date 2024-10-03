const {db} = require('../db/config')
const {Sequelize} = require('sequelize')
// TODO - define the Band model
let Card = db.define("Card", {
    title: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl: Sequelize.STRING,
})

module.exports = {
    Card
};