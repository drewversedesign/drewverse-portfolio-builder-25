
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

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
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your site-wide settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="Drew Creative Agency" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Input id="site-description" defaultValue="A creative design agency helping brands grow." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-email">Contact Email</Label>
                <Input id="site-email" type="email" defaultValue="hello@drewcreative.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-phone">Contact Phone</Label>
                <Input id="site-phone" defaultValue="+1 (555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-address">Office Address</Label>
                <Input id="site-address" defaultValue="123 Design Street, Creative City, 90210" />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how your website looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme Mode</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="light-mode" name="theme-mode" className="rounded text-purple-600" defaultChecked />
                    <Label htmlFor="light-mode">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="dark-mode" name="theme-mode" className="rounded text-purple-600" />
                    <Label htmlFor="dark-mode">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="system-mode" name="theme-mode" className="rounded text-purple-600" />
                    <Label htmlFor="system-mode">System</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex space-x-3">
                  {['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#ef4444'].map((color) => (
                    <div 
                      key={color}
                      className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="font-family">Font Family</Label>
                <select id="font-family" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Montserrat</option>
                  <option>Poppins</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="show-animations" defaultChecked />
                <Label htmlFor="show-animations">Enable animations</Label>
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Enable two-factor authentication</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="session-timeout" defaultChecked />
                <Label htmlFor="session-timeout">Auto-logout after inactivity (30 minutes)</Label>
              </div>
              
              <Button>Update Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
