
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Drew Creative Agency',
    siteDescription: 'A creative design agency helping brands grow.',
    contactEmail: 'hello@drewcreative.com',
    contactPhone: '+1 (555) 123-4567',
    officeAddress: '123 Design Street, Creative City, 90210',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<Date | null>(null);

  // Listen for real-time settings updates from other clients
  useEffect(() => {
    const settingsChannel = supabase
      .channel('settings-changes')
      .on('broadcast', { event: 'settings_updated' }, (payload) => {
        console.log('Received settings update:', payload);
        if (payload.payload && payload.payload.settings) {
          setSettings(payload.payload.settings);
          setLastSavedTime(new Date());
          toast.info('Settings updated by another user');
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(settingsChannel);
    };
  }, []);

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
      setLastSavedTime(new Date());
      toast.success('Settings saved successfully');

      // Broadcast the update to other clients
      supabase
        .channel('settings-changes')
        .send({
          type: 'broadcast',
          event: 'settings_updated',
          payload: { settings, timestamp: new Date().toISOString() }
        })
        .then(() => console.log('Settings broadcast sent'))
        .catch((err) => console.error('Error sending settings broadcast:', err));
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>
          Manage your site-wide settings
          {lastSavedTime && (
            <span className="text-xs text-gray-500 block mt-1">
              Last saved: {lastSavedTime.toLocaleTimeString()}
            </span>
          )}
        </CardDescription>
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
