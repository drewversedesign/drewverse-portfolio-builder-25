
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminLogin from '../components/admin/auth/AdminLogin';
import SEO from '../components/SEO';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AdminPage = () => {
  const [databaseConnected, setDatabaseConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is already authenticated
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
    
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
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    toast.info('You have been logged out');
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-drew-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Connecting to database...</p>
        </div>
      </div>
    );
  }
  
  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <>
        <SEO title="Admin Login | DrewVerse Design" description="Admin login page for DrewVerse Design. Restricted access." keywords="admin, login, DrewVerse Design" ogType="website" ogImage="/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png" metadata={[{name: 'robots', content: 'noindex, nofollow'}]} />
        <AdminLogin onLogin={handleLogin} />
      </>
    );
  }
  
  // If authenticated, show admin dashboard
  return (
    <>
      <SEO title="Admin Dashboard | DrewVerse Design" description="Admin dashboard for DrewVerse Design. Restricted access." keywords="admin, dashboard, DrewVerse Design" ogType="website" ogImage="/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png" metadata={[{name: 'robots', content: 'noindex, nofollow'}]} />
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
      <AdminDashboard onLogout={handleLogout} />
    </>
  );
};

export default AdminPage;
