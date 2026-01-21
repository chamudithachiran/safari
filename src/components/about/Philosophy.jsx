import React, { useEffect, useState } from 'react';
import { Leaf, Users, GraduationCap } from 'lucide-react';

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('philosophy-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Local Expertise",
      desc: "As a local safari provider based in the Pidurangala–Sigiriya region, Safari Tales by Podi offers unmatched knowledge of animal behavior, national park routes, and seasonal wildlife patterns — giving guests the best opportunity to witness elephants, exotic birds, and other wildlife in their natural habitat during their Sri Lanka safari tours."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Approach",
      desc: "We specialize in **personalized wildlife safari experiences**. Every safari is carefully designed so guests can fully immerse themselves in nature, learn about wildlife, and create lasting memories while enjoying responsible and eco-friendly safari tours in Sri Lanka."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Professional Service",
      desc: "Whether you seek a serene nature retreat or an action-packed adventure, Safari Tales by Podi guarantees professional service, ethical safari practices, and safe wildlife encounters — making your **Sri Lanka wildlife tours** informative, memorable, and fully aligned with eco-conscious tourism standards."
    }
  ];

  return (
    <section id="philosophy-section" className="bg-black py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-[#FFC107] uppercase tracking-[0.3em] font-bold text-xs italic">
            Who We <span className="text-black bg-[#FFC107] px-1 px-2 rounded-sm ml-1">Are</span>
          </span>
          <h2 
            className="text-4xl md:text-5xl uppercase italic mt-4 text-white font-black"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            The Way <span className="text-zinc-600">of the Pack</span>
          </h2>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`relative bg-zinc-900 p-12 shadow-sm transition-all duration-700 ease-out transform
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
                }
                hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-default border border-zinc-800`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FFC107]"></div>

              {/* Icon Container */}
              <div className="mb-8 bg-zinc-800 w-20 h-20 flex items-center justify-center rounded-lg 
                text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-black 
                transition-all duration-500 transform group-hover:rotate-[15deg]">
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="text-2xl font-black uppercase italic mb-6 text-white tracking-tight">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border-b-2 border-r-2 border-[#FFC107]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
