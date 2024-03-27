const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')


router.get('/', homeController.getIndex)
router.get('/login', homeController.getLogin)
router.get('/signup', homeController.getSignUp)


module.exports = router