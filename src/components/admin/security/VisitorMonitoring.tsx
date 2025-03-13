
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { Shield, AlertCircle, Eye, EyeOff, UserCheck, User } from 'lucide-react';
import { toast } from 'sonner';

interface VisitorEntry {
  id: number;
  ip: string;
  lastVisit: string;
  visits: number;
  country: string;
  status: 'active' | 'blocked' | 'suspicious';
}

const VisitorMonitoring = () => {
  const [visitors, setVisitors] = useState<VisitorEntry[]>([
    {
      id: 1,
      ip: '192.168.1.1',
      lastVisit: new Date(Date.now() - 5 * 60000).toISOString(),
      visits: 23,
      country: 'United States',
      status: 'active',
    },
    {
      id: 2,
      ip: '203.0.113.42',
      lastVisit: new Date(Date.now() - 15 * 60000).toISOString(),
      visits: 5,
      country: 'Germany',
      status: 'suspicious',
    },
    {
      id: 3,
      ip: '198.51.100.23',
      lastVisit: new Date(Date.now() - 30 * 60000).toISOString(),
      visits: 45,
      country: 'Canada',
      status: 'active',
    },
    {
      id: 4,
      ip: '198.51.100.76',
      lastVisit: new Date(Date.now() - 120 * 60000).toISOString(),
      visits: 2,
      country: 'Russia',
      status: 'blocked',
    },
  ]);

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
      case 'active':
        return <UserCheck className="h-4 w-4 text-green-500" />;
      case 'suspicious':
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case 'blocked':
        return <EyeOff className="h-4 w-4 text-red-500" />;
      default:
        return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleBlockVisitor = (id: number) => {
    setVisitors(
      visitors.map((visitor) =>
        visitor.id === id ? { ...visitor, status: 'blocked' } : visitor
      )
    );
    toast.success('Visitor blocked successfully');
  };

  const handleAllowVisitor = (id: number) => {
    setVisitors(
      visitors.map((visitor) =>
        visitor.id === id ? { ...visitor, status: 'active' } : visitor
      )
    );
    toast.success('Visitor allowed successfully');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Eye className="h-5 w-5 mr-2 text-drew-purple" />
          Visitor Monitoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>IP Address</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow key={visitor.id}>
                <TableCell>{visitor.ip}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{formatDate(visitor.lastVisit)}</span>
                    <span className="text-xs text-gray-500">{visitor.visits} visits</span>
                  </div>
                </TableCell>
                <TableCell>{visitor.country}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getStatusIcon(visitor.status)}
                    <span className="ml-2 capitalize">{visitor.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {visitor.status === 'blocked' ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAllowVisitor(visitor.id)}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Allow
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBlockVisitor(visitor.id)}
                    >
                      <EyeOff className="h-4 w-4 mr-2" />
                      Block
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default VisitorMonitoring;
