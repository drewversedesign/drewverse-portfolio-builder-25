
import React from 'react';
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

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
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

  return (
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
  );
};

export default AdminSidebar;
