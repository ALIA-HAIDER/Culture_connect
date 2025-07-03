import { 
  HiOutlineUsers, 
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineChatBubbleLeftRight
} from "react-icons/hi2";

interface CommunitySectionProps {
  selectedCommunity: string[];
  onCommunityChange: (community: string[]) => void;
}

const communityOptions = [
  { 
    id: "welcoming", 
    label: "Welcoming to Newcomers", 
    icon: HiOutlineHeart,
    description: "Open community that embraces new residents"
  },
  { 
    id: "family-oriented", 
    label: "Family-Oriented", 
    icon: HiOutlineHome,
    description: "Strong focus on family values and children"
  },
  { 
    id: "young-professionals", 
    label: "Young Professionals", 
    icon: HiOutlineAcademicCap,
    description: "Career-focused community with networking opportunities"
  },
  { 
    id: "diverse", 
    label: "Culturally Diverse", 
    icon: HiOutlineGlobeAlt,
    description: "Multicultural community with various backgrounds"
  },
  { 
    id: "social-events", 
    label: "Regular Social Events", 
    icon: HiOutlineCalendarDays,
    description: "Active community events and gatherings"
  },
  { 
    id: "supportive", 
    label: "Supportive Network", 
    icon: HiOutlineShieldCheck,
    description: "Community members help each other"
  },
  { 
    id: "lgbtq-friendly", 
    label: "LGBTQ+ Friendly", 
    icon: HiOutlineSparkles,
    description: "Inclusive and accepting of all identities"
  },
  { 
    id: "active-communication", 
    label: "Active Communication", 
    icon: HiOutlineChatBubbleLeftRight,
    description: "Regular community updates and discussions"
  }
];

export default function CommunitySection({ selectedCommunity, onCommunityChange }: CommunitySectionProps) {
  const toggleCommunity = (communityId: string) => {
    if (selectedCommunity.includes(communityId)) {
      onCommunityChange(selectedCommunity.filter(id => id !== communityId));
    } else {
      onCommunityChange([...selectedCommunity, communityId]);
    }
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <HiOutlineUsers size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Community Preferences
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            What kind of community atmosphere do you prefer? Select the characteristics that 
            <span className="text-primary-300 font-medium"> matter to you</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {communityOptions.map(option => {
          const IconComponent = option.icon;
          const isSelected = selectedCommunity.includes(option.id);
          
          return (
            <button
              key={option.id}
              onClick={() => toggleCommunity(option.id)}
              className={`
                relative group p-5 rounded-xl transition-all duration-300 border text-left hover:shadow-lg
                ${isSelected 
                  ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/50 shadow-lg shadow-emerald-500/10' 
                  : 'bg-mutedGray-500/5 border-mutedGray-400/20 hover:border-primary-500/40 hover:bg-mutedGray-500/10'
                }
                hover:scale-105 active:scale-95
              `}
            >
              <div className="flex items-start gap-4">
                <span className={`${isSelected ? 'text-emerald-300' : 'text-mutedGray-400'} transition-colors mt-1`}>
                  <IconComponent size={20} />
                </span>
                
                <div className="flex-1">
                  <h4 className={`font-semibold text-sm ${isSelected ? 'text-softWhite' : 'text-mutedGray-200'} transition-colors mb-1`}>
                    {option.label}
                  </h4>
                  <p className={`text-xs ${isSelected ? 'text-mutedGray-300' : 'text-mutedGray-400'} transition-colors`}>
                    {option.description}
                  </p>
                </div>
                
                {/* Check indicator */}
                <div className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${isSelected 
                    ? 'border-emerald-400 bg-emerald-400' 
                    : 'border-mutedGray-400/40 group-hover:border-emerald-500/60'
                  }
                `}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-softWhite" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Summary */}
      {selectedCommunity.length > 0 && (
        <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-mutedGray-300 font-medium">
              {selectedCommunity.length} community preference{selectedCommunity.length !== 1 ? 's' : ''} selected
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedCommunity.slice(0, 3).map(communityId => {
                const community = communityOptions.find(c => c.id === communityId);
                return community ? (
                  <span 
                    key={communityId}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium"
                  >
                    <span className="text-emerald-400">
                      <community.icon size={12} />
                    </span>
                    {community.label}
                  </span>
                ) : null;
              })}
              {selectedCommunity.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 bg-mutedGray-500/20 text-mutedGray-400 rounded-full text-xs">
                  +{selectedCommunity.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
