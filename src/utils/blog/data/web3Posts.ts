
import { BlogPostProps } from "../types";
import { placeholderImages } from "../../imageUtils";

// Web3-related blog posts
export const web3Posts: BlogPostProps[] = [
  {
    id: 16,
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
  }
];
