import React, { useState } from 'react';
import Icon from '../components/Icon';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Maintenance Informatique', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...formData })
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: 'Maintenance Informatique', message: '' });
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        const data = await res.json();
        setStatus({ loading: false, success: false, error: data.error || "Une erreur est survenue." });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Erreur de connexion au serveur." });
    }
  };

  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Hero Header */}
      <section className="bg-white pt-24 lg:pt-40 pb-12 lg:pb-32 shadow-sm relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary-dark mb-4 sm:mb-6 leading-tight">
            Parlons de votre <span className="text-primary italic">Projet</span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Contactez notre équipe d'experts pour obtenir un devis personnalisé ou des informations complémentaires.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-accent-green opacity-30"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Email", info: "succesinfo9@gmail.com", icon: "alternate_email", color: "text-primary", desc: "Support client & Devis" },
            { label: "Téléphone", info: "+228 98 10 70 15", icon: "phone_iphone", color: "text-accent-orange", desc: "Lun-Sam (8h-18h)" },
            { label: "Siège Social", info: "Hahotoé, Togo", icon: "distance", color: "text-accent-green", desc: "Près du Lycée Hahotoé" },
            { label: "Support IT", info: "Aide Réactive", icon: "support_agent", color: "text-blue-500", desc: "Dépannage à distance" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm transition-all group text-center hover:translate-y-[-8px] hover:shadow-xl"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 mx-auto group-hover:bg-primary transition-colors duration-500 shadow-sm">
                <Icon name={item.icon} className={`${item.color} group-hover:text-white transition-colors`} size="20px" />
              </div>
              <h4 className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1 sm:mb-2">{item.label}</h4>
              <p className="text-xs sm:text-lg font-black text-secondary-dark mb-0.5 tracking-tight group-hover:text-primary transition-colors break-words">{item.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="pb-12 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary-dark rounded-[1.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row">
          {/* Left panel - Form */}
          <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 bg-white relative order-2 lg:order-1">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-secondary-dark mb-6 sm:mb-10">
              Envoyez-nous un <br className="sm:hidden" /> <span className="text-primary italic text-3xl sm:text-4xl font-display">Message</span>
            </h3>

            <form className="space-y-6 sm:space-y-8 relative z-10" onSubmit={handleSubmit}>
              {status.success && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <Icon name="check_circle" className="text-green-500" />
                  <p className="text-green-800 font-bold text-sm">Votre message a été envoyé avec succès !</p>
                </div>
              )}
              {status.error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 flex items-center gap-3">
                  <span className="text-red-500 font-bold text-lg">!</span>
                  <p className="text-red-800 font-bold text-sm">{status.error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nom Complet</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                      <Icon name="person" size="18px" />
                    </div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre Nom" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300" />
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
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Sujet de votre demande</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors z-10">
                    <Icon name="topic" size="18px" />
                  </div>
                  <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-bold text-secondary-dark appearance-none cursor-pointer h-[50px] sm:h-[56px] text-sm sm:text-base">
                    <option>Maintenance Informatique</option>
                    <option>Formation Bureautique</option>
                    <option>Solutions IT & Web</option>
                    <option>Vente de Matériel</option>
                    <option>Demande de partenariat</option>
                    <option>Autres</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-400 z-10">
                    <Icon name="expand_more" size="18px" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Votre Message</label>
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-5 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <Icon name="edit_note" size="18px" />
                  </div>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Dites-nous en plus..." className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 pl-11 sm:pl-12 pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl outline-none transition-all font-medium text-secondary-dark placeholder-gray-300 resize-none text-sm sm:text-base"></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'} text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all transform shadow-xl shadow-primary/20 group pb-4 sm:pb-5`}
              >
                {status.loading ? "Envoi..." : "Envoyer ma demande"} {!status.loading && <Icon name="send" size="18px" className="group-hover:translate-x-2 transition-transform" />}
              </button>
            </form>
          </div>

          {/* Right panel - Map & Info */}
          <div className="lg:w-5/12 bg-primary relative overflow-hidden flex flex-col order-1 lg:order-2">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>

            {/* Info content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-white flex-1 flex flex-col justify-center">
              <div className="bg-white/20 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 backdrop-blur-sm border border-white/30 shadow-sm">
                <Icon name="location_on" size="28px" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black mb-4 leading-tight">
                Rendez-nous <br className="sm:hidden" /> <span className="italic text-blue-200 text-3xl sm:text-4xl font-display">visite</span>
              </h2>
              <p className="text-blue-100 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed border-l-4 border-accent-orange pl-4 font-medium">
                Notre bureau est ouvert du Lundi au Samedi, de 8h à 18h. Passez nous voir pour discuter en personne.
              </p>

              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name="distance" size="16px" className="text-accent-green" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">Hahotoé, Togo (Près du Lycée Hahotoé)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name="schedule" size="16px" className="text-accent-orange" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">8h00 – 18h00</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name="phone_iphone" size="16px" className="text-blue-200" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm">+228 98 10 70 15</span>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.266890683791!2d1.4159017000000003!3d6.3594919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023f721a08d8955%3A0x63898c214014f75d!2sLE%20SUCCES%20INFORMATIQUE!5e0!3m2!1sfr!2stg!4v1773935912424!5m2!1sfr!2stg"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Le Succès Informatique"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
