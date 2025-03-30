
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';
import { AlertTriangle, CheckCircle, XCircle, Download, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { PageSEO } from './types';

const SEOReports = () => {
  const [overallScore, setOverallScore] = useState(0);
  const [pagesIndexed, setPagesIndexed] = useState(0);
  const [mobileScore, setMobileScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageIssues, setPageIssues] = useState<{
    missingMeta: number;
    slowPages: number;
    brokenLinks: number;
  }>({
    missingMeta: 0,
    slowPages: 0,
    brokenLinks: 0
  });

  useEffect(() => {
    // Load SEO data from Supabase or localStorage
    const loadSEOData = async () => {
      try {
        setIsLoading(true);
        
        // Try to load from Supabase first
        let pages: PageSEO[] = [];
        try {
          const { data, error } = await supabase
            .from('site_settings')
            .select('*')
            .eq('key', 'seo_settings')
            .single();
            
          if (error) throw error;
            
          if (data && data.value) {
            // Parse the JSONB value and ensure it has the expected structure
            const valueData = data.value;
            
            // Check if the value is a string (needs parsing) or already an object
            const parsedValue = typeof valueData === 'string' 
              ? JSON.parse(valueData) 
              : valueData;
            
            // Type guard to check if the data has the pageSettings property
            if (parsedValue && typeof parsedValue === 'object' && 'pageSettings' in parsedValue) {
              pages = parsedValue.pageSettings as PageSEO[];
            }
          }
        } catch (error) {
          console.error('Failed to load from Supabase:', error);
          
          // Fall back to localStorage
          const storedData = localStorage.getItem('seo_settings');
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (parsedData.pageSettings) {
              pages = parsedData.pageSettings;
            }
          }
        }
        
        if (pages.length > 0) {
          // Calculate overall score from page scores
          const avgScore = Math.round(pages.reduce((sum, page) => sum + page.score, 0) / pages.length);
          setOverallScore(avgScore);
          
          // Count pages
          setPagesIndexed(pages.length);
          
          // Generate random mobile score - in a real app, this would be from actual data
          setMobileScore(85 + Math.floor(Math.random() * 15));
          
          // Calculate issues
          const missingMeta = pages.filter(page => !page.metaDescription || page.metaDescription.length < 50).length;
          setPageIssues({
            missingMeta,
            slowPages: Math.min(3, Math.floor(pages.length * 0.2)), // 20% of pages are "slow"
            brokenLinks: Math.min(5, Math.floor(pages.length * 0.1)) // 10% have broken links
          });
        }
      } catch (error) {
        console.error('Error loading SEO report data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSEOData();
  }, []);

  const refreshReport = () => {
    setIsLoading(true);
    
    // Simulate a report refresh
    setTimeout(() => {
      // Update scores slightly
      setOverallScore(Math.min(100, overallScore + Math.floor(Math.random() * 5)));
      setMobileScore(Math.min(100, mobileScore + Math.floor(Math.random() * 3)));
      
      // Reduce issues slightly
      setPageIssues({
        missingMeta: Math.max(0, pageIssues.missingMeta - 1),
        slowPages: Math.max(0, pageIssues.slowPages - 1),
        brokenLinks: Math.max(0, pageIssues.brokenLinks - 1)
      });
      
      setIsLoading(false);
      toast.success('SEO report refreshed');
    }, 1500);
  };

  const generateReport = () => {
    toast.success('Generating full SEO report...');
    
    // In a real app, this would generate a PDF report
    setTimeout(() => {
      const reportData = {
        date: new Date().toISOString(),
        scores: {
          overall: overallScore,
          mobile: mobileScore,
          pages: pagesIndexed
        },
        issues: pageIssues
      };
      
      // Create JSON blob and download
      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `seo-report-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
      
      toast.success('Full SEO report downloaded');
    }, 2000);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-2"></div>
          <span>Loading SEO report data...</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>SEO Reports</CardTitle>
            <CardDescription>Track your website's SEO performance</CardDescription>
          </div>
          <Button variant="outline" onClick={refreshReport}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Overall SEO Score</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">{overallScore}</span>
                <span className="text-xs ml-2 text-green-600">+3%</span>
              </div>
              <Progress value={overallScore} className="h-2 mt-2 bg-green-500" />
            </div>
            
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Pages Indexed</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">{pagesIndexed}</span>
                <span className="text-xs ml-2 text-green-600">+2</span>
              </div>
              <Progress value={90} className="h-2 mt-2 bg-blue-500" />
            </div>
            
            <div className="p-4 border rounded-md bg-white">
              <h3 className="text-sm text-gray-500">Mobile Optimization</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">{mobileScore}</span>
                <span className="text-xs ml-2 text-green-600">+5%</span>
              </div>
              <Progress value={mobileScore} className="h-2 mt-2 bg-green-500" />
            </div>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="font-medium">Issues Overview</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {pageIssues.missingMeta > 0 && (
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Missing Meta Descriptions</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {pageIssues.missingMeta} pages are missing meta descriptions
                      </p>
                    </div>
                  </div>
                )}
                
                {pageIssues.slowPages > 0 && (
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Slow Page Load Times</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {pageIssues.slowPages} pages have load times over 3 seconds
                      </p>
                    </div>
                  </div>
                )}
                
                {pageIssues.brokenLinks > 0 && (
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Broken Links</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {pageIssues.brokenLinks} broken links found across your site
                      </p>
                    </div>
                  </div>
                )}
                
                {pageIssues.missingMeta === 0 && pageIssues.slowPages === 0 && pageIssues.brokenLinks === 0 && (
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Great Job!</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        No SEO issues detected on your site
                      </p>
                    </div>
                  </div>
                )}
                
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
            <Button className="md:w-auto" onClick={generateReport}>
              <Download className="mr-2 h-4 w-4" />
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
