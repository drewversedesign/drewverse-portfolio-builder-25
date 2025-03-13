
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function useSupabaseConnection() {
  const [supportsRealtime, setSupportsRealtime] = useState(true);
  const [isConnecting, setIsConnecting] = useState(true);
  
  useEffect(() => {
    let connectionTimeout: NodeJS.Timeout;
    let connectionTestChannel: any;
    
    // Check connection to Supabase
    const checkConnection = async () => {
      setIsConnecting(true);
      try {
        // Check basic database connection
        const { data, error } = await supabase.from('projects').select('id').limit(1);
        
        if (error) {
          console.error('Error connecting to Supabase:', error);
          toast.error('Database connection failed. Some features may not work properly.', {
            duration: 5000,
          });
          setSupportsRealtime(false);
          setIsConnecting(false);
          return;
        } 
        
        console.log('Successfully connected to Supabase');
        
        // Set a timeout - if we don't get a real-time event within 5 seconds, assume it's not working
        connectionTimeout = setTimeout(() => {
          console.warn('Real-time subscription timed out');
          setSupportsRealtime(false);
          setIsConnecting(false);
        }, 5000);
        
        // Set up a real-time subscription to test if it works
        connectionTestChannel = supabase
          .channel('connection-test')
          .on('presence', { event: 'sync' }, () => {
            console.log('Real-time presence sync working');
            clearTimeout(connectionTimeout);
            setSupportsRealtime(true);
            setIsConnecting(false);
          })
          .on('broadcast', { event: 'connection_test' }, () => {
            console.log('Real-time broadcast received');
            clearTimeout(connectionTimeout);
            setSupportsRealtime(true);
            setIsConnecting(false);
          })
          .subscribe((status) => {
            console.log('Real-time subscription status:', status);
            if (status === 'SUBSCRIBED') {
              // Send a test broadcast to ourselves
              connectionTestChannel.send({
                type: 'broadcast',
                event: 'connection_test',
                payload: { timestamp: new Date().toISOString() }
              });
            } else if (status === 'SUBSCRIPTION_ERROR' || status === 'CHANNEL_ERROR') {
              clearTimeout(connectionTimeout);
              console.error('Subscription error:', status);
              setSupportsRealtime(false);
              setIsConnecting(false);
            }
          });
      } catch (err) {
        clearTimeout(connectionTimeout);
        console.error('Error checking Supabase connection:', err);
        toast.error('Database connection check failed.');
        setSupportsRealtime(false);
        setIsConnecting(false);
      }
    };
    
    checkConnection();
    
    // Re-check connection periodically
    const connectionCheckInterval = setInterval(() => {
      checkConnection();
    }, 300000); // Every 5 minutes
    
    return () => {
      clearTimeout(connectionTimeout);
      clearInterval(connectionCheckInterval);
      if (connectionTestChannel) {
        supabase.removeChannel(connectionTestChannel);
      }
    };
  }, []);

  return { supportsRealtime, isConnecting };
}
