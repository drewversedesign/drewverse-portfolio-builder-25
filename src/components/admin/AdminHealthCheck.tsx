
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { AlertCircle, CheckCircle, Clock, Cpu, Database, HardDrive, RefreshCw, Server, Shield, Zap } from 'lucide-react';

const AdminHealthCheck = () => {
  // Sample system health data
  const systemHealth = {
    serverStatus: 'Operational',
    databaseStatus: 'Operational',
    cacheStatus: 'Operational',
    mediaStorageStatus: 'Warning',
    sslStatus: 'Valid',
    performanceScore: 92,
    securityScore: 87,
    seoScore: 94,
    lastChecked: '15 minutes ago',
  };

  // Get status icon based on status
  const getStatusIcon = (status: string) => {
    if (status === 'Operational' || status === 'Valid') {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (status === 'Warning') {
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    } else {
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">System Health</h3>
          <p className="text-gray-500">
            Last checked: {systemHealth.lastChecked} • 
            <Button variant="link" className="h-auto p-0 ml-1">
              <RefreshCw className="h-3 w-3 mr-1" />
              Run check now
            </Button>
          </p>
        </div>
        
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          Run Full Diagnostic
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1">{systemHealth.performanceScore}/100</h3>
              <p className="text-green-800 font-medium">Performance Score</p>
              <p className="text-sm text-green-700 mt-2">Your site is running optimally</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1">{systemHealth.securityScore}/100</h3>
              <p className="text-blue-800 font-medium">Security Score</p>
              <p className="text-sm text-blue-700 mt-2">Security measures are in place</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1">{systemHealth.seoScore}/100</h3>
              <p className="text-purple-800 font-medium">SEO Score</p>
              <p className="text-sm text-purple-700 mt-2">Your site is well-optimized</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>Current status of website components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Server className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Web Server</h4>
                    <p className="text-sm text-gray-500">Nginx 1.20.1</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(systemHealth.serverStatus)}
                  <span className="ml-2 text-sm font-medium">{systemHealth.serverStatus}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Database className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Database</h4>
                    <p className="text-sm text-gray-500">MySQL 8.0</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(systemHealth.databaseStatus)}
                  <span className="ml-2 text-sm font-medium">{systemHealth.databaseStatus}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Cache System</h4>
                    <p className="text-sm text-gray-500">Redis 6.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(systemHealth.cacheStatus)}
                  <span className="ml-2 text-sm font-medium">{systemHealth.cacheStatus}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <HardDrive className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Media Storage</h4>
                    <p className="text-sm text-gray-500">86% used (1.2GB free)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(systemHealth.mediaStorageStatus)}
                  <span className="ml-2 text-sm font-medium">{systemHealth.mediaStorageStatus}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">SSL Certificate</h4>
                    <p className="text-sm text-gray-500">Expires in 82 days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(systemHealth.sslStatus)}
                  <span className="ml-2 text-sm font-medium">{systemHealth.sslStatus}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Cpu className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Server Load</h4>
                    <p className="text-sm text-gray-500">CPU: 24% | RAM: 38%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon('Operational')}
                  <span className="ml-2 text-sm font-medium">Normal</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">Image Optimization</h4>
                  <p className="text-sm text-amber-700">12 images can be further compressed to improve page load time</p>
                  <Button variant="outline" size="sm" className="mt-2">Optimize Now</Button>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Browser Caching</h4>
                  <p className="text-sm text-green-700">Browser caching is properly configured</p>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">JavaScript Bundling</h4>
                  <p className="text-sm text-amber-700">Consider code splitting to reduce initial JavaScript load</p>
                  <Button variant="outline" size="sm" className="mt-2">Learn More</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800">Admin Login Security</h4>
                  <p className="text-sm text-red-700">Enable two-factor authentication for all admin accounts</p>
                  <Button variant="outline" size="sm" className="mt-2">Enable 2FA</Button>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">Content Security Policy</h4>
                  <p className="text-sm text-amber-700">Implement a Content Security Policy to prevent XSS attacks</p>
                  <Button variant="outline" size="sm" className="mt-2">Configure CSP</Button>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">HTTPS Configuration</h4>
                  <p className="text-sm text-green-700">Your site is properly configured with HTTPS</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Adding the missing import for Search icon
import { Search } from 'lucide-react';

export default AdminHealthCheck;
