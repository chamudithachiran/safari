import React, { useEffect, useState, useRef } from 'react';
import galleryImage from '../../assets/images/about/gallery (1).jpeg';

// CountUp component for animated counting
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const suffix = value.replace(/[\d.]/g, '');

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const startCounting = () => {
      let start = 0;
      const duration = 2000;
      const increment = numValue / (duration / 16);

      const updateCount = () => {
        start += increment;
        if (start >= numValue) {
          element.textContent = value;
          setHasAnimated(true);
        } else {
          element.textContent = Math.floor(start) + suffix;
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    };

    startCounting();
  }, [numValue, value, hasAnimated]);

  return <span ref={ref}>{value}</span>;
};

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('our-story-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="our-story-section"
      className="bg-zinc-950 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Label */}
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className={`h-0.5 bg-[#FFC107] transition-all duration-1000 delay-500 ${isVisible ? 'w-8 sm:w-12' : 'w-0'}`}></div>
            <span className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[10px] sm:text-xs">
              Our Origin Story
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase italic leading-none mb-6 md:mb-8 text-white tracking-tighter"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Born From <br /> The <span className="text-zinc-500">Wild</span>
          </h2>

          {/* Body Text */}
          <div className={`space-y-4 md:space-y-6 text-zinc-300 leading-relaxed max-w-xl text-sm sm:text-base transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p>
              Nestled near world-famous destinations like **Minneriya National Park**, **Kaudulla National Park**, **Hurulu Eco Park**, and **Sigiriya**, Safari Tales by Podi offers **authentic wildlife safari experiences in Sri Lanka**. Our tours are designed to immerse travelers in nature, allowing close encounters with elephants, exotic birds, and the island’s unique wildlife.
            </p>
            <p className="border-l-2 border-zinc-800 pl-4 md:pl-6 italic">
              With our **tourist vehicle rentals** and well-maintained safari jeeps, guest safety and comfort are our top priorities. Every safari is guided by local experts who strictly follow park regulations and responsible wildlife viewing practices. Whether you are a solo traveler, a couple, or a family, our safaris ensure a safe, unforgettable, and **authentic Sri Lanka safari adventure**.
            </p>
          </div>

          <div className={`h-px bg-zinc-800 my-6 md:my-10 transition-all duration-1000 delay-700 ${isVisible ? 'w-full' : 'w-0'}`}></div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {
              [
                { val: "15+", label: "Years Experience" },
                { val: "10K+", label: "Happy Explorers" },
                { val: "100%", label: "Local Guides" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${800 + (i * 100)}ms` }}
                >
                  <h4 className="text-[#FFC107] text-2xl sm:text-3xl md:text-4xl font-black italic mb-1">
                    {isVisible ? <CountUp value={stat.val} /> : stat.val}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-zinc-500 tracking-widest leading-tight">
                    {stat.label.split(' ')[0]}<br/>{stat.label.split(' ')[1]}
                  </p>
                </div>
              ))
          }
          </div>
        </div>

        {/* Right Image Column */}
        <div className={`order-1 lg:order-2 relative transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
          isVisible ? 'opacity-100 translate-x-0 scale-100 rotate-0' : 'opacity-0 translate-x-20 scale-90 rotate-12'
        }`}>
          <div className="relative group">
            <div className="p-3 sm:p-4 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.4)] rounded-sm transform group-hover:-rotate-2 transition-transform duration-500">
              <div className="overflow-hidden">
                <img 
                  src={galleryImage} 
                  alt="Sri Lanka wildlife safari experience near Sigiriya" 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <div className="pt-4 sm:pt-6 pb-2">
                 <p className="font-mono text-zinc-400 text-[9px] sm:text-[10px] uppercase">Safari Experience // Sigiriya, Sri Lanka</p>
              </div>
            </div>

            <div 
              className={`absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-8 bg-[#FFC107] py-3 sm:py-4 px-4 sm:px-8 shadow-2xl transition-all duration-700 delay-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              } -rotate-3 hover:rotate-0 cursor-default`}
            >
              <p className="text-black font-black italic text-xs sm:text-sm md:text-lg uppercase tracking-tight">
                "The wild doesn't perform for us."
              </p>
            </div>
            
            <div className="absolute -z-10 top-5 sm:top-10 right-5 sm:right-10 w-full h-full border-2 border-zinc-800 rounded-sm -rotate-6 transition-transform group-hover:-rotate-12 duration-700"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
