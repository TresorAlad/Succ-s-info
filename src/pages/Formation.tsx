import React, { useState } from 'react';
import Icon from '../components/Icon';

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

  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-24 lg:pt-40 pb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary-dark mb-4 sm:mb-6 leading-tight">
            Nos <span className="text-primary italic">Formations</span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-500 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Développez vos compétences avec nos programmes conçus pour répondre aux besoins actuels du marché professionnel.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent-green opacity-30"></div>
      </section>

      {/* Courses Cards */}
      <section className="py-8 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-100 transition-all group flex flex-col items-center text-center hover:translate-y-[-8px] hover:shadow-xl"
            >
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-[1.5rem] bg-blue-50 flex items-center justify-center mb-5 sm:mb-8 group-hover:bg-primary transition-colors duration-500 shadow-sm">
                <Icon name={course.icon} className="text-primary group-hover:text-white transition-colors" size="28px" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 font-display text-secondary-dark">{course.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">{course.description}</p>
              <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500 mt-auto"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-6 sm:py-12 pb-12 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary-dark rounded-[1.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row">
          {/* Left panel - Info / Image */}
          <div className="lg:w-5/12 bg-primary relative p-8 sm:p-12 lg:p-16 text-white overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 backdrop-blur-sm border border-white/30 shadow-sm">
                <Icon name="school" size="24px" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black mb-3 sm:mb-6 leading-tight">
                Passez à la <br /> <span className="italic text-blue-200">vitesse supérieure</span>
              </h2>
              <p className="text-blue-100 mb-6 sm:mb-10 text-sm sm:text-lg leading-relaxed border-l-4 border-accent-orange pl-4 font-medium">
                Remplissez ce formulaire pour réserver votre place. Nos conseillers vous contacteront sous 24h ouvrées pour finaliser votre inscription.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name="check_circle" size="18px" className="text-accent-green" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">Approche 100% pratique</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name="check_circle" size="18px" className="text-accent-green" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">Attestation de fin de formation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 bg-white relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-secondary-dark mb-8 sm:mb-10">
              Formulaire <span className="text-primary italic text-3xl sm:text-4xl font-display">d'inscription</span>
            </h3>

            <form className="space-y-6 sm:space-y-8 relative z-10" onSubmit={handleSubmit}>
              {status.success && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <Icon name="check_circle" className="text-green-500" />
                  <p className="text-green-800 font-bold text-sm">Votre Inscription a été envoyée avec succès !</p>
                </div>
              )}
              {status.error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <span className="text-red-500 font-bold text-lg">!</span>
                  <p className="text-red-800 font-bold text-sm">{status.error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Inputs with floating-like refined design */}
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nom Complet</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="person" size="18px" />
                    </div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Nom et Prénom" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Adresse Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="mail" size="18px" />
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@exemple.com" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Num. Téléphone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="phone" size="18px" />
                    </div>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Votre numéro" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Choix de Formation</label>
                  <div className="relative group h-full">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors z-10">
                      <Icon name="menu_book" size="18px" />
                    </div>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-bold text-secondary-dark appearance-none cursor-pointer h-[50px] sm:h-[56px] text-sm sm:text-base">
                      <option>Formation Bureautique</option>
                      <option>Formation Entreprenariat</option>
                      <option>Gestion & Comptabilité</option>
                      <option>Autre</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-400 z-10">
                      <Icon name="expand_more" size="18px" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Message <span className="text-gray-300 normal-case tracking-normal">(optionnel)</span></label>
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-5 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <Icon name="edit_note" size="18px" />
                  </div>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Dites-nous en plus..." className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300 resize-none text-sm sm:text-base"></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'} text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all transform shadow-xl shadow-primary/20 group pb-4 sm:pb-5`}
              >
                {status.loading ? "Envoi..." : "S'inscrire Maintenant"} {!status.loading && <Icon name="arrow_forward" size="18px" className="group-hover:translate-x-2 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Formation;