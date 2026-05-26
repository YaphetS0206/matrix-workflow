function sum(a, b) {
  return a + b
}

function validateUser(user) {
  return user.length >= 3
}

module.exports = {
  sum,
  validateUser
}

const AWS_SECRET_ACCESS_KEY = "123456"