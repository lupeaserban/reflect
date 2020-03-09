const express = require('express')
const router = express.Router()

const { getAllLocations, postLocation, getLocation, postMultipleLocations, postReview } = require('../controllers/locations')

router.get('/', (req, res) => {
    res.send('brasssp')
})

router.get('/locations', getAllLocations)
router.get('/locations/:locationId', getLocation)

router.post('/locations/:locationId/reviews', postReview)
router.post('/locations/location', postLocation)
router.post('/locations', postMultipleLocations)

module.exports = router