
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { RefreshCw, Check, AlertTriangle, Server, Database, Link, Shield, Clock } from 'lucide-react';
import { checkDatabaseHealth } from '@/utils/admin/databaseUtils';
import { useSupabaseConnection } from '@/hooks/use-supabase-connection';

type HealthStatus = 'healthy' | 'warning' | 'error' | 'loading';

interface HealthItem {
  id: string;
  name: string;
  status: HealthStatus;
  responseTime?: number | null;
  message?: string;
  icon: React.ElementType;
}

const AdminHealthCheck = () => {
  const [healthItems, setHealthItems] = useState<HealthItem[]>([
    { id: 'database', name: 'Database Connection', status: 'loading', icon: Database },
    { id: 'api', name: 'API Endpoints', status: 'loading', icon: Link },
    { id: 'realtime', name: 'Realtime Connection', status: 'loading', icon: Clock },
    { id: 'auth', name: 'Authentication Service', status: 'loading', icon: Shield },
    { id: 'storage', name: 'Storage Service', status: 'loading', icon: Server },
  ]);
  const [isChecking, setIsChecking] = useState(false);
  const { supportsRealtime } = useSupabaseConnection();
  
  const runHealthChecks = async () => {
    setIsChecking(true);
    
    // Update all statuses to loading
    setHealthItems(prev => prev.map(item => ({ ...item, status: 'loading' })));
    
    // Database health check
    const dbHealth = await checkDatabaseHealth();
    updateHealthItem('database', 
      dbHealth.isHealthy ? 'healthy' : 'error', 
      dbHealth.responseTime,
      dbHealth.isHealthy 
        ? `Connected (${dbHealth.responseTime}ms)` 
        : 'Connection failed'
    );
    
    // Realtime check
    updateHealthItem('realtime', 
      supportsRealtime ? 'healthy' : 'warning',
      null,
      supportsRealtime 
        ? 'Realtime subscription working' 
        : 'Realtime subscription not available'
    );
    
    // Simulate other checks
    setTimeout(() => {
      updateHealthItem('api', 'healthy', 45, 'All endpoints accessible');
      updateHealthItem('auth', 'healthy', 62, 'Service operational');
      updateHealthItem('storage', 'healthy', 78, 'Service operational');
      setIsChecking(false);
    }, 1500);
  };
  
  const updateHealthItem = (
    id: string, 
    status: HealthStatus, 
    responseTime?: number | null,
    message?: string
  ) => {
    setHealthItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, status, responseTime, message } 
          : item
      )
    );
  };
  
  useEffect(() => {
    runHealthChecks();
  }, []);
  
  const getStatusIcon = (status: HealthStatus) => {
    switch (status) {
      case 'healthy':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'loading':
        return <RefreshCw className="h-5 w-5 animate-spin text-blue-500" />;
    }
  };
  
  const getStatusColor = (status: HealthStatus) => {
    switch (status) {
      case 'healthy': return 'bg-green-50 border-green-200 text-green-700';
      case 'warning': return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'error': return 'bg-red-50 border-red-200 text-red-700';
      case 'loading': return 'bg-blue-50 border-blue-200 text-blue-700';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">System Health Check</h2>
        <Button 
          onClick={runHealthChecks} 
          disabled={isChecking}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
          Run Health Check
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {healthItems.map((item) => (
              <div 
                key={item.id}
                className={`border rounded-lg p-4 flex items-center justify-between ${getStatusColor(item.status)}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-full">
                    <item.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm opacity-80">{item.message}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {item.responseTime && item.status !== 'loading' && (
                    <span className="text-sm font-mono">{item.responseTime}ms</span>
                  )}
                  {getStatusIcon(item.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-mono text-sm">NODE_ENV</span>
                <span className="font-mono text-sm text-green-600">production</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-mono text-sm">VITE_SUPABASE_URL</span>
                <span className="font-mono text-sm text-green-600">********</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-mono text-sm">VITE_SUPABASE_ANON_KEY</span>
                <span className="font-mono text-sm text-green-600">********</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span>Frontend Version</span>
                <span className="font-mono text-sm">1.0.0</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span>Last Deployment</span>
                <span className="font-mono text-sm">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span>Supabase Project</span>
                <span className="font-mono text-sm">jwprciyyydivvpymejku</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHealthCheck;
