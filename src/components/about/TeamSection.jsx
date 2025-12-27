import React, { useEffect, useState } from 'react';

const team = [
  {
    name: "Kamal D.",
    role: "Senior Tracker",
    image: "../../src/assets/images/team1.jpg", 
  },
  {
    name: "Sarah P.",
    role: "Operations",
    image: "../../src/assets/images/team2.jpg",
  },
  {
    name: "Vimal J.",
    role: "Bird Specialist",
    image: "../../src/assets/images/team3.jpg",
  },
  {
    name: "Ravi S.",
    role: "Elephant Expert",
    image: "../../src/assets/images/team4.jpg",
  }
];

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('team-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="team-section" className="bg-zinc-950 py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Reveal Animation */}
        <div className={`flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-bold text-xs italic block mb-3">
              The Experts
            </span>
            <h2 
              className="text-4xl md:text-6xl uppercase italic text-white leading-none"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Legends of the <span className="text-zinc-500">Bush</span>
            </h2>
          </div>
        </div>

        {/* Team Grid with Staggered Child Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-[3/4.5] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* White Label Box - Animated Slide & Pop */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-2xl transition-all duration-500 ease-out transform 
                translate-y-4 group-hover:translate-y-0 group-hover:scale-[1.02]">
                
                {/* Accent Tag */}
                <div className="w-8 h-1 bg-[#FFC107] mb-3 transition-all duration-500 group-hover:w-full"></div>
                
                <h4 className="text-zinc-900 font-black uppercase italic text-xl tracking-tight leading-none">
                  {member.name}
                </h4>
                <p className="text-[#FFC107] text-[10px] uppercase font-bold tracking-[0.25em] mt-2">
                  {member.role}
                </p>

                {/* Hidden detail revealed on hover */}
                <div className="h-0 overflow-hidden group-hover:h-4 transition-all duration-500">
                   <p className="text-[8px] text-zinc-400 uppercase mt-2 font-bold">View Profile +</p>
                </div>
              </div>

              {/* Decorative Corner (Optional design touch) */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-zinc-950/20 backdrop-blur-sm transform translate-x-6 -translate-y-6 rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;