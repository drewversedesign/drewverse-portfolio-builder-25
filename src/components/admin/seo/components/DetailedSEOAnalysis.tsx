
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { PageSEO } from '../types';

interface SEOScoreDetail {
  score: number;
  label: string;
  description: string;
  status: 'success' | 'warning' | 'error';
}

interface DetailedSEOAnalysisProps {
  page: PageSEO;
}

const DetailedSEOAnalysis: React.FC<DetailedSEOAnalysisProps> = ({ page }) => {
  const analyzeSEOElements = (page: PageSEO): SEOScoreDetail[] => {
    const details: SEOScoreDetail[] = [];
    
    // Title Analysis
    const titleLength = page.metaTitle.length;
    details.push({
      score: titleLength >= 50 && titleLength <= 60 ? 100 : 
             titleLength >= 40 && titleLength <= 70 ? 70 : 40,
      label: 'Title Length',
      description: `${titleLength}/60 characters. ${
        titleLength >= 50 && titleLength <= 60 
          ? 'Optimal length' 
          : 'Should be between 50-60 characters'
      }`,
      status: titleLength >= 50 && titleLength <= 60 ? 'success' : 
              titleLength >= 40 && titleLength <= 70 ? 'warning' : 'error'
    });

    // Focus Keyword in Title
    const keywordInTitle = page.metaTitle.toLowerCase().includes(page.focusKeyword.toLowerCase());
    details.push({
      score: keywordInTitle ? 100 : 0,
      label: 'Focus Keyword in Title',
      description: keywordInTitle 
        ? 'Focus keyword found in title' 
        : 'Add focus keyword to title',
      status: keywordInTitle ? 'success' : 'error'
    });

    // Meta Description Analysis
    const descLength = page.metaDescription.length;
    details.push({
      score: descLength >= 150 && descLength <= 160 ? 100 : 
             descLength >= 120 && descLength <= 180 ? 70 : 40,
      label: 'Meta Description Length',
      description: `${descLength}/160 characters. ${
        descLength >= 150 && descLength <= 160 
          ? 'Optimal length' 
          : 'Should be between 150-160 characters'
      }`,
      status: descLength >= 150 && descLength <= 160 ? 'success' : 
              descLength >= 120 && descLength <= 180 ? 'warning' : 'error'
    });

    // Keywords Analysis
    const keywordsCount = page.metaKeywords.split(',').length;
    details.push({
      score: keywordsCount >= 3 && keywordsCount <= 8 ? 100 : 
             keywordsCount > 0 ? 70 : 0,
      label: 'Keywords Count',
      description: `${keywordsCount} keywords. ${
        keywordsCount >= 3 && keywordsCount <= 8 
          ? 'Good range' 
          : 'Aim for 3-8 keywords'
      }`,
      status: keywordsCount >= 3 && keywordsCount <= 8 ? 'success' : 
              keywordsCount > 0 ? 'warning' : 'error'
    });

    return details;
  };

  const seoDetails = analyzeSEOElements(page);
  const overallScore = Math.round(
    seoDetails.reduce((acc, detail) => acc + detail.score, 0) / seoDetails.length
  );

  const getStatusIcon = (status: 'success' | 'warning' | 'error') => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <Info className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>SEO Analysis for: {page.title}</span>
          <span className="text-lg font-bold">
            Score: {overallScore}/100
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {seoDetails.map((detail, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(detail.status)}
                  <span className="font-medium">{detail.label}</span>
                </div>
                <span className="text-sm font-medium">{detail.score}%</span>
              </div>
              <Progress 
                value={detail.score} 
                className={`h-2 ${
                  detail.status === 'success' ? 'bg-green-100' : 
                  detail.status === 'warning' ? 'bg-yellow-100' : 'bg-red-100'
                }`}
              />
              <p className="text-sm text-gray-500">{detail.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedSEOAnalysis;
