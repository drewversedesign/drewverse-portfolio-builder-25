
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Switch } from '../../ui/switch';
import { Textarea } from '../../ui/textarea';
import { Edit, Eye, Copy, Save, PlayCircle, Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  description: string;
  body: string;
  isActive: boolean;
  lastModified: string;
  category: 'transactional' | 'marketing' | 'notification';
}

const EmailTemplatesManager = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([
    {
      id: 'welcome-email',
      name: 'Welcome Email',
      subject: 'Welcome to Drew Creative Agency',
      description: 'Sent to new users after registration',
      body: '<h1>Welcome to Drew Creative Agency!</h1><p>We\'re excited to have you on board.</p><p>Here are some next steps to get started:</p><ul><li>Complete your profile</li><li>Explore our services</li><li>Contact us if you have questions</li></ul>',
      isActive: true,
      lastModified: '2023-08-15',
      category: 'transactional'
    },
    {
      id: 'appointment-confirmation',
      name: 'Appointment Confirmation',
      subject: 'Your appointment has been confirmed',
      description: 'Sent after a client books an appointment',
      body: '<h1>Appointment Confirmed</h1><p>Your appointment has been scheduled for {{appointment_date}} at {{appointment_time}}.</p><p>If you need to reschedule, please contact us at least 24 hours in advance.</p>',
      isActive: true,
      lastModified: '2023-09-20',
      category: 'transactional'
    },
    {
      id: 'project-update',
      name: 'Project Update',
      subject: 'Update on your project',
      description: 'Sent to clients when their project status changes',
      body: '<h1>Project Update</h1><p>There\'s been an update to your project "{{project_name}}":</p><p><strong>Status:</strong> {{project_status}}</p><p><strong>Next steps:</strong> {{next_steps}}</p>',
      isActive: true,
      lastModified: '2023-10-05',
      category: 'notification'
    },
    {
      id: 'monthly-newsletter',
      name: 'Monthly Newsletter',
      subject: 'Drew Creative - Monthly Design Insights',
      description: 'Monthly newsletter with design tips and agency news',
      body: '<h1>Monthly Design Insights</h1><p>Here\'s what\'s new this month:</p><ul><li>Featured project: {{featured_project}}</li><li>Design tip of the month: {{design_tip}}</li><li>Industry news: {{industry_news}}</li></ul>',
      isActive: false,
      lastModified: '2023-11-10',
      category: 'marketing'
    }
  ]);

  const [activeTemplate, setActiveTemplate] = useState<EmailTemplate | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTemplate, setEditedTemplate] = useState<EmailTemplate | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const handleViewTemplate = (id: string) => {
    const template = templates.find(t => t.id === id);
    if (template) {
      setActiveTemplate(template);
      setIsEditing(false);
    }
  };

  const handleEditTemplate = (id: string) => {
    const template = templates.find(t => t.id === id);
    if (template) {
      setActiveTemplate(template);
      setEditedTemplate({...template});
      setIsEditing(true);
    }
  };

  const handleSaveTemplate = () => {
    if (!editedTemplate) return;
    
    setTemplates(prevTemplates => 
      prevTemplates.map(template => 
        template.id === editedTemplate.id 
          ? {...editedTemplate, lastModified: new Date().toISOString().split('T')[0]} 
          : template
      )
    );
    
    setActiveTemplate(editedTemplate);
    setIsEditing(false);
    toast.success('Email template saved successfully');
  };

  const handleToggleActive = (id: string) => {
    setTemplates(prevTemplates => 
      prevTemplates.map(template => 
        template.id === id 
          ? {...template, isActive: !template.isActive} 
          : template
      )
    );
    
    const template = templates.find(t => t.id === id);
    const status = template?.isActive ? 'deactivated' : 'activated';
    toast.success(`Template ${status} successfully`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editedTemplate) return;
    
    const { name, value } = e.target;
    setEditedTemplate(prev => prev ? {...prev, [name]: value} : null);
  };

  const handleCloseTemplate = () => {
    setActiveTemplate(null);
    setEditedTemplate(null);
    setIsEditing(false);
  };

  const handleSendTest = (id: string) => {
    toast.success('Sending test email...');
    setTimeout(() => {
      toast.success('Test email sent successfully');
    }, 1500);
  };

  const filterTemplates = () => {
    if (activeTab === 'all') return templates;
    return templates.filter(template => template.category === activeTab);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Email Templates</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Manage your email communication templates
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 lg:w-2/5 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>
                Edit and manage your email templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="transactional">Transactional</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="notification">Notification</TabsTrigger>
                </TabsList>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Template Name</h3>
                    <h3 className="text-sm font-medium">Status</h3>
                  </div>
                  {filterTemplates().map((template) => (
                    <div 
                      key={template.id}
                      className={`p-3 border rounded-md flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${activeTemplate?.id === template.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}
                      onClick={() => handleViewTemplate(template.id)}
                    >
                      <div>
                        <h4 className="font-medium">{template.name}</h4>
                        <p className="text-xs text-gray-500">Last updated: {template.lastModified}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${template.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {template.isActive ? 'Active' : 'Inactive'}
                        </span>
                        <div className="flex">
                          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleEditTemplate(template.id); }}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleSendTest(template.id); }}>
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4">
                  Create New Template
                </Button>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-1/2 lg:w-3/5">
          {activeTemplate ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                  <CardTitle>{isEditing ? 'Edit Template' : activeTemplate.name}</CardTitle>
                  <CardDescription>{activeTemplate.description}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <Button variant="outline" size="sm" onClick={handleCloseTemplate}>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button size="sm" onClick={handleSaveTemplate}>
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" onClick={() => handleEditTemplate(activeTemplate.id)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleSendTest(activeTemplate.id)}>
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Send Test
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleCloseTemplate}>
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Template Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={editedTemplate?.name} 
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Email Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject"
                          value={editedTemplate?.subject} 
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input 
                        id="description" 
                        name="description"
                        value={editedTemplate?.description} 
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="body">Email Body</Label>
                      <Textarea 
                        id="body" 
                        name="body"
                        value={editedTemplate?.body} 
                        onChange={handleInputChange}
                        rows={10}
                        className="font-mono text-sm"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="isActive"
                        checked={editedTemplate?.isActive} 
                        onCheckedChange={() => setEditedTemplate(prev => prev ? {...prev, isActive: !prev.isActive} : null)} 
                      />
                      <Label htmlFor="isActive">Template is active</Label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Email Subject</p>
                        <p className="font-medium">{activeTemplate.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${activeTemplate.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {activeTemplate.isActive ? 'Active' : 'Inactive'}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleToggleActive(activeTemplate.id)}
                          >
                            {activeTemplate.isActive ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Email Preview</p>
                      <div className="mt-2 p-4 border rounded-md bg-white dark:bg-gray-950 min-h-[300px]">
                        <div 
                          className="prose dark:prose-invert max-w-none" 
                          dangerouslySetInnerHTML={{ __html: activeTemplate.body }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Template Variables</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeTemplate.body.match(/{{([^}]+)}}/g)?.map((variable, index) => (
                          <div key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {variable}
                          </div>
                        )) || <p className="text-sm text-gray-400">No variables found in this template</p>}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="py-12 text-center">
                <p className="text-gray-500 mb-4">Select a template to view or edit</p>
                <Button onClick={() => handleEditTemplate('welcome-email')}>
                  Open Welcome Email Template
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplatesManager;
