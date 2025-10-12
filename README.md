# Jeni-Rose-Couture
# Jeni Rose Couture - Site Web Modernisé

## 📋 Vue d'ensemble

Site web modernisé pour **Jeni Rose Couture**, un atelier de couture et retouches sur mesure à Pertuis. Cette version inclut une page d'accueil épurée, un système de connexion, et un dashboard d'administration complet.

## 🎯 Fonctionnalités principales

### 1. **Page d'Accueil (index.html)**
- Design moderne et minimaliste
- Section héros avec appel à l'action
- Présentation des services
- Témoignages clients
- Section contact
- Navigation responsive

### 2. **Page de Connexion (login.html)**
- Design contemporary avec gradient
- Support pour deux types d'utilisateurs (Client & Admin)
- Validation des identifiants
- Option "Se souvenir de moi"
- Identifiants de test fournis

**Identifiants de test :**
- Admin: `admin@test.com` / `admin123`
- Client: `client@test.com` / `client123`

### 3. **Dashboard (dashboard.html)**
- Interface d'administration complète
- Sections multiples :
  - **Tableau de bord** : Statistiques et graphiques
  - **Rendez-vous** : Gestion des rendez-vous
  - **Tâches** : Kanban board (À faire, En cours, Complété)
  - **Clients** : Liste et gestion des clients
  - **Services** : Gestion des services proposés
- Sidebar de navigation
- Déconnexion sécurisée

## 📁 Structure des fichiers

```
jeni-rose-couture/
├── index.html              # Page d'accueil
├── login.html              # Page de connexion
├── dashboard.html          # Dashboard admin
├── css/
│   └── style.css           # Styles CSS personnalisés
└── js/
    ├── main.js             # Script principal du site
    ├── login.js            # Logique de connexion
    └── dashboard.js        # Logique du dashboard
```

## 🎨 Design & Couleurs

**Palette de couleurs :**
- Gradient principal : `#9333ea` (Violet) → `#ec4899` (Rose)
- Fond clair : `#f8fafc` (Slate 50)
- Texte foncé : `#111827` (Gray 900)
- Accents : Dégradés modernes

**Fonts :**
- Titres : `Playfair Display` (serif)
- Corps : `Inter` (sans-serif)

## 🔧 Installation

1. **Télécharger les fichiers** dans un dossier local
2. **Structure des dossiers** :
   ```
   css/
   └── style.css
   js/
   ├── main.js
   ├── login.js
   └── dashboard.js
   index.html
   login.html
   dashboard.html
   ```
3. **Ouvrir dans un navigateur** : Double-cliquer sur `index.html`

## 💻 Technologies utilisées

- **HTML5** : Structure sémantique
- **Tailwind CSS** : Framework CSS utilitaire
- **Vanilla JavaScript** : Logique sans dépendances externes
- **Feather Icons** : Icônes SVG légères
- **Responsive Design** : Mobile-first approach

## 🔐 Authentification

Le système d'authentification utilise :
- **sessionStorage** : Session temporaire (par défaut)
- **localStorage** : Stockage persistant (si "Se souvenir" cochée)

Données stockées :
- Email utilisateur
- Nom utilisateur
- Type d'utilisateur (admin/client)
- Timestamp de connexion

## 📱 Responsive

- ✅ Mobile (< 640px)
- ✅ Tablette (640px - 1024px)
- ✅ Desktop (> 1024px)

## 🚀 Améliorations futures possibles

1. **Backend intégration** :
   - API Node.js/Express
   - Base de données MongoDB/PostgreSQL
   - JWT authentication

2. **Fonctionnalités avancées** :
   - Paiements en ligne (Stripe)
   - Calendrier interactif
   - Notifications email
   - Galerie clients

3. **Optimisations** :
   - SEO amélioré
   - Compression d'images
   - Caching côté serveur
   - Analytics

## 📞 Support

**Contact :**
- Email : contact@jenirosecouture.com
- Téléphone : +33 6 12 34 56 78
- Adresse : 12 Rue des Tisserands, 84120 Pertuis

## 📄 Licence

© 2024 Jeni Rose Couture. Tous droits réservés.

---

**Développé avec ❤️ pour Jeni Rose Couture**