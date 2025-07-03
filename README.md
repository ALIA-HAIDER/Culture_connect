# �️ Neighborly

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>🏡 Find Your Perfect Community</h3>
  <p><em>Connecting people with neighborhoods that resonate with their cultural identity, lifestyle preferences, and community values.</em></p>
</div>

---

## ✨ Overview

**Neighborly** is a sophisticated web application that revolutionizes how people discover and choose their ideal living communities. By leveraging advanced preference matching algorithms and comprehensive cultural data, the platform connects users with neighborhoods that truly align with their cultural background, lifestyle choices, and community expectations.

### 🎯 Problem We Solve

Finding a community where you feel culturally at home is challenging. Traditional property search platforms focus on amenities and price, but overlook the crucial cultural fit that makes a place feel like *home*. Neighborly bridges this gap by prioritizing cultural compatibility, community vibes, and lifestyle alignment.

---

## 🚀 Key Features

### 🎨 **Intelligent Preference Matching**
- **Multi-dimensional Filtering**: Language preferences, cultural backgrounds, religious communities
- **Lifestyle Compatibility**: Food preferences, social activities, work-life balance
- **Community Vibes**: Traditional vs. modern, family-oriented vs. social, quiet vs. vibrant
- **Smart Scoring Algorithm**: Advanced matching percentages based on weighted preferences

### 🏘️ **Comprehensive Community Profiles**
- **Cultural Tags**: Heritage sites, cultural events, community celebrations
- **Safety Metrics**: Real-time safety scores and neighborhood analytics
- **Affordability Analysis**: Price ranges with cost-of-living breakdowns
- **Connectivity Features**: Transport links, commute options, digital infrastructure

### 🗺️ **Interactive Exploration**
- **Dynamic Maps**: Interactive location visualization with custom markers
- **Rich Media**: High-quality images and virtual community tours
- **Real Reviews**: Authentic resident feedback and community insights
- **Live Data**: Updated information on events, demographics, and amenities

### 🎯 **Personalized Experience**
- **Progressive Profiling**: Build detailed preference profiles over time
- **Match Results**: Ranked communities with detailed compatibility scores
- **Saved Searches**: Bookmark favorite communities and track changes
- **Comparison Tools**: Side-by-side community analysis

---

## 🛠️ Tech Stack

### **Frontend Architecture**
```typescript
⚡ Vite + React 18.3.1          // Lightning-fast development & build
🎨 TypeScript 5.6.3             // Type-safe development
💄 Tailwind CSS 3.4.16         // Utility-first styling
🎭 Framer Motion 11.15.0        // Smooth animations & transitions
🎯 Zustand 5.0.6                // Lightweight state management
🌐 React Router DOM 6.23.0      // Client-side routing
🎪 HeroUI Components            // Modern component library
📱 Responsive Design            // Mobile-first approach
```

### **Backend Infrastructure**
```javascript
🚀 Node.js + Express 5.1.0     // Robust server framework
🗄️ MongoDB + Mongoose 8.16.1    // Flexible document database
🔐 JWT Authentication          // Secure user sessions
🌍 CORS Enabled               // Cross-origin resource sharing
📊 Aggregation Pipelines     // Advanced data processing
```

### **Development Tools**
```json
🔧 ESLint 9.25.1              // Code linting & formatting
💅 Prettier 3.5.3             // Code formatting
🔍 TypeScript Strict Mode     // Enhanced type checking
🚦 Hot Module Replacement     // Instant development feedback
📦 Modular Architecture      // Scalable component structure
```

---

## 📂 Project Structure

```
Neighborly/
├── 📱 my-vite-app/                 # Frontend Application
│   ├── 🎨 src/
│   │   ├── 📄 pages/               # Route components
│   │   │   ├── index.tsx          # Landing page
│   │   │   ├── preferences.tsx    # Preference configuration
│   │   │   ├── matchResult.tsx    # Match results display
│   │   │   └── explore.tsx        # Community exploration
│   │   ├── 🧩 components/          # Reusable components
│   │   │   ├── HomePage/          # Landing page components
│   │   │   ├── Preferences/       # Preference form sections
│   │   │   ├── Map/              # Interactive map components
│   │   │   └── UI/               # Common UI elements
│   │   ├── 🏪 store/              # State management
│   │   ├── ⚙️ config/             # Configuration files
│   │   ├── 🎭 layouts/            # Page layouts
│   │   ├── 🎨 styles/             # Global styles
│   │   └── 📝 types/              # TypeScript definitions
│   └── 📦 public/                 # Static assets
└── 🖥️ server/                     # Backend API
    ├── 🎯 controllers/            # Business logic
    ├── 📊 models/                 # Data models
    ├── 🛣️ routes/                 # API endpoints
    ├── ⚙️ config/                 # Database configuration
    └── 🔧 middleware/             # Custom middleware
```

---

## 🚀 Quick Start

### **Prerequisites**
```bash
📋 Requirements:
- Node.js 18+ 
- MongoDB Atlas account or local MongoDB
- Git
```

### **1. Clone & Setup**
```bash
# Clone the repository
git clone https://github.com/your-username/neighborly.git
cd neighborly

# Install frontend dependencies
cd my-vite-app
npm install

# Install backend dependencies
cd ../server
npm install
```

### **2. Environment Configuration**
```bash
# Create server/.env file
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your-super-secret-key
PORT=4500
```

### **3. Launch Application**
```bash
# Terminal 1 - Start Backend Server
cd server
npm run dev
# Server running on http://localhost:4500

# Terminal 2 - Start Frontend Development Server
cd my-vite-app
npm run dev
# App running on http://localhost:5173
```

### **4. Access Application**
```
🌐 Frontend: http://localhost:5173
🔌 Backend API: http://localhost:4500/api
📊 Health Check: http://localhost:4500/api/locations
```

---

## 🎮 Usage Guide

### **1. Set Your Preferences** 🎯
- Navigate to `/preferences`
- Configure your cultural background and languages
- Set lifestyle preferences and community vibes
- Adjust safety and affordability requirements
- Define commute and connectivity needs

### **2. Discover Matches** 🔍
- Click "Save & Continue" to process preferences
- View ranked community matches with compatibility scores
- Explore detailed community profiles
- Compare multiple neighborhoods side-by-side

### **3. Explore Communities** 🗺️
- Visit `/explore` to browse all available communities
- Use advanced search and filtering options
- View interactive maps and community details
- Save interesting communities for later review

---

## 🔧 API Documentation

### **Core Endpoints**

#### **Locations**
```typescript
GET /api/locations                    // Fetch all communities
POST /api/locations/filter           // Filter by preferences
GET /api/locations/:id               // Get specific community
```

#### **Users** (Coming Soon)
```typescript
POST /api/users/register             // User registration
POST /api/users/login               // User authentication
GET /api/users/profile              // User profile
PUT /api/users/preferences          // Update preferences
```

### **Request/Response Examples**

#### **Filter Communities**
```typescript
POST /api/locations/filter
Content-Type: application/json

{
  "languages": ["Hindi", "English"],
  "culture": ["Heritage", "Modern"],
  "areaVibe": ["Traditional", "Family-Friendly"],
  "safetyLevel": 8,
  "affordabilityRange": [20000, 50000]
}

// Response
{
  "communities": [
    {
      "_id": "...",
      "name": "Jayanagar Cultural Hub",
      "city": "Bengaluru",
      "matchScore": 92,
      "matchPercentage": 92,
      "rating": 4.8,
      "highlights": ["Parks", "Schools", "Cultural Events"]
    }
  ]
}
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--primary-500: #8B5CF6      /* Vibrant Purple */
--magenta-500: #EC4899      /* Bright Magenta */
--violet-500: #7C3AED       /* Deep Violet */

/* Neutrals */
--deepBlack-500: #0F0F0F    /* Rich Black */
--softWhite: #F8FAFC        /* Clean White */
--mutedGray-400: #9CA3AF    /* Subtle Gray */

/* Accents */
--emerald-500: #10B981      /* Success Green */
--amber-500: #F59E0B        /* Warning Orange */
```

### **Typography**
```css
/* Headings */
font-family: 'Inter', sans-serif
font-weights: 400, 500, 600, 700, 800

/* Responsive Scaling */
text-sm: 0.875rem     /* 14px */
text-base: 1rem       /* 16px */
text-lg: 1.125rem     /* 18px */
text-xl: 1.25rem      /* 20px */
text-2xl: 1.5rem      /* 24px */
```

---

## 🚀 Deployment

### **Frontend Deployment (Vercel)**
```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

### **Backend Deployment (Railway/Heroku)**
```bash
# Set environment variables
MONGODB_URI=production-connection-string
JWT_SECRET=production-secret
PORT=8080

# Deploy
git push origin main
```

### **Environment Variables**
```env
# Production Environment
NODE_ENV=production
MONGODB_URI=mongodb+srv://prod-cluster
JWT_SECRET=super-secure-production-key
CORS_ORIGIN=https://your-domain.com
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### **Development Workflow**
```bash
# 1. Fork the repository
# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and commit
git commit -m "Add amazing feature"

# 4. Push to branch
git push origin feature/amazing-feature

# 5. Open Pull Request
```

### **Code Standards**
- ✅ Follow TypeScript strict mode
- ✅ Use ESLint and Prettier configurations
- ✅ Write meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation

---


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

<div align="center">
  
**Built with ❤️ by passionate developers who believe everyone deserves to find their cultural home.**

</div>

---

## 📞 Support & Contact

- 🐛 **Bug Reports**: [Create an Issue](https://github.com/your-username/neighborly/issues)
- 💡 **Feature Requests**: [Discussion Board](https://github.com/your-username/neighborly/discussions)
- 📧 **Email**: support@neighborly.app
- 🐦 **Twitter**: [@Neighborly](https://twitter.com/neighborly)

---

<div align="center">
  <h3>🌟 Star this repository if you found it helpful! 🌟</h3>
  <p><em>Help us build a more connected and culturally-aware world.</em></p>
</div>
