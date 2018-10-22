const vehicle = require('../controllers/vehicleController')
const vehicleHandler = require('../middlewares/handleVehicleRequests')
const ratingHandler = require('../middlewares/handleRatingRequests')
const express = require('express')
const router = express.Router()

router.get('/:modelyear/:manufacturer/:model', vehicleHandler, vehicle.findVehicle, ratingHandler, vehicle.getRating)
router.post('/', vehicleHandler, vehicle.findVehicle)

module.exports = router
