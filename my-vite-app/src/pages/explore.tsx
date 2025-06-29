import { useState } from "react";
import { 
  HiOutlineMapPin, 
  HiOutlineUsers,
  HiOutlineMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineEye
} from "react-icons/hi2";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

// Enhanced dummy data with more variety
const dummyLocations = [
  {
    _id: "1",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    bio: "Experience the royal Nawabi culture with its exquisite Chikan embroidery, classical Kathak dance, and refined Tehzeeb traditions.",
    culturalTags: ["Chikan", "Kathak", "Tehzeeb", "Awadhi Cuisine"],
    communityPreferences: ["Vegetarian", "Hindi-speaking", "Art Enthusiasts"],
    events: ["Tehzeeb Festival", "Chikan Festival", "Lucknow Mahotsav"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    rating: 4.8,
    population: "3.2M",
    vibeScore: 92,
  },
  {
    _id: "2",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    bio: "The cultural capital where literature meets tradition, famous for Durga Puja celebrations and intellectual discourse.",
    culturalTags: ["Durga Puja", "Rabindra Sangeet", "Literature", "Fish Cuisine"],
    communityPreferences: ["Bengali-speaking", "Art Lovers", "Intellectuals"],
    events: ["Kolkata Book Fair", "Durga Puja", "Poila Boishakh"],
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=400&fit=crop",
    rating: 4.6,
    population: "4.5M",
    vibeScore: 89,
  },
  {
    _id: "3",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    bio: "The Pink City blends royal heritage with vibrant markets, showcasing magnificent palaces and traditional crafts.",
    culturalTags: ["Royal Heritage", "Block Printing", "Folk Dance", "Rajasthani Cuisine"],
    communityPreferences: ["Hindi-speaking", "Heritage Lovers", "Traditional Families"],
    events: ["Jaipur Literature Festival", "Teej Festival", "Diwali Celebrations"],
    image: "https://images.unsplash.com/photo-1599661046827-dacde7a0583a?w=600&h=400&fit=crop",
    rating: 4.7,
    population: "3.1M",
    vibeScore: 95,
  },
  {
    _id: "4",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    bio: "The city of dreams where Bollywood magic meets street food culture, offering endless opportunities and diversity.",
    culturalTags: ["Bollywood", "Street Food", "Financial Hub", "Multicultural"],
    communityPreferences: ["Cosmopolitan", "Entrepreneurs", "Young Professionals"],
    events: ["Mumbai Film Festival", "Ganesh Chaturthi", "Kala Ghoda Festival"],
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
    rating: 4.4,
    population: "12.4M",
    vibeScore: 88,
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredLocations = dummyLocations.filter((location) =>
    location.city.toLowerCase().includes(search.toLowerCase()) ||
    location.state.toLowerCase().includes(search.toLowerCase()) ||
    location.culturalTags.some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    ) ||
    location.communityPreferences.some((pref) =>
      pref.toLowerCase().includes(search.toLowerCase())
    )
  );

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-deepBlack-500">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-deepBlack-500 via-deepBlack-600 to-deepBlack-800 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={title({ size: "lg", color: "primary", class: "mb-4" })}>
              Explore Your Perfect
            </h1>
            <h1 className={title({ size: "lg", class: "text-softWhite mb-6" })}>
              Cultural Community
            </h1>
            <p className={subtitle({ class: "max-w-2xl mx-auto text-mutedGray-300 mb-8" })}>
              Discover neighborhoods that resonate with your cultural identity, lifestyle preferences, and community values.
            </p>

            {/* Enhanced Search */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-mutedGray-400">
                  <HiOutlineMagnifyingGlass size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search by city, culture, or community..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-14 pl-12 pr-6 text-lg bg-deepBlack-800/60 border border-primary-500/30 hover:border-primary-500/50 focus:border-primary-500 backdrop-blur-lg rounded-full text-softWhite placeholder-mutedGray-400 focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-softWhite mb-2">
                {search ? `Results for "${search}"` : "Discover Communities"}
              </h2>
              <p className="text-mutedGray-400">
                {filteredLocations.length} {filteredLocations.length === 1 ? 'community' : 'communities'} found
              </p>
            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredLocations.map((location) => (
              <div
                key={location._id}
                className="bg-deepBlack-800/60 border border-primary-500/20 backdrop-blur-lg hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10 rounded-xl overflow-hidden h-fit"
              >
                {/* Card Header with Image */}
                <div className="relative">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-40 object-cover"
                  />
                  
                  {/* Overlay with actions */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      className={`p-1.5 rounded-full backdrop-blur-lg border transition-all ${
                        favorites.has(location._id) 
                          ? 'bg-neonGreen/20 text-neonGreen border-neonGreen/50' 
                          : 'bg-deepBlack-800/60 text-mutedGray-300 border-primary-500/30 hover:border-primary-500/50'
                      }`}
                      onClick={() => toggleFavorite(location._id)}
                    >
                      <HiOutlineHeart size={14} />
                    </button>
                  </div>

                  {/* Vibe Score Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-500/90 text-softWhite backdrop-blur-lg px-2 py-1 rounded-full text-xs font-medium">
                      {location.vibeScore}%
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Location Info */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-softWhite mb-1 line-clamp-1">
                      {location.city}
                    </h3>
                    <div className="flex items-center text-mutedGray-400 text-xs mb-2">
                      <span className="mr-1"><HiOutlineMapPin size={12} /></span>
                      {location.state}, {location.country}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-mutedGray-400">
                      <span>★ {location.rating}</span>
                      <span>🏘️ {location.population}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-mutedGray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                    {location.bio}
                  </p>

                  {/* Cultural Tags */}
                  <div className="mb-3">
                    <p className="text-neonGreen text-xs font-semibold mb-1.5 flex items-center">
                      🎭 Cultural
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {location.culturalTags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-500/10 text-primary-400 border border-primary-500/20 px-1.5 py-0.5 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {location.culturalTags.length > 2 && (
                        <span className="bg-mutedGray-400/10 text-mutedGray-400 px-1.5 py-0.5 rounded text-xs">
                          +{location.culturalTags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Community Preferences */}
                  <div className="mb-3">
                    <p className="text-accentBlue text-xs font-semibold mb-1.5 flex items-center">
                      <span className="mr-1"><HiOutlineUsers size={12} /></span> Community
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {location.communityPreferences.slice(0, 2).map((pref) => (
                        <span
                          key={pref}
                          className="bg-accentBlue/10 text-accentBlue border border-accentBlue/20 px-1.5 py-0.5 rounded text-xs"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gradient-to-r from-primary-500 to-magenta-500 text-softWhite font-medium py-2 px-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/20 flex items-center justify-center gap-1.5 text-xs">
                      <HiOutlineEye size={14} />
                      Explore
                    </button>
                    <button className="bg-accentBlue/10 text-accentBlue border border-accentBlue/30 hover:bg-accentBlue/20 py-2 px-3 rounded-lg transition-all text-xs">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredLocations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-softWhite mb-2">
                No communities found
              </h3>
              <p className="text-mutedGray-400 mb-6">
                Try adjusting your search terms or explore our featured communities.
              </p>
              <button
                className="bg-primary-500 text-softWhite px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all"
                onClick={() => setSearch("")}
              >
                Show All Communities
              </button>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
