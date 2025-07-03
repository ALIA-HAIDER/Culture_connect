import {useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { 
  HiOutlineArrowLeft, 
  HiOutlineMapPin, 
  HiOutlineStar, 
  HiOutlineUsers, 
  HiOutlineHome,
  HiOutlineCurrencyRupee,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineEye
} from "react-icons/hi2";
import { Link } from "@heroui/link";
import { useLocationStore } from "@/store/useLocationStore";
import MapModal from "@/components/Map/mapModal";

const fallbackCommunities = [
  {
    id: "1",
    name: "Koramangala Cultural Hub",
    location: "Koramangala, Bangalore",
    matchPercentage: 95,
    rating: 4.8,
    residents: 245,
    priceRange: "₹25K - ₹45K",
    safetyScore: 9,
    highlights: [
      "Tech Community",
      "International Food",
      "Art Galleries",
      "Co-working Spaces",
    ],
    description:
      "A vibrant tech hub with diverse cultural communities and modern amenities.",
    vibes: [
      "Trendy & Modern",
      "Social & Community-Focused",
      "Diverse & Multicultural",
    ],
    languages: ["English", "Hindi", "Tamil", "Kannada"],
    amenities: [
      "Metro Access",
      "High-Speed Internet",
      "Cafes with WiFi",
      "Delivery Services",
    ],
  },
  {
    id: "2",
    name: "Indiranagar Arts District",
    location: "Indiranagar, Bangalore",
    matchPercentage: 89,
    rating: 4.6,
    residents: 189,
    priceRange: "₹30K - ₹55K",
    safetyScore: 8,
    highlights: ["Art Community", "Live Music", "Cafes", "Cultural Events"],
    description:
      "Creative neighborhood with a thriving arts scene and cultural diversity.",
    vibes: [
      "Artistic & Creative",
      "Vibrant & Energetic",
      "Social & Community-Focused",
    ],
    languages: ["English", "Hindi", "Kannada"],
    amenities: [
      "Bus Routes",
      "Art Galleries",
      "Co-working Spaces",
      "Entertainment",
    ],
  },
  {
    id: "3",
    name: "JP Nagar Family Haven",
    location: "JP Nagar, Bangalore",
    matchPercentage: 82,
    rating: 4.4,
    residents: 312,
    priceRange: "₹20K - ₹35K",
    safetyScore: 9,
    highlights: ["Family-Friendly", "Parks", "Schools", "Quiet Locality"],
    description:
      "Perfect for families with excellent schools, parks, and safe environment.",
    vibes: ["Family-Friendly", "Peaceful & Quiet", "Nature & Outdoors"],
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    amenities: ["Metro Access", "Parks", "Schools", "Emergency Services"],
  },
];

function MatchResult() {
  const { filterLocation, getLocation, restoreFilteredLocations } =
    useLocationStore();
const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    getLocation();
  }, [getLocation]);
  const transformLocationData = (location: any) => ({
    id: location.id || location._id,
    name: location.name || location.title || `${location.city} Community`,
    location:
      location.location ||
      `${location.area || location.city}, ${location.city}`,
    matchPercentage:
      location.matchPercentage ||
      location.matchScore ||
      Math.floor(Math.random() * 20) + 80,
    rating: location.rating || 4.5,
    residents: location.residents || Math.floor(Math.random() * 300) + 100,
    priceRange: location.priceRange || "₹20K - ₹40K",
    safetyScore: location.safetyScore || Math.floor(Math.random() * 3) + 8,
    highlights: location.highlights || ["Community", "Culture", "Modern"],
    description: location.description || "A wonderful community to call home.",
    vibes: location.vibes || ["Friendly", "Welcoming"],
    languages: location.languages || ["English", "Hindi"],
    amenities: location.amenities || ["Basic Amenities"],
  });

  const matchedCommunities =
    filterLocation && filterLocation.length > 0
      ? filterLocation.map(transformLocationData)
      : fallbackCommunities;

  useEffect(() => {
    if (!filterLocation || filterLocation.length === 0) {
      restoreFilteredLocations();
    }

    if (!filterLocation || filterLocation.length === 0) {
      getLocation();
    }
  }, [filterLocation, getLocation, restoreFilteredLocations]);

  return (
    <DefaultLayout>
      {/* Enhanced background with animated gradients */}
      <div className="min-h-screen bg-deepBlack-500 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-magenta-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-br from-magenta-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/preferences"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-mutedGray-500/20 to-mutedGray-400/10 backdrop-blur-sm rounded-xl border border-mutedGray-400/20 text-softWhite hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-300 group"
            >
              <HiOutlineArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-medium">Back to Preferences</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/20 mb-8 shadow-lg shadow-emerald-500/5">
              <span className="text-emerald-400">
                <HiOutlineSparkles size={18} />
              </span>
              <span className="text-emerald-300 text-sm font-medium tracking-wide">
                Perfect Matches Found
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Title */}
            <h1
              className={title({
                size: "lg",
                class:
                  "mb-8 bg-gradient-to-r from-primary-300 via-magenta-300 to-violet-300 bg-clip-text text-transparent leading-tight",
              })}
            >
              Your Perfect Communities
              <br />
              <span className="bg-gradient-to-r from-magenta-400 via-violet-400 to-primary-400 bg-clip-text text-transparent">
                Await Your Discovery
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-mutedGray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Based on your preferences, we've curated the most compatible
              communities where you'll feel
              <span className="text-primary-300 font-medium">
                {" "}
                right at home
              </span>
              . Each match is carefully scored based on your cultural,
              lifestyle, and location preferences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-magenta-400 bg-clip-text text-transparent mb-1">
                  {matchedCommunities.length}
                </div>
                <div className="text-mutedGray-400 text-sm">
                  Perfect Matches
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                  {matchedCommunities.length > 0
                    ? Math.round(
                        matchedCommunities.reduce(
                          (acc, comm) => acc + comm.matchPercentage,
                          0
                        ) / matchedCommunities.length
                      )
                    : 0}
                  %
                </div>
                <div className="text-mutedGray-400 text-sm">Average Match</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {matchedCommunities.reduce(
                    (acc, comm) => acc + comm.residents,
                    0
                  )}
                </div>
                <div className="text-mutedGray-400 text-sm">
                  Community Members
                </div>
              </div>
            </div>
          </div>

          {/* Community Matches */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filterLocation.map((community: any, index: number) => (
              <div
                key={community.id}
                className="bg-deepBlack-800/60 border border-primary-500/20 backdrop-blur-lg hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10 rounded-xl overflow-hidden h-fit"
              >
                {/* Card Header with Image */}
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-br from-primary-500/20 to-magenta-500/20 flex items-center justify-center">
                    <HiOutlineHome size={48} className="text-primary-400" />
                  </div>

                  {/* Rank Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Location Info */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-softWhite mb-1 line-clamp-1">
                      {community.name}
                    </h3>
                    <div className="flex items-center text-mutedGray-400 text-xs mb-2">
                      <span className="mr-1">
                        <HiOutlineMapPin size={12} />
                      </span>
                      {community.location}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-mutedGray-400">
                      <span className="flex items-center gap-1">
                        <HiOutlineStar size={12} className="text-amber-400" />
                        {community.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineUsers size={12} />
                        {community.residents}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineShieldCheck
                          size={12}
                          className="text-emerald-400"
                        />
                        {community.safetyScore}/10
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-mutedGray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                    {community.description}
                  </p>

                  {/* Price Range */}
                  <div className="mb-3">
                    <p className="text-emerald-400 text-xs font-semibold mb-1.5 flex items-center">
                      <HiOutlineCurrencyRupee size={12} className="mr-1" />{" "}
                      Price Range
                    </p>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded text-xs">
                      {community.priceRange}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-3">
                    <p className="text-primary-400 text-xs font-semibold mb-1.5 flex items-center">
                      <HiOutlineSparkles size={12} className="mr-1" />{" "}
                      Highlights
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {community.highlights
                        ?.slice(0, 2)
                        .map((highlight: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-primary-500/10 text-primary-400 border border-primary-500/20 px-1.5 py-0.5 rounded text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      {(community.highlights?.length || 0) > 2 && (
                        <span className="bg-mutedGray-400/10 text-mutedGray-400 px-1.5 py-0.5 rounded text-xs">
                          +{(community.highlights?.length || 0) - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Community Vibes */}
                  <div className="mb-3">
                    <p className="text-violet-400 text-xs font-semibold mb-1.5 flex items-center">
                      <HiOutlineGlobeAlt size={12} className="mr-1" /> Vibes
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {community.vibes
                        ?.slice(0, 2)
                        .map((vibe: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-violet-500/10 text-violet-400 border border-violet-500/20 px-1.5 py-0.5 rounded text-xs"
                          >
                            {vibe}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                   <button
                      className="flex-1 bg-gradient-to-r from-primary-500 to-magenta-500 text-softWhite font-medium py-2 px-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/20 flex items-center justify-center gap-1.5 text-xs"
                      onClick={() =>
                        setSelectedLocation({
                          lat: community.lat,
                          lng: community.lng,
                          name: community.name,
                        })
                      }
                    >
                      <HiOutlineEye size={14} />
                      Explore
                    </button>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-12 border border-mutedGray-400/10 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-softWhite mb-4">
                Not seeing what you're looking for?
              </h3>
              <p className="text-mutedGray-300 mb-8">
                Refine your preferences to discover more communities that match
                your lifestyle and values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/preferences"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-magenta-500 text-softWhite rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <HiOutlineArrowLeft size={20} />
                  Update Preferences
                </Link>
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-softWhite rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <HiOutlineGlobeAlt size={20} />
                  Explore All Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedLocation && (
        <MapModal
          isOpen={true}
          onClose={() => setSelectedLocation(null)}
          lat={selectedLocation.lat}
          lng={selectedLocation.lng}
          name={selectedLocation.name}
        />
      )}
    </DefaultLayout>
  );
}

export default MatchResult;
