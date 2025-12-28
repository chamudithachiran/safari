import React, { useEffect, useState } from 'react';
import luxuryLodge from '../../assets/images/luxury-lodge.jpg';

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* Background Image with Ken Burns (Slow Zoom) Effect */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out ${
          isLoaded ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${luxuryLodge})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Bottom fade to transition into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        
        {/* Subtitle - Fades in and slides down */}
        <h3 className={`text-[#FFC107] font-bold italic uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-lg mb-3 sm:mb-4 transition-all duration-500  ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          Explore The Untamed
        </h3>

        {/* Main Title - Large "Scale-In" effect */}
        <h1 
          className={`text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-black italic uppercase leading-none transition-all duration-500 delay-500 drop-shadow-2xl ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          About <span className="text-[#FFC107]" >Safari Tales</span>
        </h1>

        {/* Description - Rises up slowly */}
        <p className={`text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mt-6 sm:mt-8 leading-relaxed transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Safari Tales by Podi is a trusted wildlife safari experience based in Pidurangala, Sigiriya, at the heart of Sri Lanka’s most iconic wildlife region. Born from a deep passion for nature and years of hands-on experience, Safari Tales by Podi was created to offer visitors an authentic, safe, and unforgettable safari journey through Sri Lanka’s rich wilderness.
        </p>

        {/* Animated Scroll Indicator Dot */}
        <div className={`mt-8 sm:mt-12 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1 h-8 sm:h-12 bg-linear-to-b from-[#FFC107] to-transparent mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;