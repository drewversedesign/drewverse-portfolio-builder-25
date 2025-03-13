
import { BlogPostProps } from "../types";
import { placeholderImages } from "../../imageUtils";

// Sustainability-related blog posts
export const sustainabilityPosts: BlogPostProps[] = [
  {
    id: 15,
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
  }
];
