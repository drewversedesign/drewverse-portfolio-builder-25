
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Define the AI content type to handle type safety
export interface AIGeneratedContent {
  id?: string;
  title: string;
  content: string;
  type: string;
  created_at?: string;
  updated_at?: string;
}

// Call the AI function with different actions
export const callAiFunction = async (params: {
  action: 'seo_analysis' | 'generate_content' | 'summarize_text' | 'keyword_analysis';
  prompt?: string;
  url?: string;
  content?: string;
  keywords?: string;
}) => {
  try {
    const { action, prompt, url, content, keywords } = params;
    
    const response = await fetch('https://jwprciyyydivvpymejku.functions.supabase.co/seo-helper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action, prompt, url, content, keywords }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('AI function error:', error);
    toast.error('Failed to process request');
    throw error;
  }
};

// Save content to Supabase
export const saveContent = async (title: string, content: string, type: string): Promise<boolean> => {
  try {
    // Use type assertion to bypass the TypeScript error
    const { error } = await (supabase
      .from('ai_generated_content' as any)
      .insert([{ title, content, type }]) as any);
      
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving content:', error);
    toast.error('Failed to save content');
    return false;
  }
};

// Get saved content from Supabase
export const getContentHistory = async (type?: string): Promise<AIGeneratedContent[]> => {
  try {
    // Use type assertion to bypass the TypeScript error
    let query = supabase
      .from('ai_generated_content' as any)
      .select('*')
      .order('created_at', { ascending: false });
      
    if (type) {
      query = query.eq('type', type);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // First convert to unknown, then to our expected type to avoid TypeScript errors
    return ((data || []) as unknown) as AIGeneratedContent[];
  } catch (error) {
    console.error('Error fetching content history:', error);
    toast.error('Failed to load content history');
    return [];
  }
};
