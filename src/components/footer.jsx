import React from 'react';
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

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#050505] text-zinc-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-zinc-900">

      {/* Background Watermark */}
      <div className="absolute -bottom-5 -right-5 pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[15vw] font-black italic uppercase text-white leading-none">
          WILD
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 pb-12 sm:pb-16 md:pb-20">

          {/* Column 1 */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2
                className="text-[#FFC107] text-3xl sm:text-4xl font-black italic tracking-tighter uppercase"
                style={{ fontFamily: '"Permanent Marker", cursive' }}
              >
                Wild Show
              </h2>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-zinc-600 font-bold mt-1">
                Sri Lanka Jeep Safari
              </p>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-xs italic">
              "Committing to the passion for majestic landscapes and spectacular wildlife, capturing the essence of the wild."
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFC107]" />
              Expeditions
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {navigationItems.map(item => (
                <li
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="group flex items-center gap-3 hover:text-white cursor-pointer transition-all"
                >
                  <ArrowRight
                    size={10}
                    className="text-[#FFC107] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFC107]" />
              Base Camp
            </h3>

            <div className="space-y-4 sm:space-y-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-tighter italic">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="text-[#FFC107] w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-zinc-300 leading-tight">
                Pidurangala, Sigiriya,<br />Sri Lanka, 21120
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Phone className="text-[#FFC107] w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-zinc-300">+94 71 740 2688</p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="text-[#FFC107] w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-zinc-300">nalinsigiri@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 pt-8 sm:pt-12 border-t border-zinc-900">
          {[
            {
              Icon: Facebook,
              url: 'https://www.facebook.com/share/1P6yw4Q8P6/?mibextid=wwXIfr'
            },
            {
              Icon: MessageCircle,
              url: 'https://wa.me/94717402688'
            },
            {
              Icon: Instagram,
              url: 'https://www.instagram.com/safartalesbypodi?igsh=OW8zNWdzcDQ3Mmhx&utm_source=qr'
            },
            
            
            
            
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              whileHover={{ y: -5, color: '#FFC107' }}
              className="w-8 h-8 sm:w-10 sm:h-10 border border-zinc-800 flex items-center justify-center transition-colors"
            >
              <social.Icon size={14} className="sm:w-4 sm:h-4" />
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          <p className="text-zinc-600 italic text-center md:text-left">
            © 2025 Wild Show Outpost. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-10">
            <span className="hover:text-[#FFC107] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#FFC107] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
