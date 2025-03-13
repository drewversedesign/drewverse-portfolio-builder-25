
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Shield, Clock, Globe, Smartphone, Laptop } from 'lucide-react';

const VisitorMonitoring = () => {
  // Sample visitor data - in a real app, this would come from an analytics API
  const recentVisitors = [
    { id: 1, ip: '192.168.1.45', location: 'New York, US', device: 'Mobile', browser: 'Chrome', time: '2 minutes ago', path: '/portfolio' },
    { id: 2, ip: '83.45.132.12', location: 'London, UK', device: 'Desktop', browser: 'Firefox', time: '15 minutes ago', path: '/services' },
    { id: 3, ip: '45.67.89.23', location: 'Paris, FR', device: 'Tablet', browser: 'Safari', time: '32 minutes ago', path: '/contact' },
    { id: 4, ip: '112.34.56.78', location: 'Tokyo, JP', device: 'Desktop', browser: 'Edge', time: '1 hour ago', path: '/about' },
    { id: 5, ip: '98.76.54.32', location: 'Sydney, AU', device: 'Mobile', browser: 'Chrome', time: '2 hours ago', path: '/' },
  ];

  // Visitor stats summary
  const visitorStats = [
    { label: 'Active Visitors', value: '24', icon: Clock, color: 'bg-blue-100 text-blue-600' },
    { label: 'Today\'s Visits', value: '342', icon: Globe, color: 'bg-green-100 text-green-600' },
    { label: 'Mobile Users', value: '58%', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
    { label: 'Desktop Users', value: '42%', icon: Laptop, color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Visitor Monitoring</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visitorStats.map((stat, index) => (
            <div key={index} className="flex items-center p-4 border rounded-md">
              <div className={`p-3 rounded-full ${stat.color} mr-4`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-xl font-bold">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Browser</TableHead>
                  <TableHead>Page</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentVisitors.map((visitor) => (
                  <TableRow key={visitor.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 text-gray-400 mr-2" />
                        {visitor.ip}
                      </div>
                    </TableCell>
                    <TableCell>{visitor.location}</TableCell>
                    <TableCell>{visitor.device}</TableCell>
                    <TableCell>{visitor.browser}</TableCell>
                    <TableCell>
                      <code className="px-2 py-1 bg-gray-100 rounded text-xs">{visitor.path}</code>
                    </TableCell>
                    <TableCell>{visitor.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="text-sm text-gray-500">
          <p>Note: This is a preview with sample data. In a production environment, integrate with an analytics service to display real-time visitor data.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorMonitoring;
