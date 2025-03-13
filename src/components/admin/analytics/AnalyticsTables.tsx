
import React from 'react';
import TopPagesTable from './TopPagesTable';
import TopReferrersTable from './TopReferrersTable';
import AnalyticsDashboard from './AnalyticsDashboard';
import DatabaseStats from './DatabaseStats';
import PerformanceStats from './PerformanceStats';

const AnalyticsTables = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <AnalyticsDashboard />
      <DatabaseStats />
      <TopPagesTable />
      <TopReferrersTable />
      <PerformanceStats />
    </div>
  );
};

export default AnalyticsTables;
