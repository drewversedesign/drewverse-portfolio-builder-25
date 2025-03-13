
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { Edit, Plus, Shield, UserCog, Trash, Check, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '../../ui/dialog';
import { Input } from '../../ui/input';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import { toast } from 'sonner';

interface Permission {
  id: string;
  name: string;
}

interface Role {
  id: number;
  name: string;
  permissions: string;
  users: number;
}

const RoleManagement = () => {
  // Sample roles and permissions data
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: 'Administrator', permissions: 'Full access to all areas', users: 2 },
    { id: 2, name: 'Editor', permissions: 'Can edit content, cannot manage users', users: 3 },
    { id: 3, name: 'Author', permissions: 'Can create content, cannot publish', users: 5 },
    { id: 4, name: 'Subscriber', permissions: 'Can view content only', users: 12 },
  ]);

  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [newRoleName, setNewRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  // Sample permissions
  const allPermissions: Permission[] = [
    { id: 'manage_users', name: 'Manage Users' },
    { id: 'create_content', name: 'Create Content' },
    { id: 'edit_content', name: 'Edit Content' },
    { id: 'delete_content', name: 'Delete Content' },
    { id: 'publish_content', name: 'Publish Content' },
    { id: 'manage_settings', name: 'Manage Settings' },
  ];

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setNewRoleName(role.name);
    // In a real app, you would fetch the actual permissions for this role
    setSelectedPermissions(
      role.name === 'Administrator'
        ? allPermissions.map(p => p.id)
        : role.name === 'Editor'
        ? ['create_content', 'edit_content', 'publish_content']
        : role.name === 'Author'
        ? ['create_content', 'edit_content']
        : []
    );
  };

  const handleAddNewRole = () => {
    setEditingRole(null);
    setNewRoleName('');
    setSelectedPermissions([]);
  };

  const handleSaveRole = () => {
    if (!newRoleName.trim()) {
      toast.error('Role name cannot be empty');
      return;
    }

    if (editingRole) {
      // Update existing role
      setRoles(
        roles.map(role =>
          role.id === editingRole.id
            ? {
                ...role,
                name: newRoleName,
                permissions: selectedPermissions.length === allPermissions.length
                  ? 'Full access to all areas'
                  : `Can ${selectedPermissions.map(p => p.replace('_', ' ')).join(', ')}`,
              }
            : role
        )
      );
      toast.success(`Role "${newRoleName}" updated successfully`);
    } else {
      // Add new role
      const newRole: Role = {
        id: Math.max(...roles.map(r => r.id)) + 1,
        name: newRoleName,
        permissions: selectedPermissions.length === allPermissions.length
          ? 'Full access to all areas'
          : `Can ${selectedPermissions.map(p => p.replace('_', ' ')).join(', ')}`,
        users: 0,
      };
      setRoles([...roles, newRole]);
      toast.success(`Role "${newRoleName}" created successfully`);
    }
  };

  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter(role => role.id !== id));
    toast.success('Role deleted successfully');
  };

  const handlePermissionChange = (permissionId: string) => {
    setSelectedPermissions(
      selectedPermissions.includes(permissionId)
        ? selectedPermissions.filter(id => id !== permissionId)
        : [...selectedPermissions, permissionId]
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Role Management</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={handleAddNewRole}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingRole ? 'Edit Role' : 'Create New Role'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="role-name">Role Name</Label>
                <Input
                  id="role-name"
                  value={newRoleName}
                  onChange={e => setNewRoleName(e.target.value)}
                  placeholder="Enter role name"
                />
              </div>
              <div className="space-y-2">
                <Label>Permissions</Label>
                <div className="space-y-2">
                  {allPermissions.map(permission => (
                    <div key={permission.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`permission-${permission.id}`}
                        checked={selectedPermissions.includes(permission.id)}
                        onCheckedChange={() => handlePermissionChange(permission.id)}
                      />
                      <Label htmlFor={`permission-${permission.id}`}>{permission.name}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={handleSaveRole}>Save Role</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                  <div className="flex items-center space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => handleEditRole(role)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Role</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-role-name">Role Name</Label>
                            <Input
                              id="edit-role-name"
                              value={newRoleName}
                              onChange={e => setNewRoleName(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Permissions</Label>
                            <div className="space-y-2">
                              {allPermissions.map(permission => (
                                <div key={permission.id} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`edit-permission-${permission.id}`}
                                    checked={selectedPermissions.includes(permission.id)}
                                    onCheckedChange={() => handlePermissionChange(permission.id)}
                                  />
                                  <Label htmlFor={`edit-permission-${permission.id}`}>{permission.name}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button onClick={handleSaveRole}>Save Changes</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          disabled={role.name === 'Administrator'} // Prevent deleting Administrator role
                        >
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete Role</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <p>Are you sure you want to delete the role "{role.name}"?</p>
                          {role.users > 0 && (
                            <p className="mt-2 text-amber-500">
                              Warning: {role.users} users are assigned to this role.
                            </p>
                          )}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">
                              <X className="mr-2 h-4 w-4" />
                              Cancel
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button 
                              variant="destructive" 
                              onClick={() => handleDeleteRole(role.id)}
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Confirm Delete
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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

export default RoleManagement;
