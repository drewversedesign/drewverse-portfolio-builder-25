
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';

const TopReferrersTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Referrers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Visitors</TableHead>
              <TableHead>Conversion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Google</TableCell>
              <TableCell>4,582</TableCell>
              <TableCell>3.2%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facebook</TableCell>
              <TableCell>2,862</TableCell>
              <TableCell>2.8%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Instagram</TableCell>
              <TableCell>1,958</TableCell>
              <TableCell>3.1%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Twitter</TableCell>
              <TableCell>1,286</TableCell>
              <TableCell>2.4%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LinkedIn</TableCell>
              <TableCell>964</TableCell>
              <TableCell>3.8%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TopReferrersTable;
