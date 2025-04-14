
import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Download, Copy, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { getContentHistory, AIGeneratedContent } from '../utils/aiContentService';

// Define a type that matches the expected structure of our content items
interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: string;
  created_at: string;
}

const ContentHistory = () => {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadContentHistory(activeTab === 'all' ? undefined : activeTab);
  }, [activeTab]);

  const loadContentHistory = async (type?: string) => {
    try {
      setIsLoading(true);
      const data = await getContentHistory(type);
      // The getContentHistory function now returns AIGeneratedContent[], which we can safely cast to ContentItem[]
      setContents(data as ContentItem[]);
    } catch (error) {
      console.error('Error loading content history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const viewContent = (content: ContentItem) => {
    setSelectedContent(content);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const downloadAsText = (text: string, title: string) => {
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${title}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Downloaded successfully');
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleString();
    } catch (error) {
      console.error('Date formatting error:', error);
      return dateString || 'N/A';
    }
  };

  const getContentTypeLabel = (type: string) => {
    switch (type) {
      case 'content': return 'Generated Content';
      case 'summary': return 'Text Summary';
      case 'keywords': return 'Keyword Analysis';
      default: return type;
    }
  };

  // Export functionality for user data
  const exportAllContent = () => {
    try {
      // Create a data blob with all content
      const contentData = contents.map(item => ({
        id: item.id,
        title: item.title,
        type: item.type,
        created_at: formatDate(item.created_at),
        content: item.content
      }));
      
      const dataStr = JSON.stringify(contentData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      // Create download link
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'content-export.json';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('All content exported successfully');
    } catch (error) {
      console.error('Error exporting content:', error);
      toast.error('Failed to export content');
    }
  };

  if (selectedContent) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">
            {selectedContent.title}
          </h3>
          <Button variant="outline" size="sm" onClick={() => setSelectedContent(null)}>
            Back to list
          </Button>
        </div>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>{getContentTypeLabel(selectedContent.type)}</span>
          <span>{formatDate(selectedContent.created_at)}</span>
        </div>
        <div className="flex space-x-2 justify-end">
          <Button variant="outline" size="sm" onClick={() => copyToClipboard(selectedContent.content)}>
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={() => downloadAsText(selectedContent.content, selectedContent.title)}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
        <div className="bg-gray-50 p-4 rounded-md border">
          <pre className="whitespace-pre-wrap overflow-auto max-h-[60vh]">
            {selectedContent.content}
          </pre>
        </div>
      </div>
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
          <Button variant="outline" size="sm" onClick={exportAllContent}>
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
            <div 
              key={content.id} 
              className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer flex justify-between items-center"
              onClick={() => viewContent(content)}
            >
              <div>
                <h4 className="font-medium">{content.title}</h4>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 mr-4">
                    {getContentTypeLabel(content.type)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(content.created_at)}
                  </span>
                </div>
              </div>
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentHistory;
