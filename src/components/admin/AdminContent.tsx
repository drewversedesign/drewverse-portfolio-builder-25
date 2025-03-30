
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import ProjectsTable from './content/ProjectsTable';
import BlogPostsTable from './content/BlogPostsTable';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, Trash, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ProjectEditor from './content/ProjectEditor';
import BlogPostEditor from './content/BlogPostEditor';
import { toast } from 'sonner';

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showSectionEditor, setShowSectionEditor] = useState(false);
  
  const sections = [
    { id: 1, title: 'Homepage Hero', type: 'Section', status: 'Published', lastUpdated: '2023-07-15' },
    { id: 2, title: 'About Us Page', type: 'Page', status: 'Published', lastUpdated: '2023-06-22' },
    { id: 3, title: 'Summer Campaign', type: 'Section', status: 'Draft', lastUpdated: '2023-07-10' },
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
              <Button onClick={() => setShowSectionEditor(true)}>
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
                  {sections.map((section) => (
                    <TableRow key={section.id}>
                      <TableCell>{section.id}</TableCell>
                      <TableCell>{section.title}</TableCell>
                      <TableCell>{section.type}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          section.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {section.status}
                        </span>
                      </TableCell>
                      <TableCell>{section.lastUpdated}</TableCell>
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
          
          <Dialog open={showSectionEditor} onOpenChange={setShowSectionEditor}>
            <DialogContent className="max-w-3xl">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="section-title" className="text-sm font-medium">Section Title</label>
                      <input 
                        id="section-title" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter section title"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="section-type" className="text-sm font-medium">Section Type</label>
                      <select 
                        id="section-type" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="Section">Section</option>
                        <option value="Page">Page</option>
                        <option value="Header">Header</option>
                        <option value="Footer">Footer</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="section-content" className="text-sm font-medium">Content</label>
                      <textarea 
                        id="section-content" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md h-32" 
                        placeholder="Enter section content"
                      ></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="section-status" className="text-sm font-medium">Status</label>
                      <select 
                        id="section-status" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => setShowSectionEditor(false)}>
                        Cancel
                      </Button>
                      <Button type="button" onClick={() => {
                        toast.success('Section created successfully');
                        setShowSectionEditor(false);
                      }}>
                        Save Section
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;
