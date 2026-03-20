import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const Icon = ({ name, className = "", size = "20px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <footer className="bg-secondary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Icon name="shield" className="text-white" size="24px" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Succes<span className="text-primary">Info</span></span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Votre partenaire de confiance pour la formation informatique et la transition numérique de votre entreprise.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-primary transition-colors text-gray-400 flex items-center gap-1">
                <Icon name="fb" size="20px" /> <span className="text-xs font-bold uppercase tracking-tighter">FB</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Nos Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary shrink-0" size="22px" />
                <span className="text-gray-400 text-sm">Hahotoé, Togo</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="call" className="text-primary shrink-0" size="22px" />
                <span className="text-gray-400 text-sm">+228 99 99 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="text-primary shrink-0" size="22px" />
                <span className="text-gray-400 text-sm">contact@succesinfo.tg</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Abonnez-vous pour recevoir nos actualités cyber.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none placeholder-gray-500 text-sm"
              />
              <button className="bg-primary hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                <Icon name="notifications" size="20px" /> S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SucessInfo. Tous droits réservés. Mentions Légales | Confidentialité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
