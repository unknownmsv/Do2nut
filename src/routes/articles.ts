import { Router } from 'express';
import { apiKeyAuth } from '../middlewares/auth';
import { createArticle, getAllArticles, getArticleById } from '../controllers/articles';

const router = Router();

// Public routes
router.get('/', getAllArticles);
router.get('/:id', getArticleById);

// Protected routes (require API key)
router.post('/create', apiKeyAuth, createArticle);

export default router;