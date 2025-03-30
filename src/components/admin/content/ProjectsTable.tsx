
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { Edit, Eye, Trash, Plus, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ProjectEditor from './ProjectEditor';
import { Dialog, DialogContent } from '../../ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Link } from 'react-router-dom';

type Project = {
  id: string;
  title: string;
  category: string;
  client_name: string | null;
  featured: boolean;
  created_at: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  technologies: string[];
  link?: string;
};

const ProjectsTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Project deleted successfully');
      setProjects(projects.filter(project => project.id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project');
    }
  };

  const handleSave = () => {
    setShowEditor(false);
    setEditingProject(null);
    fetchProjects();
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
          <CardTitle>Projects</CardTitle>
          <Button onClick={() => {
            setEditingProject(null);
            setShowEditor(true);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
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
                  <TableHead>Client</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.category}</TableCell>
                    <TableCell>{project.client_name || '-'}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.featured ? 'Yes' : 'No'}
                      </span>
                    </TableCell>
                    <TableCell>{formatDate(project.created_at)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/portfolio/${project.slug || project.id}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(project)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Popover open={deleteConfirm === project.id} onOpenChange={(open) => {
                          if (!open) setDeleteConfirm(null);
                        }}>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setDeleteConfirm(project.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-4">
                            <div className="space-y-2">
                              <p className="text-sm font-medium">
                                Are you sure you want to delete this project?
                              </p>
                              <div className="flex space-x-2 justify-end">
                                <Button size="sm" variant="outline" onClick={() => setDeleteConfirm(null)}>
                                  Cancel
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                        {project.link && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {projects.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                      No projects found. Add your first project!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-3xl">
          <ProjectEditor 
            projectToEdit={editingProject} 
            onSave={handleSave} 
            onCancel={() => setShowEditor(false)} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsTable;
