
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner';
import GeneralSEO from './seo/GeneralSEO';
import PagesList from './seo/PagesList';
import PageSEO from './seo/PageSEO';
import SEOTools from './seo/SEOTools';
import SEOReports from './seo/SEOReports';
import SEOAnalyzer from './seo/SEOAnalyzer';
import { initialSEOSettings, initialPageSEO } from './seo/mockData';
import { SEOSetting, PageSEO as PageSEOType } from './seo/types';
import { saveSEOSettings, loadSEOSettings, analyzePage, generateSitemap } from '@/utils/admin/seoUtils';

const AdminSEO = () => {
  const [generalSEO, setGeneralSEO] = useState<SEOSetting>(initialSEOSettings);
  const [pages, setPages] = useState<PageSEOType[]>(initialPageSEO);
  const [selectedPage, setSelectedPage] = useState(initialPageSEO[0]);
  const [isRunningAnalysis, setIsRunningAnalysis] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingSitemap, setIsGeneratingSitemap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved SEO settings on initial render
  useEffect(() => {
    const loadSavedSettings = async () => {
      try {
        setIsLoading(true);
        const savedData = await loadSEOSettings();
        
        if (savedData) {
          setGeneralSEO(savedData.generalSettings);
          setPages(savedData.pageSettings);
          setSelectedPage(savedData.pageSettings[0]);
          toast.success('SEO settings loaded');
        }
      } catch (error) {
        console.error('Error loading settings:', error);
        toast.error('Failed to load SEO settings');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSavedSettings();
  }, []);

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

  const handleSaveGeneral = async () => {
    setIsSaving(true);
    
    try {
      const success = await saveSEOSettings(generalSEO, pages);
      
      if (success) {
        toast.success('SEO settings saved successfully');
      } else {
        toast.error('Failed to save SEO settings');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('An error occurred while saving');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdatePage = async () => {
    setIsSaving(true);
    
    try {
      // Update the page in the pages array
      const updatedPages = pages.map(page => 
        page.id === selectedPage.id ? selectedPage : page
      );
      
      setPages(updatedPages);
      
      // Save all settings
      const success = await saveSEOSettings(generalSEO, updatedPages);
      
      if (success) {
        toast.success('Page SEO updated successfully');
      } else {
        toast.error('Failed to update page SEO');
      }
    } catch (error) {
      console.error('Error updating page:', error);
      toast.error('An error occurred while updating');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSelectPage = (pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (page) {
      setSelectedPage(page);
    }
  };

  const runAnalysis = async () => {
    setIsRunningAnalysis(true);
    
    try {
      // Analyze each page and update scores
      const analyzedPages = await Promise.all(
        pages.map(async (page) => ({
          ...page,
          score: await analyzePage(page)
        }))
      );
      
      setPages(analyzedPages);
      
      // Update the selected page if its score changed
      const updatedSelectedPage = analyzedPages.find(p => p.id === selectedPage.id);
      if (updatedSelectedPage) {
        setSelectedPage(updatedSelectedPage);
      }
      
      // Save the updated pages
      await saveSEOSettings(generalSEO, analyzedPages);
      
      toast.success('Keyword analysis completed successfully');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error('An error occurred during analysis');
    } finally {
      setIsRunningAnalysis(false);
    }
  };

  const generateSitemapFile = async () => {
    setIsGeneratingSitemap(true);
    
    try {
      const sitemapXml = await generateSitemap(pages);
      
      // Create a blob and download link
      const blob = new Blob([sitemapXml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      // Create download link
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sitemap.xml';
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
      
      // Update the sitemap URL in general settings
      const newGeneralSEO = {
        ...generalSEO,
        sitemap: `${window.location.origin}/sitemap.xml`
      };
      
      setGeneralSEO(newGeneralSEO);
      await saveSEOSettings(newGeneralSEO, pages);
      
      toast.success('Sitemap generated successfully');
    } catch (error) {
      console.error('Sitemap generation error:', error);
      toast.error('Failed to generate sitemap');
    } finally {
      setIsGeneratingSitemap(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-3">Loading SEO settings...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General SEO</TabsTrigger>
          <TabsTrigger value="pages">Page-Specific SEO</TabsTrigger>
          <TabsTrigger value="tools">SEO Tools</TabsTrigger>
          <TabsTrigger value="analyzer">AI Analyzer</TabsTrigger>
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
            generateSitemap={generateSitemapFile}
            isRunningAnalysis={isRunningAnalysis}
            isGeneratingSitemap={isGeneratingSitemap}
          />
        </TabsContent>
        
        <TabsContent value="analyzer">
          <SEOAnalyzer />
        </TabsContent>
        
        <TabsContent value="reports">
          <SEOReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSEO;
