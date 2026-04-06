# 🚀 Le Succès Informatique - Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-FFB11B?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

Bienvenue sur le projet portfolio de **Le Succès Informatique**. Ce site est une plateforme moderne, haute performance et professionnelle conçue pour présenter nos services, formations et expertise en informatique avec une esthétique premium et une fluidité optimale.

### 🛡️ À propos de Le Succès Informatique
Basé à Hahotoé (Togo), **Le Succès Informatique** est un centre spécialisé dans l'accompagnement numérique et la formation. Nos missions principales :
-   **Maintenance Informatique** : Audit, dépannage matériel et logiciel, sécurité réseau.
-   **Formations Certifiées** : Bureautique (Office), Entreprenariat, Gestion & Comptabilité.
-   **Solutions Digitales** : Création de sites web, SEO et conseil stratégique.
-   **Vente de Matériel** : Fourniture de solutions informatiques adaptées.

---

## ✨ Points Forts du Projet

-   **⚡ Performance Optimisée** : Architecture légère sans dépendances lourdes pour un chargement instantané, même sur les connexions lentes.
-   **📱 Mobile-First & Compact** : Interface responsive méticuleusement ajustée pour une expérience utilisateur fluide et sans scroll excessif sur smartphone.
-   **💎 Design Premium** : Esthétique moderne avec effets de flou (backdrop-blur), glassmorphism et une palette de couleurs professionnelle.
-   **📧 Système de Contact Intégré** : Formulaires fonctionnels avec notifications par email via Nodemailer.
-   **🎨 Iconographie SVG Centralisée** : Utilisation de `Lucide React` pour des icônes vectorielles nettes et performantes.

---

## 🛠️ Stack Technique

-   **Frontend** : [React.js 18](https://reactjs.org/)
-   **Outil de Build** : [Vite](https://vitejs.dev/) (HMR ultra-rapide)
-   **Styling** : [Tailwind CSS](https://tailwindcss.com/) (Framework utilitaire)
-   **Icons** : [Lucide React](https://lucide.dev/)
-   **Routing** : [React Router DOM (v6)](https://reactrouter.com/)
-   **Backend (Notifications)** : Nodemailer

---

## 🚀 Installation Locale

Pour lancer ce projet sur votre machine, suivez ces étapes :

### 1. Cloner le dépôt
```bash
git clone <url-du-depot>
cd succes
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine pour la configuration Nodemailer (si applicable pour les tests backend) :
```env
SMTP_EMAIL=votre-email
SMTP_PASSWORD=votre-mot-de-pass
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Accédez à [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### 5. Build pour la production
```bash
npm run build
```

---

## 📂 Structure du Projet

```text
├── src/
│   ├── components/      # Composants UI réutilisables (Navbar, Icon, Loader, etc.)
│   ├── pages/           # Pages de l'application (Home, About, Services, etc.)
│   ├── layouts/         # Structures de mise en page commune
│   ├── assets/          # Images statiques et ressources de marque
│   ├── App.jsx          # Composant racine et définitions des routes
│   └── main.jsx         # Point d'entrée de l'application
├── public/              # Fichiers statiques (favicon, transparent.png)
└── tailwind.config.js   # Configuration des jetons de design (Couleurs, Animations)
```

---

## 📝 Licence

Ce projet est la propriété de **Le Succès Informatique**. Toute reproduction sans autorisation est interdite.

---

Développé avec ❤️ par **Trésor ALADE** pour **Le Succès Informatique**.
