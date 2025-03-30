
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { Edit, Eye, Trash, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import BlogPostEditor from './BlogPostEditor';
import { Dialog, DialogContent } from '../../ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Link } from 'react-router-dom';

type BlogPost = {
  id: string;
  title: string;
  category: string;
  published: boolean;
  featured: boolean;
  published_at: string;
  author: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  tags: string[];
};

const BlogPostsTable = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Blog post deleted successfully');
      setPosts(posts.filter(post => post.id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Failed to delete blog post');
    }
  };

  const handleSave = () => {
    setShowEditor(false);
    setEditingPost(null);
    fetchPosts();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Blog Posts</CardTitle>
          <Button onClick={() => {
            setEditingPost(null);
            setShowEditor(true);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Post
          </Button>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.published ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.featured ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.featured ? 'Yes' : 'No'}
                      </span>
                    </TableCell>
                    <TableCell>{formatDate(post.published_at)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.slug || post.id}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Popover open={deleteConfirm === post.id} onOpenChange={(open) => {
                          if (!open) setDeleteConfirm(null);
                        }}>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setDeleteConfirm(post.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-4">
                            <div className="space-y-2">
                              <p className="text-sm font-medium">
                                Are you sure you want to delete this blog post?
                              </p>
                              <div className="flex space-x-2 justify-end">
                                <Button size="sm" variant="outline" onClick={() => setDeleteConfirm(null)}>
                                  Cancel
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {posts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No blog posts found. Add your first post!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-4xl">
          <BlogPostEditor 
            postToEdit={editingPost} 
            onSave={handleSave} 
            onCancel={() => setShowEditor(false)} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogPostsTable;
