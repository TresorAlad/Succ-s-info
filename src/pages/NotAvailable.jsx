import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const NotAvailable = () => {
  const navigate = useNavigate();

  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-32 bg-secondary-dark text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-500"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl backdrop-blur-xl">
            <Icon name="construction" className="text-primary" size="48px" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 tracking-tighter">
            En cours de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic">Développement</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Cette page n'est pas encore disponible. Nous y travaillons pour vous offrir la meilleure expérience possible !
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all"
            >
              <Icon name="arrow_back" size="18px" /> Retour
            </button>
            <Link
              to="/"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-blue-500/20 transition-all"
            >
              <Icon name="home" size="18px" /> Accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotAvailable;
