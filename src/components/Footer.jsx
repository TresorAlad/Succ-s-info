import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          email: email
        })
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setEmail('');
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        const data = await res.json();
        setStatus({ loading: false, success: false, error: data.error || "Une erreur est survenue." });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Erreur de connexion." });
    }
  };

  return (
    <footer className="footer-container bg-secondary-dark text-white pt-10 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white p-1.5 rounded-xl shadow-lg border border-white/20 group-hover:scale-105 transition-transform">
                <img src="transparent.png" alt="Le Succès Informatique Logo" className="w-9 h-9 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-black text-white tracking-tight">
                  Succes<span className="text-primary italic">Info</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Expertise Numérique</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm font-medium">
              Maintenance informatique, solutions digitales et formation d'excellence à Hahotoé, Togo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-all text-gray-400 flex items-center gap-3 bg-white/5 p-2 px-4 rounded-xl border border-white/10 hover:border-primary/40 group shadow-sm">
                <Icon name="facebook" size="18px" className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">Suivez-nous</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="text-base font-black uppercase tracking-widest text-white mb-8 border-l-4 border-primary pl-4">Liens Rapides</h4>
            <ul className="space-y-4">
              {['Accueil', 'À propos', 'Nos Services', 'Contact', 'Formation'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-all text-sm font-bold flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base font-black uppercase tracking-widest text-white mb-8 border-l-4 border-accent-orange pl-4">Contact direct</h4>
            <ul className="space-y-5">
              <li className="flex items-center justify-center sm:justify-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Icon name="location_on" className="text-primary" size="20px" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Localisation</span>
                  <span className="text-gray-300 text-sm font-bold">Hahotoé, Togo</span>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Icon name="call" className="text-accent-orange" size="20px" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Appelez-nous</span>
                  <span className="text-gray-300 text-sm font-bold">+228 98 10 70 15</span>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Icon name="mail" className="text-accent-green" size="20px" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email</span>
                  <span className="text-gray-300 text-sm font-bold">succesinfo9@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter - Visible only on desktop/tablet as requested */}
          <div className="hidden sm:block bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-base font-black uppercase tracking-widest text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">Recevez nos astuces, actualités et offres exclusives par e-mail.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                  <Icon name="alternate_email" size="16px" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="bg-black/20 border-2 border-white/5 text-white px-4 py-3 pl-11 rounded-2xl focus:border-primary/30 focus:ring-4 focus:ring-primary/10 focus:outline-none placeholder-gray-600 text-xs w-full transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full ${status.loading ? 'bg-gray-600' : 'bg-primary hover:bg-blue-600'} text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95`}
              >
                {status.loading ? "Envoi..." : (
                  <>
                    S'abonner <Icon name="notifications" size="18px" />
                  </>
                )}
              </button>

              {status.success && (
                <p className="text-accent-green text-[10px] font-bold text-center animate-bounce mt-3">Inscription réussie ! Merci.</p>
              )}
              {status.error && (
                <p className="text-accent-orange text-[10px] font-bold text-center mt-3">{status.error}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-medium font-display">
            © {new Date().getFullYear()} <span className="text-primary font-black">LE SUCCÈS INFORMATIQUE</span>. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em] font-medium">
            Développé par <span className="text-gray-400">Trésor ALADE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
