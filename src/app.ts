import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import articleRoutes from './routes/articles';
import authRoutes from './routes/auth';
import { checkApiKeys } from './services/apiKeyService';
import { supabase } from './services/supabase';
import { config } from './config';

const app = express();
const PORT = config.port || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

// Initialize API keys check
checkApiKeys().then(() => {
  console.log('API keys check initialized');
});

// Start server
const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API documentation: ${config.baseUrl}/docs`);
});

export default app;