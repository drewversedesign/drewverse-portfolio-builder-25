
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function useSupabaseConnection() {
  const [supportsRealtime, setSupportsRealtime] = useState(true);
  
  useEffect(() => {
    // Check connection to Supabase
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('id').limit(1);
        
        if (error) {
          console.error('Error connecting to Supabase:', error);
          toast.error('Database connection failed. Some features may not work properly.', {
            duration: 5000,
          });
          setSupportsRealtime(false);
        } else {
          console.log('Successfully connected to Supabase');
          
          // Set up a real-time subscription to test if it works
          const channel = supabase
            .channel('connection-test')
            .on('presence', { event: 'sync' }, () => {
              setSupportsRealtime(true);
            })
            .subscribe((status) => {
              if (status !== 'SUBSCRIBED') {
                setSupportsRealtime(false);
              }
            });
            
          // Clean up subscription after 5 seconds
          setTimeout(() => {
            supabase.removeChannel(channel);
          }, 5000);
        }
      } catch (err) {
        console.error('Error checking Supabase connection:', err);
        toast.error('Database connection check failed.');
        setSupportsRealtime(false);
      }
    };
    
    checkConnection();
  }, []);

  return { supportsRealtime };
}
