import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  // ✅ FIXED ROUTES
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">

          {/* Column 1 */}
          <div className="space-y-6">
            <h2 className="text-[#FFC107] text-4xl font-black italic uppercase">
              Wild Show
            </h2>
            <p className="text-xs italic">
              "Committing to the passion for majestic landscapes and spectacular wildlife."
            </p>
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
                  className="cursor-pointer hover:text-white flex gap-2"
                >
                  <ArrowRight size={10} className="text-[#FFC107]" />
                  {item.label}
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="space-y-2">
                <div
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="cursor-pointer flex gap-2 hover:text-white"
                >
                  <ArrowRight
                    size={10}
                    className={`text-[#FFC107] transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                  />
                  Services
                </div>

                {servicesOpen && (
                  <ul className="pl-6 space-y-2">
                    {servicesItems.map(service => (
                      <li
                        key={service.label}
                        onClick={() => {
                          navigate(service.path);
                          setServicesOpen(false);
                        }}
                        className="text-zinc-500 hover:text-[#FFC107] cursor-pointer"
                      >
                        {service.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6 text-xs">
            <div className="flex gap-2">
              <MapPin className="text-[#FFC107]" />
              Pidurangala, Sigiriya, Sri Lanka
            </div>
            <div className="flex gap-2">
              <Phone className="text-[#FFC107]" />
              +94 71 740 2688
            </div>
            <div className="flex gap-2">
              <Mail className="text-[#FFC107]" />
              nalinsigiri@gmail.com
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

export default Footer;
