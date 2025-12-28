import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ CORRECT IMAGE PATH (NO /src)
import executiveCarImg from "../../assets/images/executive-car.jpg";

const TaxiServiceSection = () => {
  const serviceFeatures = [
    "Experienced chauffeurs",
    "Flight tracking",
    "Flat rates to airport"
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[30px] overflow-hidden shadow-2xl">
            <img
              src={executiveCarImg}
              alt="Executive Car Service"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* PRICE BADGE */}
          <div className="absolute bottom-6 right-6 bg-[#1a1a1a] text-[#FFC107] px-6 py-3 rounded-xl font-black text-sm shadow-xl">
            From $10 / Ride
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="space-y-8">
          <header>
            <h3
              className="text-5xl md:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-4"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              EXECUTIVE CAR <br />
              <span className="text-zinc-400">SERVICE</span>
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg mt-6">
              Experience unparalleled luxury with our executive airport fleet.
              Perfect for business travel, night runs, or premium city rides.
            </p>
          </header>

          {/* FEATURES */}
          <ul className="space-y-4">
            {serviceFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-zinc-500 font-bold uppercase italic text-xs tracking-widest"
              >
                <CheckCircle2 size={18} className="text-[#FFC107]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Link to="/contact">
              <button className="px-14 py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-all rounded-lg shadow-md">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TaxiServiceSection;
