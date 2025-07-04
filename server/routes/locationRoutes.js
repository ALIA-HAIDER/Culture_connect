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

/**
 * @swagger
 * /locations:
 *   get:
 *     summary: Get all communities
 *     description: Retrieve a list of all available communities and neighborhoods. This endpoint returns comprehensive information about each community including cultural tags, amenities, safety scores, and more.
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: Successfully retrieved all locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 *             examples:
 *               success:
 *                 summary: Example response
 *                 value:
 *                   - _id: "6866a428a9152664a5d4ee82"
 *                     name: "Jayanagar Cultural Hub"
 *                     city: "Bengaluru"
 *                     area: "4th Block"
 *                     location: "Jayanagar 4th Block"
 *                     lat: 12.9275
 *                     lng: 77.5828
 *                     rating: 4.8
 *                     reviews: 400
 *                     safetyScore: 9
 *                     description: "A well-developed neighborhood with many parks, schools, and a peaceful environment for families."
 *                     residents: 85000
 *                     priceRange: "₹25K - ₹45K"
 *                     highlights: ["Parks", "Schools", "Shopping"]
 *                     vibes: ["Safe", "Peaceful", "Family-Oriented"]
 *                     languages: ["Kannada", "English"]
 *                     amenities: ["Schools", "Parks", "Healthcare"]
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get('/', getAllLocations);

/**
 * @swagger
 * /locations:
 *   post:
 *     summary: Create a new community
 *     description: Add a new community to the database. This endpoint allows you to create comprehensive community profiles with all necessary details.
 *     tags: [Locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *           examples:
 *             newCommunity:
 *               summary: New community example
 *               value:
 *                 name: "Koramangala Tech Hub"
 *                 city: "Bengaluru"
 *                 area: "5th Block"
 *                 location: "Koramangala 5th Block"
 *                 lat: 12.9352
 *                 lng: 77.6245
 *                 image: "https://example.com/koramangala.jpg"
 *                 rating: 4.6
 *                 reviews: 250
 *                 safetyScore: 8
 *                 description: "A vibrant tech hub with modern amenities and diverse community"
 *                 residents: 45000
 *                 priceRange: "₹30K - ₹55K"
 *                 highlights: ["Tech Community", "Cafes", "Nightlife"]
 *                 vibes: ["Modern", "Energetic", "Diverse"]
 *                 languages: ["English", "Hindi", "Kannada"]
 *                 amenities: ["Metro", "Restaurants", "Co-working"]
 *                 culturalTags: ["Tech", "International", "Modern"]
 *     responses:
 *       201:
 *         description: Community created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Location'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/', createLocation);

/**
 * @swagger
 * /locations/filter:
 *   post:
 *     summary: Filter communities by preferences
 *     description: |
 *       Find communities that match your cultural, lifestyle, and location preferences. 
 *       This endpoint uses advanced algorithms to score and rank communities based on how well they align with your specified criteria.
 *       
 *       ### How Matching Works:
 *       - **Language Match**: Communities where your preferred languages are spoken
 *       - **Cultural Alignment**: Communities with matching cultural tags and heritage
 *       - **Lifestyle Compatibility**: Areas that match your lifestyle preferences
 *       - **Safety & Affordability**: Filtering by minimum safety scores and price ranges
 *       - **Connectivity**: Areas with your required commute and connectivity options
 *       
 *       ### Scoring Algorithm:
 *       Each community receives a match score based on:
 *       - Language compatibility (25% weight)
 *       - Cultural alignment (30% weight)
 *       - Lifestyle match (20% weight)
 *       - Area vibe compatibility (15% weight)
 *       - Safety and affordability (10% weight)
 *     tags: [Locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PreferencesFilter'
 *           examples:
 *             culturalFamily:
 *               summary: Cultural family preferences
 *               value:
 *                 languages: ["Hindi", "English"]
 *                 culture: ["Heritage", "Traditional"]
 *                 religion: ["Hindu"]
 *                 foodPreferences: ["Vegetarian", "Street Food"]
 *                 lifestyle: ["Family-Oriented", "Cultural Events"]
 *                 areaVibe: ["Traditional", "Peaceful"]
 *                 community: ["Family-Friendly", "Close-knit"]
 *                 safetyLevel: 8
 *                 affordabilityRange: [20000, 40000]
 *                 commuteOptions: ["Metro", "Bus"]
 *                 connectivity: ["Mobile Coverage"]
 *             modernProfessional:
 *               summary: Modern professional preferences
 *               value:
 *                 languages: ["English", "Hindi"]
 *                 culture: ["Modern", "International"]
 *                 religion: []
 *                 foodPreferences: ["International", "Cafes"]
 *                 lifestyle: ["Social", "Nightlife", "Fitness"]
 *                 areaVibe: ["Vibrant", "Modern"]
 *                 community: ["Diverse", "Young Professionals"]
 *                 safetyLevel: 7
 *                 affordabilityRange: [30000, 60000]
 *                 commuteOptions: ["Metro", "Cab Services"]
 *                 connectivity: ["High-Speed Internet", "Co-working Spaces"]
 *     responses:
 *       200:
 *         description: Successfully filtered and ranked communities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LocationWithMatch'
 *             examples:
 *               matchedCommunities:
 *                 summary: Matched communities with scores
 *                 value:
 *                   - _id: "6866a428a9152664a5d4ee82"
 *                     name: "Jayanagar Cultural Hub"
 *                     city: "Bengaluru"
 *                     area: "4th Block"
 *                     location: "Jayanagar 4th Block"
 *                     lat: 12.9275
 *                     lng: 77.5828
 *                     rating: 4.8
 *                     matchScore: 92
 *                     matchPercentage: 92
 *                     highlights: ["Parks", "Schools", "Cultural Events"]
 *                     vibes: ["Traditional", "Family-Oriented", "Safe"]
 *                     languages: ["Hindi", "Kannada", "English"]
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/filter', filterLocations);

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     summary: Get community by ID
 *     description: Retrieve detailed information about a specific community using its unique identifier.
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           pattern: '^[0-9a-fA-F]{24}$'
 *         description: MongoDB ObjectId of the community
 *         example: "6866a428a9152664a5d4ee82"
 *     responses:
 *       200:
 *         description: Community found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Location'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: "Invalid community ID format"
 *               status: 400
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get('/:id', getLocationById);

module.exports = router;
