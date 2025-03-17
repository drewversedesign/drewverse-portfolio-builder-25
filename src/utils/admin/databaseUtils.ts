
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Fetches a list of all tables in the public schema
 */
export const fetchDatabaseTables = async () => {
  try {
    const { data, error } = await supabase
      .from('pg_tables')
      .select('tablename, schemaname')
      .eq('schemaname', 'public');
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching database tables:', error);
    toast.error('Failed to fetch database tables');
    return { data: null, error };
  }
};

/**
 * Fetches a count of records in a specific table
 */
export const fetchTableRecordCount = async (tableName: string) => {
  try {
    const { count, error } = await supabase
      .from(tableName)
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
    const { data, error } = await supabase.from('pg_tables').select('tablename').limit(1);
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
