
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../ui/tabs';
import TrafficChart from './TrafficChart';
import DeviceChart from './DeviceChart';
import ConversionChart from './ConversionChart';

const AnalyticsTabs = () => {
  return (
    <Tabs defaultValue="traffic">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>
        
        <div className="flex space-x-2">
          <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
        </div>
      </div>

      <TabsContent value="traffic" className="mt-6">
        <TrafficChart />
      </TabsContent>

      <TabsContent value="devices" className="mt-6">
        <DeviceChart />
      </TabsContent>

      <TabsContent value="conversion" className="mt-6">
        <ConversionChart />
      </TabsContent>
    </Tabs>
  );
};

export default AnalyticsTabs;
