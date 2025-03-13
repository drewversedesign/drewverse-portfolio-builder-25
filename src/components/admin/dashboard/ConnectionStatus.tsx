
import React from 'react';
import { Zap } from 'lucide-react';

interface ConnectionStatusProps {
  supportsRealtime: boolean;
}

const ConnectionStatus = ({ supportsRealtime }: ConnectionStatusProps) => {
  if (supportsRealtime) return null;
  
  return (
    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300">
      <p className="text-sm flex items-center">
        <Zap className="h-4 w-4 mr-2" />
        Real-time updates may not be available. Changes may require a page refresh.
      </p>
    </div>
  );
};

export default ConnectionStatus;
