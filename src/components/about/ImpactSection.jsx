import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('impact-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
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
      id="impact-section" 
      className="relative bg-[#0A0A0A] py-32 px-6 md:px-20 overflow-hidden text-white"
    >
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content Column */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          <span className="text-[#FFC107] uppercase tracking-[0.4em] font-bold text-xs italic block mb-6 animate-pulse">
            Giving Back
          </span>
          
          <h2 
            className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] mb-10 tracking-tighter"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Protecting <br />
            <span className="text-zinc-700 transition-colors duration-1000 group-hover:text-zinc-500">What We Love</span>
          </h2>

          <p className="text-zinc-400 text-xl mb-12 leading-relaxed max-w-lg font-medium">
            At **Safari Tales by Podi**, sustainable tourism is at the heart of every journey. We donate 
            <span className="text-white"> 5% of our annual profits</span> to the <strong>'Wild Sri Lanka Foundation'</strong>, supporting **wildlife conservation in Sri Lanka** and ensuring our **eco-friendly safari tours** benefit both nature and local communities.
          </p>

          <div className="space-y-10 mb-14">
            {[ 
              { 
                title: "Plastic-Free Safaris", 
                desc: "All safari vehicles are fully plastic-free, promoting eco-friendly travel since 2015.", 
                delay: "delay-100" 
              },
              { 
                title: "Reforestation Projects", 
                desc: "Over 5,000 indigenous trees planted to restore wildlife habitats in buffer zones.", 
                delay: "delay-300" 
              }
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${item.delay}`}>
                <div className="bg-[#FFC107]/10 p-2 rounded-full">
                  <CheckCircle2 className="text-[#FFC107] w-7 h-7 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black uppercase italic tracking-widest text-lg text-white">{item.title}</h4>
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Overlapping Images Column */}
        <div className="relative h-150 flex items-center justify-center group">
          
          {/* Background Frame */}
          <div className={`absolute inset-0 border border-zinc-800 transition-all duration-1000 transform ${
            isVisible ? 'rotate-3 scale-100' : 'rotate-0 scale-90'
          } group-hover:-rotate-3 rounded-sm opacity-50`}></div>

          {/* Jeep Image */}
          <div className={`absolute left-0 top-12 w-3/4 z-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          } group-hover:-translate-y-6 group-hover:-translate-x-4`}>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm">
                <img 
                  src="../../src/assets/images/jeep-bw.jpg" 
                  className="grayscale group-hover:grayscale-0 w-full h-auto object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                  alt="Eco-friendly safari jeep for Sri Lanka wildlife tours"
                />
              </div>
          </div>

          {/* Elephant Image */}
          <div className={`absolute right-0 bottom-12 w-3/4 z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out delay-200 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          } group-hover:translate-y-6 group-hover:translate-x-4`}>
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm">
                <img 
                  src="../../src/assets/images/elephant-bw.jpg" 
                  className="grayscale group-hover:grayscale-0 w-full h-auto object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                  alt="Elephant in Sri Lanka national park safari tour"
                />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
