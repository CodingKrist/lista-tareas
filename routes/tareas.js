const express = require('express')
const router = express.Router()
const tareasController = require('../controllers/tareas')


router.get('/', tareasController.getTareas)
router.post('/crearTarea', tareasController.crearTarea)

module.exports = router