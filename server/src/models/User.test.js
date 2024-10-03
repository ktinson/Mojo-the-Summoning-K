const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const { Deck } = require('.')
const {db} = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
  test('can create a User Bulk', async function() {
    // TODO - test creating a band
    await User.bulkCreate([{username: "TestUser"},
      {username: "TestUserA"},
      {username: "TestUserB"},
      {username: "TestUserC"},
      {username: "TestUserD"},
      {username: "TestUserE"},
      {username: "TestUserF"},
      {username: "TestUserG"},
    ])
    const newUser = await User.findByPk(5)
    expect(newUser.id).toBe(5);
  })
  test('can add Deck to a User', async function() {
    // TODO - test ADDING SONGS
    
    let someUser = await User.findByPk(1)
    let someDeck = await Deck.findByPk(1)
    // await someUser.getDeck(someDeck)
    await User.findOne({ include: Deck }); 
    expect(someUser).toBeTruthy
    
  })
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
