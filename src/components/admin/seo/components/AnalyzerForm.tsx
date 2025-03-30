
import React, { useState } from 'react';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';
import { Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface AnalyzerFormProps {
  onAnalysisComplete: (result: string, url: string) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (value: boolean) => void;
}

const AnalyzerForm = ({ onAnalysisComplete, isAnalyzing, setIsAnalyzing }: AnalyzerFormProps) => {
  const [url, setUrl] = useState('');

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
      onAnalysisComplete(data.analysis, url);
      
      toast.success('SEO analysis completed');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error('Failed to analyze URL');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
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
    </div>
  );
};

export default AnalyzerForm;
