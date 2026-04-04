import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 lg:px-8 lg:py-4 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 ${isOpen 
          ? 'bg-white border border-gray-100 rounded-[1.5rem] shadow-2xl overflow-hidden' 
          : 'bg-transparent lg:bg-white/95 lg:backdrop-blur-md lg:rounded-full lg:shadow-[0_15px_35px_rgba(0,0,0,0.08)] lg:border lg:border-gray-100'
        } ${scrolled ? 'lg:py-1' : 'lg:py-1.5'}`}
      >
        <div className="px-2 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-2 lg:py-0">
            {/* Logo - Now visible on all devices but less intrusive on mobile if needed */}
            <div className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'opacity-100 flex p-4' : 'lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto'}`}>
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <img src="transparent.png" alt="SuccesInfo Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg sm:text-xl font-display font-black text-secondary-dark tracking-tighter">
                    Succes<span className="text-primary italic">Info</span>
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] text-primary">Expertise Numérique</span>
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
                        <div
                          className="absolute bottom-1 left-5 right-5 h-[3px] bg-primary rounded-full shadow-[0_2px_10px_rgba(37,99,235,0.3)]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Actions / Burger */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto lg:ml-0">
              <Link
                to="/formation"
                className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 active:scale-95 items-center gap-2"
              >
                Formez-vous
              </Link>

              {/* Mobile Burger - Enhanced to be standalone circle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-3.5 rounded-full transition-all flex items-center justify-center shadow-xl border outline-none ${
                  isOpen 
                  ? 'bg-primary text-white border-primary shadow-primary/20 mr-4' 
                  : 'bg-white text-secondary-dark border-gray-100 hover:bg-gray-50 active:scale-90 scale-110'
                }`}
              >
                {isOpen ? (
                  <Icon name="close" size="24px" />
                ) : (
                  <Icon name="menu" size="24px" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            className="lg:hidden bg-white/80 backdrop-blur-2xl overflow-hidden rounded-b-[2rem] border-t border-gray-100/50"
          >
            <div className="px-6 py-8 space-y-3">
              {navLinks.map((link) => (
                <div key={link.path}>
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
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
