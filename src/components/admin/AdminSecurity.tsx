
import React from 'react';
import RoleManagement from './security/RoleManagement';
import SecurityCards from './security/SecurityCards';

const AdminSecurity = () => {
  return (
    <div className="space-y-6">
      <RoleManagement />
      <SecurityCards />
    </div>
  );
};

export default AdminSecurity;
