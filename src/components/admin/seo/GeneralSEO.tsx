
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Save } from 'lucide-react';
import { SEOSetting } from './types';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface GeneralSEOProps {
  generalSEO: SEOSetting;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSaveGeneral: () => void;
  isSaving: boolean;
}

const GeneralSEO = ({ generalSEO, handleInputChange, handleSaveGeneral, isSaving }: GeneralSEOProps) => {
  return (
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
  );
};

export default GeneralSEO;
