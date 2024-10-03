const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const {db} = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
    attack = await Attack.create({ title: 'BlueAttack', mojoCost: 1, staminaCost: 2 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })
  test('can create a Attack Bulk', async function() {
    // TODO - test creating a band
    await Attack.bulkCreate([{title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
        {title: "TestAttack", mojoCost: 1,staminaCost: 2},
    ])
    const newAttack = await Attack.findByPk(5)
    expect(newAttack.id).toBe(5);
  })
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
