
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';

const TopPagesTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Bounce Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>/</TableCell>
              <TableCell>3,842</TableCell>
              <TableCell>42%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>/portfolio</TableCell>
              <TableCell>2,259</TableCell>
              <TableCell>38%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>/services</TableCell>
              <TableCell>1,876</TableCell>
              <TableCell>41%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>/about</TableCell>
              <TableCell>1,568</TableCell>
              <TableCell>35%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>/contact</TableCell>
              <TableCell>1,245</TableCell>
              <TableCell>29%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TopPagesTable;
