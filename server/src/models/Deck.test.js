const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { Card } = require('.')
const {db} = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'BlueDeck', xp: 100 })
})


// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })
  test('can create a Deck Bulk', async function() {
    // TODO - test creating a band
    await Deck.bulkCreate([{name: "TestDeck", xp: 100 },
         {name: "TestDeck1", xp: 200 }, 
         {name: "TestDeck2", xp: 300 },
         {name: "TestDeck3", xp: 400 },
         {name: "TestDeck4", xp: 500 },
         {name: "TestDeck5", xp: 600}])
    const newDeck = await Deck.findByPk(5)
    expect(newDeck.id).toBe(5);
})
test('can add cards to a Deck', async function() {
    // TODO - test ADDING SONGS
    
    let someDeck = await Deck.findByPk(1)
    let someCard = await Card.findByPk(1)
    let someCardA = await Card.findByPk(2)
    await someDeck.addCards(someCard)
    await someDeck.addCards(someCardA)
    Deck.findAll({ include: Card }); 
    Card.findAll({ include: Deck}); //like this works
    expect(Deck.findAll({ include: Card })).toHaveBeenCalledTimes
    expect(someDeck).toBeTruthy
    expect(someCard).toBeTruthy
})
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
