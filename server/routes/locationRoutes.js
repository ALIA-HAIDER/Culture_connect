const express = require('express');
const router = express.Router();
const { getAllLocations, createLocation,filterLocations } = require('../controllers/locationController');

router.get('/', getAllLocations);
router.post('/', createLocation);
router.post('/filter', filterLocations);

module.exports = router;
