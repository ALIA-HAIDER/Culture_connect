import { useState } from "react";
import { HiOutlineGlobeAlt, HiXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";

interface LanguagesSectionProps {
  selectedLanguages: string[];
  onLanguagesChange: (languages: string[]) => void;
}

const commonLanguages = [
  "English", "Hindi", "Spanish", "French", "German", "Chinese (Mandarin)", 
  "Arabic", "Bengali", "Portuguese", "Russian", "Japanese", "Korean",
  "Tamil", "Telugu", "Marathi", "Gujarati", "Urdu", "Punjabi", "Malayalam", "Kannada"
];

export default function LanguagesSection({ selectedLanguages, onLanguagesChange }: LanguagesSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [customLanguage, setCustomLanguage] = useState("");

  const filteredLanguages = commonLanguages.filter(lang => 
    lang.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedLanguages.includes(lang)
  );

  const addLanguage = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      onLanguagesChange([...selectedLanguages, language]);
    }
  };

  const removeLanguage = (language: string) => {
    onLanguagesChange(selectedLanguages.filter(lang => lang !== language));
  };

  const addCustomLanguage = () => {
    if (customLanguage.trim() && !selectedLanguages.includes(customLanguage.trim())) {
      onLanguagesChange([...selectedLanguages, customLanguage.trim()]);
      setCustomLanguage("");
    }
  };

  return (
    <div className="group bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 hover:border-primary-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5">
      {/* Enhanced Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-magenta-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-400 group-hover:text-primary-300 transition-colors">
              <HiOutlineGlobeAlt size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-magenta-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-softWhite mb-3 group-hover:text-primary-200 transition-colors">
            Languages Spoken
          </h3>
          <p className="text-mutedGray-300 text-base leading-relaxed">
            Select the languages you're comfortable speaking. This helps us connect you with 
            <span className="text-primary-300 font-medium"> like-minded neighbors</span> and local communities.
          </p>
        </div>
      </div>

      {/* Selected Languages */}
      {selectedLanguages.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-softWhite mb-3">Selected Languages ({selectedLanguages.length})</h4>
          <div className="flex flex-wrap gap-2">
            {selectedLanguages.map(language => (
              <span
                key={language}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-magenta-500/20 text-primary-200 rounded-full text-sm font-medium border border-primary-500/30 hover:border-primary-400 transition-all duration-200"
              >
                {language}
                <button
                  onClick={() => removeLanguage(language)}
                  className="text-primary-300 hover:text-softWhite transition-colors"
                >
                  <HiXMark size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-mutedGray-400">
            <HiOutlineMagnifyingGlass size={20} />
          </span>
          <input
            type="text"
            placeholder="Search languages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-mutedGray-500/10 border border-mutedGray-400/20 rounded-xl text-softWhite placeholder-mutedGray-400 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
          />
        </div>
      </div>

      {/* Language Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
        {filteredLanguages.slice(0, 12).map(language => (
          <button
            key={language}
            onClick={() => addLanguage(language)}
            className="p-3 text-left bg-mutedGray-500/5 border border-mutedGray-400/20 rounded-xl text-mutedGray-200 hover:border-primary-500/40 hover:bg-primary-500/5 hover:text-primary-200 transition-all duration-200 text-sm"
          >
            {language}
          </button>
        ))}
      </div>

      {/* Custom Language Input */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Add custom language..."
          value={customLanguage}
          onChange={(e) => setCustomLanguage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addCustomLanguage()}
          className="flex-1 px-4 py-3 bg-mutedGray-500/10 border border-mutedGray-400/20 rounded-xl text-softWhite placeholder-mutedGray-400 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
        />
        <button
          onClick={addCustomLanguage}
          disabled={!customLanguage.trim()}
          className="px-6 py-3 bg-gradient-to-r from-primary-500 to-magenta-500 text-softWhite rounded-xl hover:shadow-lg hover:shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}
