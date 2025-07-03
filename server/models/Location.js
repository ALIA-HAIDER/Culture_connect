const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  city: {
    type: String,
    required: true,
    index: true
  },
  area: {
    type: String,
    index: true
  },
  location: {
    type: String,
    index: true
  },
  
  image: {
    type: String,
    required: true,
    default: "/api/placeholder/400/250"
  },
  imageAlt: {
    type: String,
    default: function() { return `${this.name} community image`; }
  },
  imageCredits: {
    type: String
  },
  
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    caption: {
      type: String
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4.0
  },
  reviews: {
    type: Number,
    default: 0
  },
  matchScore: {
    type: Number,
    min: 1,
    max: 10
  },
  matchPercentage: {
    type: Number,
    min: 0,
    max: 100
  },
  safetyScore: {
    type: Number,
    min: 1,
    max: 10,
    index: true
  },
  
  description: {
    type: String,
    required: true
  },
  residents: {
    type: Number,
    index: true
  },
  priceRange: {
    type: String,
    index: true
  },
  
  highlights: [{
    type: String
  }],
  vibes: [{
    type: String
  }],
  languages: [{
    type: String
  }],
  amenities: [{
    type: String
  }],
  
  culturalTags: [{
    type: String
  }],
  religionTags: [{
    type: String
  }],
  foodPreferences: [{
    type: String
  }],
  lifestyleOptions: [{
    type: String
  }],
  areaVibes: [{
    type: String
  }],
  communityTypes: [{
    type: String
  }],
  commuteOptions: [{
    type: String
  }],
  connectivityFeatures: [{
    type: String
  }],
  
  affordabilityMin: {
    type: Number,
    index: true
  },
  affordabilityMax: {
    type: Number,
    index: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
});

// Single field indexes (safe for arrays)
locationSchema.index({ city: 1, safetyScore: -1 });
locationSchema.index({ affordabilityMin: 1, affordabilityMax: 1 });
locationSchema.index({ areaVibes: 1 });
locationSchema.index({ culturalTags: 1 });
locationSchema.index({ languages: 1 });
locationSchema.index({ communityTypes: 1 });
locationSchema.index({ rating: -1 });
locationSchema.index({ matchScore: -1 });

// Text search index
locationSchema.index({
  name: "text",
  description: "text",
  highlights: "text",
  vibes: "text"
});

module.exports = mongoose.model('Location', locationSchema);