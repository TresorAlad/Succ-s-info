import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  const projects = [
    {
      id: 1,
      title: "Audit Cyber Global",
      category: "cyber",
      client: "Cabinet Médical Lyon",
      desc: "Audit de sécurité complet et mise en place de mesures de protection des données patients (RGPD).",
      tags: ["Audit", "VPC", "Firewall"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Plateforme Collaborative",
      category: "it",
      client: "Agence Com 360",
      desc: "Développement d'une solution de gestion de projet interne hautement sécurisée.",
      tags: ["React", "Custom CMS", "Security"],
      image: "https://images.unsplash.com/photo-1581291518655-95245be4b26b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Digitalisation RH",
      category: "formation",
      client: "PME Industrielle",
      desc: "Formation de 150 collaborateurs aux nouveaux outils d'IA et de bureautique d'entreprise.",
      tags: ["Training", "IA", "Upskilling"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Sécurisation Cloud",
      category: "cyber",
      client: "Startup Fintech",
      desc: "Migration vers infrastructure cloud hybride sécurisée et monitorée 24/7.",
      tags: ["Cloud", "Cyber", "Monitoring"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Portail Client Web",
      category: "it",
      client: "Assurance Mutuelle",
      desc: "Refonte du portail client avec authentification double facteur et interface moderne.",
      tags: ["Fullstack", "UX/UI", "MFA"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Masterclass Cyber",
      category: "formation",
      client: "Groupe Bancaire",
      desc: "Série de masterclasses mensuelles sur les nouvelles menaces mondiales et la résilience.",
      tags: ["Masterclass", "Risk", "Strategy"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="pb-24"
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
            Nos Réalisations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed font-medium"
          >
            Découvrez comment nous aidons nos clients à devenir plus performants et plus sûrs.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {[
            { id: 'all', label: 'Tout voir', icon: "apps" },
            { id: 'cyber', label: 'Cyber', icon: "shield" },
            { id: 'formation', label: 'Formation', icon: "menu_book" },
            { id: 'it', label: 'IT Solutions', icon: "computer" }
          ].map(btn => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.id)}
              className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${
                filter === btn.id 
                ? 'bg-primary text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Icon name={btn.icon} size="20px" />
              {btn.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                   <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                   />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                      <Icon name={project.category === 'cyber' ? 'shield' : project.category === 'formation' ? 'school' : 'code'} size="14px" />
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-grow flex-col">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block opacity-70">{project.client}</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-50 text-gray-500 px-3 py-1 rounded-lg text-xs font-medium">#{tag}</span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 font-bold text-secondary-dark group-hover:text-primary transition-all">
                    Voir l'étude de cas <Icon name="open_in_new" size="18px" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Bottom */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-blue-50 rounded-[2rem] p-16 text-center border border-blue-100">
           <h2 className="text-4xl font-display font-bold text-secondary-dark mb-6">Convaincu par notre expertise ?</h2>
           <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">Rejoignez la liste de nos clients satisfaits et propulsez votre structure vers l'excellence numérique dès demain.</p>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
           >
            <Icon name="rocket_launch" size="24px" /> Lancer mon projet
           </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Portfolio;
