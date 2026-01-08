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
    { label: 'Safari Jeep', path: '/services' },
    { label: 'Taxi Service', path: '/taxi' }
  ];

  // Social media links
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1P6yw4Q8P6/?mibextid=wwXIfr' },
    { icon: MessageCircle, url: 'https://wa.me/94717402688' },
    { icon: Instagram, url: 'https://www.instagram.com/safartalesbypodi?igsh=OW8zNWdzcDQ3Mmhx&utm_source=qr' }
  ];

  return (
    <footer className="relative bg-gradient-to-tr from-black via-[#050505] to-[#111111] text-zinc-300 overflow-hidden">
      {/* Diagonal background overlay */}
      <div className="absolute inset-0 transform -skew-y-6 bg-[#050505] opacity-20 pointer-events-none"></div>

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

          {/* Navigation + Services */}
          <div className="space-y-8 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">EXPEDITIONS</h3>
            <ul className="space-y-2 text-xs font-bold uppercase">
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

        {/* Bottom Line */}
        <div className="mt-16 border-t border-zinc-800 pt-6 text-xs text-zinc-500 text-center sm:text-left">
          © {new Date().getFullYear()} Wild Show. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default CreativeFooter;
