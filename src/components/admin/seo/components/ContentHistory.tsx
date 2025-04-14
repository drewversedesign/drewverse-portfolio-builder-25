
import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { getContentHistory, AIGeneratedContent } from '../utils/aiContentService';
import { ContentItem, ContentItemProps } from './ContentItem';
import { ContentDetail } from './ContentDetail';
import { formatDate, getContentTypeLabel, exportContentData } from '../utils/contentUtils';

export const ContentHistory: React.FC = () => {
  const [contents, setContents] = useState<ContentItemProps[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentItemProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadContentHistory(activeTab === 'all' ? undefined : activeTab);
  }, [activeTab]);

  const loadContentHistory = async (type?: string) => {
    try {
      setIsLoading(true);
      const data = await getContentHistory(type);
      setContents(data as ContentItemProps[]);
    } catch (error) {
      console.error('Error loading content history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportAll = () => {
    const success = exportContentData(contents);
    if (success) {
      toast.success('All content exported successfully');
    } else {
      toast.error('Failed to export content');
    }
  };

  if (selectedContent) {
    return (
      <ContentDetail 
        content={selectedContent} 
        onBackToList={() => setSelectedContent(null)}
        getContentTypeLabel={getContentTypeLabel}
        formatDate={formatDate}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="summary">Summaries</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {contents.length > 0 && (
          <Button variant="outline" size="sm" onClick={handleExportAll}>
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : contents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No saved content found
        </div>
      ) : (
        <div className="space-y-2">
          {contents.map((content) => (
            <ContentItem
              key={content.id}
              id={content.id}
              title={content.title}
              content={content.content}
              type={content.type}
              created_at={content.created_at}
              onView={setSelectedContent}
              getContentTypeLabel={getContentTypeLabel}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentHistory;
