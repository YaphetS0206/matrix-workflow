const { validateUser } = require('./app')

test('valid user', () => {
  expect(validateUser('paul')).toBe(true)
})

test('invalid user', () => {
  expect(validateUser('ab')).toBe(false)
})