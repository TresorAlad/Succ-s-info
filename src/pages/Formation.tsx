import React, { useState } from 'react';
import Icon from '../components/Icon';
import { motion } from 'framer-motion';

const Formation = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Formation Entreprenariat', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'inscription', 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          formationDetails: { phone: formData.phone }
        })
      });
      
      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', subject: 'Formation Entreprenariat', message: '' });
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        const data = await res.json();
        setStatus({ loading: false, success: false, error: data.error || "Une erreur est survenue." });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Erreur de connexion au serveur." });
    }
  };
  const Icon = ({ name, className = "", size = "24px" }: { name: string; className?: string; size?: string }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  const courses = [
    {
      title: "Formation Entreprenariat",
      description: "Devenez un leader et apprenez à gérer votre propre activité avec les meilleures stratégies.",
      icon: "lightbulb",
      color: "blue"
    },
    {
      title: "Formation Bureautique",
      description: "Maîtrisez Word, Excel, PowerPoint et les outils essentiels pour la productivité en entreprise.",
      icon: "laptop_mac",
      color: "orange"
    },
    {
      title: "Gestion & Comptabilité",
      description: "Acquérez des compétences solides pour bien tenir la comptabilité et la gestion de vos projets.",
      icon: "calculate",
      color: "green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
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
      {/* Hero Section */}
      <section className="bg-white py-24 lg:py-32 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary-dark mb-6"
          >
            Nos <span className="text-primary italic">Formations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Développez vos compétences avec nos programmes conçus pour répondre aux besoins actuels du marché professionnel.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent-green opacity-30"></div>
      </section>

      {/* Courses Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                <Icon name={course.icon} className="text-primary group-hover:text-white transition-colors" size="40px" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-secondary-dark">{course.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{course.description}</p>
              <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500 mt-auto"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-secondary-dark rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left panel - Info / Image */}
          <div className="lg:w-5/12 bg-primary relative p-12 lg:p-16 text-white overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/30">
                <Icon name="school" size="32px" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black mb-6 leading-tight">
                Passez à la <br/> <span className="italic text-blue-200">vitesse supérieure</span>
              </h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed border-l-4 border-accent-orange pl-4">
                Remplissez ce formulaire pour réserver votre place. Nos conseillers vous contacteront sous 24h ouvrées pour finaliser votre inscription.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check_circle" size="20px" className="text-accent-green" />
                  </div>
                  <span className="font-bold text-sm">Approche 100% pratique</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check_circle" size="20px" className="text-accent-green" />
                  </div>
                  <span className="font-bold text-sm">Attestation de fin de formation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-black text-secondary-dark mb-10">
              Formulaire <span className="text-primary italic">d'inscription</span>
            </h3>

            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              {status.success && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <Icon name="check_circle" className="text-green-500" />
                  <p className="text-green-800 font-bold text-sm">Votre Inscription a été envoyée avec succès ! Nous vous recontacterons rapidement.</p>
                </div>
              )}
              {status.error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <span className="text-red-500 font-bold text-lg">!</span>
                  <p className="text-red-800 font-bold text-sm">{status.error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs with floating-like refined design */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nom Complet</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="person" size="20px" />
                    </div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-12 pr-6 py-4 rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Adresse Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="mail" size="20px" />
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-12 pr-6 py-4 rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Num. Téléphone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="phone" size="20px" />
                    </div>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+228 90 00 00 00" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-12 pr-6 py-4 rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Choix de Formation</label>
                  <div className="relative group h-full">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors z-10">
                      <Icon name="menu_book" size="20px" />
                    </div>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-12 pr-12 py-4 rounded-2xl outline-none transition-all font-bold text-secondary-dark appearance-none cursor-pointer h-[56px]">
                      <option>Formation Entreprenariat</option>
                      <option>Formation Bureautique</option>
                      <option>Gestion & Comptabilité</option>
                      <option>Autre</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-400 z-10">
                      <Icon name="expand_more" size="20px" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Message <span className="text-gray-300 normal-case tracking-normal">(optionnel)</span></label>
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-5 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <Icon name="edit_note" size="20px" />
                  </div>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Précisez vos attentes, votre niveau, vos disponibilités..." className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-12 pr-6 py-4 rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300 resize-none"></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className={`w-full ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-secondary-dark hover:bg-black'} text-white py-5 rounded-2xl font-bold text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all transform shadow-xl shadow-black/10 group mt-8`}
              >
                {status.loading ? "Envoi en cours..." : "Valider mon Inscription"} {!status.loading && <Icon name="arrow_forward" size="20px" className="group-hover:translate-x-2 transition-transform" />}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Formation;