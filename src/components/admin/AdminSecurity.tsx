
import React from 'react';
import RoleManagement from './security/RoleManagement';
import SecurityCards from './security/SecurityCards';
import VisitorMonitoring from './security/VisitorMonitoring';

const AdminSecurity = () => {
  return (
    <div className="space-y-6">
      <RoleManagement />
      <SecurityCards />
      <VisitorMonitoring />
    </div>
  );
};

export default AdminSecurity;
