
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';

const AppearanceSettings = () => {
  return (
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
  );
};

export default AppearanceSettings;
