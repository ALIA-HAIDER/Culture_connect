const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Neighborly API',
      version: '1.0.0',
      description: `
        ## 🏘️ Neighborly API Documentation
        
        Welcome to the **Neighborly API** - your gateway to finding the perfect cultural community!
        
        ### 🌟 About Neighborly
        Neighborly is a sophisticated platform that connects people with neighborhoods that truly align with their cultural background, lifestyle choices, and community values. Our API provides comprehensive tools for community discovery, preference matching, and cultural compatibility analysis.
        
        ### 🚀 Features
        - **Smart Community Matching**: Advanced algorithms that score communities based on cultural, lifestyle, and location preferences
        - **Comprehensive Community Data**: Detailed information including safety scores, amenities, cultural tags, and resident demographics
        - **Flexible Filtering**: Multi-dimensional filtering by languages, culture, religion, lifestyle, and more
        - **Real-time Data**: Up-to-date community information and statistics
        
        ### 🔐 Authentication
        Currently, the API endpoints are publicly accessible. User authentication and authorization will be implemented in future versions.
        
        ### 📊 Rate Limiting
        No rate limiting is currently implemented. Fair usage is expected.
        
        ### 🆘 Support
        For API support, please contact: support@neighborly.app
      `,
      contact: {
        name: 'Neighborly Support',
        email: 'support@neighborly.app',
        url: 'https://neighborly.app/support'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:4500/api',
        description: 'Development server'
      },
      {
        url: 'https://api.neighborly.app',
        description: 'Production server'
      }
    ],
    tags: [
      {
        name: 'Locations',
        description: 'Community and neighborhood management endpoints'
      },
      {
        name: 'Users',
        description: 'User management and authentication (Coming Soon)'
      },
      {
        name: 'Health',
        description: 'API health check endpoints'
      }
    ],
    components: {
      schemas: {
        Location: {
          type: 'object',
          required: ['name', 'city', 'area', 'lat', 'lng'],
          properties: {
            _id: {
              type: 'string',
              description: 'Unique identifier for the location',
              example: '6866a428a9152664a5d4ee82'
            },
            name: {
              type: 'string',
              description: 'Name of the community/neighborhood',
              example: 'Jayanagar Cultural Hub'
            },
            city: {
              type: 'string',
              description: 'City where the community is located',
              example: 'Bengaluru'
            },
            area: {
              type: 'string',
              description: 'Specific area within the city',
              example: '4th Block'
            },
            location: {
              type: 'string',
              description: 'Full location string',
              example: 'Jayanagar 4th Block'
            },
            lat: {
              type: 'number',
              format: 'float',
              description: 'Latitude coordinate',
              example: 12.9275
            },
            lng: {
              type: 'number',
              format: 'float',
              description: 'Longitude coordinate',
              example: 77.5828
            },
            image: {
              type: 'string',
              format: 'uri',
              description: 'URL to community image',
              example: 'https://example.com/image.jpg'
            },
            rating: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Community rating out of 5',
              example: 4.8
            },
            reviews: {
              type: 'integer',
              minimum: 0,
              description: 'Number of reviews',
              example: 400
            },
            safetyScore: {
              type: 'integer',
              minimum: 0,
              maximum: 10,
              description: 'Safety score out of 10',
              example: 9
            },
            description: {
              type: 'string',
              description: 'Detailed description of the community',
              example: 'A well-developed neighborhood with many parks, schools, and a peaceful environment for families.'
            },
            residents: {
              type: 'integer',
              minimum: 0,
              description: 'Number of residents',
              example: 85000
            },
            priceRange: {
              type: 'string',
              description: 'Price range for housing',
              example: '₹25K - ₹45K'
            },
            highlights: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Key highlights of the community',
              example: ['Parks', 'Schools', 'Shopping']
            },
            vibes: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Community vibes and atmosphere',
              example: ['Safe', 'Peaceful', 'Family-Oriented']
            },
            languages: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Languages commonly spoken',
              example: ['Kannada', 'English']
            },
            amenities: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Available amenities',
              example: ['Schools', 'Parks', 'Healthcare', 'Community Centers']
            },
            culturalTags: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Cultural aspects and heritage',
              example: ['Education', 'Parks', 'Community']
            },
            religionTags: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Religious communities present',
              example: ['Hindu', 'Christian']
            },
            isActive: {
              type: 'boolean',
              description: 'Whether the location is active',
              example: true
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp'
            }
          }
        },
        LocationWithMatch: {
          allOf: [
            { $ref: '#/components/schemas/Location' },
            {
              type: 'object',
              properties: {
                matchScore: {
                  type: 'number',
                  minimum: 0,
                  maximum: 100,
                  description: 'Match score based on preferences',
                  example: 85
                },
                matchPercentage: {
                  type: 'number',
                  minimum: 0,
                  maximum: 100,
                  description: 'Match percentage',
                  example: 85
                }
              }
            }
          ]
        },
        PreferencesFilter: {
          type: 'object',
          properties: {
            languages: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Preferred languages',
              example: ['Hindi', 'English']
            },
            culture: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Cultural preferences',
              example: ['Heritage', 'Modern']
            },
            religion: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Religious preferences',
              example: ['Hindu', 'Secular']
            },
            foodPreferences: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Food and dining preferences',
              example: ['Vegetarian', 'Street Food']
            },
            lifestyle: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Lifestyle preferences',
              example: ['Family-Oriented', 'Social']
            },
            areaVibe: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Preferred area vibes',
              example: ['Traditional', 'Peaceful']
            },
            community: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Community type preferences',
              example: ['Family-Friendly', 'Diverse']
            },
            safetyLevel: {
              type: 'integer',
              minimum: 1,
              maximum: 10,
              description: 'Minimum safety level required',
              example: 7
            },
            affordabilityRange: {
              type: 'array',
              items: {
                type: 'number'
              },
              minItems: 2,
              maxItems: 2,
              description: 'Price range [min, max]',
              example: [15000, 50000]
            },
            commuteOptions: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Preferred commute options',
              example: ['Metro', 'Bus']
            },
            connectivity: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Connectivity requirements',
              example: ['High-Speed Internet', 'Mobile Coverage']
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
              example: 'Resource not found'
            },
            status: {
              type: 'integer',
              description: 'HTTP status code',
              example: 404
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              description: 'Error timestamp'
            }
          }
        }
      },
      responses: {
        NotFound: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        },
        BadRequest: {
          description: 'Bad request - invalid input',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        },
        InternalServerError: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './server.js'], // Path to the API docs
};

const specs = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  specs
};
