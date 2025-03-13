
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, Trash } from 'lucide-react';

const AdminProjects = () => {
  // Sample projects data
  const projects = [
    { id: 1, title: 'E-commerce Redesign', client: 'FashionBrand', category: 'Web Design', status: 'Completed' },
    { id: 2, title: 'Mobile App Development', client: 'TechCorp', category: 'Mobile App', status: 'In Progress' },
    { id: 3, title: 'Brand Identity Design', client: 'StartupX', category: 'Branding', status: 'Completed' },
    { id: 4, title: 'SEO Optimization', client: 'LocalBusiness', category: 'Marketing', status: 'In Progress' },
    { id: 5, title: 'Social Media Campaign', client: 'FoodCo', category: 'Marketing', status: 'Planned' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Project Management</CardTitle>
        <Button>Add New Project</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Project Title</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.title}</TableCell>
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
  );
};

export default AdminProjects;
