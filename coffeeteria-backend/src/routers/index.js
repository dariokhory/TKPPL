// package: express
const { Router } = require('express')
// router: module
const authRoutes = require('./router_auth')
const userRoutes = require('./router_user')
const productRoutes = require('./router_product')
const categoryRoutes = require('./router_category')
// usage: express-router
const router = Router()

router
  .use('/auth', authRoutes)
  .use('/user', userRoutes)
  .use('/product', productRoutes)
  .use('/category', categoryRoutes)
module.exports = router
