const express = require('express');
const router = express.Router();
const articlecontroller = require('../controllers/articlecontroller');

// Route pour créer un article (POST)
router.post('/articles', articlecontroller.createArticle);

module.exports = router;
// ... (garde le code existant)
// Route pour lire tous les articles (GET)
router.get('/articles', articlecontroller.getAllArticles);
// Route pour lire un article spécifique via son ID
router.get('/articles/:id', articlecontroller.getArticleById);
// Route pour modifier un article (PUT)
router.put('/articles/:id', articlecontroller.updateArticle);
// Route pour supprimer un article (DELETE)
router.delete('/articles/:id', articlecontroller.deleteArticle);
// Route de recherche (doit être placée avant /articles/:id)
router.get('/articles/search', articlecontroller.searchArticles);

// Les autres routes...
router.get('/articles/:id', articlecontroller.getArticleById);

module.exports = router;

