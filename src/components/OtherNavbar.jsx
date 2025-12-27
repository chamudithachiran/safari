import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { HiPhone, HiMenu } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const OtherNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setScrolled(true);
        document.body.classList.add('navbar-scrolled');
      } else if (window.scrollY < lastScrollY || window.scrollY <= 100) {
        // Scrolling up or at top
        setScrolled(false);
        document.body.classList.remove('navbar-scrolled');
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // Initial check for scroll position on component mount
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        setScrolled(true);
        document.body.classList.add('navbar-scrolled');
      }
      setLastScrollY(window.scrollY);
    }
    
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      document.body.classList.remove('navbar-scrolled');
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNav = (path) => {
    navigate(path);
    setServicesOpen(false);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="w-full z-[10000]">
      {/* ---------------- TOP BLACK BAR ---------------- */}
      <div className={`bg-[#1f1f1f] text-white text-sm transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left */}
          <a href="mailto:nalinsigiri@gmail.com" className="flex items-center gap-2 text-[#FFC107] hover:text-[#FFC107] transition-colors">
            <MdEmail size={18} />
            <span className="text-white">
              nalinsigiri@gmail.com
            </span>
          </a>

          {/* Center */}
          <div className="hidden md:block text-center">
            <span>
              50% Off Your Next Trip. Hurry Up For Your Safari Now!
            </span>
            <button
              onClick={() => handleNav("/contact")}
              className="ml-2 text-[#FFC107] font-semibold hover:underline"
            >
              Book Your Tour
            </button>
          </div>

          {/* Right social */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/94717402688" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] cursor-pointer">
              <IoLogoWhatsapp />
            </a>
            <a href="https://www.instagram.com/safartalesbypodi?igsh=OW8zNWdzcDQ3Mmhx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] cursor-pointer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] cursor-pointer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] cursor-pointer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN NAVBAR ---------------- */}
      <div className={`${scrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 w-full z-[10000]' : isActive('/') ? 'bg-transparent relative z-[10000]' : 'bg-black/20 backdrop-blur-md border-b border-white/10 relative z-[10000]'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNav("/")}
            className="text-xl sm:text-2xl font-black italic cursor-pointer text-white truncate max-w-[200px] sm:max-w-none"
          >
            <span className="text-[#FFC107]">Safari Tales</span> By Podi
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNav("/")}
              className={`uppercase font-bold text-[11px] tracking-[0.2em] text-white hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/") && "text-[#FFC107]"
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => handleNav("/about")}
              className={`uppercase font-bold text-[11px] tracking-[0.2em] text-white hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/about") && "text-[#FFC107]"
              }`}
            >
              ABOUT US
            </button>

            {/* Services dropdown */}
            <div className="relative">
              <button
                id="services-btn"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="uppercase font-bold text-[11px] tracking-[0.2em] text-white flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 hover:text-[#FFC107]"
              >
                Services
                <span>▼</span>
              </button>

              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-3 rounded-2xl shadow-2xl border border-white/20 min-w-[180px] z-[100000] backdrop-blur-xl bg-black/70"
                >
                  <button
                    onClick={() => handleNav("/services")}
                    className="w-full text-left px-4 py-3 uppercase font-bold text-[11px] text-white hover:bg-[#FFC107] hover:text-black transition rounded-lg"
                  >
                    Safari Jeep
                  </button>
                  <button
                    onClick={() => handleNav("/taxi")}
                    className="w-full text-left px-4 py-3 uppercase font-bold text-[11px] text-white hover:bg-[#FFC107] hover:text-black transition rounded-lg"
                  >
                    Taxi Service
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav("/contact")}
              className={`uppercase font-bold text-[11px] tracking-[0.2em] text-white hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/contact") && "text-[#FFC107]"
              }`}
            >
              CONTACT US
            </button>

            <button
              onClick={() => handleNav("/gallery")}
              className={`uppercase font-bold text-[11px] tracking-[0.2em] text-white hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/gallery") && "text-[#FFC107]"
              }`}
            >
              GALLERY
            </button>

            <button
              onClick={() => handleNav("/blog")}
              className={`uppercase font-bold text-[11px] tracking-[0.2em] text-white hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/blog") && "text-[#FFC107]"
              }`}
            >
              BLOG
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://wa.me/94717402688" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#FFC107] transition-colors">
              <IoLogoWhatsapp />
            </a>
            <FiUser size={22} />

            <a href="https://wa.me/94717402688" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FFC107] font-semibold hover:text-[#FFC107] transition-colors">
              <HiPhone size={22} />
              <div className="text-right leading-tight">
                <p className="text-xs text-white">To More Inquiry</p>
                <p className="text-sm text-white">+94 71 740 2688</p>
              </div>
            </a>
          </div>
          
          {/* Mobile Right side with WhatsApp */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="https://wa.me/94717402688" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#FFC107] transition-colors">
              <IoLogoWhatsapp />
            </a>
          </div>

          {/* Mobile toggle */}
          <div
            className="lg:hidden cursor-pointer text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <HiMenu size={24} />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden p-6 rounded-2xl flex flex-col gap-2 mt-2 backdrop-blur-xl" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)" }}>
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Gallery", path: "/gallery" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => handleNav(item.path)}
                className="p-3 font-bold uppercase italic text-left text-white rounded-lg bg-white/5 mt-1"
              >
                {item.label}
              </button>
            ))},
            {/* Services dropdown for mobile */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full p-3 font-bold uppercase italic flex justify-between text-white rounded-lg bg-white/5"
              >
                Services <span>▼</span>
              </button>
              {servicesOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      handleNav("/services");
                      setServicesOpen(false);
                    }}
                    className="p-3 text-left font-bold uppercase italic text-white rounded-lg bg-white/5 mt-1"
                  >
                    Safari Jeep
                  </button>
                  <button
                    onClick={() => {
                      handleNav("/taxi");
                      setServicesOpen(false);
                    }}
                    className="p-3 text-left font-bold uppercase italic text-white rounded-lg bg-white/5 mt-1"
                  >
                    Taxi Service
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default OtherNavbar;