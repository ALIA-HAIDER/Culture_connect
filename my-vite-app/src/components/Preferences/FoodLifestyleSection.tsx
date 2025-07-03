import { 
  HiOutlineSparkles, 
  HiOutlineFire,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineUsers,
  HiOutlineMusicalNote,
  HiOutlineBookOpen,
  HiOutlineTv,
  HiOutlineRectangleGroup,
  HiOutlineBeaker
} from "react-icons/hi2";

interface FoodLifestyleSectionProps {
  selectedFood: string[];
  selectedLifestyle: string[];
  onFoodChange: (food: string[]) => void;
  onLifestyleChange: (lifestyle: string[]) => void;
}

const foodOptions = [
  { id: "vegetarian", label: "Vegetarian", icon: HiOutlineBeaker },
  { id: "vegan", label: "Vegan", icon: HiOutlineBeaker },
  { id: "halal", label: "Halal", icon: HiOutlineSparkles },
  { id: "kosher", label: "Kosher", icon: HiOutlineSparkles },
  { id: "spicy", label: "Spicy Food", icon: HiOutlineFire },
  { id: "international", label: "International", icon: HiOutlineGlobeAlt },
  { id: "local", label: "Local Cuisine", icon: HiOutlineRectangleGroup },
  { id: "healthy", label: "Health Conscious", icon: HiOutlineHeart }
];

const lifestyleOptions = [
  { id: "early-riser", label: "Early Riser", icon: HiOutlineSun },
  { id: "night-owl", label: "Night Owl", icon: HiOutlineMoon },
  { id: "social", label: "Social Butterfly", icon: HiOutlineUsers },
  { id: "quiet", label: "Quiet Living", icon: HiOutlineBookOpen },
  { id: "active", label: "Active Lifestyle", icon: HiOutlineSparkles },
  { id: "homebody", label: "Homebody", icon: HiOutlineHeart },
  { id: "entertainment", label: "Entertainment Lover", icon: HiOutlineTv },
  { id: "creative", label: "Creative", icon: HiOutlineMusicalNote }
];

export default function FoodLifestyleSection({ 
  selectedFood, 
  selectedLifestyle, 
  onFoodChange, 
  onLifestyleChange 
}: FoodLifestyleSectionProps) {
  const toggleFood = (foodId: string) => {
    if (selectedFood.includes(foodId)) {
      onFoodChange(selectedFood.filter(id => id !== foodId));
    } else {
      onFoodChange([...selectedFood, foodId]);
    }
  };

  const toggleLifestyle = (lifestyleId: string) => {
    if (selectedLifestyle.includes(lifestyleId)) {
      onLifestyleChange(selectedLifestyle.filter(id => id !== lifestyleId));
    } else {
      onLifestyleChange([...selectedLifestyle, lifestyleId]);
    }
  };

  const renderToggleCard = (
    option: { id: string; label: string; icon: React.ComponentType<any> }, 
    isSelected: boolean, 
    onToggle: (id: string) => void,
    type: 'food' | 'lifestyle'
  ) => {
    const IconComponent = option.icon;
    const gradientClass = type === 'food' ? 'from-violet-500 to-purple-500' : 'from-magenta-500 to-pink-500';
    
    return (
      <button
        key={option.id}
        onClick={() => onToggle(option.id)}
        className={`
          relative group p-6 rounded-2xl transition-all duration-300 border-2 hover:shadow-xl
          ${isSelected 
            ? `bg-gradient-to-br ${gradientClass} border-transparent shadow-lg shadow-primary-500/20` 
            : 'bg-mutedGray-500/10 border-mutedGray-400/20 hover:border-primary-500/40 hover:bg-mutedGray-500/20'
          }
          hover:scale-105 active:scale-95
        `}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <span className={`${isSelected ? 'text-softWhite' : 'text-primary-400'} transition-colors`}>
            <IconComponent size={28} />
          </span>
          <span className={`text-sm font-medium ${isSelected ? 'text-softWhite' : 'text-mutedGray-200'} transition-colors`}>
            {option.label}
          </span>
        </div>
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-softWhite rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-magenta-500 rounded-full"></div>
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
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-magenta-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-violet-400 group-hover:text-violet-300 transition-colors">
              <HiOutlineRectangleGroup size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-magenta-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Food & Lifestyle
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            Tell us about your food preferences and lifestyle habits to find 
            <span className="text-primary-300 font-medium"> like-minded neighbors</span> and compatible communities.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Food Preferences */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-violet-400">
              <HiOutlineBeaker size={20} />
            </span>
            Food Preferences
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodOptions.map(option => 
              renderToggleCard(
                option, 
                selectedFood.includes(option.id), 
                toggleFood, 
                'food'
              )
            )}
          </div>
        </div>

        {/* Lifestyle */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-magenta-400">
              <HiOutlineSparkles size={20} />
            </span>
            Lifestyle
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifestyleOptions.map(option => 
              renderToggleCard(
                option, 
                selectedLifestyle.includes(option.id), 
                toggleLifestyle, 
                'lifestyle'
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {(selectedFood.length > 0 || selectedLifestyle.length > 0) && (
        <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
          <div className="flex flex-wrap gap-4 text-sm">
            {selectedFood.length > 0 && (
              <span className="text-mutedGray-300">
                <span className="text-violet-400 font-medium">Food:</span> {selectedFood.length} preference{selectedFood.length !== 1 ? 's' : ''}
              </span>
            )}
            {selectedLifestyle.length > 0 && (
              <span className="text-mutedGray-300">
                <span className="text-magenta-400 font-medium">Lifestyle:</span> {selectedLifestyle.length} preference{selectedLifestyle.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
