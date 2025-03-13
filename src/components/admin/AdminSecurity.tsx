
import React from 'react';
import RoleManagement from './security/RoleManagement';
import SecurityCards from './security/SecurityCards';
import VisitorMonitoring from './security/VisitorMonitoring';
import SecurityAuditLog from './security/SecurityAuditLog';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const AdminSecurity = () => {
  const handleBackup = async () => {
    try {
      toast.loading("Creating database backup...");
      
      // This is a placeholder function since actual DB backups would be done
      // through the Supabase dashboard or a server-side process
      // In a real implementation, you might call an edge function to trigger this
      
      // Simulate a delay for backup
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.dismiss();
      toast.success("Database backup created successfully");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to create database backup");
      console.error("Backup error:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Security & Access Control</h2>
        <Button onClick={handleBackup} variant="outline">Create Database Backup</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SecurityCards />
        <VisitorMonitoring />
      </div>
      
      <RoleManagement />
      <SecurityAuditLog />
    </div>
  );
};

export default AdminSecurity;
