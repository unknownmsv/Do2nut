import { createClient } from '@supabase/supabase-js';
import { config } from '../config';

export const supabase = createClient(config.supabaseUrl, config.supabaseKey);

// Initialize articles table
export async function initArticlesTable() {
  const { data, error } = await supabase
    .from(config.articlesTable)
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error connecting to articles table:', error.message);
    return false;
  }
  return true;
}

// Initialize API keys table
export async function initApiKeysTable() {
  const { data, error } = await supabase
    .from(config.apiKeysTable)
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error connecting to API keys table:', error.message);
    return false;
  }
  return true;
}