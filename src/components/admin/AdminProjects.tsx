
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, Trash, Plus, Filter, ArrowUpDown } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  startDate: string;
  endDate?: string;
  description: string;
  featured: boolean;
}

const AdminProjects = () => {
  // Sample projects data
  const [projects, setProjects] = useState<Project[]>([
    { 
      id: 1, 
      title: 'E-commerce Redesign', 
      client: 'FashionBrand', 
      category: 'Web Design', 
      status: 'Completed',
      startDate: '2023-01-15',
      endDate: '2023-03-20',
      description: 'Complete redesign of the e-commerce website with focus on improved user experience and mobile responsiveness.',
      featured: true
    },
    { 
      id: 2, 
      title: 'Mobile App Development', 
      client: 'TechCorp', 
      category: 'Mobile App', 
      status: 'In Progress',
      startDate: '2023-04-10',
      description: 'Developing a native mobile application for iOS and Android platforms.',
      featured: false
    },
    { 
      id: 3, 
      title: 'Brand Identity Design', 
      client: 'StartupX', 
      category: 'Branding', 
      status: 'Completed',
      startDate: '2023-02-05',
      endDate: '2023-03-15',
      description: 'Creating a complete brand identity including logo, color scheme, typography, and brand guidelines.',
      featured: true
    },
    { 
      id: 4, 
      title: 'SEO Optimization', 
      client: 'LocalBusiness', 
      category: 'Marketing', 
      status: 'In Progress',
      startDate: '2023-05-20',
      description: 'Comprehensive SEO strategy and implementation to improve search engine rankings.',
      featured: false
    },
    { 
      id: 5, 
      title: 'Social Media Campaign', 
      client: 'FoodCo', 
      category: 'Marketing', 
      status: 'Planned',
      startDate: '2023-07-01',
      description: 'Planning and executing a social media campaign across multiple platforms.',
      featured: false
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    client: '',
    category: '',
    status: 'Planned',
    startDate: '',
    description: '',
    featured: false
  });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortField, setSortField] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleAddProject = () => {
    if (!newProject.title || !newProject.client || !newProject.category) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    setProjects([...projects, { ...newProject, id: newId }]);
    setIsAddDialogOpen(false);
    setNewProject({
      title: '',
      client: '',
      category: '',
      status: 'Planned',
      startDate: '',
      description: '',
      featured: false
    });
    toast.success('Project added successfully');
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
    setDeleteConfirmId(null);
    toast.success('Project deleted successfully');
  };

  const handleEditProject = () => {
    if (!editingProject) return;
    
    setProjects(projects.map(project => 
      project.id === editingProject.id ? editingProject : project
    ));
    setIsEditDialogOpen(false);
    setEditingProject(null);
    toast.success('Project updated successfully');
  };

  const handleView = (project: Project) => {
    setViewingProject(project);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject({...project});
    setIsEditDialogOpen(true);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredProjects = projects
    .filter(project => filterCategory === 'all' || project.category === filterCategory)
    .filter(project => filterStatus === 'all' || project.status === filterStatus)
    .sort((a, b) => {
      const aValue = a[sortField as keyof Project];
      const bValue = b[sortField as keyof Project];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      // For numeric or other types
      if (aValue === bValue) return 0;
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });

  const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
  const statusOptions = ['Planned', 'In Progress', 'Completed'];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Project Management</CardTitle>
        <div className="flex space-x-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>
                  Enter the details for the new project
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input 
                      id="title" 
                      value={newProject.title} 
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client">Client Name *</Label>
                    <Input 
                      id="client" 
                      value={newProject.client} 
                      onChange={(e) => setNewProject({...newProject, client: e.target.value})} 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Input 
                      id="category" 
                      value={newProject.category} 
                      onChange={(e) => setNewProject({...newProject, category: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select 
                      value={newProject.status} 
                      onValueChange={(value) => setNewProject({...newProject, status: value as any})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Planned">Planned</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input 
                      id="startDate" 
                      type="date" 
                      value={newProject.startDate} 
                      onChange={(e) => setNewProject({...newProject, startDate: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input 
                      id="endDate" 
                      type="date" 
                      value={newProject.endDate || ''} 
                      onChange={(e) => setNewProject({...newProject, endDate: e.target.value})} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={newProject.description} 
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})} 
                    rows={3}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="featured" 
                    className="rounded text-purple-600" 
                    checked={newProject.featured}
                    onChange={(e) => setNewProject({...newProject, featured: e.target.checked})} 
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddProject}>Add Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[160px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {statusOptions.map(status => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort('id')}>
                ID
                {sortField === 'id' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('title')}>
                Project Title
                {sortField === 'title' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('client')}>
                Client
                {sortField === 'client' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('category')}>
                Category
                {sortField === 'category' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
                Status
                {sortField === 'status' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  No projects found. Adjust filters or add a new project.
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.id}</TableCell>
                  <TableCell>
                    <div className="font-medium flex items-center">
                      {project.title}
                      {project.featured && (
                        <span className="ml-2 px-1.5 py-0.5 bg-purple-100 text-purple-800 text-xs rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleView(project)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(project)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setDeleteConfirmId(project.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        
        {/* Dialogs */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
              <DialogDescription>
                Make changes to the project details
              </DialogDescription>
            </DialogHeader>
            {editingProject && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-title">Project Title</Label>
                    <Input 
                      id="edit-title" 
                      value={editingProject.title} 
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-client">Client Name</Label>
                    <Input 
                      id="edit-client" 
                      value={editingProject.client} 
                      onChange={(e) => setEditingProject({...editingProject, client: e.target.value})} 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-category">Category</Label>
                    <Input 
                      id="edit-category" 
                      value={editingProject.category} 
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-status">Status</Label>
                    <Select 
                      value={editingProject.status} 
                      onValueChange={(value) => setEditingProject({...editingProject, status: value as any})}
                    >
                      <SelectTrigger id="edit-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Planned">Planned</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-startDate">Start Date</Label>
                    <Input 
                      id="edit-startDate" 
                      type="date" 
                      value={editingProject.startDate} 
                      onChange={(e) => setEditingProject({...editingProject, startDate: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-endDate">End Date</Label>
                    <Input 
                      id="edit-endDate" 
                      type="date" 
                      value={editingProject.endDate || ''} 
                      onChange={(e) => setEditingProject({...editingProject, endDate: e.target.value})} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea 
                    id="edit-description" 
                    value={editingProject.description} 
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})} 
                    rows={3}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="edit-featured" 
                    className="rounded text-purple-600" 
                    checked={editingProject.featured}
                    onChange={(e) => setEditingProject({...editingProject, featured: e.target.checked})} 
                  />
                  <Label htmlFor="edit-featured">Featured Project</Label>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleEditProject}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Dialog open={Boolean(deleteConfirmId)} onOpenChange={() => setDeleteConfirmId(null)}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this project? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>Cancel</Button>
              <Button variant="destructive" onClick={() => deleteConfirmId && handleDeleteProject(deleteConfirmId)}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Project Details</DialogTitle>
            </DialogHeader>
            {viewingProject && (
              <div className="py-4">
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Project Title</h4>
                    <p className="mt-1">{viewingProject.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Client</h4>
                    <p className="mt-1">{viewingProject.client}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p className="mt-1">{viewingProject.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Status</h4>
                    <span className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      viewingProject.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : viewingProject.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {viewingProject.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Featured</h4>
                    <p className="mt-1">{viewingProject.featured ? 'Yes' : 'No'}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Start Date</h4>
                    <p className="mt-1">{viewingProject.startDate}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">End Date</h4>
                    <p className="mt-1">{viewingProject.endDate || 'Not set'}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500">Description</h4>
                  <p className="mt-1">{viewingProject.description || 'No description provided'}</p>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>Close</Button>
              {viewingProject && (
                <Button onClick={() => {
                  setIsViewDialogOpen(false);
                  handleEdit(viewingProject);
                }}>
                  Edit
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AdminProjects;
