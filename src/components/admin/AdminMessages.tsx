
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Eye, Mail, CheckCircle, Clock, X, MailOpen } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  created_at: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all');

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleViewMessage = async (message: Message) => {
    setSelectedMessage(message);
    setViewDialogOpen(true);
    
    // If message is new, mark it as read
    if (message.status === 'new') {
      try {
        const { error } = await supabase
          .from('contact_messages')
          .update({ status: 'read' })
          .eq('id', message.id);
          
        if (error) throw error;
        
        // Update local state
        setMessages(messages.map(m => 
          m.id === message.id ? { ...m, status: 'read' } : m
        ));
      } catch (error) {
        console.error('Error updating message status:', error);
      }
    }
  };

  const handleUpdateStatus = async (id: string, status: 'new' | 'read' | 'replied' | 'archived') => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);
        
      if (error) throw error;
      
      // Update local state
      setMessages(messages.map(m => 
        m.id === id ? { ...m, status } : m
      ));
      
      // Update selected message if open
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, status });
      }
      
      toast.success(`Message marked as ${status}`);
    } catch (error) {
      console.error('Error updating message status:', error);
      toast.error('Failed to update message status');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'read':
        return <Badge className="bg-gray-500">Read</Badge>;
      case 'replied':
        return <Badge className="bg-green-500">Replied</Badge>;
      case 'archived':
        return <Badge className="bg-purple-500">Archived</Badge>;
      default:
        return <Badge className="bg-gray-500">{status}</Badge>;
    }
  };

  const filteredMessages = activeTab === 'all' 
    ? messages 
    : messages.filter(message => message.status === activeTab);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList>
          <TabsTrigger value="all">All Messages</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
          <TabsTrigger value="replied">Replied</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Messages
                {activeTab !== 'all' && (
                  <Badge className="ml-2">{filteredMessages.length}</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  {filteredMessages.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Status</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredMessages.map((message) => (
                          <TableRow key={message.id} className={message.status === 'new' ? 'bg-blue-50' : ''}>
                            <TableCell>{getStatusBadge(message.status)}</TableCell>
                            <TableCell className="font-medium">{message.name}</TableCell>
                            <TableCell>{message.subject}</TableCell>
                            <TableCell>
                              <a href={`mailto:${message.email}`} className="text-blue-600 hover:underline">
                                {message.email}
                              </a>
                            </TableCell>
                            <TableCell>{formatDate(message.created_at)}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" onClick={() => handleViewMessage(message)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                                {message.status !== 'archived' && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => handleUpdateStatus(message.id, 'archived')}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No {activeTab === 'all' ? '' : activeTab} messages found
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedMessage && (
        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Message from {selectedMessage.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">From: {selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                  {selectedMessage.phone && <p className="text-gray-500">Phone: {selectedMessage.phone}</p>}
                </div>
                <div className="flex items-center">
                  {getStatusBadge(selectedMessage.status)}
                  <span className="ml-2 text-sm text-gray-500">
                    {formatDate(selectedMessage.created_at)}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium">Subject</h3>
                <p>{selectedMessage.subject}</p>
              </div>
              
              <div>
                <h3 className="font-medium">Message</h3>
                <div className="mt-2 p-4 border rounded-md bg-gray-50 whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <div className="space-x-2">
                  <Button variant="outline" asChild>
                    <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`} target="_blank">
                      Reply via Email
                    </a>
                  </Button>
                </div>
                
                <div className="space-x-2">
                  {selectedMessage.status !== 'read' && (
                    <Button 
                      variant="outline" 
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'read')}
                    >
                      <MailOpen className="mr-2 h-4 w-4" />
                      Mark as Read
                    </Button>
                  )}
                  
                  {selectedMessage.status !== 'replied' && (
                    <Button 
                      variant="outline" 
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'replied')}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark as Replied
                    </Button>
                  )}
                  
                  {selectedMessage.status !== 'archived' && (
                    <Button 
                      onClick={() => handleUpdateStatus(selectedMessage.id, 'archived')}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Archive
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminMessages;
