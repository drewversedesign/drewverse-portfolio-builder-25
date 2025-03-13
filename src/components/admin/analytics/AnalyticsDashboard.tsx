
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

// Create types for our analytics data
type AnalyticsData = {
  totalProjects: number;
  totalBlogPosts: number;
  totalServices: number;
  totalTestimonials: number;
  featuredProjects: number;
  featuredPosts: number;
};

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoading(true);
        
        // Fetch counts from Supabase
        const [
          projectsResponse, 
          blogPostsResponse, 
          servicesResponse, 
          testimonialsResponse,
          featuredProjectsResponse,
          featuredPostsResponse
        ] = await Promise.all([
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
          supabase.from('services').select('id', { count: 'exact', head: true }),
          supabase.from('testimonials').select('id', { count: 'exact', head: true }),
          supabase.from('projects').select('id', { count: 'exact', head: true }).eq('featured', true),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('featured', true)
        ]);

        if (projectsResponse.error) throw new Error(projectsResponse.error.message);
        if (blogPostsResponse.error) throw new Error(blogPostsResponse.error.message);
        if (servicesResponse.error) throw new Error(servicesResponse.error.message);
        if (testimonialsResponse.error) throw new Error(testimonialsResponse.error.message);
        if (featuredProjectsResponse.error) throw new Error(featuredProjectsResponse.error.message);
        if (featuredPostsResponse.error) throw new Error(featuredPostsResponse.error.message);

        setAnalyticsData({
          totalProjects: projectsResponse.count || 0,
          totalBlogPosts: blogPostsResponse.count || 0,
          totalServices: servicesResponse.count || 0,
          totalTestimonials: testimonialsResponse.count || 0,
          featuredProjects: featuredProjectsResponse.count || 0,
          featuredPosts: featuredPostsResponse.count || 0
        });
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();

    // Set up real-time subscription for updates
    const analyticsChannel = supabase
      .channel('analytics-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, () => {
        fetchAnalyticsData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(analyticsChannel);
    };
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Content Statistics</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-8 w-8 animate-spin text-drew-purple" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Content Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-500">Error loading analytics: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Projects</p>
            <h3 className="text-2xl font-bold text-drew-purple">{analyticsData?.totalProjects}</h3>
            <p className="text-xs text-gray-500 mt-1">Featured: {analyticsData?.featuredProjects}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Blog Posts</p>
            <h3 className="text-2xl font-bold text-drew-purple">{analyticsData?.totalBlogPosts}</h3>
            <p className="text-xs text-gray-500 mt-1">Featured: {analyticsData?.featuredPosts}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Services</p>
            <h3 className="text-2xl font-bold text-drew-purple">{analyticsData?.totalServices}</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Testimonials</p>
            <h3 className="text-2xl font-bold text-drew-purple">{analyticsData?.totalTestimonials}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;
