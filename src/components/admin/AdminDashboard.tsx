
import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './dashboard/AdminSidebar';
import AdminContentRenderer from './dashboard/AdminContent';
import ConnectionStatus from './dashboard/ConnectionStatus';
import { useSupabaseConnection } from '@/hooks/use-supabase-connection';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { supportsRealtime } = useSupabaseConnection();
  
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <AdminHeader />
        
        <ConnectionStatus supportsRealtime={supportsRealtime} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          {/* Main Content */}
          <AdminContentRenderer activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
