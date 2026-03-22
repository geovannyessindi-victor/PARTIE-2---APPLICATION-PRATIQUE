  ## Blog API - TAF INF 222

Ce projet est une API REST développée dans le cadre de l'UE **INF 222 (Programmation Web)**. 
Il s'agit d'un système backend pour la gestion d'un blog, permettant de manipuler des articles (CRUD) stockés dans une base de données SQLite.

##  Fonctionnalités et exemple d'execution

L'API permet d'effectuer les opérations suivantes sur les articles :
- **Création** (POST/api/article): Ajouter un nouvel article (titre, contenu, auteur, date, catégorie, tags).
     le nom de la fonction POST pour execute sur un terminal un exemple d'entre:
                     curl -X POST http://localhost:3000/api/articles \
                           -H "Content-Type: application/json" \
                           -d '{
                            "titre": "Mon premier article",
                             "contenu": "Ceci est le contenu de mon test pour INF222",
                             "auteur": "ESSINDI VICTOR GEOVANNY",
                              "date": "2026-03-20",
                               "categorie": "Technologie",
                               "tags": "node, api, test"
                                   }’
- **Lecture** (GET/api/articles): Lister tous les articles ou afficher un article spécifique par son ID.
  la fonction GET un exemple d'execution
                 curl -X GET http://localhost:3000/api/articles
    et pour la LECTURE D'UN ARTICLE : l'article 3
                 curl -X GET http://loapicalhost:3000//articles/3
- **Mise à jour**(PUT/api/articles) : Modifier les informations d'un article existant.
     un exemple d'execution sur le bash:
          curl -X PUT http://localhost:3000/api/articles/1 \
            -H "Content-Type: application/json" \
           -d '{
            "titre": "Titre Modifié",
          "contenu": "Le plat le plus consommé au Cameroun",
          "auteur": "charle",
          "date": "2026-03-20",
         "categorie": "nutrition",
         "tags": "tres bon"
      }'
- **Suppression**(DELECTE) : Retirer un article de la base de données.
        DELETE/api/article/:id: suppresion d’un article ;
exemple : suppression de l'article 1
      curl -X DELETE http://localhost:3000/api/articles/1
- **Recherche** (SEARCH): Rechercher des articles par mot-clé dans le titre ou le contenu.
          GET/api/articles/:id : consultation des articles(code ERREUR 404) ;
exemple d’execution rechercher un article :
        curl -X GET "http://localhost:3000/api/articles/search?query=premier"

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express.js** : Framework web pour la création des routes.
- **SQLite3** : Système de gestion de base de données relationnelle léger.

  ##  Guide d'exécution pas à pas

Suivez ces étapes pour lancer le projet sur votre machine locale :

    ### 1. Prérequis
      Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre ordinateur.

        ### 2. Installation des dépendances
      Ouvrez un terminal dans le dossier du projet et exécutez la commande suivante pour installer les modules nécessaires (Express, SQLite3, etc.) :
        ```bash
                npm install


###  Structure du Projet

```text
blog_api_inf222/
├── controllers/      # Logique métier de l'application
├── routes/           # Définition des points d'accès (endpoints)
├── database.js       # Configuration de SQLite
├── server.js         # Point d'entrée de l'API
├── blog.db           # Base de données (générée automatiquement)
└── package.json      # Dépendances du projet
