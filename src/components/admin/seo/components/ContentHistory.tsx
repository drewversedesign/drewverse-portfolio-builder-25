
import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { getContentHistory, AIGeneratedContent } from '../utils/aiContentService';
import { ContentItem, ContentItemProps } from './ContentItem';
import { ContentDetail } from './ContentDetail';
import { formatDate, getContentTypeLabel, exportContentData } from '../utils/contentUtils';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '../../../ui/pagination';

const ITEMS_PER_PAGE = 5;

export const ContentHistory: React.FC = () => {
  const [contents, setContents] = useState<ContentItemProps[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentItemProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadContentHistory(activeTab === 'all' ? undefined : activeTab);
  }, [activeTab]);

  useEffect(() => {
    // Reset to first page when tab changes
    setCurrentPage(1);
  }, [activeTab]);

  const loadContentHistory = async (type?: string) => {
    try {
      setIsLoading(true);
      const data = await getContentHistory(type);
      setContents(data as ContentItemProps[]);
      setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
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

  const getPaginatedContents = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return contents.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate start and end of page range
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if we're near the beginning
    if (currentPage <= 3) {
      endPage = Math.min(maxPageButtons, totalPages - 1);
    }
    
    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - maxPageButtons + 1);
    }
    
    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push('ellipsis-start');
    }
    
    // Add page numbers in the middle
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push('ellipsis-end');
    }
    
    // Always show last page if more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
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
          {getPaginatedContents().map((content) => (
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
          
          {totalPages > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }} 
                    />
                  </PaginationItem>
                )}
                
                {getPageNumbers().map((page, index) => {
                  if (page === 'ellipsis-start' || page === 'ellipsis-end') {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <span className="flex h-9 w-9 items-center justify-center">...</span>
                      </PaginationItem>
                    );
                  }
                  
                  return (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(Number(page));
                        }}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }} 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentHistory;
