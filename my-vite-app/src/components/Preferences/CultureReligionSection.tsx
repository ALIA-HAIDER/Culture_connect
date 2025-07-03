import { 
  HiOutlineSparkles, 
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineAcademicCap
} from "react-icons/hi2";

interface CultureReligionSectionProps {
  selectedCulture: string[];
  selectedReligion: string[];
  onCultureChange: (culture: string[]) => void;
  onReligionChange: (religion: string[]) => void;
}

const cultureOptions = [
  { id: "indian", label: "Indian", icon: HiOutlineSparkles },
  { id: "western", label: "Western", icon: HiOutlineGlobeAlt },
  { id: "east-asian", label: "East Asian", icon: HiOutlineSparkles },
  { id: "middle-eastern", label: "Middle Eastern", icon: HiOutlineHeart },
  { id: "african", label: "African", icon: HiOutlineUserGroup },
  { id: "latin-american", label: "Latin American", icon: HiOutlineHome },
  { id: "european", label: "European", icon: HiOutlineAcademicCap },
  { id: "mixed", label: "Mixed/Multicultural", icon: HiOutlineGlobeAlt }
];

const religionOptions = [
  { id: "hinduism", label: "Hinduism", icon: HiOutlineSparkles },
  { id: "islam", label: "Islam", icon: HiOutlineHeart },
  { id: "christianity", label: "Christianity", icon: HiOutlineHome },
  { id: "buddhism", label: "Buddhism", icon: HiOutlineSparkles },
  { id: "sikhism", label: "Sikhism", icon: HiOutlineUserGroup },
  { id: "judaism", label: "Judaism", icon: HiOutlineAcademicCap },
  { id: "jainism", label: "Jainism", icon: HiOutlineHeart },
  { id: "secular", label: "Secular/Non-religious", icon: HiOutlineGlobeAlt },
  { id: "other", label: "Other", icon: HiOutlineSparkles }
];

export default function CultureReligionSection({ 
  selectedCulture, 
  selectedReligion, 
  onCultureChange, 
  onReligionChange 
}: CultureReligionSectionProps) {
  const toggleCulture = (cultureId: string) => {
    if (selectedCulture.includes(cultureId)) {
      onCultureChange(selectedCulture.filter(id => id !== cultureId));
    } else {
      onCultureChange([...selectedCulture, cultureId]);
    }
  };

  const toggleReligion = (religionId: string) => {
    if (selectedReligion.includes(religionId)) {
      onReligionChange(selectedReligion.filter(id => id !== religionId));
    } else {
      onReligionChange([...selectedReligion, religionId]);
    }
  };

  const renderChip = (
    option: { id: string; label: string; icon: React.ComponentType<any> }, 
    isSelected: boolean, 
    onToggle: (id: string) => void,
    type: 'culture' | 'religion'
  ) => {
    const IconComponent = option.icon;
    const colorClass = type === 'culture' ? 'from-violet-500 to-purple-500' : 'from-emerald-500 to-teal-500';
    
    return (
      <button
        key={option.id}
        onClick={() => onToggle(option.id)}
        className={`
          group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 border
          ${isSelected 
            ? `bg-gradient-to-r ${colorClass} border-transparent text-white shadow-lg` 
            : 'bg-mutedGray-500/10 border-mutedGray-400/20 text-mutedGray-200 hover:border-primary-500/40 hover:bg-mutedGray-500/20'
          }
          hover:scale-105 active:scale-95
        `}
      >
        <span className={`${isSelected ? 'text-white' : 'text-primary-400'} transition-colors`}>
          <IconComponent size={18} />
        </span>
        <span className="text-sm font-medium">{option.label}</span>
        
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-br from-violet-500 to-emerald-500 rounded-full"></div>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-violet-400 group-hover:text-violet-300 transition-colors">
              <HiOutlineSparkles size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Culture & Religion
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            Share your cultural background and religious preferences to find 
            <span className="text-primary-300 font-medium"> communities that respect</span> your values and traditions.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Culture Section */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-violet-400">
              <HiOutlineGlobeAlt size={20} />
            </span>
            Cultural Background
          </h4>
          <div className="flex flex-wrap gap-3">
            {cultureOptions.map(option => 
              renderChip(option, selectedCulture.includes(option.id), toggleCulture, 'culture')
            )}
          </div>
        </div>

        {/* Religion Section */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-emerald-400">
              <HiOutlineHeart size={20} />
            </span>
            Religious Preference
          </h4>
          <div className="flex flex-wrap gap-3">
            {religionOptions.map(option => 
              renderChip(option, selectedReligion.includes(option.id), toggleReligion, 'religion')
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {(selectedCulture.length > 0 || selectedReligion.length > 0) && (
        <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
          <div className="flex flex-wrap gap-4 text-sm">
            {selectedCulture.length > 0 && (
              <span className="text-mutedGray-300">
                <span className="text-violet-400 font-medium">Culture:</span> {selectedCulture.length} selected
              </span>
            )}
            {selectedReligion.length > 0 && (
              <span className="text-mutedGray-300">
                <span className="text-emerald-400 font-medium">Religion:</span> {selectedReligion.length} selected
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
