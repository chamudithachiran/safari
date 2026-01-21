import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ IMAGES
import executiveCarImg from "../../assets/images/taxivan.jpg";
import backgroundVanImg from "../../assets/images/backgroundvan.jpg";

/* ---------------- Animations ---------------- */
const imageFloat = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const contentContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const badgePulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ---------------- Component ---------------- */
const TaxiServiceSection = () => {
  const serviceFeatures = [
    "Experienced chauffeurs with local knowledge",
    "Real-time flight tracking for timely pickups",
    "Flat rates to all major airports and hotels"
  ];

  return (
    <section
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundVanImg})` }}
    >
      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/85 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            variants={imageFloat}
            animate="animate"
            className="rounded-[30px] overflow-hidden shadow-2xl"
          >
            <img
              src={executiveCarImg}
              alt="Executive van rental service for airport transfer and tourist safari in Sri Lanka"
              className="w-full h-100 md:h-125 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT */}
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.header variants={fadeUp}>
            <h3
              className="text-5xl md:text-7xl font-black italic uppercase text-white leading-[0.9] mb-4"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              EXECUTIVE VAN <br />
              <span className="text-[#FFC107]">SERVICE</span>
            </h3>

            <p className="text-zinc-200 text-lg leading-relaxed max-w-lg mt-6">
              Enjoy luxury private transfers with Safari Tales by Podi. Our executive van rental in Sri Lanka is perfect for airport pickups, city tours, or transferring tourists to safari destinations in comfort. Professional chauffeurs, spacious vehicles, and on-time service ensure a premium travel experience.
            </p>
          </motion.header>

          {/* FEATURES */}
          <ul className="space-y-4">
            {serviceFeatures.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-zinc-200 font-bold uppercase italic text-xs tracking-widest cursor-default"
              >
                <CheckCircle2 size={18} className="text-[#FFC107]" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeUp} className="pt-6">
            <Link to="/contact">
              <motion.button
                whileHover={{
                  y: -4,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.35)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-4 border-2 border-[#FFC107] text-[#FFC107] font-black uppercase tracking-widest text-xs hover:bg-[#FFC107] hover:text-black transition-all rounded-lg shadow-md"
              >
                BOOK YOUR PRIVATE VAN
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default TaxiServiceSection;
s