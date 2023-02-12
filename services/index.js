const {
  register,
  login
} = require('./auth.service')

// services
const authService = {
  register,
  login
}

module.exports = {
  authService
}
