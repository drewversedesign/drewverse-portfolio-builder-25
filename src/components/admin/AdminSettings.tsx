
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import GeneralSettings from './settings/GeneralSettings';
import AppearanceSettings from './settings/AppearanceSettings';
import SecuritySettings from './settings/SecuritySettings';
import NotificationSettings from './settings/NotificationSettings';

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="appearance" className="mt-6">
          <AppearanceSettings />
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
