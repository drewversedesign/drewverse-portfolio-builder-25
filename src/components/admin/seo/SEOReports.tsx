
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const SEOReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Reports</CardTitle>
        <CardDescription>Track your website's SEO performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Overall SEO Score</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">84</span>
                <span className="text-xs ml-2 text-green-600">+3%</span>
              </div>
              <Progress value={84} className="h-2 mt-2 bg-green-500" />
            </div>
            
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Pages Indexed</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">28</span>
                <span className="text-xs ml-2 text-green-600">+2</span>
              </div>
              <Progress value={90} className="h-2 mt-2 bg-blue-500" />
            </div>
            
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Mobile Optimization</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">92</span>
                <span className="text-xs ml-2 text-green-600">+5%</span>
              </div>
              <Progress value={92} className="h-2 mt-2 bg-green-500" />
            </div>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="font-medium">Issues Overview</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Missing Meta Descriptions</h4>
                    <p className="text-sm text-gray-500 mt-1">2 pages are missing meta descriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Slow Page Load Times</h4>
                    <p className="text-sm text-gray-500 mt-1">3 pages have load times over 3 seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Broken Links</h4>
                    <p className="text-sm text-gray-500 mt-1">5 broken links found across your site</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Valid Sitemap</h4>
                    <p className="text-sm text-gray-500 mt-1">Your sitemap is valid and up to date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="md:w-auto">
              Generate Full Report
            </Button>
            <Button variant="outline" className="md:w-auto">
              Schedule Weekly Reports
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOReports;
