import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-secondary-dark flex flex-col items-center justify-center">
      <div className="relative">
        {/* Animated Rings */}
        <div className="w-40 h-40 border-4 border-primary/20 rounded-full animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-0 w-40 h-40 border-t-4 border-primary rounded-full animate-spin" />

        {/* Logo in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-primary p-4 rounded-2xl shadow-2xl shadow-blue-500/40 transform animate-pulse">
            <img 
              src="/transparent.png" 
              alt="SuccesInfo Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-display font-extrabold text-white tracking-widest mb-2">
          Succes<span className="text-primary italic">Info</span>
        </h2>
        <div className="flex gap-1 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default Loader;
