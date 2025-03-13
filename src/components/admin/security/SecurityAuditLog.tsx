
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { AlertTriangle, CheckCircle, XCircle, Shield } from 'lucide-react';
import { Badge } from '../../ui/badge';

interface AuditLogEntry {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  status: 'success' | 'warning' | 'error';
  ip: string;
}

const SecurityAuditLog = () => {
  // This would typically come from an API call
  const auditLogs: AuditLogEntry[] = [
    {
      id: 1,
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
      user: 'admin@example.com',
      action: 'User login',
      status: 'success',
      ip: '192.168.1.1',
    },
    {
      id: 2,
      timestamp: new Date(Date.now() - 25 * 60000).toISOString(),
      user: 'editor@example.com',
      action: 'Password change',
      status: 'success',
      ip: '192.168.1.2',
    },
    {
      id: 3,
      timestamp: new Date(Date.now() - 55 * 60000).toISOString(),
      user: 'unknown',
      action: 'Failed login attempt',
      status: 'error',
      ip: '203.0.113.42',
    },
    {
      id: 4,
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
      user: 'admin@example.com',
      action: 'Role change',
      status: 'warning',
      ip: '192.168.1.1',
    },
    {
      id: 5,
      timestamp: new Date(Date.now() - 180 * 60000).toISOString(),
      user: 'system',
      action: 'Database backup',
      status: 'success',
      ip: 'localhost',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>;
      case 'warning':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Warning</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Error</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2 text-drew-purple" />
          Security Audit Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{formatDate(log.timestamp)}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getStatusIcon(log.status)}
                    <span className="ml-2">{getStatusBadge(log.status)}</span>
                  </div>
                </TableCell>
                <TableCell>{log.ip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SecurityAuditLog;
