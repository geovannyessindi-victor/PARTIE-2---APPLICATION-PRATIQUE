const express = require('express');
const app = express();
const db = require('./database'); // Import de la base de données
const articleRoutes = require('./routes/articleRoutes'); // Import des routes

const PORT = 3000;

app.use(express.json());

// Utilisation des routes avec le préfixe /api
app.use('/api', articleRoutes);

app.get('/', (req, res) => {
    res.json({ message: "API Blog INF222 opérationnelle" });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
