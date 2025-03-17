
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { supabase } from '@/integrations/supabase/client';
import { topPagesData } from './analyticsData';

type PageData = {
  path: string;
  views: number;
  bounceRate: string;
};

const TopPagesTable = () => {
  const [pages, setPages] = useState<PageData[]>(topPagesData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopPages = async () => {
      setLoading(true);
      try {
        // Fetch projects and blog posts to derive top pages
        const [projectsResponse, blogPostsResponse] = await Promise.all([
          supabase.from('projects').select('slug, title').order('created_at', { ascending: false }).limit(3),
          supabase.from('blog_posts').select('slug, title').order('published_at', { ascending: false }).limit(2)
        ]);

        if (projectsResponse.error) throw projectsResponse.error;
        if (blogPostsResponse.error) throw blogPostsResponse.error;

        const newPages: PageData[] = [
          { path: '/', views: 3842, bounceRate: '42%' } // We keep homepage as is
        ];

        // Add projects to the pages
        if (projectsResponse.data) {
          projectsResponse.data.forEach((project, index) => {
            newPages.push({
              path: `/portfolio/${project.slug}`,
              views: Math.floor(Math.random() * 1000) + 500, // Random views between 500-1500
              bounceRate: `${Math.floor(Math.random() * 20) + 30}%` // Random bounce rate between 30-50%
            });
          });
        }

        // Add blog posts to the pages
        if (blogPostsResponse.data) {
          blogPostsResponse.data.forEach((post, index) => {
            newPages.push({
              path: `/blog/${post.slug}`,
              views: Math.floor(Math.random() * 800) + 300, // Random views between 300-1100
              bounceRate: `${Math.floor(Math.random() * 20) + 25}%` // Random bounce rate between 25-45%
            });
          });
        }

        setPages(newPages);
      } catch (error) {
        console.error('Error fetching top pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopPages();

    // Set up real-time subscriptions
    const projectsChannel = supabase
      .channel('top-pages-projects')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, fetchTopPages)
      .subscribe();

    const blogChannel = supabase
      .channel('top-pages-blog')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, fetchTopPages)
      .subscribe();

    return () => {
      supabase.removeChannel(projectsChannel);
      supabase.removeChannel(blogChannel);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-drew-purple"></div>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Bounce Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page, index) => (
                <TableRow key={index}>
                  <TableCell>{page.path}</TableCell>
                  <TableCell>{page.views.toLocaleString()}</TableCell>
                  <TableCell>{page.bounceRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TopPagesTable;
