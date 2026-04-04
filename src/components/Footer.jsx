import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer = () => {


  return (
    <footer className="footer-container bg-secondary-dark text-white pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="SuccesInfo Logo" className="w-8 h-8 object-contain bg-white rounded-lg p-1" />
              <span className="text-xl font-display font-bold text-white tracking-tight">Succes<span className="text-primary focus:outline-none">Info</span></span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed text-sm">
              Maintenance informatique et formation bureautique d'excellence.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-primary transition-all text-gray-400 flex items-center gap-3 bg-white/5 p-2 px-4 rounded-xl border border-white/10 hover:border-primary/50 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-base font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">À propos</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Nos Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/formation" className="text-gray-400 hover:text-white transition-colors text-sm">Formation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary shrink-0" size="18px" />
                <span className="text-gray-400 text-sm">Hahotoé, Togo</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="call" className="text-primary shrink-0" size="18px" />
                <span className="text-gray-400 text-sm">+228 98 10 70 15</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="text-primary shrink-0" size="18px" />
                <span className="text-gray-400 text-sm">succesinfo9@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="hidden md:block">
            <h4 className="text-base font-bold mb-4">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-xs leading-relaxed">Recevez nos astuces et actualités.</p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl focus:ring-1 focus:ring-primary focus:outline-none placeholder-gray-500 text-sm w-full"
                />
                <button className="bg-primary hover:bg-blue-700 text-white py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Icon name="notifications" size="16px" /> S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100/10 pt-6 text-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} SucessInfo. Tous droits réservés. Mentions Légales | Confidentialité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
