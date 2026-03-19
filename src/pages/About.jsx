import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "10+" },
    { label: "Projets réussis", value: "500+" },
    { label: "Formations certifiées", value: "1200+" },
    { label: "Partenaires IT", value: "50+" },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      {/* Header */}
      <section className="bg-secondary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-extrabold mb-6">Notre Mission : Votre <span className="text-primary italic">Sérénité Digitale</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Basée sur une expertise de plus de 10 ans, notre structure accompagne les entreprises et particuliers dans leur transition numérique et leur sécurisation cyber.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div 
              {...fadeUp}
              className="relative"
            >
              <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Bureau" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-6xl font-bold block mb-2">10</span>
                  <span className="text-lg font-medium opacity-80 uppercase tracking-widest">Ans d'Innovation</span>
                </div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-primary p-12 rounded-2xl shadow-2xl hidden md:block flex items-center justify-center"
              >
                <Icon name="shield" size="48px" className="text-white" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest mb-4 block">Qui sommes-nous ?</span>
              <h2 className="text-4xl font-display font-bold text-secondary-dark mb-8 leading-tight">Expertise, Confiance et Transmission</h2>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Le CyberSuccess est né de la volonté de rendre les outils numériques et la cybersécurité accessibles à tous. Nous croyons que la technologie doit être un levier de croissance, non un frein ou un risque.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Engagement Cyber", desc: "Priorité absolue à la protection de vos données.", icon: "verified_user" },
                  { title: "Pédagogie Positive", desc: "Des formations adaptées à chaque niveau pour une montée en compétences efficace.", icon: "track_changes" },
                  { title: "Service Premium", desc: "Un accompagnement sur-mesure et réactif pour chaque projet.", icon: "visibility" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-4 items-start p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary transition-all group shadow-sm"
                  >
                    <div className="pt-1">
                      <Icon name={item.icon} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 bg-secondary-dark p-12 rounded-3xl shadow-xl border border-white/5">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <span className="text-5xl font-display font-extrabold text-white block mb-2 group-hover:text-primary transition-colors cursor-default">
                  <Counter value={stat.value} />
                </span>
                <span className="text-gray-400 font-medium uppercase text-xs tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Vision Section */}
          <motion.div 
            {...fadeUp}
            className="bg-blue-50 rounded-3xl p-16 relative overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-secondary-dark mb-6">Notre Vision 2030</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Devenir le pôle de référence en cybersécurité et formation numérique au niveau régional, en créant un ecosystème technologique sûr et performant pour chacun.
                </p>
                <ul className="space-y-4">
                  {["Expansion régionale", "Nouveaux pôles de formation", "Services IA avancés"].map((text, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 font-bold text-secondary-dark"
                    >
                      <Icon name="chevron_right" className="text-primary" size="20px" />
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <motion.div 
                  initial={{ rotate: 10, scale: 0.9 }}
                  whileInView={{ rotate: 3, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-blue-100"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="groups" className="text-white" size="24px" />
                      </div>
                      <span className="font-bold text-lg">Écosystème Partenaires</span>
                   </div>
                   <div className="space-y-3 opacity-60">
                      <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                   </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
