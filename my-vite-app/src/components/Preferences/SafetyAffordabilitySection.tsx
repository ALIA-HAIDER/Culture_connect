
import { 
  HiOutlineShieldCheck, 
  HiOutlineCurrencyRupee,
  HiOutlineInformationCircle
} from "react-icons/hi2";

interface SafetyAffordabilitySectionProps {
  safetyLevel: number;
  affordabilityRange: [number, number];
  onSafetyChange: (safety: number) => void;
  onAffordabilityChange: (range: [number, number]) => void;
}

export default function SafetyAffordabilitySection({ 
  safetyLevel, 
  affordabilityRange, 
  onSafetyChange, 
  onAffordabilityChange 
}: SafetyAffordabilitySectionProps) {

  const formatBudget = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount}`;
  };

  const getSafetyLabel = (level: number) => {
    if (level <= 2) return "Basic Safety";
    if (level <= 4) return "Moderate Safety";
    if (level <= 6) return "Good Safety";
    if (level <= 8) return "High Safety";
    return "Maximum Security";
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <HiOutlineShieldCheck size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Safety & Affordability
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            Set your preferences for neighborhood safety levels and budget range for 
            <span className="text-primary-300 font-medium"> accommodation</span>.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Safety Level */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-emerald-400">
              <HiOutlineShieldCheck size={24} />
            </span>
            <h4 className="text-xl font-semibold text-softWhite">Safety Level</h4>
            <span className="text-mutedGray-400 text-sm">
              <HiOutlineInformationCircle size={16} />
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-mutedGray-300">Current preference:</span>
              <span className="text-lg font-bold px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                {getSafetyLabel(safetyLevel)} ({safetyLevel}/10)
              </span>
            </div>
            
            <div className="relative">
              <input
                type="range"
                min="1"
                max="10"
                value={safetyLevel}
                onChange={(e) => onSafetyChange(parseInt(e.target.value))}
                className="w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div className="flex justify-between text-xs text-mutedGray-400 mt-3">
              <span>Basic</span>
              <span>Moderate</span>
              <span>Good</span>
              <span>High</span>
              <span>Maximum</span>
            </div>
          </div>
        </div>

        {/* Affordability Range */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-400">
              <HiOutlineCurrencyRupee size={24} />
            </span>
            <h4 className="text-xl font-semibold text-softWhite">Monthly Budget Range</h4>
            <span className="text-mutedGray-400 text-sm">
              <HiOutlineInformationCircle size={16} />
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-mutedGray-300">Budget range:</span>
              <span className="text-lg font-bold px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                {formatBudget(affordabilityRange[0])} - {formatBudget(affordabilityRange[1])}
              </span>
            </div>
            
            <div className="relative">
              <div className="w-full h-4 bg-mutedGray-500/20 rounded-lg relative">
                <div 
                  className="absolute h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg"
                  style={{
                    left: `${(affordabilityRange[0] / 100000) * 100}%`,
                    width: `${((affordabilityRange[1] - affordabilityRange[0]) / 100000) * 100}%`
                  }}
                />
              </div>
              
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={affordabilityRange[0]}
                onChange={(e) => {
                  const newMin = parseInt(e.target.value);
                  if (newMin < affordabilityRange[1]) {
                    onAffordabilityChange([newMin, affordabilityRange[1]]);
                  }
                }}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={affordabilityRange[1]}
                onChange={(e) => {
                  const newMax = parseInt(e.target.value);
                  if (newMax > affordabilityRange[0]) {
                    onAffordabilityChange([affordabilityRange[0], newMax]);
                  }
                }}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            
            <div className="flex justify-between text-xs text-mutedGray-400 mt-3">
              <span>₹5K</span>
              <span>₹25K</span>
              <span>₹50K</span>
              <span>₹75K</span>
              <span>₹1L+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">
              <HiOutlineShieldCheck size={18} />
            </span>
            <span className="text-mutedGray-300 font-medium">
              Safety: {getSafetyLabel(safetyLevel)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-400">
              <HiOutlineCurrencyRupee size={18} />
            </span>
            <span className="text-mutedGray-300 font-medium">
              Budget: {formatBudget(affordabilityRange[0])} - {formatBudget(affordabilityRange[1])}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
