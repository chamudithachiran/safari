import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // TikTok icon

const CreativeFooter = () => {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const servicesItems = [
    { label: 'Safari Jeep', path: '/services' }, // ServicesPage.jsx
    { label: 'Taxi Service', path: '/taxi' }     // TaxiPage.jsx
  ];

  return (
    <footer className="bg-[#050505] text-zinc-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-zinc-900">

      <div className="absolute -bottom-5 -right-5 pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[15vw] font-black italic uppercase text-white leading-none">
          WILD
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Branding / Quote */}
          <div className="space-y-4 flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl font-black italic text-[#FFC107] uppercase tracking-wider">
              Wild Show
            </h2>
            <p className="text-sm italic max-w-sm">
              "Where nature speaks louder than words — experience the untamed beauty."
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-4 cursor-pointer inline-block px-4 py-2 border border-[#FFC107] text-[#FFC107] uppercase text-xs font-bold tracking-wide rounded-lg"
              onClick={() => navigate('/about')}
            >
              Discover More
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <h3 className="text-white text-xs font-black uppercase tracking-widest">
              Expeditions
            </h3>

            <ul className="space-y-4 text-xs font-bold uppercase">

              {navigationItems.map(item => (
                <li
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer hover:text-[#FFC107] flex items-center gap-2 transition-colors"
                >
                  <ArrowRight size={12} className="text-[#FFC107]" />
                  {item.label}
                </li>
              ))}

              {/* Services Uncommon Card */}
              <li className="mt-4">
                <div
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="cursor-pointer flex items-center gap-2 hover:text-[#FFC107] transition-colors select-none"
                >
                  <ArrowRight
                    size={12}
                    className={`text-[#FFC107] transition-transform duration-300 ${
                      servicesOpen ? 'rotate-90' : ''
                    }`}
                  />
                  Our Services
                </div>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2"
                    >
                      {servicesItems.map(service => (
                        <motion.div
                          key={service.label}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="cursor-pointer bg-[#111] hover:bg-[#222] p-2 rounded-md transition-all text-zinc-300"
                          onClick={() => {
                            navigate(service.path);
                            setServicesOpen(false);
                          }}
                        >
                          {service.label}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-6 flex flex-col items-start">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">Contact</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#FFC107]" />
                <span>Pidurangala, Sigiriya, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#FFC107]" />
                <span>+94 71 740 2688</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-[#FFC107]" />
                <span>nalinsigiri@gmail.com</span>
              </div>
            </div>

            {/* Social Icons Vertical Creative */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="w-10 h-10 border border-zinc-700 flex items-center justify-center cursor-pointer rounded-full transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 border-t pt-8">
          {[Facebook, MessageCircle, Instagram].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="w-10 h-10 border flex items-center justify-center cursor-pointer"
            >
              <Icon size={16} />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default CreativeFooter;
