
import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Loader2, FileText } from 'lucide-react';
import { SEOAnalysisReport } from '../types';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ReportHistory = () => {
  const [pastReports, setPastReports] = useState<SEOAnalysisReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<SEOAnalysisReport | null>(null);
  const [isLoadingReports, setIsLoadingReports] = useState(false);

  useEffect(() => {
    loadPastReports();
  }, []);

  const loadPastReports = async () => {
    try {
      setIsLoadingReports(true);
      const { data, error } = await supabase
        .from('seo_reports')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      // Convert any JSON analysis to string if needed
      const formattedReports = data?.map(report => ({
        ...report,
        analysis: typeof report.analysis === 'string' 
          ? report.analysis 
          : JSON.stringify(report.analysis)
      })) || [];
      
      setPastReports(formattedReports);
    } catch (error) {
      console.error('Error loading reports:', error);
      toast.error('Failed to load past reports');
    } finally {
      setIsLoadingReports(false);
    }
  };

  const viewReport = (report: SEOAnalysisReport) => {
    setSelectedReport(report);
  };

  if (isLoadingReports) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (selectedReport) {
    return (
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
    );
  }

  return (
    <div className="space-y-4">
      {pastReports.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No analysis reports found
        </div>
      ) : (
        <div className="space-y-2">
          {pastReports.map((report) => (
            <div 
              key={report.id} 
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
  );
};

export default ReportHistory;
