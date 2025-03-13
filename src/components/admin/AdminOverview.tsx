
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { supabase } from '@/integrations/supabase/client';

type OverviewStats = {
  totalProjects: number;
  totalBlogPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalTestimonials: number;
  totalServices: number;
};

const AdminOverview = () => {
  const [stats, setStats] = useState<OverviewStats>({
    totalProjects: 0,
    totalBlogPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalTestimonials: 0,
    totalServices: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Fetch counts from Supabase
        const [
          projectsResponse, 
          blogPostsResponse, 
          publishedPostsResponse,
          draftPostsResponse,
          testimonialsResponse,
          servicesResponse
        ] = await Promise.all([
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('published', true),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('published', false),
          supabase.from('testimonials').select('id', { count: 'exact', head: true }),
          supabase.from('services').select('id', { count: 'exact', head: true })
        ]);

        if (projectsResponse.error) throw new Error(projectsResponse.error.message);
        if (blogPostsResponse.error) throw new Error(blogPostsResponse.error.message);
        if (publishedPostsResponse.error) throw new Error(publishedPostsResponse.error.message);
        if (draftPostsResponse.error) throw new Error(draftPostsResponse.error.message);
        if (testimonialsResponse.error) throw new Error(testimonialsResponse.error.message);
        if (servicesResponse.error) throw new Error(servicesResponse.error.message);

        setStats({
          totalProjects: projectsResponse.count || 0,
          totalBlogPosts: blogPostsResponse.count || 0,
          publishedPosts: publishedPostsResponse.count || 0,
          draftPosts: draftPostsResponse.count || 0,
          totalTestimonials: testimonialsResponse.count || 0,
          totalServices: servicesResponse.count || 0
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching overview stats:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Set up real-time subscription for updates
    const statsChannel = supabase
      .channel('overview-stats-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, () => {
        fetchStats();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(statsChannel);
    };
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="text-red-500">Error Loading Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 dark:text-red-300">{error}</p>
          <p className="mt-2">Please check your database connection and try again.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Projects</CardTitle>
          <CardDescription>Total portfolio projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-drew-purple">{stats.totalProjects}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Blog Posts</CardTitle>
          <CardDescription>Total articles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-drew-purple">{stats.totalBlogPosts}</div>
          <div className="text-sm text-gray-500 mt-1">
            <span className="text-green-500">{stats.publishedPosts} published</span>
            {' • '}
            <span className="text-amber-500">{stats.draftPosts} drafts</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Testimonials</CardTitle>
          <CardDescription>Client reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-drew-purple">{stats.totalTestimonials}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Services</CardTitle>
          <CardDescription>Service offerings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-drew-purple">{stats.totalServices}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;
