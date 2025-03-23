
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import GeneralSettings from './settings/GeneralSettings';
import AppearanceSettings from './settings/AppearanceSettings';
import NotificationSettings from './settings/NotificationSettings';
import SecuritySettings from './settings/SecuritySettings';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Save, RotateCcw, Upload, Download } from 'lucide-react';
import { toast } from 'sonner';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  const handleBackupSettings = () => {
    toast.success('Creating settings backup...');
    
    setTimeout(() => {
      // Create mock data file
      const settingsData = {
        general: {
          siteName: 'Drew Creative Agency',
          siteDescription: 'A creative design agency helping brands grow.',
          contactEmail: 'drewversedesign@gmail.com',
          contactPhone: '+256 772 653 789',
          officeAddress: '123 Design Street, Creative City, 90210',
        },
        appearance: {
          theme: 'light',
          primaryColor: '#6366f1',
          fontFamily: 'Inter',
          animations: true,
        },
        notifications: {
          contactSubmissions: true,
          userRegistrations: true,
          commentNotifications: true,
          systemUpdates: false,
          marketingEmails: false,
        },
        security: {
          passwordExpiry: '90',
          twoFactorEnabled: false,
          autoLogout: true,
          inactivityTimeout: '30',
          loginAttempts: '5',
        },
        timestamp: new Date().toISOString(),
      };
      
      // Create a blob with the JSON data
      const blob = new Blob([JSON.stringify(settingsData, null, 2)], { type: 'application/json' });
      
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = `drew-creative-settings-backup-${new Date().toISOString().split('T')[0]}.json`;
      
      // Append the link to the body
      document.body.appendChild(link);
      
      // Click the link
      link.click();
      
      // Remove the link
      document.body.removeChild(link);
      
      toast.success('Settings backup created successfully');
    }, 1500);
  };
  
  const handleRestoreSettings = () => {
    // Create a file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      toast.info('Restoring settings from backup...');
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          // Parse the JSON data
          const settingsData = JSON.parse(event.target?.result as string);
          
          // Validate the data (very basic check)
          if (!settingsData.general || !settingsData.appearance) {
            throw new Error('Invalid settings file');
          }
          
          // Update the last saved timestamp
          setLastSaved(new Date());
          
          toast.success('Settings restored successfully');
        } catch (error) {
          toast.error('Failed to restore settings. Invalid backup file.');
        }
      };
      
      reader.readAsText(file);
    };
    
    input.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {lastSaved && (
            <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <Tabs defaultValue={activeTab} orientation="vertical" onValueChange={setActiveTab}>
                <TabsList className="flex flex-col h-auto">
                  <TabsTrigger value="general" className="justify-start">General</TabsTrigger>
                  <TabsTrigger value="appearance" className="justify-start">Appearance</TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start">Notifications</TabsTrigger>
                  <TabsTrigger value="security" className="justify-start">Security</TabsTrigger>
                  <TabsTrigger value="backup" className="justify-start">Backup & Restore</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            
            <TabsContent value="appearance">
              <AppearanceSettings />
            </TabsContent>
            
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
            
            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
            
            <TabsContent value="backup">
              <Card>
                <CardHeader>
                  <CardTitle>Backup & Restore</CardTitle>
                  <CardDescription>
                    Save or restore your site settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start space-x-3">
                      <Download className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Backup Settings</h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Download a copy of your current settings. This backup includes all configuration
                          options, appearance settings, and preferences.
                        </p>
                        <Button onClick={handleBackupSettings}>
                          Download Backup
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start space-x-3">
                      <Upload className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Restore from Backup</h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Restore your settings from a previously downloaded backup file. This will 
                          override your current settings.
                        </p>
                        <Button variant="outline" onClick={handleRestoreSettings}>
                          Upload Backup File
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start space-x-3">
                      <RotateCcw className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Reset to Defaults</h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Reset all settings to their default values. This action cannot be undone.
                        </p>
                        <Button 
                          variant="destructive"
                          onClick={() => {
                            const confirmReset = window.confirm('Are you sure you want to reset all settings to their default values? This action cannot be undone.');
                            if (confirmReset) {
                              toast.success('Settings have been reset to defaults');
                              setLastSaved(new Date());
                            }
                          }}
                        >
                          Reset Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
