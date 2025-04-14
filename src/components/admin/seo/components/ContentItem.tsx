
import React from 'react';
import { FileText } from 'lucide-react';

export interface ContentItemProps {
  id: string;
  title: string;
  content: string;
  type: string;
  created_at: string;
  onView: (content: ContentItemProps) => void;
  getContentTypeLabel: (type: string) => string;
  formatDate: (dateString: string) => string;
}

export const ContentItem: React.FC<ContentItemProps> = ({
  id,
  title,
  content,
  type,
  created_at,
  onView,
  getContentTypeLabel,
  formatDate
}) => {
  const handleClick = () => {
    onView({ id, title, content, type, created_at, onView, getContentTypeLabel, formatDate });
  };
  
  return (
    <div 
      key={id} 
      className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer flex justify-between items-center"
      onClick={handleClick}
    >
      <div>
        <h4 className="font-medium">{title}</h4>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 mr-4">
            {getContentTypeLabel(type)}
          </span>
          <span className="text-sm text-gray-500">
            {formatDate(created_at)}
          </span>
        </div>
      </div>
      <FileText className="h-5 w-5 text-gray-400" />
    </div>
  );
};

export default ContentItem;
