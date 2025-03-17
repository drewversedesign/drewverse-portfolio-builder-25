import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { topReferrersData } from './analyticsData';
import { supabase } from '@/integrations/supabase/client';

type ReferrerData = {
  source: string;
  visitors: number;
  conversion: string;
};

const TopReferrersTable = () => {
  const [referrers, setReferrers] = useState<ReferrerData[]>(topReferrersData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Check if database is available by querying any table
        const { data, error } = await supabase
          .from('projects')
          .select('id')
          .limit(1);

        if (error) throw error;

        // Generate semi-random but realistic referrer data
        // In a real app, this would come from an analytics API
        const sources = ['Google', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
        const newReferrers = sources.map(source => {
          const baseVisitors = source === 'Google' ? 4500 : 
                              source === 'Facebook' ? 2800 : 
                              source === 'Instagram' ? 1900 : 
                              source === 'Twitter' ? 1200 : 900;
          
          // Add some randomness to the numbers
          const randomFactor = 0.1; // 10% variation
          const visitors = Math.floor(baseVisitors * (1 + (Math.random() * 2 - 1) * randomFactor));
          
          // Random conversion rate between 2% and 4%
          const conversionRate = (2 + Math.random() * 2).toFixed(1);
          
          return {
            source,
            visitors,
            conversion: `${conversionRate}%`
          };
        });

        setReferrers(newReferrers);
      } catch (error) {
        console.error('Error generating referrer data:', error);
        // Keep using the mock data if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // No real-time subscription needed for this component since 
    // we're generating synthetic data based on database availability

    // For consistency with other components, we'll set up a refresh every 5 minutes
    const interval = setInterval(fetchData, 300000); // 5 minutes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Referrers</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-drew-purple"></div>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Visitors</TableHead>
                <TableHead>Conversion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrers.map((referrer, index) => (
                <TableRow key={index}>
                  <TableCell>{referrer.source}</TableCell>
                  <TableCell>{referrer.visitors.toLocaleString()}</TableCell>
                  <TableCell>{referrer.conversion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TopReferrersTable;
