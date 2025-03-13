
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { Edit, Plus, Shield, UserCog } from 'lucide-react';

interface Role {
  id: number;
  name: string;
  permissions: string;
  users: number;
}

const RoleManagement = () => {
  // Sample roles and permissions data
  const roles: Role[] = [
    { id: 1, name: 'Administrator', permissions: 'Full access to all areas', users: 2 },
    { id: 2, name: 'Editor', permissions: 'Can edit content, cannot manage users', users: 3 },
    { id: 3, name: 'Author', permissions: 'Can create content, cannot publish', users: 5 },
    { id: 4, name: 'Subscriber', permissions: 'Can view content only', users: 12 },
  ];

  return (
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
  );
};

export default RoleManagement;
