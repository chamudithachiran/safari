import React from "react";
import { motion } from "framer-motion";
import { Car, ShieldCheck, Users, Star } from "lucide-react";
import taxiBg from "../../assets/images/city-taxi-blur.jpg";

/* ------------------ Animation Variants ------------------ */

const bgVariants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

const bgFloat = {
  animate: {
    scale: [1, 1.03, 1],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
  }
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const titleBreath = {
  animate: {
    scale: [1, 1.015, 1],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

/* ------------------ Component ------------------ */

const TaxiHomeSection = () => {
  const taxiServices = [
    { 
      icon: <Car size={24} />, 
      title: "PREMIUM FLEET", 
      desc: "Luxury sedans and SUVs for airport taxi transfers, city rides, and safari tours in Sri Lanka." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "SAFETY FIRST", 
      desc: "Highly trained drivers ensuring secure, comfortable, and timely rides for tourists and locals." 
    },
    { 
      icon: <Users size={24} />, 
      title: "PROFESSIONAL DRIVERS", 
      desc: "Licensed chauffeurs with local knowledge providing smooth journeys across Sri Lanka." 
    },
    { 
      icon: <Star size={24} />, 
      title: "LUXURY & COMFORT", 
      desc: "Premium interiors and amenities for first-class travel on city tours, airport transfers, or safari excursions." 
    }
  ];

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-end items-center overflow-hidden">

      {/* 🔥 Animated Background */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <motion.img
          variants={bgFloat}
          animate="animate"
          src={taxiBg}
          alt="City Taxi Service in Sri Lanka for airport and safari tours"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">

        {/* 🔥 Animated Text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={textItem}
            animate="animate"
            className="text-6xl md:text-8xl font-black italic uppercase text-white drop-shadow-lg tracking-tighter"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            <motion.span variants={titleBreath} animate="animate">
              YOUR CITY'S <span className="text-[#FFC107]">BEST TAXI SERVICE</span> IN SRI LANKA
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-white text-xl md:text-2xl font-medium mt-4 tracking-wide drop-shadow-md"
          >
            Book premium taxi rides for airport transfers, city tours, or safari transport anywhere in Sri Lanka.
          </motion.p>
        </motion.div>

        {/* 🔥 Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {taxiServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                y: -8,
                boxShadow: "0px 30px 60px rgba(0,0,0,0.25)"
              }}
              className="bg-white p-8 rounded-sm shadow-2xl border-l-4 border-[#FFC107] group transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 6 }}
                className="text-[#FFC107] group-hover:text-black mb-4 transition-colors"
              >
                {service.icon}
              </motion.div>

              <h4 className="text-[12px] font-black uppercase text-zinc-900 mb-2 group-hover:text-black">
                {service.title}
              </h4>

              <p className="text-[10px] text-zinc-500 font-bold leading-tight group-hover:text-black/80">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TaxiHomeSection;
