
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Fetches a list of all tables in the public schema
 */
export const fetchDatabaseTables = async () => {
  try {
    // Use raw SQL query instead of direct query to pg_tables
    const { data, error } = await supabase
      .rpc('get_tables_info')
      .select('*');
      
    if (error) {
      // Fallback to use a direct query with rpc if the function doesn't exist
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('blog_posts')
        .select('id')
        .limit(1);
      
      if (fallbackError) throw fallbackError;
      
      // Return a minimal set of tables we know exist
      return { 
        data: [
          { tablename: 'blog_posts', schemaname: 'public' },
          { tablename: 'projects', schemaname: 'public' },
          { tablename: 'services', schemaname: 'public' },
          { tablename: 'testimonials', schemaname: 'public' }
        ], 
        error: null 
      };
    }
    
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching database tables:', error);
    toast.error('Failed to fetch database tables');
    
    // Return known tables as fallback
    return { 
      data: [
        { tablename: 'blog_posts', schemaname: 'public' },
        { tablename: 'projects', schemaname: 'public' },
        { tablename: 'services', schemaname: 'public' },
        { tablename: 'testimonials', schemaname: 'public' }
      ], 
      error 
    };
  }
};

/**
 * Fetches a count of records in a specific table
 */
export const fetchTableRecordCount = async (tableName: string) => {
  try {
    // Ensure tableName is one of the valid tables
    if (!['blog_posts', 'projects', 'services', 'testimonials'].includes(tableName)) {
      throw new Error(`Invalid table name: ${tableName}`);
    }
    
    // Now TypeScript knows tableName is a valid table
    const { count, error } = await supabase
      .from(tableName as 'blog_posts' | 'projects' | 'services' | 'testimonials')
      .select('*', { count: 'exact', head: true });
      
    if (error) throw error;
    return { count, error: null };
  } catch (error: any) {
    console.error(`Error fetching record count for ${tableName}:`, error);
    return { count: null, error };
  }
};

/**
 * Checks the health of the database connection
 */
export const checkDatabaseHealth = async () => {
  try {
    const startTime = performance.now();
    // Query a known table instead of pg_tables
    const { data, error } = await supabase
      .from('projects')
      .select('id')
      .limit(1);
    
    const endTime = performance.now();
    
    const responseTime = Math.round(endTime - startTime);
    
    if (error) throw error;
    
    return { 
      isHealthy: true, 
      responseTime,
      error: null 
    };
  } catch (error: any) {
    console.error('Database health check failed:', error);
    return { 
      isHealthy: false, 
      responseTime: null,
      error 
    };
  }
};
