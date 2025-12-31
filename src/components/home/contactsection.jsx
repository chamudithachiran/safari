import React, { useEffect, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    members: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // ✅ AUTO CLEAR FORM
    setFormData({
      name: '',
      location: '',
      members: '',
      date: '',
      time: ''
    });
  };

  return (
    <section 
      id="contact-section" 
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden" 
      style={{ backgroundColor: '#050505' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

        {/* LEFT COLUMN */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className="text-[#FFC107] uppercase tracking-[0.4em] font-bold text-xs italic block mb-4">
            Start Your Journey
          </span>

          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-white uppercase leading-none mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Get In <span className="text-zinc-700">Touch</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed font-medium">
            Whether you're ready to book or just have a few questions about the wildlife, our trackers are standing by.
            <span className="block text-[#FFC107]">Kindly note that bookings must be placed a minimum of 24 hours prior to the required time</span>
          </p>

          <div className="space-y-8">
            {[
              { icon: <MapPin className="text-[#FFC107]" />, text: "Pidurangala, Sigiriya, Sri Lanka" },
              { icon: <Phone className="text-[#FFC107]" />, text: "+94 71 740 2688" },
              { icon: <Mail className="text-[#FFC107]" />, text: "nalinsigiri@gmail.com" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#FFC107] flex items-center justify-center group-hover:bg-[#FFC107] transition">
                  {item.icon}
                </div>
                <span className="text-zinc-300 font-bold uppercase tracking-widest text-sm group-hover:text-white">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – FORM */}
        <div className={`relative bg-zinc-900/50 p-6 sm:p-8 md:p-12 border border-zinc-800 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>

          <form className="space-y-10" onSubmit={handleSubmit}>

            {/* NAME + LOCATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-[#FFC107]"
                placeholder="Your Name"
              />

              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-[#FFC107]"
                placeholder="Drop Location"
              />
            </div>

            {/* ✅ DATE + TIME (NEW TWO COLUMN ROW) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-[#FFC107]"
              />

              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-[#FFC107]"
              />
            </div>

            {/* MEMBERS */}
            <textarea
              rows="4"
              required
              value={formData.members}
              onChange={(e) => setFormData({ ...formData, members: e.target.value })}
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-[#FFC107] resize-none"
              placeholder="Members Count"
            />

            <button
              type="submit"
              className="w-full bg-[#FFC107] text-black py-5 uppercase font-black italic tracking-[0.3em] text-sm flex items-center justify-center gap-3 active:scale-95"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#FFC107]"></div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
