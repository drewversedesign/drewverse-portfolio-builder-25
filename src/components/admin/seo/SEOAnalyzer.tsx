
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Loader2, Save, ArrowRight, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface SEOReport {
  url: string;
  analysis: string;
  created_at: string;
}

const SEOAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('analyze');
  const [pastReports, setPastReports] = useState<SEOReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<SEOReport | null>(null);
  const [isLoadingReports, setIsLoadingReports] = useState(false);

  const analyzeURL = async () => {
    if (!url.trim()) {
      toast.error('Please enter a URL to analyze');
      return;
    }

    try {
      setIsAnalyzing(true);
      
      const prompt = `Provide a detailed SEO analysis for the website ${url}. Include:
      1. Technical SEO assessment (page speed, mobile-friendliness, schema markup)
      2. On-page SEO review (title tags, meta descriptions, heading structure, content)
      3. Backlink opportunities and strategy
      4. Content gaps and optimization suggestions
      5. Keyword targeting recommendations
      Provide actionable advice in each section.`;

      const response = await fetch('https://jwprciyyydivvpymejku.functions.supabase.co/seo-helper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, url }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
      
      // Save to Supabase
      await saveReport(url, data.analysis);
      
      toast.success('SEO analysis completed');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error('Failed to analyze URL');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const saveReport = async (url: string, analysis: string) => {
    try {
      const { error } = await supabase
        .from('seo_reports')
        .insert([{ url, analysis: JSON.stringify(analysis) }]);
        
      if (error) throw error;
    } catch (error) {
      console.error('Error saving report:', error);
      toast.error('Failed to save report');
    }
  };

  const loadPastReports = async () => {
    try {
      setIsLoadingReports(true);
      const { data, error } = await supabase
        .from('seo_reports')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setPastReports(data || []);
    } catch (error) {
      console.error('Error loading reports:', error);
      toast.error('Failed to load past reports');
    } finally {
      setIsLoadingReports(false);
    }
  };

  const viewReport = (report: SEOReport) => {
    setSelectedReport(report);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>SEO Analyzer</CardTitle>
        <CardDescription>
          Analyze any URL for SEO improvements using AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="analyze" value={activeTab} onValueChange={(value) => {
          setActiveTab(value);
          if (value === 'history') loadPastReports();
        }}>
          <TabsList className="mb-4">
            <TabsTrigger value="analyze">Analyze URL</TabsTrigger>
            <TabsTrigger value="history">Analysis History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analyze">
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Enter website URL (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <Button onClick={analyzeURL} disabled={isAnalyzing}>
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              
              {analysisResult && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Analysis Results:</h3>
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <pre className="whitespace-pre-wrap">{analysisResult}</pre>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" onClick={() => {
                      navigator.clipboard.writeText(analysisResult);
                      toast.success('Analysis copied to clipboard');
                    }}>
                      Copy to Clipboard
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            {isLoadingReports ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : selectedReport ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    Report for: {selectedReport.url}
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setSelectedReport(null)}>
                    Back to list
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(selectedReport.created_at).toLocaleString()}
                </div>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <pre className="whitespace-pre-wrap overflow-auto max-h-[60vh]">
                    {typeof selectedReport.analysis === 'string' 
                      ? selectedReport.analysis
                      : JSON.stringify(selectedReport.analysis, null, 2)}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {pastReports.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No analysis reports found
                  </div>
                ) : (
                  <div className="space-y-2">
                    {pastReports.map((report) => (
                      <div 
                        key={report.created_at} 
                        className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                        onClick={() => viewReport(report)}
                      >
                        <div>
                          <h4 className="font-medium">{report.url}</h4>
                          <p className="text-sm text-gray-500">
                            {new Date(report.created_at).toLocaleString()}
                          </p>
                        </div>
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;
