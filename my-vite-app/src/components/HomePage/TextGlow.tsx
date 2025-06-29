function TextGlow() {
  const textstyle = {
    WebkitTextStroke: "1px #9747FF",
    color: "black",
    display: "flex",
    textShadow: "0 0 4px rgba(151, 71, 255, 0.8), 0 0 8px rgba(151, 71, 255, 0.6)", // Enhanced glow effect
  };
  const glowStyle = {
    WebkitTextStroke: "0.1px #9747FF",
    textShadow: "0 0 4px rgba(151, 71, 255, 0.8), 0 0 8px rgba(151, 71, 255, 0.6)",
  };

  return (
    <div className="pt-0 truncate z-10 w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl flex flex-col animate-slideInOut items-center justify-center origin-bottom font-sephora font-bold tracking-widest bg-deepBlack-500">
      <div style={textstyle}>
        FIND YOUR VIBE
        <div className="flex justify-center items-center overflow-visible">
          <div className="absolute z-10 text-softWhite flex justify-center items-center">
            {/* Optional spark effect */}
          </div>
          <div
            className="z-20 text-softWhite ml-4 bg-gradient-to-r from-primary-500 to-magenta-500 h-[10px] md:h-[35px] flex justify-center items-center shadow-lg shadow-primary-500/50"
            style={glowStyle}
          >
            NOT JUST A PLACE
          </div>
        </div>{" "}
        BUT YOUR PEOPLE
      </div>

      <div style={textstyle}>
        WHERE CULTURE MEETS
        <div className="flex justify-center items-center overflow-hidden">
          <div className="absolute z-10 text-softWhite flex justify-center items-center">
            {/* Optional spark */}
          </div>
          <div
            className="z-20 text-softWhite ml-4 bg-gradient-to-r from-primary-500 to-magenta-500 h-[10px] md:h-[35px] flex justify-center items-center shadow-lg shadow-primary-500/50"
            style={glowStyle}
          >
            COMMUNITY
          </div>
        </div>
        AND COMFORT
      </div>

      <div style={textstyle}>
        CULTURECONNECT IS
        <div className="flex justify-center items-center overflow-visible">
          <div
            className="z-20 transform -translate-x-2 text-softWhite text-center bg-gradient-to-r from-primary-500 to-magenta-500 h-[10px] md:h-[35px] flex justify-center items-center shadow-lg shadow-primary-500/50"
            style={glowStyle}
          >
            YOUR NEXT HOME
          </div>
        </div>
        BY VIBE, NOT JUST ADDRESS
      </div>
    </div>
  );
}

export default TextGlow;
