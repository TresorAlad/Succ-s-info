import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const Services = () => {
  const [activeMobileCat, setActiveMobileCat] = useState(null);

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

  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Header */}
      <section className="bg-white pt-24 lg:pt-40 pb-12 lg:py-32 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary-dark mb-4 sm:mb-8">
            Nos Services <span className="text-primary italic">Informatiques</span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-500 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium">
            Un accompagnement complet pour vos besoins quotidiens : de la réparation de votre matériel à votre formation continue.
          </p>
          {/* Desktop Features */}
          <div className="hidden sm:flex justify-center items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-gray-400 w-full mb-4">
            {[
              { icon: "verified", color: "text-primary", label: "Expertise" },
              { icon: "schedule", color: "text-accent-orange", label: "Disponibilité" },
              { icon: "thumb_up", color: "text-accent-green", label: "Satisfaction" }
            ].map((feature, i) => (
              <span
                key={i}
                className="flex items-center gap-3 shrink-0"
              >
                <Icon name={feature.icon} className={feature.color} size="20px" /> {feature.label}
              </span>
            ))}
          </div>

          {/* Mobile Animated Marquee Features */}
          <div className="sm:hidden flex overflow-hidden w-full relative">
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex items-center gap-8 w-max text-xs font-bold uppercase tracking-[0.2em] text-gray-400 py-2 animate-[marquee_20s_linear_infinite]">
              {[
                { icon: "verified", color: "text-primary", label: "Expertise" },
                { icon: "schedule", color: "text-accent-orange", label: "Disponibilité" },
                { icon: "thumb_up", color: "text-accent-green", label: "Satisfaction" },
                { icon: "verified", color: "text-primary", label: "Expertise" },
                { icon: "schedule", color: "text-accent-orange", label: "Disponibilité" },
                { icon: "thumb_up", color: "text-accent-green", label: "Satisfaction" }
              ].map((feature, i) => (
                <span key={i} className="flex items-center gap-2 shrink-0">
                  <Icon name={feature.icon} className={feature.color} size="16px" /> {feature.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent-green opacity-30"></div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-40">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div
                className={`${idx % 2 !== 0 ? 'lg:order-last' : ''} lg:col-span-5 lg:sticky lg:top-32`}
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-center mb-6 sm:mb-10 border border-gray-100 rotate-3 transform group hover:rotate-0 transition-transform">
                  <Icon name={cat.icon} className="text-primary text-secondary-dark" size="32px" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-secondary-dark mb-6 sm:mb-8 leading-tight">{cat.title}</h2>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
                  Solutions dédiées à la <span className="text-primary font-bold font-display">{cat.title.toLowerCase()}</span> pour vous garantir un environnement numérique stable et performant.
                </p>
                <div className="flex flex-wrap gap-4">
                  {cat.buttons.map((btn, bi) => (
                    <div key={bi} className="w-full sm:w-auto">
                      <Link
                        to={btn.to}
                        className={btn.primary
                          ? "w-full bg-primary text-white px-8 sm:px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                          : "w-full text-primary font-bold px-8 sm:px-10 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-white transition-all flex items-center justify-center gap-3"
                        }
                      >
                        <Icon name={btn.icon} size="20px" /> {btn.label}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Accordion Toggle */}
                <button 
                  onClick={() => setActiveMobileCat(activeMobileCat === cat.id ? null : cat.id)}
                  className="lg:hidden mt-8 flex items-center justify-between w-full bg-blue-50/50 p-5 rounded-2xl font-bold text-primary border border-blue-100 hover:bg-blue-50 transition-all active:scale-95 shadow-sm"
                >
                  <span className="text-[10px] uppercase tracking-widest">{activeMobileCat === cat.id ? "Masquer les détails" : "Voir plus de détails"}</span>
                  <Icon name={activeMobileCat === cat.id ? "expand_less" : "expand_more"} size="20px" />
                </button>
              </div>

              <div className="lg:col-span-1 hidden lg:block h-full border-r border-dashed border-gray-200"></div>

              <div
                className={`lg:col-span-6 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:grid ${activeMobileCat === cat.id ? 'grid' : 'hidden'}`}
              >
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 transition-all group hover:translate-y-[-8px] hover:border-primary/20 hover:shadow-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary transition-colors duration-500">
                      <Icon name="verified" className="text-primary group-hover:text-white transition-colors" size="24px" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
                    <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
