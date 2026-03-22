##  Documentation Interactive (Swagger)

Pour tester l'API sans utiliser le terminal, vous pouvez utiliser l'interface **Swagger UI** :

1. Copiez le contenu du fichier `swagger.yaml` (présent à la racine de ce dépôt).
2. Allez sur [Swagger Editor](https://editor.swagger.io/).
3. Collez le contenu dans l'éditeur à gauche.
4. Utilisez l'interface à droite pour tester les routes (GET, POST, SEARCH, PUT, DELETE) en direct sur `http://localhost:3000`.
NB: voici ce que tu doit coller sur swagger pour voir:

        openapi: 3.0.0
          info:
          title: Blog API - INF 222
          description: |
          API de gestion de blog pour le TAF de **ESSINDI VICTOR GEOVANNY**.
        Cette API permet de gérer le cycle de vie complet des articles (CRUD).
          version: 1.0.0

        servers:
          - url: http://localhost:3000/api
             description: Serveur local Node.js

        paths:
         /articles:
         # --- LIRE TOUS LES ARTICLES ---
         get:
         summary: Liste tous les articles
         tags: [Articles]
         responses:
        '200':
          description: Liste des articles récupérée avec succès.
          
         # --- CRÉER UN ARTICLE ---
         post:
        summary: Créer un nouvel article
         tags: [Articles]
         requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                titre: {type: string, example: "Mon Nouvel Article"}
                contenu: {type: string, example: "Ceci est le contenu de l'article."}
                auteur: {type: string, example: "Victor Geovanny"}
                date: {type: string, example: "2026-03-22"}
                categorie: {type: string, example: "Informatique"}
                tags: {type: string, example: "node, api, l2"}
        responses:
        '201':
          description: Article créé avec succès.

        /articles/search:
        # --- RECHERCHER UN ARTICLE ---
        get:
         summary: Rechercher des articles par mot-clé
         tags: [Articles]
         parameters:
        - name: query
          in: query
          description: Mot-clé à rechercher dans le titre ou le contenu
          required: true
          schema:
            type: string
        responses:
        '200':
          description: Résultats de la recherche.

         /articles/{id}:
        parameters:
         - name: id
        in: path
        description: ID unique de l'article
        required: true
        schema:
          type: integer

        # --- LIRE UN SEUL ARTICLE ---
        get:
          summary: Récupérer un article par son ID
         tags: [Articles]
        responses:
        '200':
          description: Article trouvé.
        '404':
          description: Article non trouvé.

        # --- METTRE À JOUR UN ARTICLE ---
        put:
          summary: Modifier un article existant
          tags: [Articles]
                requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                titre: {type: string}
                contenu: {type: string}
                auteur: {type: string}
          responses:
        '200':
          description: Article mis à jour avec succès.
    
          # --- SUPPRIMER UN ARTICLE ---
        delete:
          summary: Supprimer un article
        tags: [Articles]
        responses:
        '200':
          description: Article supprimé.
