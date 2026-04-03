import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[100] bg-secondary-dark flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 border-4 border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-40 h-40 border-t-4 border-primary rounded-full"
        />

        {/* Logo in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-primary p-4 rounded-2xl shadow-2xl shadow-blue-500/40"
          >
            <img src="/transparent.png" alt="SuccesInfo Logo" className="w-12 h-12 object-contain" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-display font-extrabold text-white tracking-widest mb-2">
          Succes<span className="text-primary italic">Info</span>
        </h2>
        <div className="flex gap-1 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
      </div>
    </motion.div>
  );
};

export default Loader;
