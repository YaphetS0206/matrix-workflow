const { sum } = require('../../src/app')

test('sum numbers', () => {

  expect(sum(1, 2)).toBe(3)
})