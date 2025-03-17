
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Fetches a list of all tables in the public schema
 */
export const fetchDatabaseTables = async () => {
  try {
    // Since we can't directly query pg_tables or use an RPC function,
    // we'll check for the existence of our known tables
    const knownTables = [
      { tablename: 'blog_posts', schemaname: 'public' },
      { tablename: 'projects', schemaname: 'public' },
      { tablename: 'services', schemaname: 'public' },
      { tablename: 'testimonials', schemaname: 'public' }
    ];
    
    // Verify tables exist by attempting to query them
    const existingTables = await Promise.all(
      knownTables.map(async (table) => {
        const { error } = await supabase
          .from(table.tablename as 'blog_posts' | 'projects' | 'services' | 'testimonials')
          .select('id')
          .limit(1);
        
        return {
          ...table,
          exists: !error
        };
      })
    );
    
    // Filter to only include tables that exist
    const availableTables = existingTables.filter(table => table.exists);
    
    return { 
      data: availableTables, 
      error: null 
    };
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
