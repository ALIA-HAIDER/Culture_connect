import { 
  HiOutlineSparkles, 
  HiOutlineHeart,
  HiOutlineSun,
  HiOutlineMusicalNote,
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineBeaker,
  HiOutlineFire
} from "react-icons/hi2";

interface AreaVibeSectionProps {
  selectedVibes: string[];
  onVibesChange: (vibes: string[]) => void;
}

const vibeOptions = [
  { 
    id: "vibrant", 
    label: "Vibrant & Energetic", 
    icon: HiOutlineFire,
    description: "Buzzing with activity, events, and nightlife",
    color: "from-orange-500 to-red-500",
    mood: "🔥"
  },
  { 
    id: "peaceful", 
    label: "Peaceful & Quiet", 
    icon: HiOutlineBookOpen,
    description: "Calm, serene neighborhoods for relaxation",
    color: "from-blue-500 to-indigo-500",
    mood: "🕊️"
  },
  { 
    id: "artistic", 
    label: "Artistic & Creative", 
    icon: HiOutlineMusicalNote,
    description: "Rich in culture, art galleries, and creative spaces",
    color: "from-purple-500 to-pink-500",
    mood: "🎨"
  },
  { 
    id: "social", 
    label: "Social & Community-Focused", 
    icon: HiOutlineUsers,
    description: "Strong community bonds and social activities",
    color: "from-green-500 to-emerald-500",
    mood: "🤝"
  },
  { 
    id: "trendy", 
    label: "Trendy & Modern", 
    icon: HiOutlineSparkles,
    description: "Hip cafes, modern amenities, and urban lifestyle",
    color: "from-violet-500 to-purple-500",
    mood: "✨"
  },
  { 
    id: "nature", 
    label: "Nature & Outdoors", 
    icon: HiOutlineSun,
    description: "Parks, trails, and outdoor recreational activities",
    color: "from-green-400 to-teal-500",
    mood: "🌿"
  },
  { 
    id: "family", 
    label: "Family-Friendly", 
    icon: HiOutlineHeart,
    description: "Safe streets, good schools, and family amenities",
    color: "from-pink-500 to-rose-500",
    mood: "👨‍👩‍👧‍👦"
  },
  { 
    id: "diverse", 
    label: "Diverse & Multicultural", 
    icon: HiOutlineBeaker,
    description: "Rich cultural diversity and international community",
    color: "from-amber-500 to-orange-500",
    mood: "🌍"
  }
];

export default function AreaVibeSection({ selectedVibes, onVibesChange }: AreaVibeSectionProps) {
  const toggleVibe = (vibeId: string) => {
    if (selectedVibes.includes(vibeId)) {
      onVibesChange(selectedVibes.filter(id => id !== vibeId));
    } else {
      onVibesChange([...selectedVibes, vibeId]);
    }
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-magenta-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-400 group-hover:text-primary-300 transition-colors">
              <HiOutlineSparkles size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-magenta-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Area Vibe
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            What kind of neighborhood atmosphere are you looking for? Select the vibes that 
            <span className="text-primary-300 font-medium"> resonate with you</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vibeOptions.map(option => {
          const IconComponent = option.icon;
          const isSelected = selectedVibes.includes(option.id);
          
          return (
            <button
              key={option.id}
              onClick={() => toggleVibe(option.id)}
              className={`
                relative group p-6 rounded-2xl transition-all duration-300 border-2 text-left hover:shadow-xl
                ${isSelected 
                  ? `bg-gradient-to-br ${option.color} border-transparent shadow-lg` 
                  : 'bg-mutedGray-500/10 border-mutedGray-400/20 hover:border-primary-500/40 hover:bg-mutedGray-500/20'
                }
                hover:scale-105 active:scale-95
              `}
            >
              <div className="flex items-start gap-4">
                {/* Mood Emoji */}
                <div className="text-3xl">{option.mood}</div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${isSelected ? 'text-white' : 'text-primary-400'} transition-colors`}>
                      <IconComponent size={22} />
                    </span>
                    <h4 className={`font-bold ${isSelected ? 'text-white' : 'text-softWhite'} transition-colors`}>
                      {option.label}
                    </h4>
                  </div>
                  <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-mutedGray-300'} transition-colors`}>
                    {option.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-magenta-500 rounded-full"></div>
                </div>
              )}
              
              {/* Hover effect overlay */}
              {!isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Summary */}
      {selectedVibes.length > 0 && (
        <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-mutedGray-300 font-medium">
              Selected vibes: 
            </span>
            <div className="flex flex-wrap gap-3">
              {selectedVibes.map(vibeId => {
                const vibe = vibeOptions.find(v => v.id === vibeId);
                return vibe ? (
                  <span 
                    key={vibeId}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium"
                  >
                    <span>{vibe.mood}</span>
                    {vibe.label}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
