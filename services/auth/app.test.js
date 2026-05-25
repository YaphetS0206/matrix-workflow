const { validateUser } = require('./app')

test('valid user', () => {
  expect(validateUser('jean')).toBe(true)
})

test('invalid user', () => {
  expect(validateUser('ab')).toBe(false)
})