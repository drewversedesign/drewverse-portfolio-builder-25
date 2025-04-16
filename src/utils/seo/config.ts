
import { PageSEOConfig } from './types';

export const seoConfig: PageSEOConfig = {
  home: {
    title: "DrewVerse Design | Premier Web Design Agency in Uganda",
    description: "Leading web design and development agency in Kampala, Uganda. Custom websites, branding, and digital solutions that transform businesses. Starting from 400k UGX.",
    keywords: ["web design uganda", "website development kampala", "digital agency uganda", "DrewVerse Design", "web development company uganda"],
    focusKeyword: "web design uganda",
    ogImage: "/lovable-uploads/7ffe5de1-8359-47de-94b6-f05851a6e354.png",
  },
  about: {
    title: "About DrewVerse Design | Top Web Design Agency in Kampala",
    description: "Founded in 2023, DrewVerse Design is a creative web design studio in Uganda delivering innovative digital solutions. Meet our team of expert designers and developers.",
    keywords: ["web design company uganda", "kampala web designers", "about drewverse design", "ugandan tech company"],
    focusKeyword: "web design company uganda",
    authorityLinks: [
      {
        text: "Learn more about professional web design",
        url: "https://www.webdesignerdepot.com/",
        title: "Web Designer Depot - Design Resources"
      }
    ]
  },
  services: {
    title: "Web Design & Development Services in Uganda | DrewVerse Design",
    description: "Professional website design, e-commerce development, and digital branding services in Uganda. Custom web solutions starting from 400k UGX. Get a free quote today!",
    keywords: ["web design services uganda", "website development kampala", "ecommerce website uganda", "professional web services"],
    focusKeyword: "web design services uganda",
    authorityLinks: [
      {
        text: "Explore modern web development trends",
        url: "https://developers.google.com/web",
        title: "Google Web Development Resources"
      }
    ]
  },
  portfolio: {
    title: "Website Design Portfolio Uganda | DrewVerse Design Projects",
    description: "Explore our portfolio of successful web design and development projects in Uganda. See how we help businesses establish a strong online presence with custom websites.",
    keywords: ["web design portfolio uganda", "website examples kampala", "ugandan websites", "web development projects"],
    focusKeyword: "website design portfolio uganda",
    authorityLinks: [
      {
        text: "View web design inspiration",
        url: "https://www.awwwards.com/",
        title: "Awwwards - Website Awards"
      }
    ]
  },
  blog: {
    title: "Web Design & Development Blog | DrewVerse Design Uganda",
    description: "Stay updated with the latest web design trends, development tips, and digital marketing insights from Uganda's leading web design agency.",
    keywords: ["web design blog uganda", "website development tips", "digital marketing insights kampala", "tech blog uganda"],
    focusKeyword: "web design blog uganda",
    authorityLinks: [
      {
        text: "Read more about web development",
        url: "https://css-tricks.com/",
        title: "CSS-Tricks - Web Development Resources"
      }
    ]
  },
  contact: {
    title: "Contact DrewVerse Design | Web Design Agency Uganda",
    description: "Get in touch for professional web design and development services in Uganda. Request a quote for your project or visit our office in Kampala. Fast & friendly response.",
    keywords: ["contact web designer uganda", "hire web developer kampala", "website quote uganda", "drewverse contact"],
    focusKeyword: "contact web designer uganda",
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
