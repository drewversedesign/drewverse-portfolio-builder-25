
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Edit, Mail, Plus } from 'lucide-react';

const AdminEmailTemplates = () => {
  // Sample email templates
  const templates = [
    { id: 1, name: 'Welcome Email', subject: 'Welcome to Drew Creative Agency', lastUpdated: '2023-08-15' },
    { id: 2, name: 'Password Reset', subject: 'Reset Your Password', lastUpdated: '2023-07-22' },
    { id: 3, name: 'New Project Confirmation', subject: 'Your Project Has Been Created', lastUpdated: '2023-08-01' },
    { id: 4, name: 'Invoice Payment', subject: 'Invoice Payment Receipt', lastUpdated: '2023-06-15' },
    { id: 5, name: 'Appointment Confirmation', subject: 'Your Appointment is Confirmed', lastUpdated: '2023-07-10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-lg font-medium">Email Templates</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Subject: {template.subject}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Updated: {template.lastUpdated}</span>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="template-name" className="text-sm font-medium">Template Name</label>
              <Input id="template-name" defaultValue="Welcome Email" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email-subject" className="text-sm font-medium">Email Subject</label>
              <Input id="email-subject" defaultValue="Welcome to Drew Creative Agency" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="sender-name" className="text-sm font-medium">Sender Name</label>
              <Input id="sender-name" defaultValue="Drew Creative Team" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="sender-email" className="text-sm font-medium">Sender Email</label>
              <Input id="sender-email" defaultValue="support@drewcreative.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <div className="border rounded-md p-2">
                <div className="space-y-2 border-b pb-2">
                  <Button variant="outline" size="sm">Bold</Button>
                  <Button variant="outline" size="sm">Italic</Button>
                  <Button variant="outline" size="sm">Link</Button>
                  <Button variant="outline" size="sm">Image</Button>
                </div>
                <Textarea 
                  rows={10} 
                  defaultValue={`<p>Dear {{name}},</p>
<p>Welcome to Drew Creative Agency! We're thrilled to have you with us.</p>
<p>Your account has been successfully created. You can now log in and explore our services.</p>
<p>If you have any questions, please don't hesitate to contact us.</p>
<p>Best regards,<br/>The Drew Creative Team</p>`} 
                  className="font-mono text-sm"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Use &#123;&#123;variable&#125;&#125; syntax for dynamic content.</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Dynamic Variables</label>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">&#123;&#123;name&#125;&#125;</Button>
                <Button variant="outline" size="sm">&#123;&#123;email&#125;&#125;</Button>
                <Button variant="outline" size="sm">&#123;&#123;company&#125;&#125;</Button>
                <Button variant="outline" size="sm">&#123;&#123;date&#125;&#125;</Button>
                <Button variant="outline" size="sm">&#123;&#123;link&#125;&#125;</Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Test Email
              </Button>
              <Button>Save Template</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEmailTemplates;
