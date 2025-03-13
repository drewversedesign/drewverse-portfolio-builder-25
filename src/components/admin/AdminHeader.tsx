
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

const AdminHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Manage your website content and settings</p>
      </div>
      
      <div className="mt-4 md:mt-0">
        <Button asChild variant="outline" className="mr-2">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Site
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
