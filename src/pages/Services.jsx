import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  const categories = [
    {
      id: "maintenance",
      title: "Maintenance Informatique",
      icon: "settings_suggest",
      color: "blue",
      items: [
        { name: "Dépannage PC & Laptop", desc: "Diagnostic et réparation rapide de vos problèmes matériels et logiciels." },
        { name: "Nettoyage & Optimisation", desc: "Améliorez les performances de vos ordinateurs pour un travail fluide." },
        { name: "Installation Périphériques", desc: "Configuration d'imprimantes, scanners et autres accessoires." },
        { name: "Récupération de Données", desc: "Aide à la récupération de fichiers perdus ou supprimés par erreur." }
      ],
      buttons: [
        { label: "Demander un Devis", icon: "event_available", to: "/contact", primary: true }
      ]
    },
    {
      id: "formation",
      title: "Formation Bureautique",
      icon: "history_edu",
      color: "orange",
      items: [
        { name: "Initiation Informatique", desc: "Apprenez les bases de l'ordinateur de A à Z sans stress." },
        { name: "Maîtrise du Pack Office", desc: "Formations intensives sur Word, Excel et PowerPoint pour les pros." },
        { name: "Internet & Recherche", desc: "Naviguez en toute sécurité et trouvez l'information efficacement." },
        { name: "Emails & Communication", desc: "Créez et gérez vos comptes e-mails professionnels facilement." }
      ],
      buttons: [
        { label: "Me former", icon: "school", to: "/formation", primary: true },
        { label: "Demander un Devis", icon: "event_available", to: "/contact", primary: false }
      ]
    },
    {
      id: "it",
      title: "Prestations Informatiques",
      icon: "laptop_mac",
      color: "green",
      items: [
        { name: "Vente de Matériel", desc: "Conseils et vente d'équipements informatiques neufs et d'occasion." },
        { name: "Création Web Vitrine", desc: "Présentez votre activité au monde avec un site élégant et moderne." },
        { name: "Support à Distance", desc: "Assistance rapide par prise de main à distance pour vos urgences." },
        { name: "Conseils & Stratégie", desc: "Accompagnement dans le choix de vos futures solutions numériques." }
      ],
      buttons: [
        { label: "Demander un Devis", icon: "event_available", to: "/contact", primary: true }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-secondary-light min-h-screen"
    >
      {/* Header */}
      <section className="bg-white py-24 lg:py-32 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary-dark mb-8"
          >
            Nos Services <span className="text-primary italic">Informatiques</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Un accompagnement complet pour vos besoins quotidiens : de la réparation de votre matériel à votre formation continue.
          </motion.p>
          <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            {[
              { icon: "verified", color: "text-primary", label: "Expertise" },
              { icon: "schedule", color: "text-accent-orange", label: "Disponibilité" },
              { icon: "thumb_up", color: "text-accent-green", label: "Satisfaction" }
            ].map((feature, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <Icon name={feature.icon} className={feature.color} size="20px" /> {feature.label}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent-green opacity-30"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`${idx % 2 !== 0 ? 'lg:order-last' : ''} lg:col-span-5 sticky top-32`}
              >
                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-10 border border-gray-100 rotate-3 transform group hover:rotate-0 transition-transform">
                  <Icon name={cat.icon} className="text-primary text-secondary-dark" size="48px" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-secondary-dark mb-8 leading-tight">{cat.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Solutions dédiées à la <span className="text-primary font-bold">{cat.title.toLowerCase()}</span> pour vous garantir un environnement numérique stable et performant.
                </p>
                <div className="flex flex-wrap gap-4">
                  {cat.buttons.map((btn, bi) => (
                    <motion.div key={bi} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={btn.to}
                        className={btn.primary
                          ? "bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all active:scale-95 flex items-center gap-3"
                          : "text-primary font-bold px-10 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-white transition-all flex items-center gap-3"
                        }
                      >
                        <Icon name={btn.icon} size="24px" /> {btn.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="lg:col-span-1 hidden lg:block h-full border-r border-dashed border-gray-200"></div>

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
                    whileHover={{ y: -8, borderColor: "#2563EB", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-100 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                      <Icon name="verified" className="text-primary group-hover:text-white transition-colors" size="28px" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                    <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
