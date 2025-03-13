
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Zap, Globe, Clock, RefreshCw } from 'lucide-react';
import { Button } from '../../ui/button';
import { toast } from 'sonner';

interface PerformanceMetric {
  name: string;
  value: string;
  progress: number;
  status: 'good' | 'warning' | 'bad';
  icon: React.ElementType;
  description: string;
}

const PerformanceStats = () => {
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
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
  ]);

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

  const refreshStats = () => {
    setLoading(true);
    
    // Simulate API call to get fresh stats
    setTimeout(() => {
      // Randomly vary the metrics a bit to simulate real monitoring
      const updatedMetrics = metrics.map(metric => {
        const random = Math.random();
        
        if (metric.name === 'Average Page Load') {
          const newValue = 0.7 + random * 0.5;
          const newProgress = 100 - (newValue * 50);
          return {
            ...metric,
            value: `${newValue.toFixed(1)}s`,
            progress: Math.min(100, Math.max(0, newProgress)),
            status: newValue < 1 ? 'good' : newValue < 1.5 ? 'warning' : 'bad'
          };
        }
        
        if (metric.name === 'Server Response') {
          const newValue = 180 + random * 100;
          const newProgress = 100 - (newValue / 10);
          return {
            ...metric,
            value: `${Math.round(newValue)}ms`,
            progress: Math.min(100, Math.max(0, newProgress)),
            status: newValue < 250 ? 'good' : newValue < 500 ? 'warning' : 'bad'
          };
        }
        
        if (metric.name === 'Global CDN') {
          const newValue = 99.5 + random * 0.5;
          return {
            ...metric,
            value: `${newValue.toFixed(1)}%`,
            progress: newValue,
            status: newValue > 99.8 ? 'good' : newValue > 99.5 ? 'warning' : 'bad'
          };
        }
        
        return metric;
      });
      
      setMetrics(updatedMetrics);
      setLastUpdated(new Date());
      setLoading(false);
      toast.success('Performance metrics updated');
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Performance Metrics</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={refreshStats}
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh Metrics
        </Button>
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
          
          <div className="text-xs text-gray-400 mt-4">
            Last updated: {formatTime(lastUpdated)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceStats;
