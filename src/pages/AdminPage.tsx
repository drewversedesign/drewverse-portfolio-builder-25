
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminDashboard from '../components/admin/AdminDashboard';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AdminPage = () => {
  const [databaseConnected, setDatabaseConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from('projects').select('id').limit(1);
        
        if (error) {
          console.error('Database connection error:', error);
          toast.error('Could not connect to database. Some features may not work.');
          setDatabaseConnected(false);
        } else {
          console.log('Database connection successful');
          setDatabaseConnected(true);
        }
      } catch (err) {
        console.error('Error checking database connection:', err);
        toast.error('Failed to check database connection');
        setDatabaseConnected(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkDatabaseConnection();
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Drew Creative Agency</title>
        <meta name="description" content="Admin dashboard for Drew Creative Agency" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-drew-purple mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Connecting to database...</p>
          </div>
        </div>
      ) : (
        <>
          {!databaseConnected && (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 m-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Warning: Database connection issue detected. Some administrative features may not work properly.
                  </p>
                </div>
              </div>
            </div>
          )}
          <AdminDashboard />
        </>
      )}
    </>
  );
};

export default AdminPage;
