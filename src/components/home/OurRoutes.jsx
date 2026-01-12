import React, { useState } from 'react';
import { motion } from 'framer-motion';
import minneriyaImg from '../../assets/images/minneriya.jpg';
import kaudullaImg from '../../assets/images/kaudulla.jpg';
import huruluImg from '../../assets/images/hurulu.jpg';

const OurRoutes = () => {
  const routesData = [
    {
      id: 1,
      title: "Minneriya National Park",
      description: "Famous for the massive gathering of wild elephants around the ancient Minneriya tank.",
      image: minneriyaImg,
      mapUrl: "https://maps.app.goo.gl/YK4TTBZSAGxLQtBi9?g_st=aw"
    },
    {
      id: 2,
      title: "Kaudulla National Park",
      description: "A stunning national park featuring lush grasslands and a central reservoir full of wildlife.",
      image: kaudullaImg,
      mapUrl: "https://maps.app.goo.gl/w7LQxTwBtFQJWRsV9?g_st=aw"
    },
    {
      id: 3,
      title: "Hurulu Eco Park",
      description: "A vital eco-system for elephants and diverse bird species in the heart of the dry zone.",
      image: huruluImg,
      mapUrl: "https://maps.app.goo.gl/xL9gySc7xeJhimFH8?g_st=aw"
    }
  ];

  /* ---------------- Animation Variants ---------------- */
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const cardFloat = { animate: { y: [0, -8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } };
  const buttonHover = { whileHover: { y: -3, scale: 1.05, boxShadow: "0 0 25px rgba(255,193,7,0.7), 0 0 50px rgba(255,193,7,0.5)" }, whileTap: { scale: 0.95 } };
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const [cardState, setCardState] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });

  const handleMouseMove = (e, cardRef) => {
    if (isTouch || !cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    setCardState({ rotateX, rotateY, shineX, shineY });
  };

  const getShineStyle = () => ({
    background: `radial-gradient(circle at ${cardState.shineX}% ${cardState.shineY}%, rgba(255,255,255,0.25), transparent 60%)`
  });

  // Open the live map URL in a new tab
  const openMap = (url) => window.open(url, '_blank');

  return (
    <section className="py-20 bg-black font-sans">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <motion.div className="mb-12 text-left" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight" variants={fadeUp}>
            OUR
            <span className="block text-[#FFC107]">ROUTES</span>
          </motion.h2>
          <motion.p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl" variants={fadeUp}>
            Discover our most popular travel destinations and scenic paths.
          </motion.p>
        </motion.div>

        {/* Routes Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {routesData.map((route) => {
            let cardRef = null;
            return (
              <motion.div
                key={route.id}
                className="group relative bg-zinc-900 rounded-[30px] sm:rounded-[40px] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-3 cursor-pointer"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                ref={ref => cardRef = ref}
                style={{ rotateX: isTouch ? 0 : cardState.rotateX, rotateY: isTouch ? 0 : cardState.rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                {/* Image */}
                <motion.div className="h-60 sm:h-64 md:h-72 overflow-hidden relative" variants={cardFloat} animate="animate">
                  <img src={route.image} alt={route.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                  {!isTouch && <div className="absolute inset-0 pointer-events-none transition-all duration-100" style={getShineStyle()}></div>}
                </motion.div>

                {/* Text */}
                <div className="p-6 sm:p-8 md:p-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">{route.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8 min-h-15 sm:min-h-16">{route.description}</p>

                  {/* Button */}
                  <motion.button
                    className="bg-[#FFC107] text-black font-bold py-2.5 sm:py-3.5 px-8 sm:px-12 rounded-full transition-all duration-300 shadow-lg"
                    {...buttonHover}
                    onClick={() => openMap(route.mapUrl)}
                  >
                    View Route
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurRoutes;
