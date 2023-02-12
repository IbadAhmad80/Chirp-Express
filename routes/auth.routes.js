const { router } = require('../app')
const authController = require('../controllers/auth.controller')

router.post('/api/v1/auth/register', authController.register)
router.post('/api/v1/auth/login', authController.login)

module.exports = router
