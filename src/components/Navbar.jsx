import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Accueil', path: '/', icon: 'home' },
    { title: 'À propos', path: '/about', icon: 'info' },
    { title: 'Services', path: '/services', icon: 'build' },
    { title: 'Contact', path: '/contact', icon: 'mail' },
  ];

  const Icon = ({ name, className = "", size = "20px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:px-8 lg:py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 lg:border lg:border-white/40 lg:shadow-[0_20px_40px_rgba(0,0,0,0.05)] ${isOpen ? 'bg-white/90 backdrop-blur-3xl rounded-[2rem] shadow-2xl border border-white/40' : 'bg-transparent lg:rounded-full'} ${scrolled
          ? 'lg:bg-white/70 lg:backdrop-blur-2xl py-1.5 lg:py-2'
          : 'lg:bg-white/40 lg:backdrop-blur-lg py-2 lg:py-2.5'
          }`}
      >
        <div className="px-6 lg:px-10">
          <div className="flex justify-end lg:justify-between items-center bg-transparent">
            {/* Logo */}
            <div className="flex-shrink-0 hidden lg:block">
              <Link to="/" className="flex items-center gap-3 group">
                <img src="transparent.png" alt="SuccesInfo Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-display font-black text-secondary-dark tracking-tighter">
                    Succes<span className="text-primary italic">Info</span>
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Expertise Numérique</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 relative group flex items-center gap-2 ${isActive
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.title}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderlinePill"
                          className="absolute bottom-0 left-5 right-5 h-[3px] bg-primary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1 sm:gap-4">
              <Link
                to="/formation"
                className="hidden sm:flex border-2 border-primary text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-lg shadow-blue-500/10 active:scale-95 items-center gap-2"
              >
                Formez-vous
              </Link>

              {/* Mobile Burger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-3 rounded-full transition-all border flex items-center justify-center shadow-lg ${scrolled || isOpen ? 'bg-white text-secondary-dark border-gray-100 hover:bg-primary hover:text-white' : 'bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/40'}`}
              >
                {isOpen ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white/80 backdrop-blur-2xl overflow-hidden rounded-b-[2rem] border-t border-gray-100/50"
            >
              <div className="px-6 py-10 space-y-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-6 py-4 rounded-full text-lg font-black uppercase tracking-widest transition-all ${isActive ? 'bg-primary text-white shadow-xl shadow-blue-500/20' : 'text-gray-500 hover:bg-gray-50'
                        }`
                      }
                    >
                      <div className="flex items-center gap-5">
                        <Icon name={link.icon} size="24px" />
                        {link.title}
                      </div>
                      <Icon name="arrow_right_alt" size="24px" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
