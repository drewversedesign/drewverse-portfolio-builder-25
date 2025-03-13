
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Eye, Trash, Check } from 'lucide-react';

const AdminMessages = () => {
  // Sample messages data
  const messages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', date: '2023-07-20', read: false },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', subject: 'Collaboration Opportunity', date: '2023-07-18', read: true },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', subject: 'Website Redesign', date: '2023-07-15', read: false },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', subject: 'Quote Request', date: '2023-07-10', read: true },
    { id: 5, name: 'David Wilson', email: 'david@example.com', subject: 'Support Question', date: '2023-07-05', read: false },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Message Center</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button variant="outline">Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className={message.read ? '' : 'font-medium bg-gray-50'}>
                <TableCell>{message.id}</TableCell>
                <TableCell>{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    message.read ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {message.read ? 'Read' : 'Unread'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    {!message.read && (
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
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

export default AdminMessages;
