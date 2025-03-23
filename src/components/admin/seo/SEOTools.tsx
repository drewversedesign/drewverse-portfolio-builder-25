
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Search, Globe, FileText, BarChart3 } from 'lucide-react';

interface SEOToolsProps {
  runAnalysis: () => void;
  generateSitemap: () => void;
  isRunningAnalysis: boolean;
  isGeneratingSitemap: boolean;
}

const SEOTools = ({ runAnalysis, generateSitemap, isRunningAnalysis, isGeneratingSitemap }: SEOToolsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-md flex items-start space-x-4">
            <Search className="h-8 w-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Keyword Analysis</h3>
              <p className="text-sm text-gray-500 mb-2">Research and analyze keywords for your content</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={runAnalysis}
                disabled={isRunningAnalysis}
              >
                {isRunningAnalysis ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Analyzing...
                  </>
                ) : (
                  'Run Analysis'
                )}
              </Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-md flex items-start space-x-4">
            <Globe className="h-8 w-8 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Generate Sitemap</h3>
              <p className="text-sm text-gray-500 mb-2">Create and update your XML sitemap</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={generateSitemap}
                disabled={isGeneratingSitemap}
              >
                {isGeneratingSitemap ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Generating...
                  </>
                ) : (
                  'Generate Sitemap'
                )}
              </Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-md flex items-start space-x-4">
            <FileText className="h-8 w-8 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Meta Tags Checker</h3>
              <p className="text-sm text-gray-500 mb-2">Verify meta tags across your website</p>
              <Button variant="outline" size="sm">Check Tags</Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-md flex items-start space-x-4">
            <BarChart3 className="h-8 w-8 text-amber-500 flex-shrink-0" />
            <div>
              <h3 className="font-medium">SEO Performance</h3>
              <p className="text-sm text-gray-500 mb-2">Track your search engine ranking</p>
              <Button variant="outline" size="sm">View Report</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOTools;
