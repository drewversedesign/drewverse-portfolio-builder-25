
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import IntegrationsManager from './integrations/IntegrationsManager';

const AdminIntegrations = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Integrations & API</h1>
      
      <Tabs defaultValue="integrations">
        <TabsList className="mb-6">
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="integrations">
          <IntegrationsManager />
        </TabsContent>
        
        <TabsContent value="api-keys">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage API keys for accessing the Drew Creative API</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">API key management coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="webhooks">
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Set up webhook endpoints to receive events</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">Webhook management coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminIntegrations;
