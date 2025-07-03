import { 
  HiOutlineGlobeAlt, 
  HiOutlineTruck,
  HiOutlineMapPin,
  HiOutlineSignal,
  HiOutlineWifi,
  HiOutlineBolt,
  HiOutlinePhone,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineAcademicCap
} from "react-icons/hi2";

interface CommuteConnectivitySectionProps {
  selectedCommute: string[];
  selectedConnectivity: string[];
  onCommuteChange: (commute: string[]) => void;
  onConnectivityChange: (connectivity: string[]) => void;
}

const commuteOptions = [
  { 
    id: "metro", 
    label: "Metro/Subway", 
    icon: HiOutlineTruck,
    description: "Access to metro or subway stations"
  },
  { 
    id: "bus", 
    label: "Bus Routes", 
    icon: HiOutlineTruck,
    description: "Well-connected bus transportation"
  },
  { 
    id: "taxi", 
    label: "Taxi/Ride-sharing", 
    icon: HiOutlineMapPin,
    description: "Easy access to taxis and ride-sharing"
  },
  { 
    id: "bike", 
    label: "Bike-Friendly", 
    icon: HiOutlineHeart,
    description: "Bike lanes and cycling infrastructure"
  },
  { 
    id: "walkable", 
    label: "Walkable", 
    icon: HiOutlineMapPin,
    description: "Walking distance to amenities"
  },
  { 
    id: "parking", 
    label: "Parking Available", 
    icon: HiOutlineMapPin,
    description: "Adequate parking facilities"
  }
];

const connectivityOptions = [
  { 
    id: "high-speed-internet", 
    label: "High-Speed Internet", 
    icon: HiOutlineWifi,
    description: "Reliable broadband connectivity"
  },
  { 
    id: "mobile-coverage", 
    label: "Strong Mobile Signal", 
    icon: HiOutlineSignal,
    description: "Excellent mobile network coverage"
  },
  { 
    id: "coworking", 
    label: "Co-working Spaces", 
    icon: HiOutlineAcademicCap,
    description: "Access to co-working facilities"
  },
  { 
    id: "cafes-wifi", 
    label: "Cafes with WiFi", 
    icon: HiOutlineGlobeAlt,
    description: "WiFi-enabled cafes nearby"
  },
  { 
    id: "tech-infrastructure", 
    label: "Tech Infrastructure", 
    icon: HiOutlineBolt,
    description: "Modern tech and digital infrastructure"
  },
  { 
    id: "emergency-services", 
    label: "Emergency Services", 
    icon: HiOutlinePhone,
    description: "Quick access to emergency services"
  },
  { 
    id: "delivery-services", 
    label: "Delivery Services", 
    icon: HiOutlineShoppingBag,
    description: "Food and package delivery available"
  }
];

export default function CommuteConnectivitySection({ 
  selectedCommute, 
  selectedConnectivity, 
  onCommuteChange, 
  onConnectivityChange 
}: CommuteConnectivitySectionProps) {
  const toggleCommute = (commuteId: string) => {
    if (selectedCommute.includes(commuteId)) {
      onCommuteChange(selectedCommute.filter(id => id !== commuteId));
    } else {
      onCommuteChange([...selectedCommute, commuteId]);
    }
  };

  const toggleConnectivity = (connectivityId: string) => {
    if (selectedConnectivity.includes(connectivityId)) {
      onConnectivityChange(selectedConnectivity.filter(id => id !== connectivityId));
    } else {
      onConnectivityChange([...selectedConnectivity, connectivityId]);
    }
  };

  const renderSwitch = (
    option: { id: string; label: string; icon: React.ComponentType<any>; description: string }, 
    isSelected: boolean, 
    onToggle: (id: string) => void,
    type: 'commute' | 'connectivity'
  ) => {
    const IconComponent = option.icon;
    
    return (
      <div
        key={option.id}
        className="flex items-center justify-between p-5 rounded-xl bg-mutedGray-500/5 border border-mutedGray-400/10 hover:bg-mutedGray-500/10 hover:border-primary-500/20 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <span className={`${type === 'commute' ? 'text-blue-400' : 'text-purple-400'}`}>
            <IconComponent size={22} />
          </span>
          <div>
            <h5 className="font-semibold text-softWhite text-sm">{option.label}</h5>
            <p className="text-xs text-mutedGray-400">{option.description}</p>
          </div>
        </div>
        
        <button
          onClick={() => onToggle(option.id)}
          className={`
            relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
            ${isSelected 
              ? `${type === 'commute' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'}` 
              : 'bg-mutedGray-400/30'
            }
          `}
        >
          <span
            className={`
              inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out
              ${isSelected ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
              <HiOutlineGlobeAlt size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Commute & Connectivity
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            Select your transportation needs and connectivity requirements for your 
            <span className="text-primary-300 font-medium"> ideal location</span>.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Commute Options */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-blue-400">
              <HiOutlineTruck size={20} />
            </span>
            Transportation & Commute
          </h4>
          <div className="space-y-3">
            {commuteOptions.map(option => 
              renderSwitch(
                option, 
                selectedCommute.includes(option.id), 
                toggleCommute, 
                'commute'
              )
            )}
          </div>
        </div>

        {/* Connectivity Options */}
        <div>
          <h4 className="text-lg font-semibold text-softWhite mb-4 flex items-center gap-3">
            <span className="text-purple-400">
              <HiOutlineWifi size={20} />
            </span>
            Connectivity & Services
          </h4>
          <div className="space-y-3">
            {connectivityOptions.map(option => 
              renderSwitch(
                option, 
                selectedConnectivity.includes(option.id), 
                toggleConnectivity, 
                'connectivity'
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {(selectedCommute.length > 0 || selectedConnectivity.length > 0) && (
        <div className="mt-8 pt-6 border-t border-mutedGray-400/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {selectedCommute.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-blue-400">
                  <HiOutlineTruck size={16} />
                </span>
                <span className="text-mutedGray-300 font-medium">
                  {selectedCommute.length} commute option{selectedCommute.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            {selectedConnectivity.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-purple-400">
                  <HiOutlineWifi size={16} />
                </span>
                <span className="text-mutedGray-300 font-medium">
                  {selectedConnectivity.length} connectivity feature{selectedConnectivity.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
