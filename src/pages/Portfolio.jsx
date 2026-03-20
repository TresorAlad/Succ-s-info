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
      title: "Optimisation Parc Informatique",
      category: "maintenance",
      client: "École Primaire Locale",
      desc: "Audit et remise en état complète de 15 postes informatiques, installation de logiciels éducatifs.",
      tags: ["Dépannage", "Nettoyage", "Logiciel"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Vente & Installation Serveur",
      category: "it",
      client: "PME Commerce",
      desc: "Conseil, vente et configuration d'un serveur NAS pour la centralisation des fichiers d'entreprise.",
      tags: ["Vente", "Hardware", "Stockage"],
      image: "https://images.unsplash.com/photo-1581291518655-95245be4b26b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Formation Bureautique Salariés",
      category: "formation",
      client: "Cabinet Comptable",
      desc: "Formation intensive sur Excel avancé : tableaux croisés dynamiques et automatisation de tâches.",
      tags: ["Excel", "TOSA", "Productivité"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Assistance Technique Mensuelle",
      category: "maintenance",
      client: "Association Sportive",
      desc: "Mise en place d'un contrat de maintenance préventive pour assurer la continuité des activités.",
      tags: ["Support", "Préventif", "Suivi"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Création Site Vitrine",
      category: "it",
      client: "Artisan Menuisier",
      desc: "Développement d'un site web moderne pour présenter les réalisations et attirer de nouveaux clients.",
      tags: ["Web", "SEO", "Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Initiation Informatique Seniors",
      category: "formation",
      client: "Centre Communautaire",
      desc: "Programme d'accompagnement pour apprendre à utiliser internet et les e-mails en toute sécurité.",
      tags: ["Social", "Initiation", "Web"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getCategoryLabel = (cat) => {
    switch(cat) {
      case 'maintenance': return 'Maintenance';
      case 'formation': return 'Formation';
      case 'it': return 'Prestations IT';
      default: return cat;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="pb-24 bg-secondary-light min-h-screen"
    >
      {/* Header */}
      <section className="bg-secondary-dark text-white py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8"
          >
            Nos <span className="text-primary italic">Réalisations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Découvrez quelques-uns de nos projets marquants en maintenance, formation et prestations informatiques.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white/80 backdrop-blur-xl sticky top-20 z-40 border-b border-gray-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {[
            { id: 'all', label: 'Tout explorer', icon: "grid_view" },
            { id: 'maintenance', label: 'Maintenance', icon: "settings" },
            { id: 'formation', label: 'Formation Digital', icon: "school" },
            { id: 'it', label: 'Prestations IT', icon: "computer" }
          ].map(btn => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.id)}
              className={`px-8 py-3 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 ${
                filter === btn.id 
                ? 'bg-primary text-white shadow-xl shadow-blue-500/30' 
                : 'bg-white text-gray-400 border border-gray-100 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <Icon name={btn.icon} size="22px" />
              {btn.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col relative"
              >
                <div className="aspect-[16/11] overflow-hidden relative">
                   <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                   />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] text-primary flex items-center gap-2 shadow-lg">
                      <Icon name={project.category === 'cyber' ? 'security' : project.category === 'formation' ? 'menu_book' : 'code'} size="16px" />
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-grow flex-col">
                  <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">{project.client}</span>
                  <h3 className="text-2xl font-bold mb-5 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-50 text-primary font-bold px-4 py-1.5 rounded-lg text-[10px]">#{tag}</span>
                    ))}
                  </div>

                  <button className="flex items-center gap-3 font-bold text-secondary-dark group-hover:text-primary transition-all border-t border-gray-50 pt-8 mt-auto w-full group/btn">
                    Étude de cas complète <Icon name="arrow_forward" size="20px" className="group-hover/btn:translate-x-2 transition-transform" />
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
        className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-[3rem] p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/30">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
           <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 relative z-10">Convaincu par notre <span className="italic">Expertise ?</span></h2>
           <p className="text-blue-50 text-lg mb-12 max-w-2xl mx-auto relative z-10 opacity-90 font-medium">Rejoignez le cercle de nos partenaires de confiance et donnez une nouvelle dimension à votre vision numérique.</p>
           <motion.button 
             whileHover={{ scale: 1.05, y: -5 }}
             className="bg-white text-primary px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-4 mx-auto relative z-10"
           >
            <Icon name="rocket_launch" size="28px" /> Démarrer un Projet
           </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Portfolio;
