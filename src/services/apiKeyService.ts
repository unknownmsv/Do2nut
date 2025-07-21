import { supabase } from './supabase';
import { config } from '../config';

// Check if API key exists and is valid
export async function validateApiKey(apiKey: string): Promise<boolean> {
  const { data, error } = await supabase
    .from(config.apiKeysTable)
    .select('*')
    .eq('key', apiKey)
    .single();

  if (error || !data) {
    return false;
  }

  return data.is_active;
}

// Periodically check for new API keys
export async function checkApiKeys(): Promise<void> {
  console.log('Checking for new API keys...');
  
  // You can implement logic to sync with external source if needed
  // This is just a placeholder for the periodic check
}

// Create a new API key
export async function createApiKey(description: string): Promise<string | null> {
  const newKey = generateApiKey();
  
  const { data, error } = await supabase
    .from(config.apiKeysTable)
    .insert([
      {
        key: newKey,
        description,
        is_active: true,
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    console.error('Error creating API key:', error.message);
    return null;
  }

  return newKey;
}

function generateApiKey(): string {
  return 'sk_' + require('crypto').randomBytes(32).toString('hex');
}