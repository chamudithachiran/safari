import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import leopardImg from "../../assets/images/leopard-resting.jpg";

const MorningEveningRaid = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-[10px] sm:text-xs">
              FLEXIBLE TIMING
            </span>
            <div className="w-8 sm:w-12 h-1 bg-[#FFC107]" />
          </div>

          <h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-6 md:mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            MORNING OR EVENING <br />
            <span className="text-zinc-400">WILDLIFE SAFARI</span>
          </h3>

          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-6 md:mb-10 max-w-lg">
            Short on time? Enjoy a flexible Sri Lanka morning safari or evening safari with Safari Tales by Podi. These 4-hour wildlife jeep tours take you during sunrise or sunset, providing the best opportunities for spotting leopards, elephants, and exotic birds in their natural jungle habitat. Perfect for wildlife enthusiasts and jungle photography tours.
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
            {[
              "Choice of 5:00 AM morning safari or 2:00 PM evening safari",
              "Refreshments provided during your wildlife tour",
              "Convenient hotel pickup and drop-off included"
            ].map((feature, idx) => (
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
              BOOK YOUR SAFARI NOW
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="rounded-2xl md:rounded-[30px] overflow-hidden shadow-2xl">
            <img
              src={leopardImg}
              alt="Leopard spotted during Sri Lanka morning and evening safari"
              className="w-full h-75 sm:h-87.5 md:h-100 lg:h-125 object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MorningEveningRaid;
