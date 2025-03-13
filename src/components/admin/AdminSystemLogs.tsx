
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { AlertCircle, Download, Info, Search, Shield, ToggleLeft } from 'lucide-react';
import { Input } from '../ui/input';

const AdminSystemLogs = () => {
  const [logType, setLogType] = useState('all');
  
  // Sample log data
  const logs = [
    { id: 1, message: 'User login successful', user: 'admin@example.com', type: 'auth', level: 'info', timestamp: '2023-08-15 14:25:32' },
    { id: 2, message: 'New user registered', user: 'jane@example.com', type: 'auth', level: 'info', timestamp: '2023-08-15 13:10:45' },
    { id: 3, message: 'Failed login attempt (3 times)', user: 'unknown', type: 'auth', level: 'warning', timestamp: '2023-08-15 12:05:18' },
    { id: 4, message: 'Database backup completed successfully', user: 'system', type: 'system', level: 'info', timestamp: '2023-08-15 08:30:00' },
    { id: 5, message: 'API rate limit exceeded', user: 'api.service', type: 'api', level: 'error', timestamp: '2023-08-14 23:45:12' },
    { id: 6, message: 'Content updated: Homepage', user: 'john@example.com', type: 'content', level: 'info', timestamp: '2023-08-14 16:22:05' },
    { id: 7, message: 'Server CPU usage above 90%', user: 'system', type: 'system', level: 'warning', timestamp: '2023-08-14 15:15:30' },
    { id: 8, message: 'Payment processing failed', user: 'payment.service', type: 'payment', level: 'error', timestamp: '2023-08-14 14:10:15' },
  ];

  // Filter logs based on selected type
  const filteredLogs = logType === 'all' ? logs : logs.filter(log => log.type === logType);

  // Get the icon based on log level
  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Log Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Info</span>
                </div>
                <span className="font-medium">24</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                  <span>Warnings</span>
                </div>
                <span className="font-medium">8</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Errors</span>
                </div>
                <span className="font-medium">3</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Security</span>
                </div>
                <span className="font-medium">5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {logs.slice(0, 5).map((log) => (
                <div key={log.id} className="flex items-start border-b pb-3">
                  {getLevelIcon(log.level)}
                  <div className="ml-3">
                    <p className="text-sm font-medium">{log.message}</p>
                    <div className="flex text-xs text-gray-500 mt-1">
                      <span>{log.timestamp}</span>
                      <span className="mx-2">•</span>
                      <span>{log.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle>System Logs</CardTitle>
          
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search logs..." className="pl-8" />
            </div>
            
            <select 
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={logType}
              onChange={(e) => setLogType(e.target.value)}
            >
              <option value="all">All Logs</option>
              <option value="auth">Authentication</option>
              <option value="system">System</option>
              <option value="api">API</option>
              <option value="content">Content</option>
              <option value="payment">Payment</option>
            </select>
            
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Level</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center">
                      {getLevelIcon(log.level)}
                      <span className="ml-2 capitalize">{log.level}</span>
                    </div>
                  </TableCell>
                  <TableCell>{log.message}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">{log.type}</span>
                  </TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSystemLogs;
