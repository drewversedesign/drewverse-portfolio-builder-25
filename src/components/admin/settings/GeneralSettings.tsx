
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';

const GeneralSettings = () => {
  return (
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
  );
};

export default GeneralSettings;
