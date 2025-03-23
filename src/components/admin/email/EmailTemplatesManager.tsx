
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { Input } from '../../ui/input';
import { 
  Mail, 
  Calendar, 
  UserPlus, 
  Bell, 
  ShoppingCart, 
  Award,
  Save,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  variables: string[];
  category: string;
}

const EmailTemplatesManager = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([
    {
      id: 'welcome',
      name: 'Welcome Email',
      subject: 'Welcome to Drew Creative Agency!',
      body: `Hello {{name}},\n\nWelcome to Drew Creative Agency! We're thrilled to have you as part of our creative community.\n\nYour account has been successfully created, and you're now ready to explore our services.\n\nIf you have any questions, please don't hesitate to reach out.\n\nBest regards,\nThe Drew Creative Team`,
      variables: ['name'],
      category: 'account'
    },
    {
      id: 'appointment',
      name: 'Appointment Confirmation',
      subject: 'Your Appointment with Drew Creative Agency',
      body: `Hello {{name}},\n\nThis is a confirmation that your appointment has been scheduled for {{date}} at {{time}}.\n\nWe look forward to discussing your project.\n\nBest regards,\nThe Drew Creative Team`,
      variables: ['name', 'date', 'time'],
      category: 'appointments'
    },
    {
      id: 'project',
      name: 'Project Update',
      subject: 'Update on Your Project: {{project_name}}',
      body: `Hello {{name}},\n\nWe're pleased to inform you that there has been progress on your project "{{project_name}}".\n\nCurrent Status: {{status}}\n\nNext Steps: {{next_steps}}\n\nExpected Completion: {{completion_date}}\n\nIf you have any questions about this update, please let us know.\n\nBest regards,\nThe Drew Creative Team`,
      variables: ['name', 'project_name', 'status', 'next_steps', 'completion_date'],
      category: 'projects'
    },
    {
      id: 'invoice',
      name: 'Invoice',
      subject: 'Invoice #{{invoice_number}} from Drew Creative Agency',
      body: `Hello {{name}},\n\nPlease find below the details of your invoice:\n\nInvoice Number: {{invoice_number}}\nAmount Due: {{amount}}\nDue Date: {{due_date}}\n\nYou can pay this invoice through your client portal or by contacting our finance department.\n\nThank you for your business!\n\nBest regards,\nThe Drew Creative Team`,
      variables: ['name', 'invoice_number', 'amount', 'due_date'],
      category: 'billing'
    },
    {
      id: 'feedback',
      name: 'Feedback Request',
      subject: 'We Value Your Feedback!',
      body: `Hello {{name}},\n\nThank you for working with Drew Creative Agency on your project "{{project_name}}".\n\nWe would love to hear your thoughts on our services. Please take a moment to complete our feedback form: {{feedback_link}}\n\nYour input helps us improve our services for you and future clients.\n\nBest regards,\nThe Drew Creative Team`,
      variables: ['name', 'project_name', 'feedback_link'],
      category: 'feedback'
    }
  ]);

  const [activeTemplate, setActiveTemplate] = useState<EmailTemplate>(templates[0]);
  const [editedTemplate, setEditedTemplate] = useState<EmailTemplate>(templates[0]);
  const [isSaving, setIsSaving] = useState(false);
  const [testEmailAddress, setTestEmailAddress] = useState('');
  const [isSendingTest, setIsSendingTest] = useState(false);

  const handleTemplateChange = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setActiveTemplate(template);
      setEditedTemplate(template);
    }
  };

  const handleEditTemplate = (field: keyof EmailTemplate, value: string) => {
    setEditedTemplate({
      ...editedTemplate,
      [field]: value
    });
  };

  const handleSaveTemplate = () => {
    setIsSaving(true);
    
    // Simulate API call/save operation
    setTimeout(() => {
      setTemplates(templates.map(template => 
        template.id === editedTemplate.id ? editedTemplate : template
      ));
      setActiveTemplate(editedTemplate);
      setIsSaving(false);
      toast.success('Email template saved successfully');
    }, 1000);
  };

  const handleSendTestEmail = () => {
    if (!testEmailAddress) {
      toast.error('Please enter a test email address');
      return;
    }
    
    setIsSendingTest(true);
    
    // Simulate sending test email
    setTimeout(() => {
      setIsSendingTest(false);
      toast.success(`Test email sent to ${testEmailAddress}`);
      setTestEmailAddress('');
    }, 1500);
  };

  const getVariableString = (variable: string) => {
    return `{{${variable}}}`;
  };

  const handleInsertVariable = (variable: string) => {
    const textarea = document.getElementById('emailBody') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentValue = editedTemplate.body;
      const variableString = getVariableString(variable);
      
      const newValue = currentValue.substring(0, start) + variableString + currentValue.substring(end);
      handleEditTemplate('body', newValue);
      
      // Set focus back to textarea after state update
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + variableString.length, start + variableString.length);
      }, 0);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Templates</CardTitle>
          <CardDescription>Manage and customize email templates for different purposes</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account">
            <TabsList className="mb-6">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="space-y-3">
                  {templates
                    .filter(template => template.category === (document.querySelector('[aria-selected="true"]')?.getAttribute('value') || 'account'))
                    .map(template => (
                      <div 
                        key={template.id}
                        className={`p-3 border rounded-md cursor-pointer hover:bg-gray-50 ${activeTemplate.id === template.id ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => handleTemplateChange(template.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-gray-500" />
                          <div>
                            <h3 className="font-medium">{template.name}</h3>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="templateName" className="block text-sm font-medium">Template Name</label>
                    <Input 
                      id="templateName"
                      value={editedTemplate.name}
                      onChange={(e) => handleEditTemplate('name', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="emailSubject" className="block text-sm font-medium">Email Subject</label>
                    <Input 
                      id="emailSubject"
                      value={editedTemplate.subject}
                      onChange={(e) => handleEditTemplate('subject', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="emailBody" className="block text-sm font-medium">Email Body</label>
                      <div className="flex space-x-2">
                        {editedTemplate.variables.map(variable => (
                          <Button 
                            key={variable} 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleInsertVariable(variable)}
                          >
                            {getVariableString(variable)}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Textarea 
                      id="emailBody"
                      value={editedTemplate.body}
                      onChange={(e) => handleEditTemplate('body', e.target.value)}
                      rows={10}
                    />
                  </div>
                  
                  <div className="pt-4 border-t flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0">
                    <div className="flex space-x-2">
                      <Button 
                        onClick={handleSaveTemplate}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <span className="animate-spin mr-2">◌</span>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Template
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Enter email for test"
                        value={testEmailAddress}
                        onChange={(e) => setTestEmailAddress(e.target.value)}
                        className="max-w-[200px]"
                      />
                      <Button 
                        variant="outline"
                        onClick={handleSendTestEmail}
                        disabled={isSendingTest}
                      >
                        {isSendingTest ? 'Sending...' : 'Send Test'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Email Settings</CardTitle>
          <CardDescription>Configure global email settings and delivery options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="senderName" className="block text-sm font-medium">Default Sender Name</label>
                  <Input id="senderName" defaultValue="Drew Creative Agency" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="senderEmail" className="block text-sm font-medium">Default Sender Email</label>
                  <Input id="senderEmail" defaultValue="hello@drewcreative.agency" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="replyToEmail" className="block text-sm font-medium">Reply-To Email</label>
                  <Input id="replyToEmail" defaultValue="support@drewcreative.agency" />
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Delivery</h3>
                      <p className="text-sm text-gray-500 mt-1">Your email service is properly configured and active</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Bounce Rate</h3>
                      <p className="text-sm text-gray-500 mt-1">1.2% of emails are bouncing. Consider cleaning your email list.</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-2">View Email Analytics</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailTemplatesManager;
