
import React from 'react';
import { AlertTriangle, Check, Wifi, WifiOff } from 'lucide-react';

interface ConnectionStatusProps {
  supportsRealtime: boolean;
}

const ConnectionStatus = ({ supportsRealtime }: ConnectionStatusProps) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg ${
      supportsRealtime 
        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900' 
        : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900'
    }`}>
      <div className="flex items-center gap-4">
        {supportsRealtime ? (
          <>
            <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full">
              <Wifi className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                <h3 className="font-medium text-green-800 dark:text-green-300">
                  Connected to Supabase
                </h3>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                Real-time updates are active. Changes to database will be reflected automatically.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-amber-100 dark:bg-amber-900/40 p-2 rounded-full">
              <WifiOff className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-medium text-amber-800 dark:text-amber-300">
                  Limited Connection
                </h3>
              </div>
              <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                Real-time updates are not available. Manual refresh required to see database changes.
              </p>
            </div>
          </>
        )}
      </div>
      
      <div className="text-right">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          supportsRealtime 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-300' 
            : 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300'
        }`}>
          {supportsRealtime ? 'Active' : 'Limited'}
        </span>
      </div>
    </div>
  );
};

export default ConnectionStatus;
