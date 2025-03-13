
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Zap, Globe, Clock } from 'lucide-react';

const PerformanceStats = () => {
  // In a real app, these would come from analytics or monitoring APIs
  const metrics = [
    {
      name: 'Average Page Load',
      value: '0.8s',
      progress: 80,
      status: 'good', // 'good', 'warning', 'bad'
      icon: Clock,
      description: 'Average time to load pages'
    },
    {
      name: 'Server Response',
      value: '210ms',
      progress: 92,
      status: 'good',
      icon: Zap,
      description: 'Average API response time'
    },
    {
      name: 'Global CDN',
      value: '99.9%',
      progress: 99,
      status: 'good',
      icon: Globe,
      description: 'Content delivery uptime'
    }
  ];

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-amber-500';
      case 'bad':
        return 'bg-red-500';
      default:
        return 'bg-drew-purple';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <metric.icon className="h-5 w-5 mr-2 text-drew-purple" />
                  <h3 className="text-sm font-medium">{metric.name}</h3>
                </div>
                <p className="font-bold">{metric.value}</p>
              </div>
              <div className="space-y-1">
                <Progress value={metric.progress} className={`h-2 ${getProgressColor(metric.status)}`} />
                <p className="text-xs text-gray-500">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceStats;
