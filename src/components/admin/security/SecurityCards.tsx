
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';

interface SecurityCard {
  title: string;
  description: string;
  buttonText: string;
}

const SecurityCards = () => {
  const securityFeatures: SecurityCard[] = [
    {
      title: 'Two-Factor Authentication',
      description: 'Require 2FA for administrators and editors',
      buttonText: 'Configure 2FA'
    },
    {
      title: 'Password Policy',
      description: 'Set requirements for user passwords',
      buttonText: 'Edit Policy'
    },
    {
      title: 'Login Attempts',
      description: 'Limit failed login attempts',
      buttonText: 'Configure Limits'
    },
    {
      title: 'Session Management',
      description: 'Set session timeout and control active sessions',
      buttonText: 'Manage Sessions'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{feature.description}</p>
              <Button variant="outline">{feature.buttonText}</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityCards;
