import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ IMAGES
import executiveCarImg from "../../assets/images/taxicar.jpg";
import backgroundCarImg from "../../assets/images/backgroundcar.jpg";

/* ---------------- Animation Variants ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const imageFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

const badgePulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ---------------- Component ---------------- */

const TaxiCarSection = () => {
  const serviceFeatures = [
    "Experienced chauffeurs",
    "Flight tracking",
    "Flat rates to airport"
  ];

  return (
    <section
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundCarImg})` }}
    >
      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.header variants={textReveal}>
            <h3
              className="text-5xl md:text-7xl font-black italic uppercase text-white leading-[0.9] mb-4"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              EXECUTIVE CAR <br />
              <span className="text-[#FFC107]">SERVICE</span>
            </h3>

            <p className="text-zinc-200 text-lg leading-relaxed max-w-lg mt-6">
              Experience unparalleled luxury with our executive airport fleet.
              Perfect for business travel, night runs, or premium city rides.
            </p>
          </motion.header>

          {/* FEATURES */}
          <ul className="space-y-4">
            {serviceFeatures.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={textReveal}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-zinc-200 font-bold uppercase italic text-xs tracking-widest"
              >
                <CheckCircle2 size={18} className="text-[#FFC107]" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={textReveal} className="pt-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.35)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="px-14 py-4 border-2 border-[#FFC107] text-[#FFC107] font-black uppercase tracking-widest text-xs hover:bg-[#FFC107] hover:text-black transition-all rounded-lg shadow-md"
              >
                BOOK NOW
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          variants={fadeSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            variants={imageFloat}
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="rounded-[30px] overflow-hidden shadow-2xl"
          >
            <img
              src={executiveCarImg}
              alt="Executive Car Service"
              className="w-full h-100 md:h-125 object-cover"
            />
          </motion.div>

          {/* PRICE BADGE */}
          
        </motion.div>

      </div>
    </section>
  );
};

export default TaxiCarSection;
