function validateUser(user) {
  if (!user) {
    return false
  }

  return user.length >= 3
}

module.exports = {
  validateUser
}