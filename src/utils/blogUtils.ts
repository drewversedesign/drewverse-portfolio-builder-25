import { BlogPostProps } from "../components/BlogPost";
import { placeholderImages } from "./imageUtils";

// Dummy blog post data - moved from BlogPostPage.tsx to this utility file
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
  },
];

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
