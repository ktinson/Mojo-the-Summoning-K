const {db} = require('../db/config')
const {Sequelize} = require('sequelize')
// TODO - define the Band model
let Attack = db.define("Attack", {
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER,
})

module.exports = {
    Attack
};