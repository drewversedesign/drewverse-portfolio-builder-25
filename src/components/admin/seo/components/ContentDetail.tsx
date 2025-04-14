
import React from 'react';
import { Copy, Download } from 'lucide-react';
import { Button } from '../../../ui/button';
import { toast } from 'sonner';
import { ContentItemProps } from './ContentItem';

interface ContentDetailProps {
  content: ContentItemProps;
  onBackToList: () => void;
  getContentTypeLabel: (type: string) => string;
  formatDate: (dateString: string) => string;
}

export const ContentDetail: React.FC<ContentDetailProps> = ({
  content,
  onBackToList,
  getContentTypeLabel,
  formatDate
}) => {
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          {content.title}
        </h3>
        <Button variant="outline" size="sm" onClick={onBackToList}>
          Back to list
        </Button>
      </div>
      <div className="text-sm text-gray-500 flex justify-between">
        <span>{getContentTypeLabel(content.type)}</span>
        <span>{formatDate(content.created_at)}</span>
      </div>
      <div className="flex space-x-2 justify-end">
        <Button variant="outline" size="sm" onClick={() => copyToClipboard(content.content)}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
        <Button variant="outline" size="sm" onClick={() => downloadAsText(content.content, content.title)}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
      <div className="bg-gray-50 p-4 rounded-md border">
        <pre className="whitespace-pre-wrap overflow-auto max-h-[60vh]">
          {content.content}
        </pre>
      </div>
    </div>
  );
};
