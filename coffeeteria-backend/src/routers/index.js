// package: express
const { Router } = require('express')
// router: module
const authRoutes = require('./router_auth')

// usage: express-router
const router = Router()

router
  .use('/auth', authRoutes)
module.exports = router
