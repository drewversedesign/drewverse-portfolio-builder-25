
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Check, ExternalLink, ToggleLeft, ToggleRight } from 'lucide-react';

const AdminIntegrations = () => {
  // Sample integrations
  const integrations = [
    { 
      id: 1, 
      name: 'Google Analytics', 
      description: 'Track website traffic and user behavior',
      icon: '🔍',
      connected: true,
      category: 'analytics'
    },
    { 
      id: 2, 
      name: 'Mailchimp', 
      description: 'Email marketing and newsletter service',
      icon: '✉️',
      connected: true,
      category: 'marketing'
    },
    { 
      id: 3, 
      name: 'Stripe', 
      description: 'Process payments securely',
      icon: '💳',
      connected: false,
      category: 'payments'
    },
    { 
      id: 4, 
      name: 'Slack', 
      description: 'Real-time notifications and team communication',
      icon: '💬',
      connected: true,
      category: 'communication'
    },
    { 
      id: 5, 
      name: 'HubSpot', 
      description: 'Customer relationship management',
      icon: '👥',
      connected: false,
      category: 'marketing'
    },
    { 
      id: 6, 
      name: 'Cloudinary', 
      description: 'Media management and optimization',
      icon: '🖼️',
      connected: true,
      category: 'content'
    },
    { 
      id: 7, 
      name: 'Zapier', 
      description: 'Connect apps and automate workflows',
      icon: '⚡',
      connected: false,
      category: 'automation'
    },
    { 
      id: 8, 
      name: 'Intercom', 
      description: 'Customer messaging platform',
      icon: '💬',
      connected: false,
      category: 'communication'
    },
  ];

  const categories = ['all', 'analytics', 'marketing', 'payments', 'communication', 'content', 'automation'];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">API Integrations</h3>
        <p className="text-gray-500">Connect your website with third-party services</p>
      </div>

      <div className="flex overflow-x-auto py-2 space-x-2">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={category === 'all' ? 'default' : 'outline'} 
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{integration.icon}</span>
                  <CardTitle>{integration.name}</CardTitle>
                </div>
                {integration.connected ? (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Connected</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">Not Connected</span>
                )}
              </div>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integration.connected ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <span className="flex items-center text-green-600 text-sm">
                        <Check className="h-4 w-4 mr-1" />
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto-sync</span>
                      <ToggleRight className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">Configure</Button>
                      <Button variant="outline" size="sm" className="flex-1">Disconnect</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">Connect your account to enable integration</p>
                    <Button className="w-full">Connect</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage your API keys for external services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-medium">Drew Creative API</h3>
                  <p className="text-sm text-gray-500">For custom integrations and extensions</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-gray-100 rounded text-sm font-mono">
                    ••••••••••••••••
                  </div>
                  <Button variant="outline" size="sm">
                    Show
                  </Button>
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-medium">Webhook URL</h3>
                  <p className="text-sm text-gray-500">Endpoint for receiving notifications</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-gray-100 rounded text-sm font-mono truncate max-w-xs">
                    https://drewcreative.com/api/webhook
                  </div>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-medium mb-2">Documentation & Resources</h3>
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="flex items-center text-blue-600 hover:underline"
                >
                  API Documentation
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Developer Resources
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Integration Examples
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminIntegrations;
