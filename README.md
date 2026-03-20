  ## Blog API - TAF INF 222

Ce projet est une API REST développée dans le cadre de l'UE **INF 222 (Programmation Web)**. 
Il s'agit d'un système backend pour la gestion d'un blog, permettant de manipuler des articles (CRUD) stockés dans une base de données SQLite.

##  Fonctionnalités

L'API permet d'effectuer les opérations suivantes sur les articles :
- **Création** : Ajouter un nouvel article (titre, contenu, auteur, date, catégorie, tags).
- **Lecture** : Lister tous les articles ou afficher un article spécifique par son ID.
- **Mise à jour** : Modifier les informations d'un article existant.
- **Suppression** : Retirer un article de la base de données.
- **Recherche** : Rechercher des articles par mot-clé dans le titre ou le contenu.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express.js** : Framework web pour la création des routes.
- **SQLite3** : Système de gestion de base de données relationnelle léger.

##  Structure du Projet

```text
blog_api_inf222/
├── controllers/      # Logique métier de l'application
├── routes/           # Définition des points d'accès (endpoints)
├── database.js       # Configuration de SQLite
├── server.js         # Point d'entrée de l'API
├── blog.db           # Base de données (générée automatiquement)
└── package.json      # Dépendances du projet
