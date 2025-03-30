
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { PageSEO, getScoreColor } from './types';

interface PagesListProps {
  pages: PageSEO[];
  selectedPage: PageSEO;
  handleSelectPage: (pageId: string) => void;
}

const PagesList = ({ pages, selectedPage, handleSelectPage }: PagesListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    page.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Pages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Search pages..." 
          className="mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
          {filteredPages.length > 0 ? (
            filteredPages.map(page => (
              <div 
                key={page.id}
                className={`p-3 border rounded-md cursor-pointer hover:bg-gray-50 ${selectedPage.id === page.id ? 'border-blue-500 bg-blue-50' : ''}`}
                onClick={() => handleSelectPage(page.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{page.title}</h3>
                    <p className="text-xs text-gray-500">{page.path}</p>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className={`w-2 h-2 rounded-full mr-1 ${getScoreColor(page.score)}`}
                    ></div>
                    <span className="text-xs">{page.score}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No pages found</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PagesList;
