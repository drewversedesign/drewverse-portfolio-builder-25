import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Progress } from '../../ui/progress';
import { PageSEO as PageSEOType, getScoreColor, getScoreText } from './types';
import DetailedSEOAnalysis from './components/DetailedSEOAnalysis';

interface PageSEOProps {
  selectedPage: PageSEOType;
  handlePageInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleUpdatePage: () => void;
  isSaving: boolean;
}

const PageSEO = ({ selectedPage, handlePageInputChange, handleUpdatePage, isSaving }: PageSEOProps) => {
  return (
    <div className="md:col-span-2 space-y-6">
      <Card>
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

      <DetailedSEOAnalysis page={selectedPage} />
    </div>
  );
};

export default PageSEO;
