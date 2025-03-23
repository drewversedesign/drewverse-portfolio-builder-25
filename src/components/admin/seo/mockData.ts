
import { PageSEO, SEOSetting } from './types';

export const initialSEOSettings: SEOSetting = {
  title: 'Drew Creative Agency - Premium Design Studio',
  metaDescription: 'Drew Creative Agency specializes in creating stunning websites, brand identities, and digital experiences that transform ideas into digital excellence.',
  metaKeywords: 'design agency, web design, UX/UI design, brand identity, mobile apps',
  robotsTxt: 'User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://drewcreative.agency/sitemap.xml',
  sitemap: 'https://drewcreative.agency/sitemap.xml'
};

export const initialPageSEO: PageSEO[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
    metaTitle: 'Drew Creative Agency | Digital Design Excellence',
    metaDescription: 'Award-winning creative agency specializing in web design, branding, and digital marketing solutions for businesses of all sizes.',
    metaKeywords: 'home, drew creative, design agency, web design',
    score: 92
  },
  {
    id: 'about',
    title: 'About Us',
    path: '/about',
    metaTitle: 'About Drew Creative Agency | Our Story & Mission',
    metaDescription: 'Learn about our journey, mission and the team behind Drew Creative Agency. Discover how we help brands achieve digital excellence.',
    metaKeywords: 'about us, drew creative team, agency mission, creative professionals',
    score: 85
  },
  {
    id: 'services',
    title: 'Services',
    path: '/services',
    metaTitle: 'Professional Design Services | Drew Creative Agency',
    metaDescription: 'Explore our comprehensive range of design services including web design, branding, UI/UX design, and digital marketing.',
    metaKeywords: 'services, web design, branding, digital marketing, UI/UX design',
    score: 78
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    path: '/portfolio',
    metaTitle: 'Our Work | Drew Creative Agency Portfolio',
    metaDescription: 'Browse our portfolio of successful projects across various industries. See how we have helped businesses transform their digital presence.',
    metaKeywords: 'portfolio, creative work, design examples, case studies, projects',
    score: 90
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    metaTitle: 'Contact Drew Creative Agency | Get In Touch',
    metaDescription: 'Ready to start your project? Contact our team for a free consultation and quote on your next digital venture.',
    metaKeywords: 'contact, get in touch, project quote, consultation',
    score: 88
  },
  {
    id: 'blog',
    title: 'Blog',
    path: '/blog',
    metaTitle: 'Design Insights & Tips | Drew Creative Blog',
    metaDescription: 'Get the latest insights, tips and trends in web design, branding and digital marketing from our expert team.',
    metaKeywords: 'blog, design tips, web design trends, creative insights',
    score: 75
  }
];
