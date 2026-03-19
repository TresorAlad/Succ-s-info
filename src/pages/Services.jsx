import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  const categories = [
    {
      id: "cyber",
      title: "Cyber & Sécurité",
      icon: "shield",
      color: "blue",
      items: [
        { name: "Audit de sécurité", desc: "Diagnostic complet de votre infrastructure numérique." },
        { name: "Scan de vulnérabilité", desc: "Identification des failles logicielles et réseau." },
        { name: "Audit d'impression", desc: "Sécurisation de vos périphériques de sortie." },
        { name: "Protection Endpoint", desc: "Sécurisation des postes de travail et mobiles." }
      ]
    },
    {
      id: "formation",
      title: "Pôle Formation",
      icon: "menu_book",
      color: "orange",
      items: [
        { name: "Bureautique (Office)", desc: "Maîtrise complète de Word, Excel, PowerPoint." },
        { name: "Initiation Informatique", desc: "Pour débutants souhaitant découvrir l'outil numérique." },
        { name: "Cyber-hygiène", desc: "Bonnes pratiques pour se protéger des menaces quotidiennes." },
        { name: "Outils Collaboratifs", desc: "Transition vers Teams, Slack ou Google Workspace." }
      ]
    },
    {
      id: "it",
      title: "Prestations Informatiques",
      icon: "computer",
      color: "green",
      items: [
        { name: "Création de sites Web", desc: "Design moderne, responsive et optimisé SEO." },
        { name: "Maintenance applicative", desc: "Mise à jour et dépannage de vos solutions logicielles." },
        { name: "Infogérance", desc: "Externalisation de la gestion de votre parc informatique." },
        { name: "Assistance technique", desc: "Soutien réactif pour vos problèmes du quotidien." }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-secondary-light min-h-screen"
    >
      {/* Header */}
      <section className="bg-white py-24 shadow-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-display font-extrabold text-secondary-dark mb-6"
          >
            Nos Solutions <span className="text-primary italic">Sur-Mesure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Des services packagés ou à la carte pour répondre précisement aux enjeux de votre structure.
          </motion.p>
          <div className="flex justify-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
             {[
               { icon: "bolt", color: "text-primary", label: "Rapide" },
               { icon: "track_changes", color: "text-accent-orange", label: "Ciblé" },
               { icon: "database", color: "text-accent-green", label: "Sécurisé" }
             ].map((feature, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Icon name={feature.icon} className={feature.color} size="18px" /> {feature.label}
                </motion.span>
             ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-orange to-accent-green opacity-20"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 sticky top-28"
              >
                <div className={`w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-10 border border-gray-50`}>
                  <Icon name={cat.icon} className="text-primary" size="40px" />
                </div>
                <h2 className="text-4xl font-display font-extrabold text-secondary-dark mb-6">{cat.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Nous mettons à votre disposition les meilleurs experts pour vous garantir un résultat irréprochable et durable dans le domaine de la {cat.title.toLowerCase()}.
                </p>
                <div className="flex gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                    <Icon name="event_available" size="20px" /> Prendre RDV
                  </motion.button>
                  <motion.button whileHover={{ backgroundColor: "white" }} className="text-primary font-bold px-8 py-3 rounded-xl border border-primary/20 hover:bg-white transition-all">Brochure</motion.button>
                </div>
              </motion.div>
              
              <div className="lg:col-span-1 border-r border-gray-200 hidden lg:block h-full"></div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {cat.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5, borderColor: "#2563EB" }}
                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <Icon name="check_circle" className="text-primary" size="24px" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Link */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border-t border-gray-100 py-16 text-center"
      >
        <p className="text-gray-500 mb-6">Vous avez un besoin spécifique qui ne figure pas ici ?</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-secondary-dark text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:bg-black transition-all group"
        >
          Discuter avec un expert <Icon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default Services;
