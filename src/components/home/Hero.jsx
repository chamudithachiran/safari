import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">

      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="relative z-20">
        <Navbar
          baseColor="#1a1a1a"
          menuColor="#fff"
          buttonBgColor="#FFC107"
          buttonTextColor="#000"
        />
      </div>

      {/* ================= WHATSAPP FLOAT (FIXED) ================= */}
      <motion.a
        href="https://wa.me/94717402688"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-10 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-xl"
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 0 0 0 rgba(37,211,102,0.7)",
            "0 0 0 14px rgba(37,211,102,0)",
            "0 0 0 0 rgba(37,211,102,0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <span className="text-[#FFC107] uppercase tracking-[0.4em] text-xs font-bold italic">
            Into the Wild
          </span>

          <h1
            className="mt-4 text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black italic uppercase leading-[0.8]"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            SAFARI TALES
            <span className="block text-zinc-500">BY PODI</span>
          </h1>

          <p className="mt-6 tracking-[0.5em] uppercase text-zinc-300 text-xs">
            Adventure in the forest
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
