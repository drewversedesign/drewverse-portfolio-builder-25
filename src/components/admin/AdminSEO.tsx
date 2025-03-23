
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Search, 
  Globe, 
  FileText, 
  Tag, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
  Clock,
  Save
} from 'lucide-react';
import { toast } from 'sonner';
import { Progress } from '../ui/progress';

interface SEOSetting {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  robotsTxt: string;
  sitemap: string;
}

interface PageSEO {
  id: string;
  title: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  score: number;
}

const AdminSEO = () => {
  const [generalSEO, setGeneralSEO] = useState<SEOSetting>({
    title: 'Drew Creative Agency - Premium Design Studio',
    metaDescription: 'Drew Creative Agency specializes in creating stunning websites, brand identities, and digital experiences that transform ideas into digital excellence.',
    metaKeywords: 'design agency, web design, UX/UI design, brand identity, mobile apps',
    robotsTxt: 'User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://drewcreative.agency/sitemap.xml',
    sitemap: 'https://drewcreative.agency/sitemap.xml'
  });

  const [pages, setPages] = useState<PageSEO[]>([
    {
      id: 'home',
      title: 'Home',
      path: '/',
      metaTitle: 'Drew Creative Agency | Digital Design Excellence',
      metaDescription: 'Award-winning creative agency specializing in web design, branding, and digital marketing solutions for businesses of all sizes.',
      metaKeywords: 'home, drew creative, design agency, web design',
      score: 92
    },
    {
      id: 'about',
      title: 'About Us',
      path: '/about',
      metaTitle: 'About Drew Creative Agency | Our Story & Mission',
      metaDescription: 'Learn about our journey, mission and the team behind Drew Creative Agency. Discover how we help brands achieve digital excellence.',
      metaKeywords: 'about us, drew creative team, agency mission, creative professionals',
      score: 85
    },
    {
      id: 'services',
      title: 'Services',
      path: '/services',
      metaTitle: 'Professional Design Services | Drew Creative Agency',
      metaDescription: 'Explore our comprehensive range of design services including web design, branding, UI/UX design, and digital marketing.',
      metaKeywords: 'services, web design, branding, digital marketing, UI/UX design',
      score: 78
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      path: '/portfolio',
      metaTitle: 'Our Work | Drew Creative Agency Portfolio',
      metaDescription: 'Browse our portfolio of successful projects across various industries. See how we have helped businesses transform their digital presence.',
      metaKeywords: 'portfolio, creative work, design examples, case studies, projects',
      score: 90
    },
    {
      id: 'contact',
      title: 'Contact',
      path: '/contact',
      metaTitle: 'Contact Drew Creative Agency | Get In Touch',
      metaDescription: 'Ready to start your project? Contact our team for a free consultation and quote on your next digital venture.',
      metaKeywords: 'contact, get in touch, project quote, consultation',
      score: 88
    },
    {
      id: 'blog',
      title: 'Blog',
      path: '/blog',
      metaTitle: 'Design Insights & Tips | Drew Creative Blog',
      metaDescription: 'Get the latest insights, tips and trends in web design, branding and digital marketing from our expert team.',
      metaKeywords: 'blog, design tips, web design trends, creative insights',
      score: 75
    }
  ]);

  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [isRunningAnalysis, setIsRunningAnalysis] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingSitemap, setIsGeneratingSitemap] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setGeneralSEO({
      ...generalSEO,
      [id]: value
    });
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setSelectedPage({
      ...selectedPage,
      [id.replace('page-', '')]: value
    });
  };

  const handleSaveGeneral = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      setIsSaving(false);
      toast.success('SEO settings saved successfully');
    }, 1000);
  };

  const handleUpdatePage = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      setPages(pages.map(page => 
        page.id === selectedPage.id ? selectedPage : page
      ));
      setIsSaving(false);
      toast.success('Page SEO updated successfully');
    }, 1000);
  };

  const handleSelectPage = (pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (page) {
      setSelectedPage(page);
    }
  };

  const runAnalysis = () => {
    setIsRunningAnalysis(true);
    
    setTimeout(() => {
      setIsRunningAnalysis(false);
      
      // Update scores with random improvements
      setPages(pages.map(page => ({
        ...page,
        score: Math.min(100, page.score + Math.floor(Math.random() * 10))
      })));
      
      toast.success('Keyword analysis completed successfully');
    }, 2500);
  };

  const generateSitemap = () => {
    setIsGeneratingSitemap(true);
    
    setTimeout(() => {
      setIsGeneratingSitemap(false);
      toast.success('Sitemap generated successfully');
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreText = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General SEO</TabsTrigger>
          <TabsTrigger value="pages">Page-Specific SEO</TabsTrigger>
          <TabsTrigger value="tools">SEO Tools</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Site Title</label>
                <Input 
                  id="title" 
                  value={generalSEO.title} 
                  onChange={handleInputChange}
                />
                <p className="text-xs text-gray-500 mt-1">This appears in search engine results and browser tabs.</p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="metaDescription" className="text-sm font-medium">Meta Description</label>
                <Textarea 
                  id="metaDescription" 
                  value={generalSEO.metaDescription}
                  onChange={handleInputChange}
                  rows={3}
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Aim for 150-160 characters. This appears in search engine results.</p>
                  <p className={`text-xs ${generalSEO.metaDescription.length > 160 ? 'text-red-500' : 'text-gray-500'}`}>
                    {generalSEO.metaDescription.length}/160
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="metaKeywords" className="text-sm font-medium">Meta Keywords</label>
                <Input 
                  id="metaKeywords" 
                  value={generalSEO.metaKeywords} 
                  onChange={handleInputChange}
                />
                <p className="text-xs text-gray-500 mt-1">Separate keywords with commas.</p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="robotsTxt" className="text-sm font-medium">Robots.txt Content</label>
                <Textarea 
                  id="robotsTxt" 
                  value={generalSEO.robotsTxt}
                  onChange={handleInputChange}
                  rows={4}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Instructions for search engine crawlers.</p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="sitemap" className="text-sm font-medium">Sitemap URL</label>
                <Input 
                  id="sitemap" 
                  value={generalSEO.sitemap} 
                  onChange={handleInputChange}
                />
                <p className="text-xs text-gray-500 mt-1">URL to your XML sitemap.</p>
              </div>
              
              <Button onClick={handleSaveGeneral} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save SEO Settings
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Pages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Search pages..." 
                  className="mb-4"
                />
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                  {pages.map(page => (
                    <div 
                      key={page.id}
                      className={`p-3 border rounded-md cursor-pointer hover:bg-gray-50 ${selectedPage.id === page.id ? 'border-blue-500 bg-blue-50' : ''}`}
                      onClick={() => handleSelectPage(page.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{page.title}</h3>
                          <p className="text-xs text-gray-500">{page.path}</p>
                        </div>
                        <div className="flex items-center">
                          <div 
                            className={`w-2 h-2 rounded-full mr-1 ${getScoreColor(page.score)}`}
                          ></div>
                          <span className="text-xs">{page.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>SEO for: {selectedPage.title}</CardTitle>
                <CardDescription>Edit the SEO settings for this page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="page-metaTitle" className="text-sm font-medium">Page Title</label>
                  <Input 
                    id="page-metaTitle" 
                    value={selectedPage.metaTitle} 
                    onChange={handlePageInputChange} 
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Recommended length: 50-60 characters.</p>
                    <p className={`text-xs ${selectedPage.metaTitle.length > 60 ? 'text-red-500' : 'text-gray-500'}`}>
                      {selectedPage.metaTitle.length}/60
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="page-metaDescription" className="text-sm font-medium">Page Description</label>
                  <Textarea 
                    id="page-metaDescription" 
                    value={selectedPage.metaDescription} 
                    onChange={handlePageInputChange}
                    rows={3}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Aim for 150-160 characters.</p>
                    <p className={`text-xs ${selectedPage.metaDescription.length > 160 ? 'text-red-500' : 'text-gray-500'}`}>
                      {selectedPage.metaDescription.length}/160
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="page-metaKeywords" className="text-sm font-medium">Page Keywords</label>
                  <Input 
                    id="page-metaKeywords" 
                    value={selectedPage.metaKeywords} 
                    onChange={handlePageInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate keywords with commas.</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">SEO Score</h3>
                  <div className="flex items-center space-x-3">
                    <Progress value={selectedPage.score} className={`h-2 ${getScoreColor(selectedPage.score)}`} />
                    <span className="text-sm font-medium">{selectedPage.score}/100</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    SEO Score: <span className="font-medium">{getScoreText(selectedPage.score)}</span>
                  </p>
                </div>
                
                <div className="space-y-2 border rounded-md p-3 bg-gray-50">
                  <h3 className="text-sm font-medium">SEO Preview</h3>
                  <div className="mt-2">
                    <p className="text-blue-600 text-lg line-clamp-1 cursor-pointer hover:underline">
                      {selectedPage.metaTitle}
                    </p>
                    <p className="text-green-700 text-sm line-clamp-1">
                      {window.location.origin}{selectedPage.path}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {selectedPage.metaDescription}
                    </p>
                  </div>
                </div>
                
                <Button onClick={handleUpdatePage} disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <span className="animate-spin mr-2">◌</span>
                      Updating...
                    </>
                  ) : (
                    'Update Page SEO'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
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
        </TabsContent>
        
        <TabsContent value="reports">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSEO;
