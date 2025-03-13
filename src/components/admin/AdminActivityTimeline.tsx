
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { BarChart4, Calendar, ChevronDown, Edit, Eye, FileText, Filter, Plus, Settings, Trash, User } from 'lucide-react';

const AdminActivityTimeline = () => {
  // Sample activity data
  const activities = [
    { 
      id: 1, 
      user: 'John Doe', 
      action: 'Created a new post', 
      target: 'How to Optimize Your Website for SEO', 
      timestamp: '15 minutes ago',
      icon: <FileText className="h-4 w-4" />,
      color: 'bg-blue-100 text-blue-700' 
    },
    { 
      id: 2, 
      user: 'Jane Smith', 
      action: 'Updated user permissions for', 
      target: 'Mike Johnson', 
      timestamp: '1 hour ago',
      icon: <User className="h-4 w-4" />,
      color: 'bg-green-100 text-green-700'
    },
    { 
      id: 3, 
      user: 'Admin', 
      action: 'Changed system settings', 
      target: 'Email notification preferences', 
      timestamp: '3 hours ago',
      icon: <Settings className="h-4 w-4" />,
      color: 'bg-purple-100 text-purple-700'
    },
    { 
      id: 4, 
      user: 'Sarah Wilson', 
      action: 'Deleted a comment on', 
      target: 'Building an Effective Brand Identity', 
      timestamp: '5 hours ago',
      icon: <Trash className="h-4 w-4" />,
      color: 'bg-red-100 text-red-700'
    },
    { 
      id: 5, 
      user: 'John Doe', 
      action: 'Published a new project', 
      target: 'Greenfield Mobile App', 
      timestamp: '6 hours ago',
      icon: <Eye className="h-4 w-4" />,
      color: 'bg-green-100 text-green-700'
    },
    { 
      id: 6, 
      user: 'Mike Johnson', 
      action: 'Updated content on', 
      target: 'About Us page', 
      timestamp: '8 hours ago',
      icon: <Edit className="h-4 w-4" />,
      color: 'bg-amber-100 text-amber-700'
    },
    { 
      id: 7, 
      user: 'Jane Smith', 
      action: 'Generated a new report', 
      target: 'Q2 Marketing Performance', 
      timestamp: '1 day ago',
      icon: <BarChart4 className="h-4 w-4" />,
      color: 'bg-blue-100 text-blue-700'
    },
    { 
      id: 8, 
      user: 'Admin', 
      action: 'Added a new team member', 
      target: 'Chris Brown', 
      timestamp: '1 day ago',
      icon: <Plus className="h-4 w-4" />,
      color: 'bg-indigo-100 text-indigo-700'
    },
    { 
      id: 9, 
      user: 'Sarah Wilson', 
      action: 'Scheduled a new event', 
      target: 'Summer Design Workshop', 
      timestamp: '2 days ago',
      icon: <Calendar className="h-4 w-4" />,
      color: 'bg-teal-100 text-teal-700'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">Activity Timeline</h3>
          <p className="text-gray-500">Track all actions and changes on your website</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {activities.map((activity, index) => (
                <div key={activity.id} className="relative pl-12 pb-8">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
                    {activity.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h4 className="font-medium">{activity.user}</h4>
                        <p className="text-gray-700">
                          {activity.action} <span className="font-medium">"{activity.target}"</span>
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.timestamp}</span>
                    </div>
                    
                    {/* Action buttons if needed */}
                    {index === 0 && (
                      <div className="mt-3 flex space-x-2 justify-end">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Show more button */}
              <div className="relative pl-12 text-center">
                <Button variant="outline" className="mt-4">
                  Load More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activity Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">147</div>
              <div className="text-sm text-gray-500">Total Activities Today</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">32</div>
              <div className="text-sm text-gray-500">Content Updates</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-amber-600">18</div>
              <div className="text-sm text-gray-500">User Actions</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-500">System Changes</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Most Active Users</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-700 font-medium">JD</span>
                  </div>
                  <span>John Doe</span>
                </div>
                <span className="text-sm font-medium">42 actions</span>
              </div>
              
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-700 font-medium">JS</span>
                  </div>
                  <span>Jane Smith</span>
                </div>
                <span className="text-sm font-medium">37 actions</span>
              </div>
              
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                    <span className="text-amber-700 font-medium">MJ</span>
                  </div>
                  <span>Mike Johnson</span>
                </div>
                <span className="text-sm font-medium">28 actions</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminActivityTimeline;
