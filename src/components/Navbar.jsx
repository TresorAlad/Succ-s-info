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
    { title: 'Services', path: '/services', icon: 'settings' },
    { title: 'Portfolio', path: '/portfolio', icon: 'palette' },
    { title: 'Contact', path: '/contact', icon: 'mail' },
  ];

  const Icon = ({ name, className = "", size = "20px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className={`bg-secondary-dark text-white/70 py-2 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="call" size="14px" /> +228 99 99 00 00
            </a>
            <a href="mailto:contact@cybersuccess.fr" className="flex items-center gap-2 hover:text-primary transition-colors hidden sm:flex">
              <Icon name="mail" size="14px" /> contact@succesinfo.tg
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hidden md:flex">
              <Icon name="location_on" size="14px" /> 75011 Paris, TG
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors">FR</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-white transition-colors">EN</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`transition-all duration-500 ${
          scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3 border-b border-gray-100' 
          : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="bg-primary p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                    <Icon name="security" className="text-white" size="28px" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-green rounded-full border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-extrabold text-secondary-dark tracking-tighter leading-none">
                    SUCCES<span className="text-primary italic">INFO</span>
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">Expertise & Transformation</span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group flex items-center gap-2 ${
                      isActive 
                      ? 'text-primary' 
                      : 'text-gray-500 hover:text-secondary-dark hover:bg-gray-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.title}
                      {isActive && (
                        <motion.div 
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2.5 text-gray-400 hover:text-primary transition-colors hidden sm:block">
                <Icon name="search" size="24px" />
              </button>
              <Link
                to="/contact"
                className="hidden md:flex bg-secondary-dark text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-primary transition-all shadow-xl shadow-black/5 active:scale-95 items-center gap-2"
              >
                <Icon name="rocket_launch" size="18px" /> Devis Express
              </Link>
              
              {/* Mobile Burger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-gray-50 text-secondary-dark hover:bg-primary hover:text-white transition-all focus:outline-none"
              >
                <Icon name={isOpen ? "close" : "menu_open"} size="28px" />
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                        isActive ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    <div className="flex items-center gap-4">
                      <Icon name={link.icon} />
                      {link.title}
                    </div>
                    <Icon name="chevron_right" size="20px" />
                  </NavLink>
                ))}
                <div className="pt-6">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-secondary-dark text-white p-5 rounded-2xl font-bold shadow-2xl"
                  >
                    <Icon name="mail" /> Nous contacter
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
