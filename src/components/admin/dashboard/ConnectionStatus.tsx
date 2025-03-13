
import React, { useEffect, useState } from 'react';
import { Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ConnectionStatusProps {
  supportsRealtime: boolean;
}

const ConnectionStatus = ({ supportsRealtime }: ConnectionStatusProps) => {
  const [isConnected, setIsConnected] = useState(supportsRealtime);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    // Set initial state based on props
    setIsConnected(supportsRealtime);

    // Set up a channel to test real-time connection
    const testChannel = supabase.channel('connection-test')
      .on('presence', { event: 'sync' }, () => {
        console.log('Real-time sync event received');
        setIsConnected(true);
        setLastUpdated(new Date());
      })
      .on('presence', { event: 'join' }, () => {
        console.log('Real-time join event received');
        setIsConnected(true);
        setLastUpdated(new Date());
      })
      .on('broadcast', { event: 'ping' }, () => {
        console.log('Received ping broadcast');
        setIsConnected(true);
        setLastUpdated(new Date());
      })
      .subscribe((status) => {
        console.log('Connection status:', status);
        if (status === 'SUBSCRIBED') {
          setIsConnected(true);
          setLastUpdated(new Date());
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          setIsConnected(false);
        }
      });

    // Periodically ping to ensure connection stays active
    const pingInterval = setInterval(() => {
      testChannel.send({
        type: 'broadcast',
        event: 'ping',
        payload: { timestamp: new Date().toISOString() }
      }).catch(err => {
        console.error('Failed to send ping:', err);
        setIsConnected(false);
      });
    }, 30000); // Every 30 seconds

    return () => {
      clearInterval(pingInterval);
      supabase.removeChannel(testChannel);
    };
  }, [supportsRealtime]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (isConnected) {
    return (
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300">
        <p className="text-sm flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          Real-time updates are active and working. Last activity: {formatTime(lastUpdated)}
        </p>
      </div>
    );
  } 
  
  return (
    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300">
      <p className="text-sm flex items-center">
        <AlertCircle className="h-4 w-4 mr-2" />
        Real-time updates may not be available. Changes may require a page refresh. Last check: {formatTime(lastUpdated)}
      </p>
    </div>
  );
};

export default ConnectionStatus;
