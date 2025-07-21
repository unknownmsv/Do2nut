import { Request, Response, NextFunction } from 'express';
import { validateApiKey } from '../services/apiKeyService';
import { config } from '../config';

export async function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers[config.apiKeyHeader.toLowerCase()] as string;

  if (!apiKey) {
    return res.status(401).json({ 
      error: 'API key is required',
      docs: `${config.baseUrl}/docs#authentication`
    });
  }

  const isValid = await validateApiKey(apiKey);
  
  if (!isValid) {
    return res.status(403).json({ 
      error: 'Invalid API key',
      docs: `${config.baseUrl}/docs#authentication`
    });
  }

  next();
}