
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Search, Globe, FileText, Tag, BarChart3 } from 'lucide-react';

const AdminSEO = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
          <CardDescription>Optimize your website for search engines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="site-title" className="text-sm font-medium">Site Title</label>
            <Input id="site-title" defaultValue="Drew Creative Agency - Premium Design Studio" />
            <p className="text-xs text-gray-500 mt-1">This appears in search engine results and browser tabs.</p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="meta-description" className="text-sm font-medium">Meta Description</label>
            <Textarea 
              id="meta-description" 
              defaultValue="Drew Creative Agency specializes in creating stunning websites, brand identities, and digital experiences that transform ideas into digital excellence."
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">Aim for 150-160 characters. This appears in search engine results.</p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="meta-keywords" className="text-sm font-medium">Meta Keywords</label>
            <Input id="meta-keywords" defaultValue="design agency, web design, UX/UI design, brand identity, mobile apps" />
            <p className="text-xs text-gray-500 mt-1">Separate keywords with commas.</p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="robots-txt" className="text-sm font-medium">Robots.txt Content</label>
            <Textarea 
              id="robots-txt" 
              defaultValue="User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://drewcreative.agency/sitemap.xml"
              rows={4}
              className="font-mono text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Instructions for search engine crawlers.</p>
          </div>
          
          <Button>Save SEO Settings</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Page-Specific SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="page-select" className="text-sm font-medium">Select Page</label>
              <select id="page-select" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Home</option>
                <option>About Us</option>
                <option>Services</option>
                <option>Portfolio</option>
                <option>Contact</option>
                <option>Blog</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="page-title" className="text-sm font-medium">Page Title</label>
              <Input id="page-title" placeholder="Enter page title" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="page-description" className="text-sm font-medium">Page Description</label>
              <Textarea id="page-description" placeholder="Enter page description" rows={2} />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="page-keywords" className="text-sm font-medium">Page Keywords</label>
              <Input id="page-keywords" placeholder="Enter page keywords" />
            </div>
            
            <Button>Update Page SEO</Button>
          </CardContent>
        </Card>

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
                  <Button variant="outline" size="sm">Run Analysis</Button>
                </div>
              </div>
              
              <div className="p-4 border rounded-md flex items-start space-x-4">
                <Globe className="h-8 w-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Generate Sitemap</h3>
                  <p className="text-sm text-gray-500 mb-2">Create and update your XML sitemap</p>
                  <Button variant="outline" size="sm">Generate Sitemap</Button>
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
      </div>
    </div>
  );
};

export default AdminSEO;
