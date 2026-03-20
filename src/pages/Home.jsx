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
      <section className="relative min-h-[90vh] flex items-center bg-secondary-dark text-white pt-10">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange rounded-full blur-[150px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight">
                Formez-vous <br />
                <span className="text-primary italic"> Sur l'Avenir du Numérique</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                Expertise en formations certifiantes et accompagnement digital pour professionnels et particuliers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
                >
                  Découvrir nos services <Icon name="arrow_forward" size="20px" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all"
                >
                  Contactez-nous
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Icon name="verified_user" className="text-white" size="28px" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Protection Active</h3>
                    <p className="text-sm text-gray-400">Monitoring 24/7 activé</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-accent-green"
                    ></motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span className="text-2xl font-bold block mb-1">99%</span>
                      <span className="text-xs text-gray-400">Taux de succès</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span className="text-2xl font-bold block mb-1">24/7</span>
                      <span className="text-xs text-gray-400">Support Cyber</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-secondary-dark mb-4">Nos Domaines d'Expertise</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Nous proposons des solutions complètes pour répondre à tous vos besoins technologiques et de formation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              /*{
                title: "Maintenance Informatique",
                description: "Audits, scans de vulnérabilité, protection de terminaux et sécurisation de réseaux.",
                icon: "shield",
                color: "bg-blue-50",
                features: ["Audit complet", "Scan vulnérabilités", "Réponse incidents"]
              }*/,
              {
                title: "Formation IT",
                description: "Formations bureautiques, initiation informatique et perfectionnement professionnel.",
                icon: "menu_book",
                color: "bg-orange-50",
                features: ["Pack Office", "Initiation Web", "Cyber-hygiène"]
              },
              {
                title: "Prestations Informatiques",
                description: "Installation système, maintenance technique et conseil stratégique.",
                icon: "computer",
                color: "bg-green-50",
                features: ["Sites vitrines", "SEO optimisé", "Maintenance 24/7"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-primary/20 transition-all group"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={service.icon} className="text-secondary-dark" size="40px" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10 text-left">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check_circle" className="text-primary shrink-0" size="18px" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  En savoir plus <Icon name="arrow_forward" size="18px" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Prêt à sécuriser votre activité ?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un diagnostic gratuit de vos besoins en sécurité ou en formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transform transition active:scale-95 shadow-lg flex items-center gap-3">
              <Icon name="task_alt" size="24px" /> Demander un devis
            </Link>
            <span className="flex items-center gap-3 text-lg font-medium">
              <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Icon name="computer" size="24px" />
              </span>
              RDV Conseil 100% gratuit
            </span>
          </div>
        </motion.div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
      </section>
    </motion.div>
  );
};

export default Home;
