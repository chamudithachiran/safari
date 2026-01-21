import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ FIXED PATH (NO /src)
import tentImg from "../../assets/images/bush-camp-tent.jpg";

const CampSection = () => {
  const features = [
    "Full board luxury tented accommodation in the heart of the jungle",
    "Night walk with infrared equipment for wildlife spotting",
    "Private chef and butler service for a bespoke safari experience"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl md:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={tentImg}
              alt="Luxury bush camp tented accommodation for wildlife safari in Sri Lanka"
              className="w-full h-75 sm:h-87.5 md:h-112.5 lg:h-137.5 object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 sm:w-12 h-1 bg-[#FFC107]" />
            <span className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-[10px] sm:text-xs">
              ULTIMATE SAFARI EXPERIENCE
            </span>
          </div>

          <h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9]"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            OVERNIGHT <br />
            <span className="text-zinc-400">LUXURY BUSH CAMP</span>
          </h3>

          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-lg">
            Sleep under a blanket of stars in the heart of Sri Lanka’s wildlife sanctuary. 
            Safari Tales by Podi offers luxury bush camp tents with all the comforts of a hotel, 
            combining an authentic jungle camping experience with premium safari accommodation. 
            Ideal for wildlife enthusiasts, couples, and families seeking a unique overnight safari experience.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-zinc-500 font-medium text-xs sm:text-sm"
              >
                <CheckCircle2 size={16} className="sm:w-4.5 sm:h-4.5 text-[#FFC107] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link to="/contact">
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-zinc-900 hover:text-white transition-all rounded-lg shadow-md">
              BOOK YOUR OVERNIGHT SAFARI
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CampSection;
