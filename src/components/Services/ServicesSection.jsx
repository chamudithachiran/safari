import React from "react";
import { motion } from "framer-motion";
import { Car, Compass, Camera } from "lucide-react";
import sectionBg from "../../assets/images/safari-jeep.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-full h-full" />,
      title: "PREMIUM SAFARI JEEPS",
      desc: "Rent luxury 4x4 safari jeeps in Sri Lanka, equipped for rugged terrain while ensuring comfort for your wildlife adventures."
    },
    {
      icon: <Compass className="w-full h-full" />,
      title: "PROFESSIONAL SAFARI GUIDES",
      desc: "Certified naturalists and local experts provide guided safari tours with deep knowledge of Sri Lanka's wildlife and ecosystems."
    },
    {
      icon: <Camera className="w-full h-full" />,
      title: "WILDLIFE PHOTO TOURS",
      desc: "Capture the perfect wildlife moments on our specialized photo safari tours, guided by experienced nature photographers."
    }
  ];

  return (
    <section className="relative w-full -mt-24 min-h-screen flex items-center overflow-hidden bg-black">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={sectionBg}
          alt="Luxury safari jeep in Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        
        {/* HEADER */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-black italic text-[10px] sm:text-xs block mb-2"
          >
            WHAT WE OFFER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic uppercase text-white leading-none"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            SAFARI <span className="text-[#FFC107]">EXPERTISE</span>
          </motion.h2>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/95 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border-l-8 sm:border-l-10 border-[#FFC107] group hover:bg-[#FFC107] transition-all duration-300"
            >
              <div className="text-[#FFC107] group-hover:text-black mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  {service.icon}
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 mb-3 sm:mb-4 group-hover:text-black">
                {service.title}
              </h4>

              <p className="text-zinc-500 text-xs sm:text-sm group-hover:text-black/80 font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
