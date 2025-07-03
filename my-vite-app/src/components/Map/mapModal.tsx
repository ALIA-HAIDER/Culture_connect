import SimpleMap from "./simpleMap";
import { 
  HiOutlineXMark, 
  HiOutlineMapPin, 
  HiOutlineGlobeAlt,
  HiOutlineSparkles 
} from "react-icons/hi2";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  name: string;
}

function MapModal({ isOpen, onClose, lat, lng, name }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-deepBlack-500/80 flex items-center justify-center p-4">
      {/* Background overlay with animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-magenta-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl border border-mutedGray-400/20 shadow-2xl shadow-primary-500/10 overflow-hidden">
          
          {/* Header */}
          <div className="relative px-8 py-6 border-b border-mutedGray-400/20">
            {/* Header background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-magenta-500/5"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon with glow effect */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-magenta-500 flex items-center justify-center shadow-lg">
                    <HiOutlineMapPin size={24} className="text-softWhite" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-magenta-500 animate-ping opacity-20"></div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-softWhite mb-1">
                    {name}
                  </h2>
                  <div className="flex items-center gap-2 text-primary-300">
                    <HiOutlineGlobeAlt size={16} />
                    <span className="text-sm font-medium">Location Details</span>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="group relative w-10 h-10 rounded-full bg-mutedGray-500/20 hover:bg-mutedGray-400/30 border border-mutedGray-400/30 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlineXMark 
                  size={20} 
                  className="text-mutedGray-300 group-hover:text-softWhite transition-colors" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Map Content */}
          <div className="relative p-8">
            {/* Decorative elements */}
            <div className="absolute top-4 right-8 flex items-center gap-2">
              <HiOutlineSparkles className="text-primary-400" size={16} />
              <span className="text-xs text-primary-300 font-medium">Interactive Map</span>
            </div>

            {/* Map container with enhanced styling */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-primary-500/20 shadow-xl shadow-primary-500/5">
                <SimpleMap lat={lat} lng={lng} name={name} />
              </div>
              
              {/* Map overlay effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 via-transparent to-magenta-500/5 pointer-events-none"></div>
            </div>

            {/* Coordinates info */}
            <div className="mt-6 flex items-center justify-center">
              <div className="bg-mutedGray-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-mutedGray-400/20">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-mutedGray-400">Latitude:</span>
                    <span className="text-primary-300 font-mono">{lat.toFixed(6)}</span>
                  </div>
                  <div className="w-px h-4 bg-mutedGray-400/30"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-mutedGray-400">Longitude:</span>
                    <span className="text-primary-300 font-mono">{lng.toFixed(6)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with action buttons */}
          <div className="px-8 py-6 border-t border-mutedGray-400/20 bg-gradient-to-r from-mutedGray-500/5 to-mutedGray-400/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-mutedGray-400 text-sm">
                <HiOutlineSparkles size={14} />
                <span>Click and drag to explore the area</span>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank')}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-magenta-500/20 text-primary-300 border border-primary-500/30 rounded-lg hover:bg-gradient-to-r hover:from-primary-500/30 hover:to-magenta-500/30 hover:border-primary-500/50 transition-all duration-300 text-sm font-medium"
                >
                  Open in Google Maps
                </button>
                <button 
                  onClick={onClose}
                  className="px-4 py-2 bg-gradient-to-r from-mutedGray-500/20 to-mutedGray-400/20 text-softWhite border border-mutedGray-400/30 rounded-lg hover:border-mutedGray-300/50 transition-all duration-300 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapModal;
