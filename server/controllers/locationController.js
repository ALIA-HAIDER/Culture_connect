const Location = require("../models/Location");

const filterLocations = async (req, res) => {
  try {
    const {
      languages = [],
      culture = [],
      religion = [],
      foodPreferences = [],
      lifestyle = [],
      areaVibe = [],
      community = [],
      safetyLevel = 1,
      affordabilityRange = [0, 100000],
      commuteOptions = [],
      connectivity = []
    } = req.body;

    let query = { isActive: true };
    

    // Build scoring pipeline for matching preferences
    const pipeline = [
      { $match: query },
      {
        $addFields: {
          matchScore: {
            $add: [
              // Languages match score (weight: 20)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$languages", languages] } },
                  20
                ]
              },
              // Culture match score (weight: 15)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$culturalTags", culture] } },
                  15
                ]
              },
              // Religion match score (weight: 10)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$religionTags", religion] } },
                  10
                ]
              },
              // Food preferences match score (weight: 8)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$foodPreferences", foodPreferences] } },
                  8
                ]
              },
              // Lifestyle match score (weight: 8)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$lifestyleOptions", lifestyle] } },
                  8
                ]
              },
              // Area vibe match score (weight: 15)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$areaVibes", areaVibe] } },
                  15
                ]
              },
              // Community type match score (weight: 12)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$communityTypes", community] } },
                  12
                ]
              },
              // Commute options match score (weight: 6)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$commuteOptions", commuteOptions] } },
                  6
                ]
              },
              // Connectivity match score (weight: 6)
              {
                $multiply: [
                  { $size: { $setIntersection: ["$connectivityFeatures", connectivity] } },
                  6
                ]
              }
            ]
          }
        }
      },
      {
        $addFields: {
          matchPercentage: {
            $min: [
              {
                $multiply: [
                  { $divide: ["$matchScore", 100] },
                  100
                ]
              },
              100
            ]
          }
        }
      },
      { $match: { matchScore: { $gt: 0 } } }, // Only return locations with some match
      { $sort: { matchScore: -1, rating: -1 } }, // Sort by match score, then rating
      { $limit: 50 } // Limit results
    ];

    const locations = await Location.aggregate(pipeline);
    
    res.status(200).json(locations);
  } catch (err) {
    console.error("Filter locations error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({ isActive: true })
      .sort({ rating: -1, createdAt: -1 })
      .limit(100);
    res.status(200).json(locations);
  } catch (err) {
    console.error("Get all locations error:", err);
    res.status(500).json({ error: err.message });
  }
};

const createLocation = async (req, res) => {
  try {
    const locationData = {
      ...req.body,
      updatedAt: new Date()
    };
    
    const newLocation = await Location.create(locationData);
    res.status(201).json(newLocation);
  } catch (err) {
    console.error("Create location error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }
    
    res.status(200).json(location);
  } catch (err) {
    console.error("Get location by ID error:", err);
    res.status(500).json({ error: err.message });
  }
};





module.exports = { 
  getAllLocations, 
  createLocation, 
  filterLocations,
  getLocationById,

};
