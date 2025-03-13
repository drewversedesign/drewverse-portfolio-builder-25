
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Edit, Plus, Shield, UserCog } from 'lucide-react';

const AdminSecurity = () => {
  // Sample roles and permissions data
  const roles = [
    { id: 1, name: 'Administrator', permissions: 'Full access to all areas', users: 2 },
    { id: 2, name: 'Editor', permissions: 'Can edit content, cannot manage users', users: 3 },
    { id: 3, name: 'Author', permissions: 'Can create content, cannot publish', users: 5 },
    { id: 4, name: 'Subscriber', permissions: 'Can view content only', users: 12 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Role Management</CardTitle>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Role
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role Name</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Users Assigned</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {role.name === 'Administrator' ? (
                        <Shield className="mr-2 h-4 w-4 text-drew-purple" />
                      ) : (
                        <UserCog className="mr-2 h-4 w-4 text-gray-500" />
                      )}
                      {role.name}
                    </div>
                  </TableCell>
                  <TableCell>{role.permissions}</TableCell>
                  <TableCell>{role.users}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500 mb-4">Require 2FA for administrators and editors</p>
              <Button variant="outline">Configure 2FA</Button>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Password Policy</h3>
              <p className="text-sm text-gray-500 mb-4">Set requirements for user passwords</p>
              <Button variant="outline">Edit Policy</Button>
            </div>

            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Login Attempts</h3>
              <p className="text-sm text-gray-500 mb-4">Limit failed login attempts</p>
              <Button variant="outline">Configure Limits</Button>
            </div>

            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Session Management</h3>
              <p className="text-sm text-gray-500 mb-4">Set session timeout and control active sessions</p>
              <Button variant="outline">Manage Sessions</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSecurity;
