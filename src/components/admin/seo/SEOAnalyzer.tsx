
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import AnalyzerForm from './components/AnalyzerForm';
import AnalysisResults from './components/AnalysisResults';
import ReportHistory from './components/ReportHistory';
import { saveReport } from './utils/seoAnalysisService';

const SEOAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('analyze');

  const handleAnalysisComplete = async (result: string, url: string) => {
    setAnalysisResult(result);
    // Save to Supabase
    await saveReport(url, result);
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
        <Tabs defaultValue="analyze" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="analyze">Analyze URL</TabsTrigger>
            <TabsTrigger value="history">Analysis History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analyze">
            <div className="space-y-4">
              <AnalyzerForm 
                onAnalysisComplete={handleAnalysisComplete}
                isAnalyzing={isAnalyzing}
                setIsAnalyzing={setIsAnalyzing}
              />
              
              {analysisResult && <AnalysisResults analysisResult={analysisResult} />}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <ReportHistory />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;
