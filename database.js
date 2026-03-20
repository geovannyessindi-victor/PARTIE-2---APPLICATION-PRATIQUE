const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données (crée le fichier blog.db s'il n'existe pas)
const db = new sqlite3.Database('./blog.db', (err) => {
    if (err) {
        console.error("Erreur de connexion : " + err.message);
    } else {
        console.log("Connecté à la base de données SQLite.");
        // Création de la table articles selon les consignes 
        db.run(`CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre TEXT NOT NULL,
            contenu TEXT NOT NULL,
            auteur TEXT NOT NULL,
            date TEXT NOT NULL,
            categorie TEXT,
            tags TEXT
        )`);
    }
});

module.exports = db;
