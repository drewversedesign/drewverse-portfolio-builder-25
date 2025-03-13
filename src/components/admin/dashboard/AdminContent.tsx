
import React from 'react';
import { motion } from 'framer-motion';
import AdminOverview from '../AdminOverview';
import AdminUsers from '../AdminUsers';
import AdminContent from '../AdminContent';
import AdminProjects from '../AdminProjects';
import AdminMessages from '../AdminMessages';
import AdminAnalytics from '../AdminAnalytics';
import AdminSettings from '../AdminSettings';
import AdminSecurity from '../AdminSecurity';
import AdminMediaLibrary from '../AdminMediaLibrary';
import AdminBlogManager from '../AdminBlogManager';
import AdminSEO from '../AdminSEO';
import AdminBackup from '../AdminBackup';
import AdminSystemLogs from '../AdminSystemLogs';
import AdminEmailTemplates from '../AdminEmailTemplates';
import AdminIntegrations from '../AdminIntegrations';
import AdminActivityTimeline from '../AdminActivityTimeline';
import AdminHealthCheck from '../AdminHealthCheck';

interface AdminContentProps {
  activeTab: string;
}

const AdminContentRenderer = ({ activeTab }: AdminContentProps) => {
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="lg:col-span-4"
    >
      {renderTabContent()}
    </motion.div>
  );
};

export default AdminContentRenderer;
