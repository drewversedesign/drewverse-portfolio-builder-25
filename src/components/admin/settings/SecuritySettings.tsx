
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';

const SecuritySettings = () => {
  return (
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
  );
};

export default SecuritySettings;
