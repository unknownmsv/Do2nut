import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  supabaseUrl: string;
  supabaseKey: string;
  apiKeysTable: string;
  articlesTable: string;
  baseUrl: string;
  apiKeyHeader: string;
}

export const config: Config = {
  port: parseInt(process.env.PORT || '3000'),
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
  apiKeysTable: process.env.API_KEYS_TABLE || 'api_keys',
  articlesTable: process.env.ARTICLES_TABLE || 'articles',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  apiKeyHeader: process.env.API_KEY_HEADER || 'x-api-key'
};