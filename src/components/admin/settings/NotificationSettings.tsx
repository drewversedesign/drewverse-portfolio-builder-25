
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';

const NotificationSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">New Contact Submissions</h4>
              <p className="text-sm text-gray-500">Get notified when someone submits a contact form</p>
            </div>
            <Switch id="notify-contacts" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">New User Registrations</h4>
              <p className="text-sm text-gray-500">Get notified when a new user signs up</p>
            </div>
            <Switch id="notify-users" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Comment Notifications</h4>
              <p className="text-sm text-gray-500">Get notified when someone comments on your content</p>
            </div>
            <Switch id="notify-comments" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">System Updates</h4>
              <p className="text-sm text-gray-500">Get notified about system updates and maintenance</p>
            </div>
            <Switch id="notify-system" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Marketing Emails</h4>
              <p className="text-sm text-gray-500">Receive tips, product updates and other marketing emails</p>
            </div>
            <Switch id="notify-marketing" />
          </div>
        </div>
        
        <Button>Save Notification Preferences</Button>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
