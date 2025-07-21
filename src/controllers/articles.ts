import { Request, Response } from 'express';
import { supabase } from '../services/supabase';
import { config } from '../config';

interface Article {
  id?: string;
  tags: string[];
  subject: string;
  prompt: string;
  created_at?: string;
  updated_at?: string;
}

export async function createArticle(req: Request, res: Response) {
  try {
    const { tags, subject, prompt } = req.body;
    
    if (!subject || !prompt) {
      return res.status(400).json({ error: 'Subject and prompt are required' });
    }

    const articleData: Article = {
      tags: tags || [],
      subject,
      prompt
    };

    const { data, error } = await supabase
      .from(config.articlesTable)
      .insert([articleData])
      .select();

    if (error) {
      throw error;
    }

    res.status(201).json(data[0]);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ error: 'Failed to create article' });
  }
}

export async function getAllArticles(req: Request, res: Response) {
  try {
    const { data, error } = await supabase
      .from(config.articlesTable)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
}

export async function getArticleById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from(config.articlesTable)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ error: 'Failed to fetch article' });
  }
}