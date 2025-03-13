
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Database, FileText, Clock, Users } from 'lucide-react';

type TableCount = {
  table_name: string;
  row_count: number;
};

const DatabaseStats = () => {
  const [tableCounts, setTableCounts] = useState<TableCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchTableStats = async () => {
      try {
        setIsLoading(true);
        
        // Get counts from main tables
        const { data, error } = await supabase.rpc('get_table_row_counts');
        
        if (error) {
          console.error('Error fetching table stats:', error);
          return;
        }
        
        if (data) {
          setTableCounts(data as TableCount[]);
          
          // Set last updated time
          const now = new Date();
          setLastUpdated(now.toLocaleTimeString());
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTableStats();

    // Setup real-time subscription
    const statsChannel = supabase
      .channel('db-stats-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, () => {
        fetchTableStats();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(statsChannel);
    };
  }, []);

  // Before we have the function, simulate the data
  const mockTableCounts = [
    { table_name: 'projects', row_count: 12 },
    { table_name: 'blog_posts', row_count: 24 },
    { table_name: 'services', row_count: 6 },
    { table_name: 'testimonials', row_count: 8 }
  ];

  const getIconForTable = (tableName: string) => {
    switch (tableName) {
      case 'projects':
        return <Database className="h-5 w-5 text-drew-purple" />;
      case 'blog_posts':
        return <FileText className="h-5 w-5 text-drew-purple" />;
      case 'services':
        return <Users className="h-5 w-5 text-drew-purple" />;
      case 'testimonials':
        return <Users className="h-5 w-5 text-drew-purple" />;
      default:
        return <Database className="h-5 w-5 text-drew-purple" />;
    }
  };

  const formatTableName = (tableName: string) => {
    return tableName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Database Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse">
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                <div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Database Statistics</CardTitle>
        {lastUpdated && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            Last updated: {lastUpdated}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {(tableCounts.length > 0 ? tableCounts : mockTableCounts).map((table) => (
            <div key={table.table_name} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-3">
                {getIconForTable(table.table_name)}
              </div>
              <div>
                <h3 className="text-sm font-medium">{formatTableName(table.table_name)}</h3>
                <p className="text-xl font-bold">{table.row_count}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DatabaseStats;
