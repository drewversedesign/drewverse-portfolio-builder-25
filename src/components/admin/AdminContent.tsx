
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Eye, Trash } from 'lucide-react';

const AdminContent = () => {
  // Sample content data
  const contents = [
    { id: 1, title: 'Homepage Hero', type: 'Section', status: 'Published', lastUpdated: '2023-07-15' },
    { id: 2, title: 'About Us Page', type: 'Page', status: 'Published', lastUpdated: '2023-06-22' },
    { id: 3, title: 'Summer Campaign', type: 'Blog Post', status: 'Draft', lastUpdated: '2023-07-10' },
    { id: 4, title: 'Services Overview', type: 'Section', status: 'Published', lastUpdated: '2023-05-18' },
    { id: 5, title: 'Client Testimonials', type: 'Section', status: 'Published', lastUpdated: '2023-07-01' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Content Management</CardTitle>
        <Button>Add New Content</Button>
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
  );
};

export default AdminContent;
