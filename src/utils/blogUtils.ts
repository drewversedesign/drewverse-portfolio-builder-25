import { BlogPostProps } from "../components/BlogPost";
import { placeholderImages } from "./imageUtils";

// Expanded blog post data with more categories and posts
export const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: "10 UI/UX Design Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging trends in user interface and experience design.",
    content: `
      <p>User Interface (UI) and User Experience (UX) design continue to evolve rapidly as technology advances and user expectations change. Staying current with the latest trends isn't just about aesthetics—it's about creating intuitive, accessible, and delightful user experiences that meet modern needs.</p>
      
      <h2>1. Dark Mode Everywhere</h2>
      <p>Dark mode has moved beyond a simple feature to become an expected design option. Not only does it reduce eye strain and save battery life on OLED screens, but it also creates a sleek, premium feel that many users prefer. In 2023, expect to see more sophisticated implementations of dark mode with thoughtful color palettes that maintain accessibility and visual hierarchy.</p>
      
      <h2>2. 3D Elements and Depth</h2>
      <p>With improvements in device processing power, 3D elements are becoming more prevalent in UI design. Subtle shadows, layering, and true 3D objects add depth and realism to interfaces. This trend creates immersive experiences that can help users better understand spatial relationships between elements.</p>
      
      <h2>3. Microinteractions with Purpose</h2>
      <p>Small, purposeful animations that provide feedback on user actions continue to be important. In 2023, expect microinteractions to become more sophisticated and meaningful, serving not just as delightful details but as important cues that guide users through their journey.</p>
      
      <h2>4. Voice User Interfaces (VUI)</h2>
      <p>As voice assistants become more capable, designing for voice interactions is increasingly important. The challenge for designers is creating seamless experiences that work across both visual and voice interfaces.</p>
      
      <h2>5. Augmented Reality Integration</h2>
      <p>AR is moving beyond novelty applications to become a useful tool in e-commerce, education, and navigation. Designers are finding ways to make AR interfaces intuitive and helpful rather than gimmicky.</p>
      
      <h2>6. Accessibility as a Priority</h2>
      <p>Accessibility is finally getting the attention it deserves. In 2023, expect accessibility to be built into the design process from the beginning, with more tools and resources dedicated to creating inclusive experiences.</p>
      
      <h2>7. Data Visualization</h2>
      <p>As data becomes more central to user experiences, finding creative and clear ways to visualize that data is crucial. Interactive charts, personalized dashboards, and real-time updates will be key features in many applications.</p>
      
      <h2>8. Glassmorphism 2.0</h2>
      <p>The frosted glass aesthetic has evolved with more subtlety and purpose. Modern implementations use the effect sparingly to create depth and focus without overwhelming the interface.</p>
      
      <h2>9. Emotional Design</h2>
      <p>Designing for emotional connection through playful illustrations, copy with personality, and interfaces that adapt to user contexts will differentiate products in crowded markets.</p>
      
      <h2>10. Sustainable UX</h2>
      <p>As awareness of digital carbon footprints grows, designing efficient, lightweight interfaces that consume less energy will become an important consideration. This includes optimizing images, reducing unnecessary animations, and designing for offline functionality.</p>
      
      <p>As these trends evolve, the most successful designs will be those that thoughtfully implement these elements where they add real value to the user experience, rather than following trends for their own sake.</p>
    `,
    author: "Alex Chen",
    date: "Oct 15, 2023",
    category: "Design",
    image: placeholderImages.portfolio1,
    slug: "ui-ux-design-trends-2023",
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "The Future of E-commerce: AI-Powered Shopping Experiences",
    excerpt: "Explore how artificial intelligence is transforming online retail, from personalized recommendations to virtual try-ons.",
    content: "<p>E-commerce is on the cusp of a revolution, driven by advancements in artificial intelligence (AI). These technologies are not just improving backend operations; they're fundamentally changing how consumers discover, interact with, and purchase products online. Let's delve into the AI-powered innovations that are shaping the future of e-commerce.</p>\n\n<h2>1. Personalized Product Recommendations</h2>\n<p>AI algorithms analyze vast amounts of data about customer behavior, preferences, and purchase history to provide highly personalized product recommendations. This goes beyond simple 'customers who bought this also bought' suggestions. AI can understand the context of a shopper's current browsing session, predict their needs, and offer relevant products in real-time.</p>\n\n<h2>2. AI-Driven Search and Discovery</h2>\n<p>Traditional keyword-based search is evolving into AI-powered semantic search. This means that e-commerce platforms can understand the intent behind a shopper's query, even if it's phrased in natural language. AI can also analyze images and videos to help shoppers find products based on visual cues.</p>\n\n<h2>3. Virtual Try-On and Augmented Reality</h2>\n<p>Augmented reality (AR) is enabling shoppers to virtually try on clothing, accessories, and makeup before making a purchase. AI algorithms can accurately map products onto a shopper's image or video feed, providing a realistic preview of how the item will look. This technology reduces the risk of returns and enhances the overall shopping experience.</p>\n\n<h2>4. Chatbots and Virtual Assistants</h2>\n<p>AI-powered chatbots are becoming increasingly sophisticated, capable of handling a wide range of customer service inquiries. These virtual assistants can answer questions, provide product information, assist with order tracking, and even offer personalized recommendations. Chatbots provide instant support and free up human agents to focus on more complex issues.</p>\n\n<h2>5. Dynamic Pricing and Promotions</h2>\n<p>AI algorithms can analyze market trends, competitor pricing, and customer demand to dynamically adjust prices and promotions in real-time. This ensures that e-commerce businesses can maximize revenue while remaining competitive. AI can also personalize promotions based on individual shopper behavior.</p>\n\n<h2>6. Fraud Detection and Prevention</h2>\n<p>AI is playing a crucial role in detecting and preventing fraudulent transactions in e-commerce. Machine learning algorithms can identify suspicious patterns and flag potentially fraudulent orders for review. This helps protect both businesses and consumers from financial losses.</p>\n\n<h2>7. Supply Chain Optimization</h2>\n<p>AI is being used to optimize various aspects of the e-commerce supply chain, from inventory management to logistics. Predictive analytics can forecast demand, optimize warehouse operations, and improve delivery routes. This leads to reduced costs, faster shipping times, and improved customer satisfaction.</p>\n\n<h2>8. Visual Search</h2>\n<p>Visual search allows customers to upload an image of a product they want to find, and AI algorithms will identify similar items in the e-commerce platform's catalog. This is particularly useful for shoppers who don't know the exact name or description of the product they're looking for.</p>\n\n<h2>9. Sentiment Analysis</h2>\n<p>AI-powered sentiment analysis can analyze customer reviews, social media posts, and other forms of feedback to understand how shoppers feel about products and brands. This information can be used to improve product development, marketing strategies, and customer service.</p>\n\n<h2>10. Voice Commerce</h2>\n<p>With the rise of voice assistants like Amazon Alexa and Google Assistant, voice commerce is becoming increasingly popular. AI enables shoppers to make purchases using voice commands, creating a hands-free and convenient shopping experience.</p>\n\n<p>As AI continues to evolve, it will undoubtedly play an even greater role in shaping the future of e-commerce. Businesses that embrace these technologies will be well-positioned to deliver personalized, seamless, and engaging shopping experiences that meet the evolving needs of today's consumers.</p>",
    author: "Priya Sharma",
    date: "Oct 22, 2023",
    category: "E-commerce",
    image: placeholderImages.portfolio2,
    slug: "future-of-ecommerce-ai",
    featured: false,
    trending: true,
  },
  {
    id: 3,
    title: "The Power of Data Analytics in Modern Marketing",
    excerpt: "Discover how data analytics is revolutionizing marketing strategies, enabling businesses to make informed decisions and drive growth.",
    content: "<p>In today's digital age, data is abundant, and businesses have access to vast amounts of information about their customers, markets, and competitors. However, data alone is not enough. To unlock its true potential, businesses need to leverage the power of data analytics. Data analytics involves the process of collecting, cleaning, analyzing, and interpreting data to extract meaningful insights and inform decision-making. In the context of marketing, data analytics is revolutionizing how businesses understand their customers, optimize their campaigns, and drive growth.</p>\n\n<h2>1. Understanding Customer Behavior</h2>\n<p>Data analytics enables marketers to gain a deep understanding of customer behavior. By analyzing data from various sources, such as website analytics, social media, CRM systems, and surveys, marketers can identify patterns, trends, and preferences. This knowledge can be used to segment customers, personalize marketing messages, and tailor product offerings to meet specific needs.</p>\n\n<h2>2. Optimizing Marketing Campaigns</h2>\n<p>Data analytics provides marketers with the tools to optimize their campaigns in real-time. By tracking key metrics, such as click-through rates, conversion rates, and return on ad spend, marketers can identify what's working and what's not. This allows them to make data-driven adjustments to their campaigns, such as refining targeting, tweaking ad copy, or reallocating budget to more effective channels.</p>\n\n<h2>3. Improving Customer Experience</h2>\n<p>Data analytics can be used to improve the overall customer experience. By analyzing customer feedback, support tickets, and online reviews, marketers can identify pain points and areas for improvement. This information can be used to enhance product design, streamline customer service processes, and create more personalized interactions.</p>\n\n<h2>4. Predicting Future Trends</h2>\n<p>Data analytics can help marketers predict future trends and anticipate changes in customer behavior. By analyzing historical data and applying predictive modeling techniques, marketers can identify emerging trends, forecast demand, and prepare for future challenges. This allows them to stay ahead of the curve and maintain a competitive advantage.</p>\n\n<h2>5. Measuring Marketing ROI</h2>\n<p>Data analytics provides marketers with the ability to accurately measure the return on investment (ROI) of their marketing efforts. By tracking the costs and revenues associated with each campaign, marketers can determine which channels and tactics are generating the most value. This information can be used to optimize budget allocation and improve overall marketing effectiveness.</p>\n\n<h2>6. Personalizing Marketing Messages</h2>\n<p>Data analytics enables marketers to personalize their messages to individual customers. By analyzing customer data, marketers can create targeted campaigns that resonate with specific segments. This can lead to higher engagement rates, improved conversion rates, and increased customer loyalty.</p>\n\n<h2>7. Identifying New Opportunities</h2>\n<p>Data analytics can help marketers identify new opportunities for growth. By analyzing market data, competitor data, and customer data, marketers can uncover unmet needs, identify emerging markets, and develop innovative products and services.</p>\n\n<h2>8. Enhancing Customer Segmentation</h2>\n<p>Data analytics enables marketers to create more sophisticated customer segments. By analyzing a wide range of data points, marketers can identify segments based on demographics, psychographics, behavior, and purchase history. This allows them to target their messages more effectively and improve campaign performance.</p>\n\n<h2>9. Improving Lead Generation</h2>\n<p>Data analytics can be used to improve lead generation efforts. By analyzing data from lead generation campaigns, marketers can identify the most effective channels, tactics, and messaging. This allows them to optimize their campaigns and generate more qualified leads.</p>\n\n<h2>10. Optimizing Pricing Strategies</h2>\n<p>Data analytics can help marketers optimize their pricing strategies. By analyzing data on customer demand, competitor pricing, and cost of goods sold, marketers can determine the optimal price points for their products and services. This can lead to increased revenue and improved profitability.</p>\n\n<p>In conclusion, data analytics is a powerful tool that can transform marketing strategies and drive growth. By leveraging the power of data, marketers can gain a deeper understanding of their customers, optimize their campaigns, improve customer experience, and predict future trends. As data continues to grow in volume and complexity, the importance of data analytics in marketing will only increase.</p>",
    author: "David Lee",
    date: "Nov 05, 2023",
    category: "Marketing",
    image: placeholderImages.portfolio3,
    slug: "power-of-data-analytics-in-marketing",
    featured: true,
    trending: false,
  },
  {
    id: 4,
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of abilities or disabilities.",
    content: `<p>Web accessibility is no longer optional—it's a necessity. This comprehensive guide walks through the essential practices for building truly accessible applications.</p>
    <h2>Understanding Web Accessibility</h2>
    <p>Accessibility means making your website usable by as many people as possible. This includes those with disabilities such as visual impairments, hearing impairments, mobility impairments, and cognitive disabilities.</p>
    <h2>WCAG Guidelines: The Foundation</h2>
    <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. Learn about the key principles: Perceivable, Operable, Understandable, and Robust.</p>
    <h2>Semantic HTML: The Right Foundation</h2>
    <p>Using the right HTML elements for their intended purpose is crucial for accessibility. Discover how proper heading structures, lists, buttons, and form elements enhance the experience for screen reader users.</p>`,
    author: "Maya Johnson",
    date: "Nov 12, 2023",
    category: "Development",
    image: placeholderImages.portfolio4,
    slug: "building-accessible-web-applications",
    featured: false,
    trending: true,
  },
  {
    id: 5,
    title: "The Psychology of Color in Brand Design",
    excerpt: "Explore how color choices influence consumer perception and behavior, and how to leverage color psychology in your brand design.",
    content: `<p>Colors have profound effects on our psychology and behavior. Smart brands leverage these effects to create powerful emotional connections with their audience.</p>
    <h2>The Emotional Impact of Colors</h2>
    <p>Every color evokes specific emotions and associations. Red can trigger excitement or urgency, blue conveys trust and reliability, while green suggests growth and nature.</p>
    <h2>Cultural Considerations in Color Selection</h2>
    <p>Color meanings vary significantly across cultures. What works in one market might send unintended messages in another. This article explores these crucial cultural variations.</p>
    <h2>Creating Effective Color Palettes</h2>
    <p>Learn the principles of color harmony and how to create palettes that not only look appealing but also communicate your brand values effectively.</p>`,
    author: "Sophie Wang",
    date: "Nov 20, 2023",
    category: "Branding",
    image: placeholderImages.portfolio5,
    slug: "psychology-of-color-brand-design",
    featured: true,
    trending: false,
  },
  {
    id: 6,
    title: "Optimizing Website Performance for Core Web Vitals",
    excerpt: "Master the techniques to improve your website's Core Web Vitals scores and enhance user experience while boosting SEO rankings.",
    content: `<p>Google's Core Web Vitals have become crucial metrics for website performance, affecting both user experience and search rankings.</p>
    <h2>Understanding the Core Metrics</h2>
    <p>Learn about Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—what they measure and why they matter.</p>
    <h2>Image Optimization Techniques</h2>
    <p>Images often contribute significantly to performance issues. Discover modern approaches to image optimization, including responsive images, next-gen formats, and lazy loading.</p>
    <h2>JavaScript Performance Optimization</h2>
    <p>JavaScript can make or break your site's performance. Explore code splitting, tree shaking, and other techniques to deliver JavaScript efficiently.</p>`,
    author: "Marcus Green",
    date: "Dec 03, 2023",
    category: "Performance",
    image: placeholderImages.portfolio6,
    slug: "optimizing-core-web-vitals",
    featured: false,
    trending: true,
  },
  {
    id: 7,
    title: "The Rise of Headless CMS in Modern Web Development",
    excerpt: "Discover how headless CMS architecture is changing content management and enabling more flexible, scalable web experiences.",
    content: `<p>Headless CMS systems are revolutionizing how we build and manage digital experiences, offering unprecedented flexibility for developers and marketers alike.</p>
    <h2>What Makes a CMS "Headless"?</h2>
    <p>Understand the fundamental difference between traditional and headless CMS systems and why this architectural shift matters for modern applications.</p>
    <h2>Benefits for Developers and Content Teams</h2>
    <p>Explore how developers gain freedom in their tech stack choices while content creators enjoy streamlined workflows and omnichannel publishing capabilities.</p>
    <h2>Popular Headless CMS Platforms</h2>
    <p>From Contentful to Sanity to Strapi, learn about the leading platforms in the headless CMS space and their unique strengths and use cases.</p>`,
    author: "Elena Rodriguez",
    date: "Dec 15, 2023",
    category: "Development",
    image: placeholderImages.portfolio7,
    slug: "rise-of-headless-cms",
    featured: false,
    trending: false,
  },
  {
    id: 8,
    title: "Cybersecurity Essentials for Small Business Websites",
    excerpt: "Learn the fundamental security practices every small business should implement to protect their website and customer data.",
    content: `<p>Small businesses are increasingly targeted by cybercriminals. This guide covers the essential security measures every business website needs.</p>
    <h2>Common Vulnerabilities and Threats</h2>
    <p>Understand the most prevalent security risks for small business websites, from SQL injection to cross-site scripting and credential stuffing attacks.</p>
    <h2>HTTPS and SSL Certificate Implementation</h2>
    <p>Secure connections are non-negotiable today. Learn how to properly implement HTTPS and manage SSL certificates for your website.</p>
    <h2>Regular Security Audits and Updates</h2>
    <p>Discover how to create and maintain a security maintenance schedule that includes vulnerability scanning, software updates, and security patches.</p>`,
    author: "James Wilson",
    date: "Jan 08, 2024",
    category: "Security",
    image: placeholderImages.portfolio8,
    slug: "cybersecurity-small-business",
    featured: false,
    trending: false,
  },
  {
    id: 9,
    title: "Effective Mobile-First Design Strategies",
    excerpt: "Master the principles of mobile-first design to create exceptional user experiences across all device sizes.",
    content: `<p>As mobile traffic continues to dominate, designing for mobile first isn't just a trend—it's a necessity for successful digital products.</p>
    <h2>The Business Case for Mobile-First</h2>
    <p>Understand the data behind mobile usage trends and why prioritizing mobile experiences leads to better business outcomes across industries.</p>
    <h2>Content Prioritization</h2>
    <p>Learn techniques for identifying and highlighting your most important content when screen real estate is limited on mobile devices.</p>
    <h2>Navigation Patterns That Work</h2>
    <p>Explore effective mobile navigation patterns that balance discoverability with screen space efficiency, from hamburger menus to tab bars.</p>`,
    author: "Naomi Park",
    date: "Jan 22, 2024",
    category: "Design",
    image: placeholderImages.portfolio9,
    slug: "mobile-first-design-strategies",
    featured: false,
    trending: false,
  },
  {
    id: 10,
    title: "Measuring ROI in Digital Marketing Campaigns",
    excerpt: "Learn practical approaches to tracking and calculating the return on investment for your digital marketing efforts.",
    content: `<p>Accurately measuring ROI remains one of the biggest challenges in digital marketing. This guide offers practical solutions to this common problem.</p>
    <h2>Setting Measurable Campaign Objectives</h2>
    <p>Discover how to set SMART goals that align with business objectives and can be effectively measured through digital analytics.</p>
    <h2>Attribution Models Explained</h2>
    <p>Compare different attribution models, from first-click to multi-touch, and learn which is most appropriate for different types of campaigns.</p>
    <h2>Beyond Conversions: Measuring Brand Impact</h2>
    <p>Explore methods for quantifying less tangible but equally important aspects of marketing ROI, including brand awareness and sentiment.</p>`,
    author: "Thomas Johnson",
    date: "Feb 05, 2024",
    category: "Marketing",
    image: placeholderImages.portfolio10,
    slug: "measuring-marketing-roi",
    featured: false,
    trending: false,
  },
  {
    id: 11,
    title: "Sustainable Web Design: Reducing Digital Carbon Footprint",
    excerpt: "Discover how to create beautiful, functional websites while minimizing environmental impact through sustainable web design practices.",
    content: `<p>The internet is responsible for approximately 3.7% of global carbon emissions. Sustainable web design aims to reduce this environmental impact.</p>
    <h2>The Environmental Cost of Websites</h2>
    <p>Understand how websites consume energy and contribute to carbon emissions through data centers, network infrastructure, and device usage.</p>
    <h2>Optimizing Images and Media</h2>
    <p>Learn techniques for dramatically reducing page weight through proper image formats, compression, and media delivery strategies.</p>
    <h2>Efficient Coding Practices</h2>
    <p>Explore development approaches that reduce processing requirements and minimize the resources needed to deliver your web experiences.</p>`,
    author: "Olivia Chen",
    date: "Feb 18, 2024",
    category: "Sustainability",
    image: placeholderImages.portfolio3,
    slug: "sustainable-web-design",
    featured: false,
    trending: false,
  },
  {
    id: 12,
    title: "The Impact of Web3 on Digital Product Design",
    excerpt: "Explore how blockchain, cryptocurrencies, and decentralized applications are reshaping user experience and product design.",
    content: `<p>Web3 technologies are introducing new paradigms in digital product design, from ownership models to interaction patterns.</p>
    <h2>Designing for Decentralization</h2>
    <p>Learn about the unique UX challenges of decentralized applications and how to create intuitive experiences despite the underlying complexity.</p>
    <h2>Wallet Integration and Authentication</h2>
    <p>Explore best practices for integrating crypto wallets as authentication methods while maintaining security and usability.</p>
    <h2>Communicating Value and Trust</h2>
    <p>Discover strategies for building user trust in Web3 products through transparent design, clear communication, and progressive disclosure.</p>`,
    author: "Ryan Kim",
    date: "Mar 02, 2024",
    category: "Web3",
    image: placeholderImages.portfolio5,
    slug: "web3-product-design",
    featured: true,
    trending: true,
  },
];

// All available categories extracted from blog posts
export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ['All', ...Array.from(new Set(categories))].sort();
};

// Get featured posts
export const getFeaturedPosts = (limit: number = 3): BlogPostProps[] => {
  return blogPosts
    .filter(post => post.featured)
    .slice(0, limit);
};

// Get trending posts
export const getTrendingPosts = (limit: number = 4): BlogPostProps[] => {
  return blogPosts
    .filter(post => post.trending)
    .slice(0, limit);
};

// Calculate reading time (very rough estimate: 200 words per minute)
export const calculateReadingTime = (content: string = ''): number => {
  const wordCount = content.split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(wordCount / 200));
};

// Find related posts
export const findRelatedPosts = (
  currentPost: BlogPostProps,
  allPosts: BlogPostProps[],
  limit: number = 3
): BlogPostProps[] => {
  return allPosts
    .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
    .slice(0, limit);
};
