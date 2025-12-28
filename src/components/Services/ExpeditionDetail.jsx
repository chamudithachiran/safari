import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import elephantImg from '../../assets/images/elephant.jpg'; // Path to your elephant image

const ExpeditionDetail = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: IMAGE WITH PRICING BADGE */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={elephantImg} 
              alt="Full Day Expedition Elephant" 
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover" 
            />
          </div>
          
          {/* Pricing Badge */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-zinc-900/90 backdrop-blur-md text-[#FFC107] px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm shadow-2xl border border-zinc-800">
            From $120 / Person
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT & FEATURES */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subheader Accent */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-[#FFC107]"></div>
            <span className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[10px] sm:text-xs italic">
              Most Popular
            </span>
          </div>

          {/* Main Title with Permanent Marker Font */}
          <h3 
            className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-6 md:mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            The Full Day <br /> 
            <span className="text-zinc-400">Expedition</span>
          </h3>

          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-6 md:mb-10 max-w-lg">
            Immerse yourself in a 12-hour adventure spanning dawn to dusk. Witness the jungle wake up with the sunrise and hunt as the sun sets.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12">
            {[
              "Includes breakfast & picnic lunch inside the park",
              "Dedicated naturalist guide",
              "Visit to ancient ruins within the reserve"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4 text-zinc-700 font-semibold text-xs sm:text-sm uppercase tracking-tight">
                <CheckCircle2 size={18} className="sm:w-5 sm:h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <Link to="/contact">
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 border-2 border-zinc-900 text-zinc-900 font-black uppercase italic tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-lg shadow-lg active:scale-95">
              Book Now
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ExpeditionDetail;