
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Download, Upload, Clock, Check, AlertCircle, Database, RefreshCw } from 'lucide-react';

const AdminBackup = () => {
  // Sample backup history
  const backupHistory = [
    { id: 1, name: 'Full Backup', date: '2023-08-15 08:30 AM', size: '45.2 MB', status: 'Complete' },
    { id: 2, name: 'Content Backup', date: '2023-08-10 09:15 AM', size: '12.8 MB', status: 'Complete' },
    { id: 3, name: 'Database Backup', date: '2023-08-05 10:00 AM', size: '8.5 MB', status: 'Complete' },
    { id: 4, name: 'User Data Backup', date: '2023-07-28 11:45 AM', size: '3.2 MB', status: 'Complete' },
    { id: 5, name: 'Scheduled Backup', date: '2023-07-15 12:30 PM', size: '42.9 MB', status: 'Failed' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Backup Now</CardTitle>
            <CardDescription>Create a new backup of your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Backup Type</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="full-backup" name="backup-type" className="rounded text-purple-600" defaultChecked />
                    <label htmlFor="full-backup">Full Backup</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="content-backup" name="backup-type" className="rounded text-purple-600" />
                    <label htmlFor="content-backup">Content Only</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="database-backup" name="backup-type" className="rounded text-purple-600" />
                    <label htmlFor="database-backup">Database Only</label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">
                <Database className="mr-2 h-4 w-4" />
                Create Backup
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Restore</CardTitle>
            <CardDescription>Restore your site from a backup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Restore From</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="select-backup" name="restore-type" className="rounded text-purple-600" defaultChecked />
                    <label htmlFor="select-backup">Select from backups</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="upload-backup" name="restore-type" className="rounded text-purple-600" />
                    <label htmlFor="upload-backup">Upload backup file</label>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Restore Backup
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Schedule</CardTitle>
            <CardDescription>Set automatic backup schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Frequency</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Custom</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>12:00 AM</option>
                  <option>3:00 AM</option>
                  <option>6:00 AM</option>
                  <option>9:00 AM</option>
                </select>
              </div>
              
              <Button variant="outline" className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Save Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium">Backup Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {backupHistory.map((backup) => (
                  <tr key={backup.id} className="border-b">
                    <td className="px-4 py-3 text-sm">{backup.name}</td>
                    <td className="px-4 py-3 text-sm">{backup.date}</td>
                    <td className="px-4 py-3 text-sm">{backup.size}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        backup.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {backup.status === 'Complete' ? (
                          <Check className="inline-block mr-1 h-3 w-3" />
                        ) : (
                          <AlertCircle className="inline-block mr-1 h-3 w-3" />
                        )}
                        {backup.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBackup;
