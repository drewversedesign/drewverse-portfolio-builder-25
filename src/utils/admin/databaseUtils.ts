
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
      { tablename: 'testimonials', schemaname: 'public' },
      { tablename: 'site_settings', schemaname: 'public' },
      { tablename: 'contact_messages', schemaname: 'public' }
    ];
    
    // Verify tables exist by attempting to query them
    const existingTables = await Promise.all(
      knownTables.map(async (table) => {
        let exists = false;
        
        try {
          const { error } = await supabase
            .from(table.tablename)
            .select('*')
            .limit(1);
            
          exists = !error;
        } catch {
          exists = false;
        }
        
        return {
          ...table,
          exists
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
    // Simple validation of table name
    const validTables = ['blog_posts', 'projects', 'services', 'testimonials', 'site_settings', 'contact_messages'];
    if (!validTables.includes(tableName)) {
      throw new Error(`Invalid table name: ${tableName}`);
    }
    
    // Get count from table
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
    // Query a known table 
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

/**
 * Fetches the most recent blog posts
 */
export const fetchRecentBlogPosts = async (limit = 5) => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(limit);
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching recent blog posts:', error);
    return { data: null, error };
  }
};

/**
 * Fetches the most recent projects
 */
export const fetchRecentProjects = async (limit = 5) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching recent projects:', error);
    return { data: null, error };
  }
};

/**
 * Creates a new project
 */
export const createProject = async (projectData: any) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([projectData])
      .select();
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error creating project:', error);
    return { data: null, error };
  }
};

/**
 * Updates an existing project
 */
export const updateProject = async (id: string, projectData: any) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .update(projectData)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error updating project:', error);
    return { data: null, error };
  }
};

/**
 * Creates a new blog post
 */
export const createBlogPost = async (postData: any) => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData])
      .select();
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return { data: null, error };
  }
};

/**
 * Updates an existing blog post
 */
export const updateBlogPost = async (id: string, postData: any) => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return { data: null, error };
  }
};

/**
 * Fetches contact messages
 */
export const fetchContactMessages = async (limit = 20, offset = 0) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching contact messages:', error);
    return { data: null, error };
  }
};

/**
 * Updates a contact message status
 */
export const updateMessageStatus = async (id: string, status: string) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status })
      .eq('id', id)
      .select();
      
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error updating message status:', error);
    return { data: null, error };
  }
};
