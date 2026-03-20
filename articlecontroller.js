// On importe la connexion à la base de données
const db = require('../database');

// Fonction pour créer un article
exports.createArticle = (req, res) => {
    // Récupération des données envoyées par l'utilisateur [cite: 45]
    const { titre, contenu, auteur, date, categorie, tags } = req.body;

    // 1. Validation : Titre non vide et auteur obligatoire 
    if (!titre || !auteur) {
        return res.status(400).json({
            error: "Validation échouée : Le titre et l'auteur sont obligatoires"
        });
    }

    // 2. Préparation de la requête SQL
    const sql = `INSERT INTO articles (titre, contenu, auteur, date, categorie, tags) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [titre, contenu, auteur, date, categorie, tags];

    // 3. Exécution dans SQLite
    db.run(sql, params, function (err) {
        if (err) {
            // Erreur serveur 
            return res.status(500).json({ error: err.message });
        }
        // Succès : Renvoie l'ID de l'article créé [cite: 48, 102]
        res.status(201).json({
            message: "Article créé avec succès",
            id: this.lastID
        });
    });
};
// Fonction pour récupérer TOUS les articles
exports.getAllArticles = (req, res) => {
    const sql = "SELECT * FROM articles";

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // On renvoie la liste dans un objet "articles" comme sur l'image du sujet
        res.json({ articles: rows });
    });
};
// Fonction pour récupérer un SEUL article via son ID
exports.getArticleById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM articles WHERE id = ?";

    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Si l'article n'existe pas, on renvoie une erreur 404 (demandé dans le TAF)
        if (!row) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        res.json(row);
    });
};
// Fonction pour modifier un article
exports.updateArticle = (req, res) => {
    const { id } = req.params;
    const { titre, contenu, auteur, date, categorie, tags } = req.body;

    const sql = `UPDATE articles SET 
                 titre = ?, contenu = ?, auteur = ?, 
                 date = ?, categorie = ?, tags = ? 
                 WHERE id = ?`;
    const params = [titre, contenu, auteur, date, categorie, tags, id];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        res.json({ message: "Article mis à jour avec succès" });
    });
};
// Fonction pour supprimer un article
exports.deleteArticle = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM articles WHERE id = ?", id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        res.json({ message: "Article supprimé avec succès" });
    });
};
// Fonction pour rechercher des articles par mot-clé
exports.searchArticles = (req, res) => {
    const { query } = req.query; // Récupère le texte après ?query=
    
    if (!query) {
        return res.status(400).json({ error: "Veuillez fournir un terme de recherche" });
    }

    // Recherche dans le titre OU le contenu (utilisation de LIKE pour le texte partiel)
    const sql = "SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?";
    const searchTerm = `%${query}%`;

    db.all(sql, [searchTerm, searchTerm], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ articles: rows });
    });
};
