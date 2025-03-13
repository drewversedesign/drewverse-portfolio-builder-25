
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, FileText, Plus, Trash } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const AdminBlogManager = () => {
  // Sample blog posts data
  const blogPosts = [
    { id: 1, title: 'Top 10 Design Trends for 2023', author: 'Jane Smith', category: 'Design', status: 'Published', date: '2023-08-15', views: 1245 },
    { id: 2, title: 'How to Optimize Your Website for SEO', author: 'John Doe', category: 'Marketing', status: 'Published', date: '2023-08-10', views: 987 },
    { id: 3, title: 'The Future of Mobile App Development', author: 'Mike Johnson', category: 'Development', status: 'Draft', date: '2023-08-05', views: 0 },
    { id: 4, title: 'Building an Effective Brand Identity', author: 'Sarah Wilson', category: 'Branding', status: 'Published', date: '2023-07-28', views: 756 },
    { id: 5, title: 'User Experience Best Practices', author: 'Jane Smith', category: 'Design', status: 'Scheduled', date: '2023-08-20', views: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-lg font-medium">Blog Posts</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-gray-500" />
                      <span className="font-medium">{post.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'Published' ? 'bg-green-100 text-green-800' : 
                      post.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>{post.views}</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>Quick Edit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="post-title" className="text-sm font-medium">Post Title</label>
              <Input id="post-title" placeholder="Enter post title" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="post-category" className="text-sm font-medium">Category</label>
                <select id="post-category" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Design</option>
                  <option>Development</option>
                  <option>Marketing</option>
                  <option>Branding</option>
                  <option>Strategy</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="post-status" className="text-sm font-medium">Status</label>
                <select id="post-status" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="post-excerpt" className="text-sm font-medium">Excerpt</label>
              <Textarea id="post-excerpt" placeholder="Enter post excerpt" rows={3} />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="post-content" className="text-sm font-medium">Content</label>
              <Textarea id="post-content" placeholder="Enter post content" rows={6} />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogManager;
