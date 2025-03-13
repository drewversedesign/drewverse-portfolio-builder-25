import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPostProps } from '../components/BlogPost';
import { useToast } from '@/hooks/use-toast';

// Sample blog posts data (same as in BlogPage)
const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: 'How to Choose the Right Color Palette for Your Brand',
    excerpt: 'Color psychology plays a crucial role in brand perception. Learn how to select colors that reflect your brand values and resonate with your audience.',
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It can influence mood, evoke emotions, and shape perceptions. When it comes to branding, the colors you choose can significantly impact how your audience perceives your company.</p>
      
      <h2>The Psychology of Color</h2>
      <p>Different colors evoke different emotions and associations:</p>
      <ul>
        <li><strong>Blue</strong>: Trust, reliability, professionalism</li>
        <li><strong>Red</strong>: Excitement, passion, urgency</li>
        <li><strong>Green</strong>: Growth, health, sustainability</li>
        <li><strong>Yellow</strong>: Optimism, clarity, warmth</li>
        <li><strong>Purple</strong>: Creativity, wisdom, luxury</li>
      </ul>
      
      <p>Understanding these associations is crucial when selecting colors that align with your brand values and the message you want to convey.</p>
      
      <h2>Creating Harmony</h2>
      <p>A well-designed color palette typically includes:</p>
      <ul>
        <li>A primary brand color</li>
        <li>1-2 complementary secondary colors</li>
        <li>Several neutral tones</li>
        <li>Accent colors for highlights and calls to action</li>
      </ul>
      
      <p>These colors should work harmoniously together while providing enough contrast for readability and hierarchy.</p>
      
      <h2>Testing Your Palette</h2>
      <p>Before finalizing your color scheme, it's essential to test it across various applications and contexts:</p>
      <ul>
        <li>Digital interfaces (websites, apps, social media)</li>
        <li>Print materials (business cards, brochures)</li>
        <li>Environmental applications (signage, office spaces)</li>
        <li>Accessibility considerations (color blindness, contrast ratios)</li>
      </ul>
      
      <p>Remember that colors may appear differently across different mediums and screens, so thorough testing is crucial.</p>
      
      <h2>Evolving Your Palette</h2>
      <p>As your brand evolves, your color palette may need to evolve too. Many successful brands have undergone subtle color shifts over time to stay relevant while maintaining their core identity.</p>
      
      <p>The key is to make intentional changes that honor your brand's heritage while positioning it for the future.</p>
    `,
    author: 'Drew Thompson',
    date: 'June 15, 2023',
    category: 'Branding',
    image: '/lovable-uploads/c15adf6f-a00b-4c5e-bbe7-58cd9e4f3ccd.png',
    slug: 'color-palette-brand'
  },
  {
    id: 2,
    title: 'The Future of UI/UX: AI-Driven Design Trends',
    excerpt: 'Artificial intelligence is transforming the design landscape. Discover how AI tools are shaping the future of user interfaces and experiences.',
    content: `
      <p>Artificial intelligence is revolutionizing the way we approach UI/UX design, offering new possibilities for personalization, automation, and innovation.</p>
      
      <h2>Personalized User Experiences</h2>
      <p>AI enables unprecedented levels of personalization by analyzing user behavior and preferences to dynamically adjust interfaces in real-time. This means:</p>
      <ul>
        <li>Content recommendations tailored to individual interests</li>
        <li>Interface layouts that adapt to usage patterns</li>
        <li>Personalized visual elements based on user preferences</li>
      </ul>
      
      <h2>Automated Design Systems</h2>
      <p>AI tools are increasingly capable of generating design elements and even entire interfaces:</p>
      <ul>
        <li>Automatic generation of color palettes and typography combinations</li>
        <li>AI-powered layout suggestions based on content</li>
        <li>Design systems that evolve based on user feedback</li>
      </ul>
      
      <h2>Voice and Gesture Interfaces</h2>
      <p>As AI improves natural language processing and computer vision, we're seeing a rise in interfaces that rely less on traditional screen interactions:</p>
      <ul>
        <li>Voice-first interfaces that understand context and nuance</li>
        <li>Gesture recognition systems that feel intuitive and responsive</li>
        <li>Multimodal interfaces that combine various input methods</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>With these advancements come important ethical questions that designers must address:</p>
      <ul>
        <li>Transparency about AI-driven elements in interfaces</li>
        <li>Privacy concerns related to the data needed for personalization</li>
        <li>Accessibility and inclusion in AI-generated designs</li>
        <li>Potential biases in AI systems that might affect design decisions</li>
      </ul>
      
      <h2>The Designer's Evolving Role</h2>
      <p>Rather than replacing designers, AI is transforming their role to focus more on:</p>
      <ul>
        <li>Setting strategic direction and defining design principles</li>
        <li>Curating and refining AI-generated options</li>
        <li>Ensuring ethical implementation of AI in design systems</li>
        <li>Building empathy into AI systems through thoughtful design</li>
      </ul>
      
      <p>The future of UI/UX design lies not in choosing between human creativity and AI efficiency, but in finding the perfect synergy between the two.</p>
    `,
    author: 'Sarah Chen',
    date: 'July 8, 2023',
    category: 'UI/UX',
    image: '/lovable-uploads/1f6b0b2c-b6e7-41ff-bed6-566bac9c793c.png',
    slug: 'ai-driven-design-trends'
  },
  // Keep remaining posts with just basic info (no content needed)
  {
    id: 3,
    title: 'Responsive Design: Beyond the Basics',
    excerpt: 'Go beyond standard breakpoints and learn advanced techniques for creating truly responsive layouts that adapt to any device or screen size.',
    author: 'Drew Thompson',
    date: 'August 22, 2023',
    category: 'Web Design',
    image: '/lovable-uploads/c1975dfd-5ca5-4ce6-863d-9b881a283e04.png',
    slug: 'responsive-design-advanced'
  },
  {
    id: 4,
    title: 'Creating Effective Call-to-Action Buttons',
    excerpt: 'Learn the psychology behind high-converting CTA buttons and discover design principles that increase engagement and conversion rates.',
    author: 'Alex Rivera',
    date: 'September 5, 2023',
    category: 'Conversion',
    image: '/lovable-uploads/4c727787-b9ab-4109-a8f0-2728ba907cae.png',
    slug: 'effective-cta-buttons'
  },
  {
    id: 5,
    title: 'Typography Trends That Will Dominate This Year',
    excerpt: 'Explore the latest typography trends that are shaping the design world and learn how to implement them in your projects.',
    author: 'Sarah Chen',
    date: 'October 12, 2023',
    category: 'Typography',
    image: '/lovable-uploads/c15adf6f-a00b-4c5e-bbe7-58cd9e4f3ccd.png',
    slug: 'typography-trends'
  },
  {
    id: 6,
    title: 'The Impact of Dark Mode on User Experience',
    excerpt: 'Dark mode is more than just aesthetics. Discover its impact on user experience, accessibility, and energy consumption.',
    author: 'Drew Thompson',
    date: 'November 18, 2023',
    category: 'UI/UX',
    image: '/lovable-uploads/1f6b0b2c-b6e7-41ff-bed6-566bac9c793c.png',
    slug: 'dark-mode-user-experience'
  }
];

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-drew-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied!",
      description: "Article link has been copied to clipboard",
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.author === post.author))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-drew-purple mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="service-chip mb-4">{post.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center text-sm text-gray-400 mb-8 gap-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  {post.category}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden mb-10 h-[400px]"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
            />
            
            <div className="border-t border-white/10 mt-12 pt-8">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium mb-3">Share this article:</h4>
                  <div className="flex gap-3">
                    <a 
                      href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 border border-white/10 flex items-center justify-center transition-all duration-300"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 border border-white/10 flex items-center justify-center transition-all duration-300"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 border border-white/10 flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <button 
                      onClick={copyToClipboard}
                      className="w-10 h-10 rounded-full bg-drew-gray-dark hover:bg-drew-purple/20 border border-white/10 flex items-center justify-center transition-all duration-300"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="mt-6 md:mt-0 inline-flex items-center bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-5 py-2 rounded-lg transition-all duration-300"
                >
                  Discuss this project
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((post, index) => (
                    <BlogPost key={post.id} post={post} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
