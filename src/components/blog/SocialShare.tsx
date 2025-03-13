
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Share2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={16} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={16} />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={16} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Copy Link',
      icon: <LinkIcon size={16} />,
      action: () => {
        navigator.clipboard.writeText(url);
        toast('Link copied to clipboard!', {
          position: 'bottom-center',
          duration: 2000,
        });
      },
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];
  
  return (
    <div className="flex items-center mt-8 border-t border-b border-white/10 py-4">
      <span className="text-gray-400 mr-4">Share this post:</span>
      
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 transition-colors duration-300"
        >
          <Share2 size={16} />
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 flex items-center gap-2 z-10"
          >
            {shareLinks.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.action ? (
                  <button
                    onClick={item.action}
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${item.color} transition-colors duration-300`}
                    title={item.name}
                  >
                    {item.icon}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${item.color} transition-colors duration-300`}
                    title={item.name}
                  >
                    {item.icon}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
