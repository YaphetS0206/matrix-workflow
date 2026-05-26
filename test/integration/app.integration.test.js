const { validateUser } = require('../../src/app')

test('valid user integration', () => {
  expect(validateUser('jean')).toBe(true)
})