import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappNumber = '94717402688'; // Format without + and spaces
    const message = `*New Contact Form Submission*

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

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
            <span className="h-[2px] w-12 bg-[#FFC107]" />
            <span className="text-[#FFC107] text-xs tracking-[0.4em] uppercase font-semibold">Contact Desk</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-extrabold uppercase text-white leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Let’s Talk
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-6 text-zinc-400 max-w-md">
            Have a question or project in mind? Send us a message and we’ll get back shortly.
          </motion.p>

          <motion.div variants={container} className="mt-10 space-y-5">
            {[
              { icon: <MapPin />, label: 'Location', val: 'Pidurangala, Sigiriya, Sri Lanka' },
              { icon: <Phone />, label: 'Phone', val: '+94 77 123 4567' },
              { icon: <Mail />, label: 'Email', val: 'hello@email.com' }
            ].map((i, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-800 text-[#FFC107] transition group-hover:rotate-12">
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

          {/* Animated yellow notch */}
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

              {[{ t: 'text', p: 'Your Name', n: 'name' }, { t: 'email', p: 'Email Address', n: 'email' }].map((f, i) => (
                <motion.input
                  key={f.n}
                  type={f.t}
                  name={f.n}
                  placeholder={f.p}
                  value={formData[f.n]}
                  onChange={handleChange}
                  variants={fadeInUp}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white placeholder:text-zinc-500 focus:border-[#FFC107] outline-none transition"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              ))}

              <motion.textarea
                rows={4}
                name="message"
                placeholder="Your Inquiry"
                value={formData.message}
                onChange={handleChange}
                variants={fadeInUp}
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white placeholder:text-zinc-500 focus:border-[#FFC107] outline-none transition resize-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-4 bg-[#FFC107] text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message <Send size={16} />
                </span>
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;