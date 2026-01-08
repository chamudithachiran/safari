import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    members: '',
    date: '',
    time: ''
  });

  // Animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const float = {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  // ✅ WHATSAPP SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Name: ${formData.name}
Drop Location: ${formData.location}
Members Count: ${formData.members}
Date: ${formData.date}
Time: ${formData.time}
    `.trim();

    const whatsappURL = `https://wa.me/94717402688?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-20 overflow-hidden">

      {/* Background word */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[22vw] font-extrabold uppercase tracking-tight text-white">Contact</h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid max-w-7xl w-full grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT */}
        <motion.div variants={fadeInUp}>
          <motion.div className="flex items-center gap-4 mb-6" variants={fadeInUp}>
            <span className="h-0.5 w-12 bg-[#FFC107]" />
            <span className="text-[#FFC107] text-xs tracking-[0.4em] uppercase font-semibold">Contact Desk</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-extrabold uppercase text-white leading-tight"
          >
            Let’s Talk
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-6 text-zinc-400 max-w-md">
            Have a question or project in mind? Send us a message and we’ll get back shortly.
            <span className="block text-[#FFC107]">
            Kindly note that bookings must be placed a minimum of 24 hours prior to the required time</span>
          </motion.p>

          <motion.div variants={container} className="mt-10 space-y-5">
            {[
              { icon: <MapPin />, label: 'Location', val: 'Pidurangala, Sigiriya, Sri Lanka' },
              { icon: <Phone />, label: 'Phone', val: '+94 71 740 2688' },
              { icon: <Mail />, label: 'Email', val: 'nalinsigiri@gmail.com' }
            ].map((i, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-800 text-[#FFC107]">
                  {i.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{i.label}</p>
                  <p className="text-white font-semibold">{i.val}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT – FORM CARD */}
        <motion.div variants={fadeInUp} className="relative">

          <motion.div
            className="absolute -top-1 -right-1 w-20 h-20 bg-[#FFC107] z-20"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            variants={float}
            animate="animate"
            whileHover={{ y: -8 }}
            className="relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-10 shadow-2xl"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>

              <motion.input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white placeholder:text-zinc-500 focus:border-[#FFC107] outline-none"
              />

              <motion.input
                type="text"
                placeholder="PickUp Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white placeholder:text-zinc-500 focus:border-[#FFC107] outline-none"
              />

              {/* ✅ DATE + TIME (TWO COLUMN) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white focus:border-[#FFC107] outline-none"
                />

                <motion.input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white focus:border-[#FFC107] outline-none"
                />
              </div>

              <motion.textarea
                rows={4}
                placeholder="Members Count"
                value={formData.members}
                onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white placeholder:text-zinc-500 focus:border-[#FFC107] outline-none resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-4 bg-[#FFC107] text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 relative"
              >
                Send Message <Send size={16} />
              </motion.button>

            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
