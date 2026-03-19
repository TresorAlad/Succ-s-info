import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-secondary-light min-h-screen"
    >
      {/* Header */}
      <section className="bg-secondary-dark text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-display font-extrabold mb-6"
          >
            Parlons de votre <span className="text-primary italic">Projet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-xl text-gray-400 leading-relaxed font-medium"
          >
            Contactez notre équipe d'experts pour obtenir un devis personnalisé ou des informations complémentaires.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold text-secondary-dark mb-10">Nos Coordonnées</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Email", info: "contact@cybersuccess.tg", icon: "mail", color: "text-primary", desc: "Support client & Devis" },
                { label: "Téléphone", info: "+228 99 99 00 00", icon: "call", color: "text-accent-orange", desc: "Lun-Sam (9h-18h)" },
                { label: "Bureau", info: "Hahotoé, Togo", icon: "location_on", color: "text-accent-green", desc: "BP 88 Vogan" },
                { label: "Support", info: "24/7 disponible", icon: "schedule", color: "text-blue-500", desc: "Urgences Cyber uniquement" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={item.icon} className={item.color} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</h4>
                  <p className="text-lg font-bold text-secondary-dark mb-1">{item.info}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white rounded-3xl p-2 shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="h-[350px] w-full rounded-2xl overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.266890683791!2d1.4159017000000003!3d6.3594919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023f721a08d8955%3A0x63898c214014f75d!2sLE%20SUCCES%20INFORMATIQUE!5e0!3m2!1sfr!2stg!4v1773935912424!5m2!1sfr!2stg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Le Succès Informatique"
                  className="grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20">
                    <p className="text-xs font-bold text-secondary-dark uppercase tracking-wider mb-0.5">Notre Siège</p>
                    <p className="text-primary font-bold">LE SUCCES INFORMATIQUE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[2rem] p-12 shadow-2xl border border-gray-50 relative"
          >
            <div className="absolute top-0 left-12 transform -translate-y-1/2">
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 1 }}
                className="bg-primary text-white p-5 rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center"
              >
                <Icon name="message" size="32px" />
              </motion.div>
            </div>

            <h2 className="text-3xl font-display font-bold text-secondary-dark mb-12">Envoyez un Message</h2>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-3">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Nom Complet</label>
                  <input type="text" placeholder="John Doe" className="bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 px-6 py-4 rounded-2xl outline-none transition-all" />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input type="email" placeholder="john@example.com" className="bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 px-6 py-4 rounded-2xl outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Sujet</label>
                <select className="bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 px-6 py-4 rounded-2xl outline-none transition-all appearance-none cursor-pointer">
                  <option>Cybersécurité</option>
                  <option>Formation IT</option>
                  <option>Création Web</option>
                  <option>Autre prestation</option>
                </select>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea rows="6" placeholder="Décrivez votre besoin..." className="bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 px-6 py-4 rounded-2xl outline-none transition-all resize-none"></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-blue-500/20 group"
              >
                Envoyer ma demande <Icon name="send" size="24px" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
