import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-secondary-dark text-white pt-24 lg:pt-36 pb-20 lg:pb-0 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8 lg:mt-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl mb-6 group hover:border-primary/50 transition-all cursor-default"
              >
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors">Expertise & Accompagnement</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 leading-[1.05] tracking-tighter">
                Votre Partenaire <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic">Expert en IT</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-400 mb-8 max-w-xl font-medium leading-relaxed">
                Optimisez votre infrastructure et formez vos équipes avec nos solutions sur-mesure en maintenance, bureautique et transformation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Link
                  to="/services"
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20"
                >
                  Nos services <Icon name="arrow_forward" size="18px" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center transition-all"
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Premium Dashboard Mockup/Graphic */}
              <div className="relative z-10 bg-white shadow-[0_50px_100px_rgba(0,0,0,0.3)] p-1 rounded-[3rem] border border-white/10 overflow-hidden group">
                <div className="bg-secondary-dark rounded-[2.8rem] p-12 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                   
                   <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Icon name="terminal" className="text-white" size="36px" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl tracking-tight">Maintenance Pro</h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Performance Optimisée 24/7</p>
                    </div>
                   </div>

                   <div className="space-y-8">
                     <div className="space-y-3">
                       <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                         <span className="text-gray-400">Fiabilité Système</span>
                         <span className="text-primary tracking-widest">100% stable</span>
                       </div>
                       <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
                         <motion.div
                           initial={{ width: 0 }}
                           animate={{ width: "100%" }}
                           transition={{ duration: 2, delay: 0.5 }}
                           className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                         ></motion.div>
                       </div>
                     </div>

                     <div className="grid grid-cols-2 gap-6 pt-4">
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                          <span className="text-4xl font-black block mb-1 text-primary tracking-tighter">10+</span>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black leading-none">Années Experience</span>
                       </div>
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                          <span className="text-4xl font-black block mb-1 text-accent-green tracking-tighter">1200+</span>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black leading-none">Apprenants</span>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-secondary-dark mb-4">Nos Pôles de Compétences</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Une expertise polyvalente pour répondre à tous vos besoins informatiques.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Maintenance Informatique",
                description: "Dépannage, optimisation de parcs informatiques et assistance technique rapide.",
                icon: "settings_suggest",
                color: "bg-blue-50/50",
                textColor: "text-primary",
                features: ["Dépannage PC/Laptop", "Optimisation Système", "Installation Matérielle"]
              },
              {
                title: "Formation Bureautique",
                description: "Maîtrisez les outils essentiels : Pack Office, initiation au numérique et internet.",
                icon: "history_edu",
                color: "bg-orange-50/50",
                textColor: "text-accent-orange",
                features: ["Certifications Office", "Initiation Débutant", "Navigation Web"]
              },
              {
                title: "Prestations Informatiques",
                description: "Création de sites internet, conseils personnalisés et solutions numériques globales.",
                icon: "laptop_chromebook",
                color: "bg-green-50/50",
                textColor: "text-accent-green",
                features: ["Création Web", "Conseil IT", "Support Quotidien"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group overflow-hidden relative"
              >
                <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={service.icon} className={service.textColor} size="44px" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10 text-left">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <Icon name="check_circle" className="text-accent-green shrink-0" size="18px" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explorer ce pôle <Icon name="arrow_forward" size="20px" />
                </Link>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-dark to-black text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Votre Réussite commence <span className="text-primary italic">Ici</span></h2>
          <p className="text-lg text-gray-400 mb-10">
            Contactez nos experts dès aujourd'hui pour un diagnostic gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transform transition active:scale-95 shadow-xl shadow-blue-500/30 flex items-center gap-3">
              <Icon name="rocket_launch" size="20px" /> Démarrer mon projet
            </Link>
          </div>
        </motion.div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </section>

    </motion.div>
  );
};

export default Home;
