
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner';
import GeneralSEO from './seo/GeneralSEO';
import PagesList from './seo/PagesList';
import PageSEO from './seo/PageSEO';
import SEOTools from './seo/SEOTools';
import SEOReports from './seo/SEOReports';
import { initialSEOSettings, initialPageSEO } from './seo/mockData';
import { SEOSetting, PageSEO as PageSEOType } from './seo/types';

const AdminSEO = () => {
  const [generalSEO, setGeneralSEO] = useState<SEOSetting>(initialSEOSettings);
  const [pages, setPages] = useState<PageSEOType[]>(initialPageSEO);
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
          <GeneralSEO 
            generalSEO={generalSEO}
            handleInputChange={handleInputChange}
            handleSaveGeneral={handleSaveGeneral}
            isSaving={isSaving}
          />
        </TabsContent>
        
        <TabsContent value="pages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PagesList 
              pages={pages}
              selectedPage={selectedPage}
              handleSelectPage={handleSelectPage}
            />
            
            <PageSEO 
              selectedPage={selectedPage}
              handlePageInputChange={handlePageInputChange}
              handleUpdatePage={handleUpdatePage}
              isSaving={isSaving}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <SEOTools 
            runAnalysis={runAnalysis}
            generateSitemap={generateSitemap}
            isRunningAnalysis={isRunningAnalysis}
            isGeneratingSitemap={isGeneratingSitemap}
          />
        </TabsContent>
        
        <TabsContent value="reports">
          <SEOReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSEO;
