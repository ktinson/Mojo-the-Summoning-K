const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { Attack } = require('.')
const {db} = require('../db/config')

// define in global scope
let card
let attack
// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ title: 'BlueCard', mojo: 1, stamina: 2, imgUrl: "url.test.com" })
  attack = await Attack.create({ title: 'CardAttack', mojoCost: 1, staminaCost: 2 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })
  test('can create a Card Bulk', async function() {
    // TODO - test creating a band
    await Card.bulkCreate([{title: "TestCard", mojo: 1,stamina: 2,imgUrl: "url.test.com"},
        {title: "TestCard1", mojo: 2,stamina: 23,imgUrl: "url1.test.com"},
        {title: "TestCard2", mojo: 3,stamina: 24,imgUrl: "url2.test.com"},
        {title: "TestCard3", mojo: 4,stamina: 33,imgUrl: "url3.test.com"},
        {title: "TestCard4", mojo: 5,stamina: 34,imgUrl: "url4.test.com"},
        {title: "TestCard5", mojo: 6,stamina: 44,imgUrl: "url5.test.com"},
        {title: "TestCard6", mojo: 7,stamina: 45,imgUrl: "url6.test.com"},
        {title: "TestCard7", mojo: 8,stamina: 55,imgUrl: "url7.test.com"},
    ])
    const newCard = await Card.findByPk(5)
    expect(newCard.id).toBe(5);
  })
  test('can add attacks to a card', async function() {
    // TODO - test ADDING attacks
    
    let someAttack = await Attack.findByPk(1)
    let someCard = await Card.findByPk(1)
    let someAttackA = await Attack.findByPk(2)
    await someCard.addAttacks(someAttack)
    await someCard.addAttacks(someAttackA)
    await Card.findAll({ include: Attack }); 
    await Attack.findAll({ include: Card}); //like this works
    expect(someCard).toBeTruthy
    
})
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
