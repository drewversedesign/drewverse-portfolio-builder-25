
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AdminAnalytics = () => {
  // Sample analytics data
  const trafficData = [
    { month: 'Jan', direct: 400, organic: 240, referral: 180, social: 120 },
    { month: 'Feb', direct: 300, organic: 230, referral: 190, social: 140 },
    { month: 'Mar', direct: 500, organic: 260, referral: 220, social: 160 },
    { month: 'Apr', direct: 450, organic: 290, referral: 250, social: 190 },
    { month: 'May', direct: 600, organic: 310, referral: 270, social: 210 },
    { month: 'Jun', direct: 700, organic: 360, referral: 290, social: 240 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 58 },
    { name: 'Mobile', value: 35 },
    { name: 'Tablet', value: 7 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const conversionData = [
    { month: 'Jan', rate: 2.4 },
    { month: 'Feb', rate: 2.8 },
    { month: 'Mar', rate: 3.2 },
    { month: 'Apr', rate: 3.6 },
    { month: 'May', rate: 3.1 },
    { month: 'Jun', rate: 3.9 },
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="traffic">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
          </TabsList>
          
          <div className="flex space-x-2">
            <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
          </div>
        </div>

        <TabsContent value="traffic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Traffic</CardTitle>
              <CardDescription>Breakdown of website traffic by source</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="direct" fill="#8884d8" name="Direct" />
                    <Bar dataKey="organic" fill="#82ca9d" name="Organic Search" />
                    <Bar dataKey="referral" fill="#ffc658" name="Referral" />
                    <Bar dataKey="social" fill="#ff8042" name="Social Media" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Distribution</CardTitle>
              <CardDescription>Breakdown of visitors by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate</CardTitle>
              <CardDescription>Monthly website conversion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Conversion Rate']}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#8884d8" 
                      name="Conversion Rate (%)"
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Bounce Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>/</TableCell>
                  <TableCell>3,842</TableCell>
                  <TableCell>42%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/portfolio</TableCell>
                  <TableCell>2,259</TableCell>
                  <TableCell>38%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/services</TableCell>
                  <TableCell>1,876</TableCell>
                  <TableCell>41%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/about</TableCell>
                  <TableCell>1,568</TableCell>
                  <TableCell>35%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>/contact</TableCell>
                  <TableCell>1,245</TableCell>
                  <TableCell>29%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Referrers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>Visitors</TableHead>
                  <TableHead>Conversion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Google</TableCell>
                  <TableCell>4,582</TableCell>
                  <TableCell>3.2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Facebook</TableCell>
                  <TableCell>2,862</TableCell>
                  <TableCell>2.8%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Instagram</TableCell>
                  <TableCell>1,958</TableCell>
                  <TableCell>3.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Twitter</TableCell>
                  <TableCell>1,286</TableCell>
                  <TableCell>2.4%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LinkedIn</TableCell>
                  <TableCell>964</TableCell>
                  <TableCell>3.8%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';

export default AdminAnalytics;
