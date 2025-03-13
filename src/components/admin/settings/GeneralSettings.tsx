
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { toast } from 'sonner';

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Drew Creative Agency',
    siteDescription: 'A creative design agency helping brands grow.',
    contactEmail: 'hello@drewcreative.com',
    contactPhone: '+1 (555) 123-4567',
    officeAddress: '123 Design Street, Creative City, 90210',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSettings({
      ...settings,
      [id.replace('site-', '')]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>Manage your site-wide settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="site-siteName">Site Name</Label>
            <Input 
              id="site-siteName" 
              value={settings.siteName} 
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="site-siteDescription">Site Description</Label>
            <Input 
              id="site-siteDescription" 
              value={settings.siteDescription} 
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="site-contactEmail">Contact Email</Label>
            <Input 
              id="site-contactEmail" 
              type="email" 
              value={settings.contactEmail} 
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="site-contactPhone">Contact Phone</Label>
            <Input 
              id="site-contactPhone" 
              value={settings.contactPhone} 
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="site-officeAddress">Office Address</Label>
            <Input 
              id="site-officeAddress" 
              value={settings.officeAddress} 
              onChange={handleChange}
            />
          </div>
          
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GeneralSettings;
