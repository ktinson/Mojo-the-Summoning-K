const {db} = require('../db/config')
const {Sequelize} = require('sequelize')
// TODO - define the Band model
let Deck = db.define("Deck", {
    name: Sequelize.STRING,
    xp: Sequelize.INTEGER,
})

module.exports = {
    Deck
};