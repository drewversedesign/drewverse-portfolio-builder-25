
import React, { useEffect, useState } from 'react';
import DatabaseInfo from './dashboard/DatabaseInfo';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
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
import { supabase } from '@/integrations/supabase/client';

// Define type for stats
type Stat = {
  id: number;
  title: string;
  value: string;
  icon: React.ElementType;
  change: string;
  color: string;
};

const AdminOverview = () => {
  const [stats, setStats] = useState<Stat[]>([
    { id: 1, title: 'Total Users', value: 'Loading...', icon: Users, change: '0%', color: 'bg-blue-500' },
    { id: 2, title: 'Blog Posts', value: 'Loading...', icon: FileText, change: '0%', color: 'bg-green-500' },
    { id: 3, title: 'Projects', value: 'Loading...', icon: Image, change: '0%', color: 'bg-purple-500' },
    { id: 4, title: 'Messages', value: 'Loading...', icon: Mail, change: '0%', color: 'bg-amber-500' },
    { id: 5, title: 'Orders', value: 'Loading...', icon: ShoppingCart, change: '0%', color: 'bg-rose-500' },
    { id: 6, title: 'Page Views', value: 'Loading...', icon: Eye, change: '0%', color: 'bg-cyan-500' },
    { id: 7, title: 'Events', value: 'Loading...', icon: Calendar, change: '0%', color: 'bg-indigo-500' },
    { id: 8, title: 'Conversions', value: 'Loading...', icon: ArrowUpRight, change: '0%', color: 'bg-emerald-500' },
  ]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real data from Supabase
    const fetchStats = async () => {
      setLoading(true);
      try {
        // Fetch counts for different tables
        const [blogResponse, projectsResponse, servicesResponse, testimonialsResponse] = await Promise.all([
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('services').select('id', { count: 'exact', head: true }),
          supabase.from('testimonials').select('id', { count: 'exact', head: true })
        ]);

        // Update stats with real data
        const updatedStats = [...stats];
        
        // Update Blog Posts stat
        if (blogResponse.count !== null) {
          const blogIndex = updatedStats.findIndex(stat => stat.id === 2);
          if (blogIndex !== -1) {
            updatedStats[blogIndex] = {
              ...updatedStats[blogIndex],
              value: blogResponse.count.toString(),
              change: '+0%', // We could calculate this if we had historical data
            };
          }
        }
        
        // Update Projects stat
        if (projectsResponse.count !== null) {
          const projectsIndex = updatedStats.findIndex(stat => stat.id === 3);
          if (projectsIndex !== -1) {
            updatedStats[projectsIndex] = {
              ...updatedStats[projectsIndex],
              value: projectsResponse.count.toString(),
              change: '+0%',
            };
          }
        }
        
        // For other stats that don't have actual tables, we can leave them as placeholders
        // or set them to 0 or N/A
        updatedStats.forEach((stat, index) => {
          if (stat.value === 'Loading...') {
            updatedStats[index] = {
              ...stat,
              value: '0',
              change: '+0%',
            };
          }
        });
        
        setStats(updatedStats);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Set up real-time subscriptions for updates
    const blogChannel = supabase
      .channel('blog-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, () => fetchStats())
      .subscribe();
      
    const projectsChannel = supabase
      .channel('projects-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, () => fetchStats())
      .subscribe();
    
    const servicesChannel = supabase
      .channel('services-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, () => fetchStats())
      .subscribe();
    
    const testimonialsChannel = supabase
      .channel('testimonials-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, () => fetchStats())
      .subscribe();
    
    // Cleanup subscriptions on unmount
    return () => {
      supabase.removeChannel(blogChannel);
      supabase.removeChannel(projectsChannel);
      supabase.removeChannel(servicesChannel);
      supabase.removeChannel(testimonialsChannel);
    };
  }, []);

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
