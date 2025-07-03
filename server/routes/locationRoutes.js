const express = require('express');
const router = express.Router();
const { 
  getAllLocations, 
  createLocation, 
  filterLocations,
  getLocationById,
  updateLocation,
  deleteLocation
} = require('../controllers/locationController');

router.get('/', getAllLocations);
router.post('/', createLocation);
router.post('/filter', filterLocations);
router.get('/:id', getLocationById);


module.exports = router;
