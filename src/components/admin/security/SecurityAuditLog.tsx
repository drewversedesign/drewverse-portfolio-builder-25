
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Shield, LogIn, Settings, File, UserX } from 'lucide-react';

// In a real application, this would be fetched from a backend API
const auditEvents = [
  {
    id: 1,
    user: 'admin@drewcreative.com',
    action: 'Login',
    resource: 'Admin Dashboard',
    timestamp: '2023-09-21 14:32:45',
    ip: '192.168.1.1',
    status: 'Success',
    icon: LogIn
  },
  {
    id: 2,
    user: 'editor@drewcreative.com',
    action: 'Update',
    resource: 'Blog Post: "Design Trends 2023"',
    timestamp: '2023-09-21 13:15:22',
    ip: '192.168.1.2',
    status: 'Success',
    icon: File
  },
  {
    id: 3,
    user: 'unknown@example.com',
    action: 'Login',
    resource: 'Admin Dashboard',
    timestamp: '2023-09-21 12:45:11',
    ip: '203.0.113.1',
    status: 'Failed',
    icon: UserX
  },
  {
    id: 4,
    user: 'admin@drewcreative.com',
    action: 'Settings',
    resource: 'System Settings',
    timestamp: '2023-09-21 11:30:05',
    ip: '192.168.1.1',
    status: 'Success',
    icon: Settings
  },
  {
    id: 5,
    user: 'admin@drewcreative.com',
    action: 'Security',
    resource: 'Role Permissions',
    timestamp: '2023-09-21 10:12:33',
    ip: '192.168.1.1',
    status: 'Success',
    icon: Shield
  }
];

const SecurityAuditLog = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Security Audit Log</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="hidden md:table-cell">Resource</TableHead>
              <TableHead className="hidden md:table-cell">Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell>
                  <div className="flex items-center">
                    <event.icon className="mr-2 h-4 w-4 text-gray-500" />
                    <span>{event.action}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{event.user}</TableCell>
                <TableCell className="hidden md:table-cell">{event.resource}</TableCell>
                <TableCell className="hidden md:table-cell">{event.timestamp}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {event.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SecurityAuditLog;
