
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, Image, Mail, Eye } from 'lucide-react';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from 'recharts';

const AdminOverview = () => {
  // Sample data for stats and charts
  const stats = [
    { id: 'users', label: 'Total Users', value: '142', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { id: 'projects', label: 'Projects', value: '24', icon: Image, color: 'bg-purple-100 text-purple-600' },
    { id: 'messages', label: 'New Messages', value: '8', icon: Mail, color: 'bg-rose-100 text-rose-600' },
    { id: 'views', label: 'Page Views', value: '1,842', icon: Eye, color: 'bg-amber-100 text-amber-600' },
  ];

  const visitData = [
    { name: 'Jan', visits: 400 },
    { name: 'Feb', visits: 300 },
    { name: 'Mar', visits: 600 },
    { name: 'Apr', visits: 800 },
    { name: 'May', visits: 500 },
    { name: 'Jun', visits: 900 },
    { name: 'Jul', visits: 1100 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visits" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-start space-x-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <Users className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item} hour{item !== 1 ? 's' : ''} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
