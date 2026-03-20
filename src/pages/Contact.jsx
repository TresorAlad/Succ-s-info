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
            <h2 className="text-4xl font-display font-black text-secondary-dark mb-10 tracking-tighter">Nos Coordonnées</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Email Professionnel", info: "contact@succesinfo.tg", icon: "alternate_email", color: "text-primary", desc: "Support client & Devis" },
                { label: "Ligne Directe", info: "+228 99 99 00 00", icon: "phone_iphone", color: "text-accent-orange", desc: "Lun-Sam (8h-18h)" },
                { label: "Siège Social", info: "Hahotoé, Togo", icon: "distance", color: "text-accent-green", desc: "Près de la Poste" },
                { label: "Assistance IT", info: "Support Réactif", icon: "support_agent", color: "text-blue-500", desc: "Dépannage à distance" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)", borderColor: "#2563EB" }}
                  className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all group"
                >
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                    <Icon name={item.icon} className={`${item.color} group-hover:text-white transition-colors`} size="28px" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{item.label}</h4>
                  <p className="text-xl font-black text-secondary-dark mb-1 tracking-tight group-hover:text-primary transition-colors">{item.info}</p>
                  <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] p-3 shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.266890683791!2d1.4159017000000003!3d6.3594919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023f721a08d8955%3A0x63898c214014f75d!2sLE%20SUCCES%20INFORMATIQUE!5e0!3m2!1sfr!2stg!4v1773935912424!5m2!1sfr!2stg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Le Succès Informatique"
                  className="grayscale-[30%] contrast-[110%] group-hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white/20">
                    <p className="text-[10px] font-black text-secondary-dark uppercase tracking-[0.2em] mb-1 opacity-60">Notre Bureau</p>
                    <p className="text-primary font-black tracking-tight">Le Succès Informatique</p>
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
            className="bg-white rounded-[3rem] p-12 lg:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-gray-50 relative overflow-hidden"
          >
             {/* Decorative form background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
            
            <div className="absolute top-0 left-16 transform -translate-y-1/2">
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 1 }}
                className="bg-primary text-white p-6 rounded-3xl shadow-2xl shadow-blue-500/40 flex items-center justify-center transform hover:rotate-12 transition-transform"
              >
                <Icon name="chat_bubble" size="36px" />
              </motion.div>
            </div>

            <h2 className="text-4xl font-display font-black text-secondary-dark mb-12 tracking-tighter">Envoyez-nous un <span className="text-primary italic">Message</span></h2>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-4">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Nom Complet</label>
                  <input type="text" placeholder="Ex: Jean Dupont" className="bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 px-8 py-5 rounded-[2rem] outline-none transition-all font-medium text-secondary-dark" />
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Adresse Email</label>
                  <input type="email" placeholder="jean@email.com" className="bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 px-8 py-5 rounded-[2rem] outline-none transition-all font-medium text-secondary-dark" />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Sujet de votre demande</label>
                <div className="relative">
                  <select className="bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 px-8 py-5 rounded-[2rem] outline-none transition-all appearance-none cursor-pointer w-full font-bold text-secondary-dark">
                    <option>Maintenance Informatique</option>
                    <option>Formation Bureautique</option>
                    <option>Solutions IT & Web</option>
                    <option>Vente de Matériel</option>
                    <option>Demande de partenariat</option>
                  </select>
                  <Icon name="expand_more" className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
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
