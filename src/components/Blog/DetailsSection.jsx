// src/components/Blog/DetailsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

// Correct asset paths
import featuredImg from '../../assets/images/safari-hiker.jpg';
import leopardArticle from '../../assets/images/leopard-portrait.jpg';
import lodgeArticle from '../../assets/images/luxury-lodge.jpg';
import campfireArticle from '../../assets/images/night-campfire.jpg';

const DetailsSection = () => {
  const latestArticles = [
    { title: "Photographing the Big Five in Sri Lanka", excerpt: "Tips to capture stunning wildlife photography", date: "MAY 8, 2024", image: leopardArticle },
    { title: "Luxury Safari Lodges in Sri Lanka", excerpt: "Discover the most exclusive lodges and retreats", date: "MAY 3, 2024", image: lodgeArticle },
    { title: "Overnight Bush Camp Adventures", excerpt: "Experience the thrill of sleeping under the stars on a safari", date: "APRIL 25, 2024", image: campfireArticle },
  ];

  // Variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotate: -1 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const hoverEffect = {
    scale: 1.07,
    rotate: 0.5,
    transition: { type: "spring", stiffness: 120, damping: 10 }
  };

  const inputHover = {
    scale: 1.02,
    boxShadow: "0 0 15px rgba(255, 193, 7, 0.6)",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">

          {/* LEFT: FEATURED POST */}
          <div className="lg:col-span-2 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="text-3xl font-black italic uppercase tracking-tighter"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Featured Safari Guide
            </motion.h2>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group cursor-pointer">

              {/* Featured Image with 3D parallax hover */}
              <motion.div variants={item} className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl"
                whileHover={hoverEffect}
              >
                <motion.img
                  src={featuredImg}
                  alt="Hiking Safari Adventure in Sri Lanka"
                  className="w-full h-150 md:h-150 object-cover"
                  whileHover={{ scale: 1.08, rotate: 0.5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
                <div className="absolute bottom-6 left-6 bg-[#FFC107] text-black px-4 py-2 rounded font-black text-[10px] uppercase italic tracking-widest">
                  TRAVEL TIPS • MAY 15, 2024
                </div>
              </motion.div>

              {/* Title & Description */}
              <motion.h3 variants={item} className="text-4xl md:text-5xl font-black mb-4">
                Top 10 Tips for an Epic Safari Adventure in Sri Lanka
              </motion.h3>
              <motion.p variants={item} className="text-zinc-400 text-lg mb-8 max-w-2xl">
                Get expert advice to make your Sri Lanka safari unforgettable. Learn about packing essentials, wildlife spotting, and photography tips.
              </motion.p>

              {/* Button */}
              <motion.button
                variants={item}
                whileHover={buttonHover}
                className="bg-[#FFC107] text-black px-10 py-4 rounded-xl font-black uppercase italic tracking-widest text-sm shadow-xl"
              >
                READ MORE
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: LATEST Articles */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-black italic uppercase tracking-tighter border-b border-white/10 pb-4"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Latest Safari Articles
            </motion.h2>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
              {latestArticles.map((article, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <motion.div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                    <motion.img
                      src={article.image}
                      alt={`${article.title} | Safari Tales by Podi`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1, rotate: -1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="font-black text-lg group-hover:text-[#FFC107] transition-colors leading-tight">
                      {article.title}
                    </h4>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{article.date}</p>
                    <div className="flex items-center gap-2 text-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart size={14} fill="#FFC107" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center space-y-8 py-20 border-t border-white/10">
          <motion.h2 variants={item} className="text-5xl md:text-7xl font-black italic uppercase" style={{ fontFamily: "'Permanent Marker', cursive" }}>
            Subscribe to Our Safari Newsletter
          </motion.h2>
          <motion.p variants={item} className="text-zinc-400 text-lg md:text-xl tracking-wide">
            Get the latest safari tips, wildlife photography guides, and luxury lodge updates from Sri Lanka.
          </motion.p>

          <motion.div variants={item} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto mt-10">
            <motion.input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              whileHover={inputHover}
              className="w-full bg-[#1a1a1a] border-2 border-zinc-800 rounded-xl px-8 py-5 text-white font-black italic text-xs tracking-[0.2em] focus:border-[#FFC107] outline-none transition-all"
            />
            <motion.button
              whileHover={buttonHover}
              className="w-full md:w-auto bg-[#FFC107] text-black px-12 py-5 rounded-xl font-black uppercase italic tracking-widest text-sm hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              JOIN NOW <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
