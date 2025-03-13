
import React from 'react';
import TopPagesTable from './TopPagesTable';
import TopReferrersTable from './TopReferrersTable';
import AnalyticsDashboard from './AnalyticsDashboard';

const AnalyticsTables = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <AnalyticsDashboard />
      <TopPagesTable />
      <TopReferrersTable />
    </div>
  );
};

export default AnalyticsTables;
