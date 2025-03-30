
import React from 'react';
import { Button } from '../../../ui/button';
import { toast } from 'sonner';

interface AnalysisResultsProps {
  analysisResult: string | null;
}

const AnalysisResults = ({ analysisResult }: AnalysisResultsProps) => {
  if (!analysisResult) return null;

  return (
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
  );
};

export default AnalysisResults;
