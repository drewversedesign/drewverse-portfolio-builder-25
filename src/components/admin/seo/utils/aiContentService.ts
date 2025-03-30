
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
export const saveContent = async (title: string, content: string, type: string) => {
  try {
    const { error } = await supabase
      .from('ai_generated_content')
      .insert([{ title, content, type }]);
      
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving content:', error);
    toast.error('Failed to save content');
    return false;
  }
};

// Get saved content from Supabase
export const getContentHistory = async (type?: string) => {
  try {
    let query = supabase
      .from('ai_generated_content')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (type) {
      query = query.eq('type', type);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching content history:', error);
    toast.error('Failed to load content history');
    return [];
  }
};
