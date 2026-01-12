import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = ({
  baseColor = "#050505",
  menuColor = "#fff",
  ease = "power3.out",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const servicesDropdownItems = [
    { label: "Safari Jeep", href: "/services" },
    { label: "Taxi Service", href: "/taxi" },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", hasDropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const tlRef = useRef(null);

  /* ---------------- DESKTOP CLICK OUTSIDE ---------------- */
  useLayoutEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest("#services-btn")
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isServicesOpen]);

  /* ---------------- MOBILE MENU ANIMATION ---------------- */
  useLayoutEffect(() => {
    if (!navRef.current) return;

    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.to(navRef.current, {
      height: "auto",
      duration: 0.4,
      ease,
    });
  }, []);

  /* ---------------- SCROLL EFFECTS ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (!tlRef.current) return;

    if (!isExpanded) {
      setIsExpanded(true);
      tlRef.current.play();
    } else {
      tlRef.current.reverse().eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
      });
    }
  };

  const handleNavigate = (href) => {
    navigate(href);
    window.scrollTo(0, 0);
    setIsServicesOpen(false);
    setIsExpanded(false);
  };

  return (
    <div 
      className={`fixed left-1/2 -translate-x-1/2 w-[96%] max-w-300 z-99999 transition-all duration-300 ${isScrolled ? 'top-1' : 'top-3'}`}
    >
      <nav
        ref={navRef}
        className="rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 overflow-visible"
        style={{ backgroundColor: baseColor + "80" }}
      >
        {/* ---------------- TOP BAR ---------------- */}
        <div className={`${isScrolled ? 'h-13.75' : 'h-17.5'} flex items-center justify-between px-8 relative transition-all duration-300`}>
          <div
            className={`${isScrolled ? 'text-xl' : 'text-2xl'} font-black italic text-white cursor-pointer transition-all duration-300`}
            onClick={() => handleNavigate("/")}
          >
            SAFARI TALES <span className="text-[#FFC107]">BY PODI</span>
          </div>

          {/* ---------------- DESKTOP NAV ---------------- */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navItems.map((item, i) =>
              item.hasDropdown ? (
                <div key={i} className="relative">
                  <button
                    id="services-btn"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className={`uppercase font-bold ${isScrolled ? 'text-[10px]' : 'text-[11px]'} tracking-[0.2em] flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300`}
                    style={{ color: menuColor }}
                  >
                    Services
                    <span
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isServicesOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-3 rounded-2xl shadow-2xl border border-white/20 min-w-45 z-10000 backdrop-blur-xl"
                      style={{
                        backgroundColor: baseColor + "80",
                        pointerEvents: "auto",
                      }}
                    >
                      {servicesDropdownItems.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(s.href)}
                          className="w-full text-left px-4 py-3 uppercase font-bold text-[11px] hover:bg-[#FFC107] hover:text-black transition rounded-lg"
                          style={{ color: menuColor }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => handleNavigate(item.href)}
                  className={`uppercase font-bold ${isScrolled ? 'text-[10px]' : 'text-[11px]'} tracking-[0.2em] hover:text-[#FFC107] px-4 py-2 rounded-full transition-all duration-300`}
                  style={{ color: menuColor }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* ---------------- MOBILE HAMBURGER ---------------- */}
          <div className="md:hidden cursor-pointer p-2" onClick={toggleMenu}>
            <div className="w-7 h-0.5 bg-white mb-1.5" />
            <div className="w-7 h-0.5 bg-white mb-1.5" />
            <div className="w-7 h-0.5 bg-white" />
          </div>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        {isExpanded && (
          <div className="md:hidden p-6 rounded-2xl flex flex-col gap-2 mt-2 backdrop-blur-xl" style={{ backgroundColor: baseColor + "80", border: "1px solid rgba(255,255,255,0.2)" }}>
            {navItems.map((item, i) =>
              item.hasDropdown ? (
                <div key={i}>
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="w-full p-3 font-bold uppercase italic flex justify-between rounded-lg bg-white/5"
                    style={{ color: menuColor }}
                  >
                    Services <span>▼</span>
                  </button>

                  {isServicesOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {servicesDropdownItems.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(s.href)}
                          className="p-3 text-left font-bold uppercase italic rounded-lg bg-white/5 mt-1"
                          style={{ color: menuColor }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => handleNavigate(item.href)}
                  className="p-3 font-bold uppercase italic text-left rounded-lg bg-white/5 mt-1"
                  style={{ color: menuColor }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
