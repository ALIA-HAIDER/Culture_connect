import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaFilter,
  FaComments,
  FaBookmark,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaMapMarkerAlt,
    title: "Locality Recommendations",
    description:
      "Discover neighborhoods that match your cultural and lifestyle preferences.",
  },
  {
    icon: FaUserFriends,
    title: "Community Vibe",
    description:
      "Explore what locals say and connect with people who match your vibe.",
  },
  {
    icon: FaFilter,
    title: "Smart Filters",
    description:
      "Narrow down by language, traditions, demographics, food culture, and more.",
  },
  {
    icon: FaComments,
    title: "Real Stories",
    description:
      "Hear directly from current residents — their experiences, advice, and concerns.",
  },
  {
    icon: FaBookmark,
    title: "Save & Compare",
    description:
      "Save your favorite areas and compare them side by side to choose wisely.",
  },
  {
    icon: FaShieldAlt,
    title: "Private & Secure",
    description:
      "We protect your preferences and data — no ads, no selling your info.",
  },
];

const tags = [
  "North Indian Friendly",
  "Affordable Rent",
  "Women-Safe Areas",
  "Student Friendly",
  "Work Commute Easy",
  "Nightlife & Cafes",
];

export default function FeaturesGrid() {
  return (
    <div className="p-6 text-softWhite mb-6 bg-deepBlack-500">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-softWhite sm:text-5xl">
          What Makes Neighborly Unique
        </h2>
        <p className="mt-3 text-mutedGray-300 text-base sm:text-lg max-w-2xl mx-auto">
          From matching your vibe to discovering hidden gems, we make finding
          your place feel personal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-deepBlack-800/60 border border-primary-500/30 backdrop-blur-[60px] transition hover:scale-105 duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <div className="text-primary-500 mb-4">
              <Icon size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-softWhite">{title}</h3>
            <p className="text-center text-mutedGray-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="min-w-[355px] max-w-[500px] flex justify-center items-center h-10 px-4 bg-deepBlack-800/80 text-sm rounded-full text-mutedGray-300 border border-primary-500/40 w-48 sm:w-56 md:w-64 hover:bg-deepBlack-800 hover:border-accentBlue/60 hover:text-accentBlue transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 mr-2 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
