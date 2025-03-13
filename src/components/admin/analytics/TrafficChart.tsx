
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { trafficData } from './analyticsData';

const TrafficChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Traffic</CardTitle>
        <CardDescription>Breakdown of website traffic by source</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="direct" fill="#8884d8" name="Direct" />
              <Bar dataKey="organic" fill="#82ca9d" name="Organic Search" />
              <Bar dataKey="referral" fill="#ffc658" name="Referral" />
              <Bar dataKey="social" fill="#ff8042" name="Social Media" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficChart;
