const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')
// import the rest of your models above

// set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsToMany(Attack,{through: 'Card-Attack'})
Attack.belongsToMany(Card,{through: 'Card-Attack'})

// and then export them all below
module.exports = { 
    User,
    Card,
    Deck,
    Attack,
}
