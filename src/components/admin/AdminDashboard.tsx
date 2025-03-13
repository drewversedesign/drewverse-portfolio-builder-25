
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  Image, 
  Mail, 
  BarChart3, 
  Settings,
  Shield,
  Database,
  Code,
  Clock,
  Zap,
  FileImage,
  Globe
} from 'lucide-react';
import AdminHeader from './AdminHeader';
import AdminOverview from './AdminOverview';
import AdminUsers from './AdminUsers';
import AdminContent from './AdminContent';
import AdminProjects from './AdminProjects';
import AdminMessages from './AdminMessages';
import AdminAnalytics from './AdminAnalytics';
import AdminSettings from './AdminSettings';
import AdminSecurity from './AdminSecurity';
import AdminMediaLibrary from './AdminMediaLibrary';
import AdminBlogManager from './AdminBlogManager';
import AdminSEO from './AdminSEO';
import AdminBackup from './AdminBackup';
import AdminSystemLogs from './AdminSystemLogs';
import AdminEmailTemplates from './AdminEmailTemplates';
import AdminIntegrations from './AdminIntegrations';
import AdminActivityTimeline from './AdminActivityTimeline';
import AdminHealthCheck from './AdminHealthCheck';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Image },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'media', label: 'Media', icon: FileImage },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'seo', label: 'SEO', icon: Globe },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'logs', label: 'System Logs', icon: Database },
    { id: 'backup', label: 'Backup', icon: Clock },
    { id: 'emails', label: 'Email Templates', icon: Mail },
    { id: 'integrations', label: 'Integrations', icon: Code },
    { id: 'activity', label: 'Activity', icon: Clock },
    { id: 'health', label: 'Health Check', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverview />;
      case 'users':
        return <AdminUsers />;
      case 'content':
        return <AdminContent />;
      case 'projects':
        return <AdminProjects />;
      case 'blog':
        return <AdminBlogManager />;
      case 'media':
        return <AdminMediaLibrary />;
      case 'messages':
        return <AdminMessages />;
      case 'seo':
        return <AdminSEO />;
      case 'analytics':
        return <AdminAnalytics />;
      case 'security':
        return <AdminSecurity />;
      case 'logs':
        return <AdminSystemLogs />;
      case 'backup':
        return <AdminBackup />;
      case 'emails':
        return <AdminEmailTemplates />;
      case 'integrations':
        return <AdminIntegrations />;
      case 'activity':
        return <AdminActivityTimeline />;
      case 'health':
        return <AdminHealthCheck />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <AdminHeader />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow max-h-[80vh] overflow-y-auto">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Shield className="text-drew-purple h-6 w-6" />
                  <h3 className="font-semibold text-lg">Admin Panel</h3>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-drew-purple text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <tab.icon className="h-5 w-5" />
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-4"
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
