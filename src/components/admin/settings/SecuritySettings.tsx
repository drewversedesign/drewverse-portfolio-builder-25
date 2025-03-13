
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { toast } from 'sonner';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

const SecuritySettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    autoLogout: true,
    inactivityTimeout: '30',
    passwordExpiry: '90',
    loginAttempts: '5',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSwitchChange = (field: string) => {
    setFormData({
      ...formData,
      [field]: !formData[field as keyof typeof formData],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (formData.newPassword && !formData.currentPassword) {
      toast.error('Current password is required');
      return;
    }
    
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Security settings updated successfully');
      
      // Clear password fields after successful update
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Password Management</h3>
            
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input 
                id="currentPassword" 
                type="password" 
                value={formData.currentPassword}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input 
                id="newPassword" 
                type="password" 
                value={formData.newPassword}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passwordExpiry">Password Expiry</Label>
              <Select 
                value={formData.passwordExpiry} 
                onValueChange={(value) => handleSelectChange(value, 'passwordExpiry')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Authentication</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="twoFactorEnabled">Two-factor authentication</Label>
                <p className="text-sm text-gray-500">
                  Require a verification code in addition to your password
                </p>
              </div>
              <Switch 
                id="twoFactorEnabled" 
                checked={formData.twoFactorEnabled}
                onCheckedChange={() => handleSwitchChange('twoFactorEnabled')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="autoLogout">Auto-logout after inactivity</Label>
                <p className="text-sm text-gray-500">
                  Automatically log out when inactive for the specified time
                </p>
              </div>
              <Switch 
                id="autoLogout" 
                checked={formData.autoLogout}
                onCheckedChange={() => handleSwitchChange('autoLogout')}
              />
            </div>
            
            {formData.autoLogout && (
              <div className="space-y-2">
                <Label htmlFor="inactivityTimeout">Inactivity Timeout (minutes)</Label>
                <Select 
                  value={formData.inactivityTimeout} 
                  onValueChange={(value) => handleSelectChange(value, 'inactivityTimeout')}
                  disabled={!formData.autoLogout}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select minutes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="loginAttempts">Maximum Login Attempts</Label>
              <Select 
                value={formData.loginAttempts} 
                onValueChange={(value) => handleSelectChange(value, 'loginAttempts')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select number of attempts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 attempts</SelectItem>
                  <SelectItem value="5">5 attempts</SelectItem>
                  <SelectItem value="10">10 attempts</SelectItem>
                  <SelectItem value="unlimited">Unlimited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Updating...' : 'Update Security Settings'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
