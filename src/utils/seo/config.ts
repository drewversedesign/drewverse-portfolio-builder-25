import { PageSEOConfig } from './types';

export const seoConfig: PageSEOConfig = {
  home: {
    title: "DrewVerse Design | Premier Digital Agency in Uganda | Web Design & Development",
    description: "DrewVerse Design offers professional web design, development, and digital marketing services in Kampala, Uganda. Transform your online presence with our expert solutions starting from 400k UGX.",
    keywords: ["web design Uganda", "website development Kampala", "digital agency Uganda", "DrewVerse Design", "professional web services Kampala"],
    focusKeyword: "web design Uganda",
    ogImage: "/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png",
    // Removed authorityLinks entirely
  },
  about: {
    title: "About DrewVerse Design | Leading Web Design Agency in Kampala",
    description: "Discover why DrewVerse Design is Uganda's trusted digital agency. Our expert team creates stunning websites and digital solutions that drive business growth.",
    keywords: ["about DrewVerse Design", "Uganda web design company", "Kampala digital agency", "web development team Uganda"],
    focusKeyword: "Uganda web design company",
    authorityLinks: [
      {
        text: "Read about the importance of professional web design",
        url: "https://www.webdesignerdepot.com/",
        title: "Web Designer Depot - Design Resources"
      }
    ]
  },
  services: {
    title: "Professional Web Services Uganda | DrewVerse Design Solutions",
    description: "Comprehensive web design, development, and digital marketing services in Uganda. From custom websites to e-commerce solutions, we deliver results.",
    keywords: ["web services Uganda", "website development services", "digital marketing Kampala", "e-commerce solutions Uganda"],
    focusKeyword: "web services Uganda",
    authorityLinks: [
      {
        text: "Explore modern web development trends",
        url: "https://developers.google.com/web",
        title: "Google Web Development Resources"
      }
    ]
  },
  portfolio: {
    title: "Web Design Portfolio Uganda | DrewVerse Design Projects",
    description: "Explore our portfolio of successful web design and development projects in Uganda. See how we've helped businesses transform their online presence.",
    keywords: ["web design portfolio", "Uganda websites", "Kampala web projects", "digital portfolio Uganda"],
    focusKeyword: "web design portfolio Uganda",
    authorityLinks: [
      {
        text: "View web design inspiration",
        url: "https://www.awwwards.com/",
        title: "Awwwards - Website Awards"
      }
    ]
  },
  blog: {
    title: "Web Design & Development Blog | DrewVerse Design Insights",
    description: "Expert insights on web design, development, and digital marketing in Uganda. Stay updated with the latest trends and best practices.",
    keywords: ["web design blog", "Uganda digital insights", "web development tips", "DrewVerse blog"],
    focusKeyword: "web design blog Uganda",
    authorityLinks: [
      {
        text: "Read more about web development",
        url: "https://css-tricks.com/",
        title: "CSS-Tricks - Web Development Resources"
      }
    ]
  },
  contact: {
    title: "Contact DrewVerse Design | Web Design Services in Uganda",
    description: "Get in touch with Uganda's leading web design agency. Contact us for professional website development and digital marketing services.",
    keywords: ["contact web designer Uganda", "hire web developer Kampala", "Uganda digital agency contact", "DrewVerse contact"],
    focusKeyword: "contact web designer Uganda",
    authorityLinks: [
      {
        text: "Learn about choosing a web design agency",
        url: "https://www.forbes.com/sites/forbesagencycouncil/",
        title: "Forbes Agency Council Insights"
      }
    ]
  }
};

export const generatePageTitle = (pageTitle: string, focusKeyword: string) => {
  return `${pageTitle} | ${focusKeyword} | DrewVerse Design`;
};

export const generateCanonicalUrl = (path: string) => {
  return `https://drewversedesign.online${path}`;
};
