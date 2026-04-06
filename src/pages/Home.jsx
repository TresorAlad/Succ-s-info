import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-secondary-dark text-white overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]"></div>
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center pt-12 lg:pt-40 pb-12 sm:pb-32">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-4 sm:mb-8 leading-[1.05] tracking-tighter">
            Votre Partenaire <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic">Expert en IT</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 mb-6 sm:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Optimisez votre infrastructure et formez vos équipes avec nos solutions sur-mesure en maintenance, bureautique et transformation digitale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center items-center mb-10">
            <Link
              to="/services"
              className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              Nos services <Icon name="arrow_forward" size="18px" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500">Explorer</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5 overflow-hidden">
            <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-secondary-dark mb-3">Nos Pôles de Compétences</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Une expertise polyvalente pour répondre à tous vos besoins informatiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Maintenance Informatique",
                description: "Dépannage, optimisation de parcs informatiques et assistance technique rapide.",
                icon: "settings_suggest",
                color: "bg-blue-50/50",
                textColor: "text-primary",
                features: ["Dépannage PC/Laptop", "Optimisation Système", "Installation Matérielle"]
              },
              {
                title: "Formation Bureautique",
                description: "Maîtrisez les outils essentiels : Pack Office, initiation au numérique et internet.",
                icon: "history_edu",
                color: "bg-orange-50/50",
                textColor: "text-accent-orange",
                features: ["Maîtrise du Clavier", "Initiation Débutant", "Navigation Web"]
              },
              {
                title: "Prestations Informatiques",
                description: "Création de sites internet, conseils personnalisés et solutions numériques globales.",
                icon: "laptop_chromebook",
                color: "bg-green-50/50",
                textColor: "text-accent-green",
                features: ["Création Web", "Conseil IT", "Support Quotidien"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group overflow-hidden relative hover:translate-y-[-8px]"
              >
                <div className={`${service.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={service.icon} className={service.textColor} size="32px" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 sm:mb-10 text-left">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <Icon name="check_circle" className="text-accent-green shrink-0" size="18px" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explorer ce pôle <Icon name="arrow_forward" size="20px" />
                </Link>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-secondary-dark to-black text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-6">Propulsez votre <span className="text-primary italic">Carrière</span></h2>
          <p className="text-sm sm:text-lg text-gray-400 mb-6 sm:mb-10">
            Développez de nouvelles compétences et atteignez vos objectifs avec nos formations professionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/formation" className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transform transition active:scale-95 shadow-xl shadow-blue-500/30 flex items-center gap-3 justify-center">
              <Icon name="school" size="24px" /> S'inscrire à une Formation
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </section>


    </div>
  );
};

export default Home;
