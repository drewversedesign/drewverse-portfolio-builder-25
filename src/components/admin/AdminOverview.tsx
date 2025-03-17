
import React from 'react';
import DatabaseInfo from './dashboard/DatabaseInfo';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Users, 
  FileText, 
  Image, 
  Mail, 
  ShoppingCart,
  Eye,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

const AdminOverview = () => {
  const stats = [
    { id: 1, title: 'Total Users', value: '0', icon: Users, change: '+0%', color: 'bg-blue-500' },
    { id: 2, title: 'Blog Posts', value: '0', icon: FileText, change: '+0%', color: 'bg-green-500' },
    { id: 3, title: 'Projects', value: '0', icon: Image, change: '+0%', color: 'bg-purple-500' },
    { id: 4, title: 'Messages', value: '0', icon: Mail, change: '+0%', color: 'bg-amber-500' },
    { id: 5, title: 'Orders', value: '0', icon: ShoppingCart, change: '+0%', color: 'bg-rose-500' },
    { id: 6, title: 'Page Views', value: '0', icon: Eye, change: '+0%', color: 'bg-cyan-500' },
    { id: 7, title: 'Events', value: '0', icon: Calendar, change: '+0%', color: 'bg-indigo-500' },
    { id: 8, title: 'Conversions', value: '0', icon: ArrowUpRight, change: '+0%', color: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full text-white`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Database Information */}
      <DatabaseInfo />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">No recent activity to display</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="w-full">New Project</Button>
            <Button className="w-full">New Blog Post</Button>
            <Button className="w-full">View Messages</Button>
            <Button className="w-full">SEO Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
