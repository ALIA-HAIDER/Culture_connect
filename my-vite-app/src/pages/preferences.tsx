import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import LanguagesSection from "@/components/Preferences/LanguagesSection";
import CultureReligionSection from "@/components/Preferences/CultureReligionSection";
import FoodLifestyleSection from "@/components/Preferences/FoodLifestyleSection";
import AreaVibeSection from "@/components/Preferences/AreaVibeSection";
import CommunitySection from "@/components/Preferences/CommunitySection";
import SafetyAffordabilitySection from "@/components/Preferences/SafetyAffordabilitySection";
import CommuteConnectivitySection from "@/components/Preferences/CommuteConnectivitySection";
import {
  HiOutlineCheck,
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useLocationStore } from "@/store/useLocationStore";

export interface PreferencesData {
  languages: string[];
  culture: string[];
  religion: string[];
  foodPreferences: string[];
  lifestyle: string[];
  areaVibe: string[];
  community: string[];
  safetyLevel: number;
  affordabilityRange: [number, number];
  commuteOptions: string[];
  connectivity: string[];
}

export default function PreferencesPage() {
  const { filterLocations } = useLocationStore();
  
  const [preferences, setPreferences] = useState<PreferencesData>({
    languages: [],
    culture: [],
    religion: [],
    foodPreferences: [],
    lifestyle: [],
    areaVibe: [],
    community: [],
    safetyLevel: 7,
    affordabilityRange: [15000, 50000],
    commuteOptions: [],
    connectivity: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const updatePreferences = (section: keyof PreferencesData, value: any) => {
    setPreferences((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const handleSavePreferences = async () => {
    setIsLoading(true);
    try {
      await filterLocations(preferences);
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.href = "/matchResult";
    } catch (error) {
      console.error("Error saving preferences:", error);
      alert("Error saving preferences. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isPreferencesComplete = () => {
    return (
      preferences.languages.length > 0 &&
      preferences.culture.length > 0 &&
      preferences.areaVibe.length > 0
    );
  };

  const getCompletionPercentage = () => {
    const sections = [
      preferences.languages.length > 0,
      preferences.culture.length > 0 || preferences.religion.length > 0,
      preferences.foodPreferences.length > 0 ||
        preferences.lifestyle.length > 0,
      preferences.areaVibe.length > 0,
      preferences.community.length > 0,
      preferences.safetyLevel !== 7 ||
        preferences.affordabilityRange[0] !== 15000 ||
        preferences.affordabilityRange[1] !== 50000,
      preferences.commuteOptions.length > 0 ||
        preferences.connectivity.length > 0,
    ];
    const completed = sections.filter(Boolean).length;
    return Math.round((completed / sections.length) * 100);
  };

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
              className={`absolute w-2 h-2 bg-primary-400/30 rounded-full animate-float`}
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
          {/* Stunning Header Section */}
          <div className="text-center mb-20">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-magenta-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-500/20 mb-8 shadow-lg shadow-primary-500/5">
              <span className="text-primary-400">
                <HiOutlineSparkles size={18} />
              </span>
              <span className="text-primary-300 text-sm font-medium tracking-wide">
                Personalization Journey
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
              Craft Your Perfect
              <br />
              <span className="bg-gradient-to-r from-magenta-400 via-violet-400 to-primary-400 bg-clip-text text-transparent">
                Community Experience
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-mutedGray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              Every great journey begins with understanding what makes you feel
              at home.
              <span className="text-primary-300 font-medium">
                {" "}
                Share your preferences
              </span>{" "}
              and let us guide you to communities where you'll truly belong.
            </p>

            {/* Enhanced Progress Section */}
            <div className="bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-8 border border-mutedGray-400/10 max-w-lg mx-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-primary-400">
                    <HiOutlineHeart size={20} />
                  </span>
                  <span className="text-softWhite font-medium">Progress</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-magenta-400 bg-clip-text text-transparent">
                  {getCompletionPercentage()}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-mutedGray-500/20 rounded-full overflow-hidden mb-4">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-500 via-magenta-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${getCompletionPercentage()}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                </div>
              </div>

              {/* Step Indicators */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-magenta-500 shadow-lg"></div>
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-magenta-500 animate-ping opacity-40"></div>
                  </div>
                  <span className="text-primary-300 text-sm font-medium">
                    Preferences
                  </span>
                </div>

                <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-mutedGray-400/30 rounded-full"></div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      isPreferencesComplete()
                        ? "bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg shadow-emerald-500/30"
                        : "bg-mutedGray-400/30 border-2 border-mutedGray-400/50"
                    }`}
                  >
                    {isPreferencesComplete() && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${isPreferencesComplete() ? "text-emerald-300" : "text-mutedGray-400"}`}
                  >
                    Verification
                  </span>
                </div>

                <div className="w-16 h-0.5 bg-mutedGray-400/30 rounded-full"></div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-mutedGray-400/30 border-2 border-mutedGray-400/50"></div>
                  <span className="text-mutedGray-400 text-sm font-medium">
                    Complete
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Preferences Sections Grid */}
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {/* Languages Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <LanguagesSection
                selectedLanguages={preferences.languages}
                onLanguagesChange={(languages: string[]) =>
                  updatePreferences("languages", languages)
                }
              />
            </div>

            {/* Culture & Religion Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <CultureReligionSection
                selectedCulture={preferences.culture}
                selectedReligion={preferences.religion}
                onCultureChange={(culture: string[]) =>
                  updatePreferences("culture", culture)
                }
                onReligionChange={(religion: string[]) =>
                  updatePreferences("religion", religion)
                }
              />
            </div>

            {/* Food & Lifestyle Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <FoodLifestyleSection
                selectedFood={preferences.foodPreferences}
                selectedLifestyle={preferences.lifestyle}
                onFoodChange={(food: string[]) =>
                  updatePreferences("foodPreferences", food)
                }
                onLifestyleChange={(lifestyle: string[]) =>
                  updatePreferences("lifestyle", lifestyle)
                }
              />
            </div>

            {/* Area Vibe Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <AreaVibeSection
                selectedVibes={preferences.areaVibe}
                onVibesChange={(vibes: string[]) =>
                  updatePreferences("areaVibe", vibes)
                }
              />
            </div>

            {/* Community Preferences Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <CommunitySection
                selectedCommunity={preferences.community}
                onCommunityChange={(community: string[]) =>
                  updatePreferences("community", community)
                }
              />
            </div>

            {/* Safety & Affordability Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <SafetyAffordabilitySection
                safetyLevel={preferences.safetyLevel}
                affordabilityRange={preferences.affordabilityRange}
                onSafetyChange={(safety: number) =>
                  updatePreferences("safetyLevel", safety)
                }
                onAffordabilityChange={(range: [number, number]) =>
                  updatePreferences("affordabilityRange", range)
                }
              />
            </div>

            {/* Commute & Connectivity Section */}
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <CommuteConnectivitySection
                selectedCommute={preferences.commuteOptions}
                selectedConnectivity={preferences.connectivity}
                onCommuteChange={(commute: string[]) =>
                  updatePreferences("commuteOptions", commute)
                }
                onConnectivityChange={(connectivity: string[]) =>
                  updatePreferences("connectivity", connectivity)
                }
              />
            </div>
          </div>

          {/* Enhanced Save Button Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-mutedGray-500/10 to-mutedGray-400/5 backdrop-blur-xl rounded-3xl p-12 border border-mutedGray-400/10 shadow-2xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-primary-400">
                    <HiOutlineSparkles size={24} />
                  </span>
                  <h3 className="text-2xl font-bold text-softWhite">
                    Ready to Continue?
                  </h3>
                </div>
                <p className="text-mutedGray-300 text-lg">
                  {isPreferencesComplete()
                    ? "Perfect! Your preferences will help us find your ideal community."
                    : "Complete a few more sections to get better recommendations."}
                </p>
              </div>

              {/* Progress Summary */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-magenta-400 bg-clip-text text-transparent mb-1">
                    {
                      Object.values(preferences).filter((val) =>
                        Array.isArray(val)
                          ? val.length > 0
                          : val !== preferences.safetyLevel ||
                            val !== preferences.affordabilityRange
                      ).length
                    }
                  </div>
                  <div className="text-mutedGray-400 text-sm">
                    Sections Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    {getCompletionPercentage()}%
                  </div>
                  <div className="text-mutedGray-400 text-sm">
                    Overall Progress
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {
                      [
                        ...preferences.languages,
                        ...preferences.culture,
                        ...preferences.religion,
                        ...preferences.foodPreferences,
                        ...preferences.lifestyle,
                        ...preferences.areaVibe,
                        ...preferences.community,
                        ...preferences.commuteOptions,
                        ...preferences.connectivity,
                      ].length
                    }
                  </div>
                  <div className="text-mutedGray-400 text-sm">
                    Total Preferences
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSavePreferences}
                disabled={!isPreferencesComplete() || isLoading}
                className={`
                  group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500
                  ${
                    isPreferencesComplete()
                      ? "bg-gradient-to-r from-primary-500 via-magenta-500 to-violet-500 text-softWhite hover:shadow-2xl hover:shadow-primary-500/20 hover:scale-105 active:scale-95"
                      : "bg-mutedGray-400/20 text-mutedGray-400 cursor-not-allowed"
                  }
                  ${isLoading ? "opacity-75 cursor-wait" : ""}
                  overflow-hidden
                `}
              >
                {/* Button glow effect */}
                {isPreferencesComplete() && !isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-magenta-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                )}

                <div className="relative flex items-center gap-4">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-softWhite"></div>
                      <span>Saving Your Preferences...</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineArrowPath
                        size={24}
                        className={
                          isPreferencesComplete()
                            ? "group-hover:rotate-180 transition-transform duration-500"
                            : ""
                        }
                      />
                      <span>Save & Continue</span>
                      <HiOutlineCheck
                        size={24}
                        className={
                          isPreferencesComplete()
                            ? "group-hover:scale-110 transition-transform duration-300"
                            : ""
                        }
                      />
                    </>
                  )}
                </div>

                {/* Shimmer effect */}
                {isPreferencesComplete() && !isLoading && (
                  <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                )}
              </button>

              <p className="text-xs text-mutedGray-400 mt-6">
                {isPreferencesComplete()
                  ? "✨ Ready to discover your perfect community match!"
                  : "💡 Complete at least Languages, Culture, and Area Vibe to continue"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
