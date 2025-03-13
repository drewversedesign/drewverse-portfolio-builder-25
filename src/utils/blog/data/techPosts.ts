
import { BlogPostProps } from "../types";
import { placeholderImages } from "../../imageUtils";

// Technical-related blog posts
export const techPosts: BlogPostProps[] = [
  {
    id: 10,
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
    id: 12,
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
];
