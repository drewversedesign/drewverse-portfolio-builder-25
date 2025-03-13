
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Drew Creative Agency</title>
        <meta name="description" content="Admin dashboard for Drew Creative Agency" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <AdminDashboard />
    </>
  );
};

export default AdminPage;
