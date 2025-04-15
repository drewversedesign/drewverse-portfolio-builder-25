
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    toast.success('Cookie preferences saved');
    
    // Set analytics cookies
    document.cookie = "analytics_enabled=true; max-age=31536000; path=/";
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    toast.success('Cookie preferences saved');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 z-50">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies to enhance your experience and analyze site usage. 
            By clicking "Accept", you consent to our use of cookies. 
            For more information, please read our{' '}
            <a href="/privacy-policy" className="text-drew-purple hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={declineCookies}
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-drew-purple hover:bg-drew-purple/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
