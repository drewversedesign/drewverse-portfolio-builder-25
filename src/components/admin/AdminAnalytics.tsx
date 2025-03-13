
import React from 'react';
import AnalyticsTabs from './analytics/AnalyticsTabs';
import AnalyticsTables from './analytics/AnalyticsTables';

const AdminAnalytics = () => {
  return (
    <div className="space-y-6">
      <AnalyticsTabs />
      <AnalyticsTables />
    </div>
  );
};

export default AdminAnalytics;
