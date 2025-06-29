const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  city: { 
    type: String, 
    required: true,
    trim: true
  },
  state: { 
    type: String,
    trim: true
  },
  country: { 
    type: String, 
    default: 'India',
    trim: true
  },

  coordinates: {
    lat: {
      type: Number,
      min: -90,
      max: 90
    },
    lng: {
      type: Number,
      min: -180,
      max: 180
    }
  },

  bio: {
    type: String,
    default: 'This city has a unique cultural identity.',
    maxLength: 500
  },
  
  // Image URL for the location
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop'
  },

  // Cultural tags and highlights
  culturalTags: [String], // e.g., ["Durga Puja", "Kathak", "Chikan Embroidery"]
  
  // Community preferences and demographics
  communityPreferences: [String], // e.g., ["Vegetarian", "Hindi-speaking", "Festival oriented"]

  // Upcoming events and festivals
  events: [String],

  // Additional fields for enhanced functionality
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.0
  },

  population: {
    type: String,
    default: 'N/A'
  },

  vibeScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 85
  },

  // SEO and search optimization
  searchKeywords: [String], // Additional keywords for search functionality

  // Status and visibility
  isActive: {
    type: Boolean,
    default: true
  },

  featured: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true,
  // Add indexes for better query performance
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create indexes for better search performance
locationSchema.index({ city: 'text', state: 'text', culturalTags: 'text', communityPreferences: 'text' });
locationSchema.index({ coordinates: '2dsphere' }); // For geospatial queries
locationSchema.index({ isActive: 1, featured: -1 }); // For filtering active and featured locations

// Virtual for full location name
locationSchema.virtual('fullLocation').get(function() {
  return `${this.city}, ${this.state}, ${this.country}`;
});

// Virtual for search display
locationSchema.virtual('displayName').get(function() {
  return `${this.city}, ${this.state}`;
});

module.exports = mongoose.model('Location', locationSchema);