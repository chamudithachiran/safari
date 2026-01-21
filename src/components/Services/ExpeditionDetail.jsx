import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import elephantImg from '../../assets/images/elephant.jpg'; // Path to your elephant image

const ExpeditionDetail = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: IMAGE WITH ALT TEXT FOR SEO */}
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
              alt="Full-day guided elephant safari in Sri Lanka jungle" 
              className="w-full h-75 sm:h-87.5 md:h-100 lg:h-112.5 object-cover" 
            />
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

          {/* Main Title */}
          <h3 
            className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-6 md:mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Full-Day <br /> 
            <span className="text-zinc-400">Wildlife Expedition</span>
          </h3>

          {/* Description optimized with keywords */}
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-6 md:mb-10 max-w-lg">
            Experience a full-day guided wildlife safari in Sri Lanka. Journey from dawn to dusk on a comfortable safari jeep rental, spotting elephants, exotic birds, and other wildlife in their natural jungle habitat. Perfect for wildlife enthusiasts and photographers seeking an unforgettable adventure.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12">
            {[
              "Includes breakfast & picnic lunch inside the national park",
              "Dedicated professional naturalist guide",
              "Visit to ancient ruins within the safari reserve"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4 text-zinc-700 font-semibold text-xs sm:text-sm uppercase tracking-tight">
                <CheckCircle2 size={18} className="sm:w-5 sm:h-5 text-[#FFC107] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <Link to="/contact">
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 border-2 border-zinc-900 text-zinc-900 font-black uppercase italic tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-lg shadow-lg active:scale-95">
              Book Your Safari Now
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ExpeditionDetail;
