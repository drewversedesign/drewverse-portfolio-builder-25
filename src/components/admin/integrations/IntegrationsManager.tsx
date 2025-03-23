
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { Alert, AlertDescription } from '../../ui/alert';
import { 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  AlertCircle,
  Mail,
  CreditCard,
  MessageSquare,
  Users,
  Image as ImageIcon,
  Zap,
  BarChart3
} from 'lucide-react';
import { toast } from 'sonner';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: 'connected' | 'not_connected';
  isAutoSync?: boolean;
}

const IntegrationsManager = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      description: 'Track website traffic and user behavior',
      icon: BarChart3,
      status: 'connected',
      isAutoSync: true
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Email marketing and newsletter service',
      icon: Mail,
      status: 'connected',
      isAutoSync: true
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Process payments securely',
      icon: CreditCard,
      status: 'not_connected'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Real-time notifications and team communication',
      icon: MessageSquare,
      status: 'connected',
      isAutoSync: true
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      description: 'Customer relationship management',
      icon: Users,
      status: 'not_connected'
    },
    {
      id: 'cloudinary',
      name: 'Cloudinary',
      description: 'Media management and optimization',
      icon: ImageIcon,
      status: 'connected',
      isAutoSync: true
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect apps and automate workflows',
      icon: Zap,
      status: 'not_connected'
    },
    {
      id: 'intercom',
      name: 'Intercom',
      description: 'Customer messaging platform',
      icon: MessageSquare,
      status: 'not_connected'
    }
  ]);

  const handleConnect = (id: string) => {
    // In a real app, this would open an OAuth flow or configuration modal
    toast.success(`Connecting to ${integrations.find(i => i.id === id)?.name}...`);
    
    // Simulate successful connection after 2 seconds
    setTimeout(() => {
      setIntegrations(prevState => 
        prevState.map(integration => 
          integration.id === id 
            ? { ...integration, status: 'connected', isAutoSync: true } 
            : integration
        )
      );
      toast.success(`Successfully connected to ${integrations.find(i => i.id === id)?.name}`);
    }, 2000);
  };

  const handleDisconnect = (id: string) => {
    // Show confirmation toast
    toast(
      `Are you sure you want to disconnect ${integrations.find(i => i.id === id)?.name}?`,
      {
        action: {
          label: "Disconnect",
          onClick: () => {
            // Simulate disconnection
            setIntegrations(prevState => 
              prevState.map(integration => 
                integration.id === id 
                  ? { ...integration, status: 'not_connected', isAutoSync: false } 
                  : integration
              )
            );
            toast.success(`Successfully disconnected from ${integrations.find(i => i.id === id)?.name}`);
          }
        }
      }
    );
  };

  const handleToggleAutoSync = (id: string) => {
    setIntegrations(prevState => 
      prevState.map(integration => 
        integration.id === id 
          ? { ...integration, isAutoSync: !integration.isAutoSync } 
          : integration
      )
    );
    
    const integration = integrations.find(i => i.id === id);
    const action = integration?.isAutoSync ? 'disabled' : 'enabled';
    
    toast.success(`Auto-sync ${action} for ${integration?.name}`);
  };

  const handleConfigure = (id: string) => {
    toast.info(`Opening configuration for ${integrations.find(i => i.id === id)?.name}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Integrations</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Connect your website to third-party services to extend functionality
        </p>
        
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Integrations may require access to your website data. Review the privacy policy of each service before connecting.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-md ${integration.status === 'connected' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} dark:bg-opacity-20`}>
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      {integration.name}
                      {integration.status === 'connected' && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Connected
                        </span>
                      )}
                      {integration.status === 'not_connected' && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Connected
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{integration.description}</p>
                    
                    {integration.status === 'connected' && (
                      <div className="mt-4 space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="font-medium text-green-600">Active</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Auto-sync</p>
                            <div className="flex items-center space-x-2">
                              <Switch 
                                checked={integration.isAutoSync} 
                                onCheckedChange={() => handleToggleAutoSync(integration.id)} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  {integration.status === 'connected' ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => handleConfigure(integration.id)}
                      >
                        Configure
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                        onClick={() => handleDisconnect(integration.id)}
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button 
                      size="sm"
                      className="w-full"
                      onClick={() => handleConnect(integration.id)}
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsManager;
