
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Button } from '../../ui/button';
import { RefreshCw, Check, AlertTriangle } from 'lucide-react';
import { fetchDatabaseTables, fetchTableRecordCount, checkDatabaseHealth } from '@/utils/admin/databaseUtils';

type TableInfo = {
  tablename: string;
  schemaname: string;
  recordCount: number | null;
  exists?: boolean;
};

const DatabaseInfo = () => {
  const [tables, setTables] = useState<TableInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [healthStatus, setHealthStatus] = useState<{
    isHealthy: boolean;
    responseTime: number | null;
  }>({ isHealthy: false, responseTime: null });
  
  const loadTables = async () => {
    setLoading(true);
    try {
      // Check database health
      const healthResult = await checkDatabaseHealth();
      setHealthStatus({
        isHealthy: healthResult.isHealthy,
        responseTime: healthResult.responseTime
      });
      
      // Fetch tables
      const { data, error } = await fetchDatabaseTables();
      if (error || !data) {
        setLoading(false);
        return;
      }
      
      // Fetch record count for each table
      const tablesWithCounts = await Promise.all(
        data.map(async (table) => {
          // Skip tables that don't exist
          if (table.exists === false) {
            return {
              ...table,
              recordCount: null
            };
          }
          
          const { count } = await fetchTableRecordCount(table.tablename);
          return {
            ...table,
            recordCount: count
          };
        })
      );
      
      setTables(tablesWithCounts);
    } catch (error) {
      console.error('Error loading database info:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadTables();
  }, []);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Database Information</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            {healthStatus.isHealthy ? (
              <div className="flex items-center text-green-500">
                <Check className="h-5 w-5 mr-1" />
                <span>Healthy</span>
                {healthStatus.responseTime && (
                  <span className="text-xs ml-2">({healthStatus.responseTime}ms)</span>
                )}
              </div>
            ) : (
              <div className="flex items-center text-amber-500">
                <AlertTriangle className="h-5 w-5 mr-1" />
                <span>Issue Detected</span>
              </div>
            )}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={loadTables} 
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-drew-purple"></div>
          </div>
        ) : (
          <>
            {tables.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Table Name</TableHead>
                    <TableHead>Schema</TableHead>
                    <TableHead className="text-right">Record Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tables.map((table) => (
                    <TableRow key={table.tablename}>
                      <TableCell className="font-medium">{table.tablename}</TableCell>
                      <TableCell>{table.schemaname}</TableCell>
                      <TableCell className="text-right">
                        {table.recordCount !== null ? table.recordCount.toLocaleString() : 'N/A'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No tables found in the public schema.
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DatabaseInfo;
