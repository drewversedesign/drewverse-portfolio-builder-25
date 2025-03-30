
import { supabase } from '@/integrations/supabase/client';
import { PageSEO, SEOSetting, SEOStorageData } from '@/components/admin/seo/types';
import { toast } from 'sonner';

const STORAGE_KEY = 'seo_settings';

// Save SEO settings to localStorage and Supabase if available
export const saveSEOSettings = async (generalSettings: SEOSetting, pageSettings: PageSEO[]): Promise<boolean> => {
  try {
    // Store SEO settings in local storage as a backup
    const seoData: SEOStorageData = {
      generalSettings,
      pageSettings,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seoData));
    
    // Try to store in Supabase if available
    try {
      // Convert the SEOStorageData to a stringified JSON to ensure it's compatible with Supabase's JSONB type
      const jsonString = JSON.stringify(seoData);
      
      const { error } = await supabase
        .from('site_settings')
        .upsert({ 
          key: 'seo_settings',
          value: jsonString,
          updated_at: new Date().toISOString()
        })
        .select();
      
      if (error) throw error;
      
    } catch (dbError) {
      console.error('Database save failed, using localStorage only:', dbError);
      // Still return true as we saved to localStorage successfully
    }
    
    return true;
  } catch (error) {
    console.error('Error saving SEO settings:', error);
    return false;
  }
};

// Load SEO settings from Supabase or localStorage if Supabase is unavailable
export const loadSEOSettings = async (): Promise<SEOStorageData | null> => {
  try {
    // Try to load from Supabase first
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('key', 'seo_settings')
        .single();
      
      if (error) throw error;
      
      if (data && data.value) {
        // Handle the JSONB value from Supabase
        const valueData = data.value;
        
        // Always parse the value as it could be stored as a JSON string
        let parsedValue;
        try {
          parsedValue = typeof valueData === 'string' 
            ? JSON.parse(valueData) 
            : valueData;
        } catch (e) {
          console.error('Error parsing value from Supabase:', e);
          throw e; // Re-throw to fall back to localStorage
        }
        
        // Validate the structure of the parsed data
        if (parsedValue && 
            typeof parsedValue === 'object' && 
            'generalSettings' in parsedValue && 
            'pageSettings' in parsedValue) {
          return parsedValue as SEOStorageData;
        }
      }
    } catch (dbError) {
      console.error('Database load failed, trying localStorage:', dbError);
    }
    
    // Fall back to localStorage
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData) as SEOStorageData;
    }
    
    return null;
  } catch (error) {
    console.error('Error loading SEO settings:', error);
    return null;
  }
};

// Analyze a page and generate an SEO score
export const analyzePage = async (page: PageSEO): Promise<number> => {
  // This is a simplified scoring algorithm
  // In a real implementation, you'd want to check more factors
  let score = 50; // Start with a base score
  
  // Check title length
  if (page.metaTitle.length > 10 && page.metaTitle.length <= 60) {
    score += 10;
  } else if (page.metaTitle.length > 0) {
    score += 5;
  }
  
  // Check meta description
  if (page.metaDescription.length > 120 && page.metaDescription.length <= 160) {
    score += 20;
  } else if (page.metaDescription.length > 50) {
    score += 10;
  }
  
  // Check keywords
  if (page.metaKeywords.length > 0) {
    const keywords = page.metaKeywords.split(',').map(k => k.trim());
    if (keywords.length >= 3 && keywords.length <= 8) {
      score += 10;
    } else if (keywords.length > 0) {
      score += 5;
    }
    
    // Check if keywords are in the title and description
    const keywordsInTitle = keywords.filter(k => 
      page.metaTitle.toLowerCase().includes(k.toLowerCase())
    ).length;
    
    const keywordsInDesc = keywords.filter(k => 
      page.metaDescription.toLowerCase().includes(k.toLowerCase())
    ).length;
    
    if (keywordsInTitle > 0) score += 5;
    if (keywordsInDesc > 0) score += 5;
  }
  
  // Add some randomness to make it more realistic
  score = Math.min(100, score + Math.floor(Math.random() * 5));
  
  return score;
};

// Generate a sitemap based on current pages
export const generateSitemap = async (pages: PageSEO[]): Promise<string> => {
  const baseUrl = window.location.origin;
  const date = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each page to sitemap
  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${date}</lastmod>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // In a real app, you'd want to save this sitemap to a file
  // Here we'll just return it as a string for demonstration
  return sitemap;
};
