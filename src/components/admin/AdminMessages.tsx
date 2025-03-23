
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Eye, Trash, Check, Search, ArrowUpDown, Filter } from 'lucide-react';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

const AdminMessages = () => {
  // Sample messages data
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      subject: 'Project Inquiry',
      message: 'Hello, I\'m interested in your web design services. Can you help me create a website for my new business? I need something modern and responsive. Looking forward to hearing from you.',
      date: '2023-07-20', 
      read: false 
    },
    { 
      id: 2, 
      name: 'Sarah Smith', 
      email: 'sarah@example.com', 
      subject: 'Collaboration Opportunity',
      message: 'Hi there, I'm Sarah from DesignHub. We\'re looking for creative agencies to collaborate with on some upcoming projects. Would love to discuss potential partnerships.',
      date: '2023-07-18', 
      read: true 
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      subject: 'Website Redesign',
      message: 'I need to refresh my company\'s website. It\'s quite outdated and not mobile-friendly. Can you provide information about your redesign services and pricing?',
      date: '2023-07-15', 
      read: false 
    },
    { 
      id: 4, 
      name: 'Emily Brown', 
      email: 'emily@example.com', 
      subject: 'Quote Request',
      message: 'Please send me a quote for developing an e-commerce website with approximately 50 products, secure payment processing, and inventory management features.',
      date: '2023-07-10', 
      read: true 
    },
    { 
      id: 5, 
      name: 'David Wilson', 
      email: 'david@example.com', 
      subject: 'Support Question',
      message: 'I\'m having trouble updating content on my website. The changes I make in the CMS aren\'t showing up on the live site. Can you help me troubleshoot this issue?',
      date: '2023-07-05', 
      read: false 
    },
  ]);

  const [viewMessage, setViewMessage] = useState<Message | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState<keyof Message>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleMarkAsRead = (id: number) => {
    setMessages(messages.map(message => 
      message.id === id ? {...message, read: true} : message
    ));
    toast.success('Message marked as read');
  };

  const handleMarkAllAsRead = () => {
    setMessages(messages.map(message => ({...message, read: true})));
    toast.success('All messages marked as read');
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
    setDeleteConfirmId(null);
    toast.success('Message deleted successfully');
  };

  const handleViewMessage = (message: Message) => {
    setViewMessage(message);
    
    // If message is unread, mark it as read
    if (!message.read) {
      handleMarkAsRead(message.id);
    }
  };

  const handleExport = () => {
    toast.success('Exporting messages...');
    setTimeout(() => {
      toast.success('Messages exported successfully');
    }, 1500);
  };

  const handleSort = (field: keyof Message) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  const filteredMessages = messages
    .filter(message => 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(message => 
      filterStatus === 'all' || 
      (filterStatus === 'read' && message.read) || 
      (filterStatus === 'unread' && !message.read)
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return sortDirection === 'asc' 
          ? (aValue === bValue ? 0 : aValue ? 1 : -1)
          : (aValue === bValue ? 0 : aValue ? -1 : 1);
      }
      
      return 0;
    });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Message Center</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleMarkAllAsRead}>Mark All as Read</Button>
          <Button variant="outline" onClick={handleExport}>Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
              <Input 
                placeholder="Search messages..." 
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredMessages.length} of {messages.length} messages
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                Name
                {sortField === 'name' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('email')}>
                Email
                {sortField === 'email' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('subject')}>
                Subject
                {sortField === 'subject' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('date')}>
                Date
                {sortField === 'date' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('read')}>
                Status
                {sortField === 'read' && (
                  <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                )}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No messages found
                </TableCell>
              </TableRow>
            ) : (
              filteredMessages.map((message) => (
                <TableRow key={message.id} className={message.read ? '' : 'font-medium bg-gray-50'}>
                  <TableCell>{message.id}</TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{formatDate(message.date)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      message.read ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {message.read ? 'Read' : 'Unread'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleViewMessage(message)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      {!message.read && (
                        <Button variant="ghost" size="sm" onClick={() => handleMarkAsRead(message.id)}>
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={() => setDeleteConfirmId(message.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        
        {/* View Message Dialog */}
        <Dialog open={Boolean(viewMessage)} onOpenChange={(open) => !open && setViewMessage(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{viewMessage?.subject}</DialogTitle>
            </DialogHeader>
            {viewMessage && (
              <div className="py-4">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p>{viewMessage.name} &lt;{viewMessage.email}&gt;</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p>{formatDate(viewMessage.date)}</p>
                  </div>
                </div>
                
                <div className="mb-4 border-t pt-4">
                  <p className="whitespace-pre-line">{viewMessage.message}</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Actions</p>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm" onClick={() => {
                      window.location.href = `mailto:${viewMessage.email}?subject=Re: ${viewMessage.subject}`;
                    }}>
                      Reply via Email
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => {
                      const whatsappMsg = encodeURIComponent(
                        `Hello ${viewMessage.name},\n\nThank you for your message about "${viewMessage.subject}". `
                      );
                      window.open(`https://wa.me/?text=${whatsappMsg}`, '_blank');
                    }}>
                      Reply via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setViewMessage(null)}>Close</Button>
              {viewMessage && (
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    handleDeleteMessage(viewMessage.id);
                    setViewMessage(null);
                  }}
                >
                  Delete
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Delete Confirmation Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onOpenChange={() => setDeleteConfirmId(null)}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this message? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>Cancel</Button>
              <Button 
                variant="destructive" 
                onClick={() => deleteConfirmId && handleDeleteMessage(deleteConfirmId)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AdminMessages;
