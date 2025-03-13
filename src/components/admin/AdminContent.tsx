
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import ProjectsTable from './content/ProjectsTable';
import BlogPostsTable from './content/BlogPostsTable';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, Trash, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  // This is the sample content data from the original file
  const contents = [
    { id: 1, title: 'Homepage Hero', type: 'Section', status: 'Published', lastUpdated: '2023-07-15' },
    { id: 2, title: 'About Us Page', type: 'Page', status: 'Published', lastUpdated: '2023-06-22' },
    { id: 3, title: 'Summer Campaign', type: 'Blog Post', status: 'Draft', lastUpdated: '2023-07-10' },
    { id: 4, title: 'Services Overview', type: 'Section', status: 'Published', lastUpdated: '2023-05-18' },
    { id: 5, title: 'Client Testimonials', type: 'Section', status: 'Published', lastUpdated: '2023-07-01' },
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="projects" onValueChange={setActiveTab} value={activeTab}>
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="sections">Site Sections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="mt-6">
          <ProjectsTable />
        </TabsContent>
        
        <TabsContent value="blog" className="mt-6">
          <BlogPostsTable />
        </TabsContent>
        
        <TabsContent value="sections" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Site Sections</CardTitle>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Section
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contents.map((content) => (
                    <TableRow key={content.id}>
                      <TableCell>{content.id}</TableCell>
                      <TableCell>{content.title}</TableCell>
                      <TableCell>{content.type}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          content.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {content.status}
                        </span>
                      </TableCell>
                      <TableCell>{content.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;
