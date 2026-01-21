import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Camera, Tent, Car } from 'lucide-react';
import campingImg from '../../assets/images/camping.jpg';
import photographyImg from '../../assets/images/photoghapy.jpg';
import testiImg from '../../assets/images/testi.jpg';
import geepImg from '../../assets/images/geep.jpg';
import bgImage from '../../assets/images/services-bg.jpg'; // Your background image

const Services = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative w-full min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Sri Lanka safari services background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/93"></div> {/* Dark overlay for contrast */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">

        {/* LEFT TIMELINE */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6 pt-16 md:pt-24 lg:pt-32">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex flex-col items-center gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-yellow-500/50 flex items-center justify-center">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-yellow-500 flex items-center justify-center">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              {item !== 5 && (
                <div className="w-px h-8 md:h-10 bg-linear-to-b from-yellow-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-11">
          {/* HEADER */}
          <header className="mb-8 md:mb-12 lg:mb-16 relative z-10">
            <h4 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-bold italic tracking-tighter mb-2" style={{ fontFamily: '"Permanent Marker", cursive' }}>
              WHAT WE DO
            </h4>
            <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-300 mb-3 md:mb-4">
              Sri Lanka Jeep Safari & Vehicle Rental
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none">
                Wild Services
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400 max-w-xs leading-relaxed">
                Explore the wild beauty of Sri Lanka with our expert **jeep safaris**, **photography tours**, and **vehicle rentals** for your adventure.
              </p>
            </div>
          </header>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">

            {/* CARD 1 */}
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 min-h-75 md:h-75 flex flex-col justify-end">
              <img src={geepImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Sri Lanka jeep safari" />
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-3 md:mb-4 border border-yellow-500/30">
                  <Compass className="text-yellow-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Safari Jeep</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 max-w-xs mb-4 md:mb-6">
                  Discover Sri Lanka’s wildlife on thrilling **jeep safari tours** in Yala, Wilpattu, and other national parks with expert guidance.
                </p>
                <button 
                  onClick={() => navigate('/services')}
                  className="bg-yellow-500 text-black text-[9px] sm:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition"
                >
                  Explore More
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 min-h-62.5 md:min-h-75 flex flex-col justify-center items-center text-center">
              <img src={photographyImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Sri Lanka wildlife photography tours" />
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center mb-3 md:mb-4">
                  <Camera className="text-yellow-500 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Photography</h3>
                <p className="text-[9px] sm:text-[10px] text-gray-400">
                  Capture the beauty of Sri Lanka’s wildlife and landscapes with our **photography tours** and guided jungle experiences.
                </p><br/>
                <button 
                  onClick={() => navigate('/gallery')}
                  className="bg-yellow-500 text-black text-[9px] sm:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition"
                >
                  Explore More
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden min-h-62.5 md:h-75">
              <img src={testiImg} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" alt="Safari Tales by Podi customer testimonials" />
            </div>

            {/* CARD 4 */}
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 min-h-75 md:h-75 flex flex-col justify-end">
              <img src={campingImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Vehicle rental and camping services" />
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3 md:mb-4">
                  <Car className="text-yellow-500 w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Taxi & Vehicle Rental</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 max-w-sm mb-4 md:mb-6">
                  Reliable **vehicle rental services** for safari trips and travel across Sri Lanka, ensuring comfort and safety during your adventure.
                </p>
                <button 
                  onClick={() => navigate('/taxi')}
                  className="bg-yellow-500 text-black text-[9px] sm:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition"
                >
                  Explore More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
