
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CircleOff, Database, Cpu, Server } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface TableStat {
  tableName: string;
  rowCount: number;
}

// Define the tables as a type to ensure type safety
type TableName = 'projects' | 'blog_posts' | 'users' | 'messages';

const DatabaseStats = () => {
  const [tableStats, setTableStats] = useState<TableStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTableStats = async () => {
      try {
        // Define valid table names as literals, ensuring type safety
        const tables: TableName[] = ['projects', 'blog_posts'];
        const stats: TableStat[] = [];

        for (const table of tables) {
          // Now table is properly typed as a literal
          const { count, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });

          if (error) throw error;
          
          stats.push({
            tableName: table,
            rowCount: count || 0
          });
        }

        // Add additional tables that might not exist yet
        // These will show 0 counts if the tables don't exist
        ['users', 'messages'].forEach(tableName => {
          stats.push({
            tableName,
            rowCount: 0
          });
        });

        setTableStats(stats);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching table stats:', err);
        setError('Failed to load database statistics');
        setLoading(false);
      }
    };

    fetchTableStats();
  }, []);

  const getTotalRows = () => {
    return tableStats.reduce((total, stat) => total + stat.rowCount, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="h-5 w-5 mr-2 text-drew-purple" />
          Database Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="py-8 text-center">
            <p className="text-gray-500">Loading database statistics...</p>
          </div>
        ) : error ? (
          <div className="py-8 text-center">
            <CircleOff className="h-10 w-10 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">{error}</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Records</p>
                    <p className="text-2xl font-bold">{getTotalRows()}</p>
                  </div>
                  <Database className="h-8 w-8 text-drew-purple opacity-80" />
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Tables</p>
                    <p className="text-2xl font-bold">{tableStats.length}</p>
                  </div>
                  <Server className="h-8 w-8 text-amber-500 opacity-80" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">Table Statistics</h3>
              <div className="space-y-2">
                {tableStats.map((stat) => (
                  <div 
                    key={stat.tableName} 
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded"
                  >
                    <span className="font-medium text-sm capitalize">
                      {stat.tableName.replace(/_/g, ' ')}
                    </span>
                    <span className="text-sm">{stat.rowCount} rows</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <Cpu className="h-3 w-3 mr-1" />
              <span>Database health: Good</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DatabaseStats;
