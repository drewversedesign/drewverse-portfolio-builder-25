
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Search, Upload, Image, FileText, Film, Music, File, Download, Trash, Eye } from 'lucide-react';
import { Input } from '../ui/input';

const AdminMediaLibrary = () => {
  // Sample media files data
  const mediaFiles = [
    { id: 1, name: 'hero-image.jpg', type: 'image', size: '2.4 MB', uploaded: '2023-08-15', uploadedBy: 'John Doe' },
    { id: 2, name: 'brochure.pdf', type: 'document', size: '4.2 MB', uploaded: '2023-08-10', uploadedBy: 'Jane Smith' },
    { id: 3, name: 'product-demo.mp4', type: 'video', size: '18.7 MB', uploaded: '2023-08-05', uploadedBy: 'Mike Johnson' },
    { id: 4, name: 'background-music.mp3', type: 'audio', size: '3.1 MB', uploaded: '2023-07-28', uploadedBy: 'Sarah Wilson' },
    { id: 5, name: 'logo.png', type: 'image', size: '0.8 MB', uploaded: '2023-07-15', uploadedBy: 'John Doe' },
    { id: 6, name: 'presentation.pptx', type: 'document', size: '5.6 MB', uploaded: '2023-07-10', uploadedBy: 'Mike Johnson' },
  ];

  // Function to get the appropriate icon based on file type
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-4 w-4" />;
      case 'document':
        return <FileText className="h-4 w-4" />;
      case 'video':
        return <Film className="h-4 w-4" />;
      case 'audio':
        return <Music className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search media..." className="pl-8" />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Button>
          <Button>
            Create Folder
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="bg-blue-100 rounded-lg p-4 mb-3 inline-block">
              <Image className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-medium">Images</h3>
            <p className="text-sm text-gray-500">24 files</p>
          </div>
        </Card>
        
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="bg-amber-100 rounded-lg p-4 mb-3 inline-block">
              <FileText className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-medium">Documents</h3>
            <p className="text-sm text-gray-500">15 files</p>
          </div>
        </Card>
        
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="bg-purple-100 rounded-lg p-4 mb-3 inline-block">
              <Film className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-medium">Videos</h3>
            <p className="text-sm text-gray-500">8 files</p>
          </div>
        </Card>
        
        <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-4 mb-3 inline-block">
              <Music className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-medium">Audio</h3>
            <p className="text-sm text-gray-500">12 files</p>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Files</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaFiles.map((file) => (
                <TableRow key={file.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">{getFileIcon(file.type)}</span>
                      {file.name}
                    </div>
                  </TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.uploaded}</TableCell>
                  <TableCell>{file.uploadedBy}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMediaLibrary;
