
import React from 'react';
import TopPagesTable from './TopPagesTable';
import TopReferrersTable from './TopReferrersTable';

const AnalyticsTables = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TopPagesTable />
      <TopReferrersTable />
    </div>
  );
};

export default AnalyticsTables;
