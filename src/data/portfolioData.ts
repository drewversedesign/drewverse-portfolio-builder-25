
// Portfolio data for website designs
export const projectsData = [
  {
    id: 1,
    title: "InkMaster Tattoo Studio",
    category: "Web Design",
    image: "/lovable-uploads/7f1bdb8b-9567-4035-b245-46cef0683176.png",
    description: "Complete website for a professional tattoo studio with portfolio and booking functionality.",
    link: "/portfolio/tattoo-studio",
    clientName: "InkMaster Studios",
    completionDate: "March 2023",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Node.js"],
    services: ["UI/UX Design", "Front-end Development", "CMS Integration"]
  },
  {
    id: 2,
    title: "Alex Johnson Design Portfolio",
    category: "UI/UX Design",
    image: "/lovable-uploads/1f3b9f2c-9bf4-49eb-8512-827343264840.png",
    description: "Personal portfolio website for a UI/UX designer with interactive elements and skill showcase.",
    link: "/portfolio/creative-portfolio",
    clientName: "Alex Johnson Design",
    completionDate: "April 2023",
    technologies: ["React", "GSAP", "Three.js", "TailwindCSS"],
    services: ["Creative Direction", "Interactive Design", "Front-end Development"]
  },
  {
    id: 3,
    title: "ModernSpace Furniture Store",
    category: "E-commerce",
    image: "/lovable-uploads/25e54975-9718-4b57-a5c5-e13af9e13277.png",
    description: "Minimalist e-commerce site for a modern furniture brand with unique product visualization.",
    link: "/portfolio/furniture-collection",
    clientName: "ModernSpace Furniture",
    completionDate: "February 2023",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Payment Integration", "Product Photography"]
  },
  {
    id: 4,
    title: "Global Hope Foundation",
    category: "Non-profit",
    image: "/lovable-uploads/9ca6c79d-0038-44cb-84a8-826f90f37710.png",
    description: "Global aid network website featuring donation campaigns and community programs.",
    link: "/portfolio/charity-website",
    clientName: "Global Hope Foundation",
    completionDate: "May 2023",
    technologies: ["React", "Firebase", "Stripe", "TailwindCSS"],
    services: ["Donation System", "Campaign Management", "Volunteer Portal"]
  },
  {
    id: 5,
    title: "Sarah Williams Design Studio",
    category: "UI/UX Design",
    image: "/lovable-uploads/f30ebe5b-ddbb-48e6-bb0e-c815ab1635d2.png",
    description: "Portfolio website for a product designer with service offerings and experience timeline.",
    link: "/portfolio/product-designer",
    clientName: "Sarah Williams Design",
    completionDate: "June 2023",
    technologies: ["React", "Framer Motion", "Sanity CMS", "TailwindCSS"],
    services: ["Interactive Design", "CMS Setup", "SEO Optimization"]
  },
  {
    id: 6,
    title: "TechUniverse Electronics",
    category: "E-commerce",
    image: "/lovable-uploads/6f5c0670-0645-4624-a474-e26ed3215cac.png",
    description: "Feature-rich electronics e-commerce platform with product categories and promotions.",
    link: "/portfolio/electronics-store",
    clientName: "TechUniverse",
    completionDate: "July 2023",
    technologies: ["Next.js", "WooCommerce", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Inventory Management", "Payment Processing"]
  },
  {
    id: 7,
    title: "Culinary Masters Institute",
    category: "Education",
    image: "/lovable-uploads/18f77782-e5a0-4601-ba99-28b71b8b90d2.png",
    description: "Culinary education platform featuring courses from professional chefs and interactive lessons.",
    link: "/portfolio/cooking-school",
    clientName: "Culinary Masters Institute",
    completionDate: "August 2023",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    services: ["Learning Management System", "Video Integration", "Membership Portal"]
  },
  {
    id: 8,
    title: "GamersHaven Shop",
    category: "E-commerce",
    image: "/lovable-uploads/9af1d2e5-2854-4fe7-b508-fa1014aad445.png",
    description: "Online store for gaming equipment and accessories with dark-themed UI.",
    link: "/portfolio/gaming-shop",
    clientName: "GamersHaven",
    completionDate: "September 2023",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["UI/UX Design", "E-commerce Development", "SEO Optimization"]
  },
  {
    id: 9,
    title: "PureSound Wireless Headphones",
    category: "Product Landing",
    image: "/lovable-uploads/cd4a8928-d83b-469f-b461-02944638cb38.png",
    description: "Premium wireless headphones product page with immersive audio technology showcase and features comparison.",
    link: "/portfolio/wireless-headphones",
    clientName: "PureSound Audio",
    completionDate: "May 2024",
    technologies: ["React", "GSAP", "Three.js", "TailwindCSS"],
    services: ["Product Visualization", "3D Modeling", "Interactive Design", "E-commerce Integration"]
  },
  {
    id: 10,
    title: "HomeDesign Furniture Marketplace",
    category: "E-commerce",
    image: "/lovable-uploads/cf7289f9-2740-4d85-be2d-c838014cce83.png",
    description: "Modern furniture e-commerce marketplace with categorized collections and special offers.",
    link: "/portfolio/furniture-marketplace",
    clientName: "HomeDesign Collective",
    completionDate: "June 2024",
    technologies: ["Next.js", "Shopify API", "TailwindCSS", "Stripe"],
    services: ["E-commerce Development", "Inventory Management", "Payment Processing"]
  }
];

// Get unique categories from project data
export const portfolioCategories = ["All", ...new Set(projectsData.map(project => project.category))];

// Client testimonials
export const clientTestimonials = [
  {
    id: 1,
    name: "James Wilson",
    title: "CEO at Techmart",
    testimonial: "The team delivered exceptional work that exceeded our expectations. Their attention to detail and creative approach helped our e-commerce site stand out from competitors.",
    rating: 5,
    image: "/lovable-uploads/84374ba6-3462-4401-ad9e-186f427067dd.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Director at ModernSpace",
    testimonial: "Their design expertise transformed our brand's digital presence. The website they created perfectly captures our aesthetic while providing a seamless shopping experience for our customers.",
    rating: 5,
    image: "/lovable-uploads/417b86ce-ee86-46be-855a-cd8867e83dcd.png"
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder of SocialPulse",
    testimonial: "Working with this team was a game-changer for our SaaS platform. They understood our vision and built an intuitive dashboard that our clients love using. Highly recommended!",
    rating: 4,
    image: "/lovable-uploads/2e0711d4-b3c1-44b6-9c9a-87f6ea9fac06.png"
  }
];

// Project analytics and success metrics
export const projectMetrics = {
  deliveryRate: 94,
  clientReturnRate: 87,
  satisfactionRate: 98,
  projectSuccessRate: 96,
  totalCompletedProjects: 87,
  averageProjectDuration: "6 weeks"
};

// Services offered in relation to portfolio projects
export const portfolioServices = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Creating beautiful, functional websites that deliver exceptional user experiences.",
    icon: "Monitor",
    projects: 42
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Building online stores that drive sales and provide seamless shopping experiences.",
    icon: "ShoppingCart",
    projects: 28
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and engaging user experiences that convert visitors.",
    icon: "Palette",
    projects: 35
  },
  {
    id: 4,
    title: "Web Applications",
    description: "Developing custom web applications that solve complex business challenges.",
    icon: "Code",
    projects: 19
  }
];

// Service Details Data
export const serviceDetailsData = [
  {
    id: 1,
    title: "Design & Animation",
    slug: "design",
    category: "Creative Services",
    description: "We create beautiful, functional designs that elevate your brand and engage your audience.",
    metaDescription: "Professional design and animation services including branding, UI/UX design, logo creation, and custom animations for digital experiences.",
    keywords: ["UI/UX Design", "Branding", "Logo Design", "Animation", "Motion Graphics", "Visual Identity"],
    overview: "Our design and animation services focus on creating visually stunning and strategically effective digital experiences. We blend creativity with user-centered design principles to deliver solutions that not only look amazing but also drive results for your business.",
    benefits: [
      "Strategic design that aligns with your business goals",
      "User-centered approach that improves engagement and conversions",
      "Consistent branding across all digital touchpoints",
      "Memorable visual experiences that set you apart from competitors",
      "Ongoing design support and evolution as your business grows"
    ],
    process: [
      {
        title: "Discovery & Research",
        description: "We start by understanding your business, audience, and objectives through in-depth research and stakeholder interviews."
      },
      {
        title: "Strategy & Concept",
        description: "Based on research insights, we develop a strategic approach and conceptual direction for your design needs."
      },
      {
        title: "Design Exploration",
        description: "We create multiple design concepts and iterations, exploring different visual approaches and solutions."
      },
      {
        title: "Refinement & Implementation",
        description: "We refine the chosen direction and prepare all necessary assets for implementation across platforms."
      },
      {
        title: "Testing & Optimization",
        description: "We test designs with real users and optimize based on feedback and performance data."
      }
    ],
    features: [
      {
        title: "Brand Identity Design",
        description: "Comprehensive brand identity systems that communicate your values and resonate with your audience.",
        items: [
          "Logo design and brand marks",
          "Color palette and typography systems",
          "Brand guidelines and style guides",
          "Visual identity applications"
        ]
      },
      {
        title: "UI/UX Design",
        description: "User-centered interface design that creates intuitive, engaging digital experiences.",
        items: [
          "User research and persona development",
          "Information architecture and user flows",
          "Wireframing and prototyping",
          "High-fidelity interface design"
        ]
      },
      {
        title: "Motion Graphics & Animation",
        description: "Dynamic motion design that brings your brand to life and enhances user engagement.",
        items: [
          "Logo animations and brand intros",
          "UI animations and micro-interactions",
          "Explainer videos and promotional content",
          "Social media animations"
        ]
      },
      {
        title: "Digital Illustration",
        description: "Custom illustrations that add personality and visual interest to your digital presence.",
        items: [
          "Character design and mascots",
          "Icon systems and infographics",
          "Editorial illustrations",
          "Digital art and backgrounds"
        ]
      },
      {
        title: "Print & Packaging Design",
        description: "Physical brand touchpoints that create tangible connections with your audience.",
        items: [
          "Marketing materials and collateral",
          "Packaging design and product labels",
          "Environmental graphics and signage",
          "Event materials and displays"
        ]
      }
    ],
    technologies: [
      "Adobe Creative Suite", "Figma", "Sketch", "InVision", "After Effects", 
      "Cinema 4D", "Blender", "Principle", "Framer", "Webflow"
    ],
    faqs: [
      {
        question: "How long does a typical design project take?",
        answer: "Timeline varies based on project scope, but typical brand identity projects take 4-6 weeks, website design 6-8 weeks, and animation projects 3-5 weeks from concept to delivery."
      },
      {
        question: "Do you provide source files after project completion?",
        answer: "Yes, we provide all source files and assets upon project completion, giving you full ownership of your design materials."
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely. We're experienced in working within established brand systems while bringing fresh creativity to new applications."
      },
      {
        question: "How do you handle revisions to designs?",
        answer: "Our process includes multiple revision rounds. We collaborate closely with you to refine designs until they perfectly align with your vision and objectives."
      },
      {
        question: "Do you offer design maintenance or ongoing support?",
        answer: "Yes, we offer retainer packages for ongoing design support, ensuring your brand evolves and stays consistent across new materials and platforms."
      }
    ],
    prevService: null,
    nextService: {
      title: "Web Development",
      slug: "web-development"
    }
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    category: "Development Services",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    metaDescription: "Professional web development services including responsive design, e-commerce solutions, CMS integration, and performance optimization.",
    keywords: ["Web Development", "Responsive Design", "E-commerce", "CMS", "React", "JavaScript", "Frontend Development"],
    overview: "Our web development services focus on creating high-performance, user-friendly websites that provide exceptional experiences across all devices. We leverage the latest technologies and best practices to build scalable, secure, and maintainable web solutions that help you achieve your business goals.",
    benefits: [
      "Custom solutions tailored to your specific business needs",
      "Responsive design that works flawlessly across all devices",
      "Performance optimization for fast loading speeds",
      "SEO-friendly architecture that improves visibility",
      "Secure, reliable codebase with ongoing maintenance options"
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "We gather detailed requirements and technical specifications to understand your project goals."
      },
      {
        title: "Architecture Planning",
        description: "We design the technical architecture and select the most appropriate technologies for your project."
      },
      {
        title: "Development & Iteration",
        description: "Our development team builds your solution with regular iterations and progress updates."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing across devices and browsers ensures your website functions perfectly."
      },
      {
        title: "Deployment & Support",
        description: "We handle deployment and provide comprehensive documentation and support."
      }
    ],
    features: [
      {
        title: "Custom Website Development",
        description: "Bespoke websites built from the ground up to meet your specific requirements.",
        items: [
          "Responsive, mobile-first design",
          "Custom functionality and features",
          "Performance-optimized code",
          "Cross-browser compatibility"
        ]
      },
      {
        title: "E-commerce Development",
        description: "Online stores that provide seamless shopping experiences and drive conversions.",
        items: [
          "Custom product catalogs and filtering",
          "Secure payment gateway integration",
          "Inventory management systems",
          "Order processing and fulfillment workflows"
        ]
      },
      {
        title: "Content Management Systems",
        description: "Easy-to-use CMS solutions that give you control over your website content.",
        items: [
          "Custom CMS development",
          "WordPress, Drupal, and Shopify expertise",
          "User-friendly admin interfaces",
          "Content workflows and permissions"
        ]
      },
      {
        title: "Web Application Development",
        description: "Interactive web applications that solve complex business challenges.",
        items: [
          "Single Page Applications (SPAs)",
          "Progressive Web Apps (PWAs)",
          "Complex user interfaces",
          "Real-time data processing"
        ]
      },
      {
        title: "Performance Optimization",
        description: "Technical improvements that make your website faster and more efficient.",
        items: [
          "Page speed optimization",
          "Asset optimization and compression",
          "Caching strategies",
          "Core Web Vitals improvement"
        ]
      }
    ],
    technologies: [
      "HTML5/CSS3", "JavaScript/TypeScript", "React", "Next.js", "Node.js", 
      "Express", "GraphQL", "MongoDB", "MySQL", "WordPress", "TailwindCSS"
    ],
    faqs: [
      {
        question: "How long does it take to develop a website?",
        answer: "Development timelines vary based on complexity, but typical brochure sites take 4-8 weeks, while more complex e-commerce or web applications can take 8-16 weeks or more."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. We follow a mobile-first approach, ensuring your website looks and functions perfectly on all devices, from smartphones to desktop computers."
      },
      {
        question: "Do you provide website hosting and maintenance?",
        answer: "Yes, we offer hosting solutions and ongoing maintenance packages to keep your website secure, updated, and performing optimally."
      },
      {
        question: "Can you work with our design team?",
        answer: "Yes, we're happy to collaborate with your existing design team to implement their designs or provide development support for your projects."
      },
      {
        question: "How do you handle website security?",
        answer: "Security is paramount in our development process. We implement best practices for secure coding, regular updates, encryption, and protection against common vulnerabilities."
      }
    ],
    prevService: {
      title: "Design & Animation",
      slug: "design"
    },
    nextService: {
      title: "App Development",
      slug: "app-development"
    }
  },
  {
    id: 3,
    title: "App Development",
    slug: "app-development",
    category: "Development Services",
    description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
    metaDescription: "Professional mobile app development services for iOS and Android, including native and cross-platform solutions using React Native and Flutter.",
    keywords: ["Mobile App Development", "iOS Development", "Android Development", "React Native", "Flutter", "Cross-platform", "App Design"],
    overview: "Our app development services focus on creating intuitive, high-performing mobile applications that meet your business objectives and delight your users. We specialize in both native and cross-platform development, delivering solutions that work seamlessly across iOS and Android devices while maintaining the quality and performance users expect.",
    benefits: [
      "Tailored solutions aligned with your specific business requirements",
      "Intuitive, user-friendly interfaces designed for optimal engagement",
      "Robust performance optimized for various devices and screen sizes",
      "Scalable architecture that supports future growth and updates",
      "Continuous maintenance and support to ensure long-term success"
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements, define features, and create a comprehensive roadmap for your application."
      },
      {
        title: "UX/UI Design",
        description: "Our designers create wireframes and high-fidelity prototypes focused on user experience and brand consistency."
      },
      {
        title: "Development",
        description: "Our development team builds your application using agile methodologies with regular sprint reviews and updates."
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing across devices and operating systems ensures your app performs flawlessly."
      },
      {
        title: "Deployment & Launch",
        description: "We handle app store submissions and support you through the launch process and beyond."
      }
    ],
    features: [
      {
        title: "Native App Development",
        description: "Platform-specific applications built for optimal performance and user experience.",
        items: [
          "iOS development (Swift, Objective-C)",
          "Android development (Kotlin, Java)",
          "Hardware integration with device features",
          "Platform-specific design patterns"
        ]
      },
      {
        title: "Cross-Platform Development",
        description: "Single codebase solutions that work across multiple platforms while maintaining quality.",
        items: [
          "React Native development",
          "Flutter development",
          "Code reusability and efficiency",
          "Native-like performance and appearance"
        ]
      },
      {
        title: "App UI/UX Design",
        description: "Intuitive, engaging interfaces designed specifically for mobile contexts and interactions.",
        items: [
          "Platform-specific design guidelines",
          "Interactive prototyping",
          "Micro-interactions and animations",
          "Accessibility considerations"
        ]
      },
      {
        title: "Backend Integration",
        description: "Robust server-side solutions that power your mobile applications.",
        items: [
          "API development and integration",
          "Database design and optimization",
          "Authentication and security",
          "Scalable cloud hosting"
        ]
      },
      {
        title: "App Maintenance & Updates",
        description: "Ongoing support to keep your application running smoothly and up-to-date.",
        items: [
          "Bug fixes and performance improvements",
          "OS compatibility updates",
          "Feature enhancements",
          "Analytics and user feedback implementation"
        ]
      }
    ],
    technologies: [
      "Swift", "Kotlin", "Java", "Objective-C", "React Native", 
      "Flutter", "Firebase", "AWS", "Node.js", "MongoDB", "GraphQL"
    ],
    faqs: [
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Development timelines vary based on complexity, but typical mobile apps take 3-6 months from concept to launch, with more complex applications potentially taking longer."
      },
      {
        question: "Should I build a native app or a cross-platform app?",
        answer: "This depends on your specific requirements. Native apps offer the best performance and access to platform features, while cross-platform solutions reduce development time and cost for multiple platforms."
      },
      {
        question: "Will my app work on both iOS and Android?",
        answer: "We can develop for both platforms, either as separate native apps or as a cross-platform solution using technologies like React Native or Flutter."
      },
      {
        question: "How do you handle app store submissions?",
        answer: "We manage the entire submission process for both Apple App Store and Google Play Store, ensuring your app meets all guidelines and requirements for approval."
      },
      {
        question: "Do you provide ongoing support after the app is launched?",
        answer: "Yes, we offer various maintenance and support packages to ensure your app stays up-to-date with OS changes, security patches, and feature enhancements."
      }
    ],
    prevService: {
      title: "Web Development",
      slug: "web-development"
    },
    nextService: {
      title: "Brand Strategy",
      slug: "brand-strategy"
    }
  },
  {
    id: 4,
    title: "Brand Strategy",
    slug: "brand-strategy",
    category: "Strategy Services",
    description: "Comprehensive brand strategies that position you for success in competitive markets.",
    metaDescription: "Strategic brand development services including market research, brand identity, positioning strategy, and comprehensive style guides.",
    keywords: ["Brand Strategy", "Brand Identity", "Market Research", "Positioning", "Competitive Analysis", "Style Guides", "Brand Messaging"],
    overview: "Our brand strategy services help businesses define and articulate their unique value proposition, creating a strong foundation for all marketing and communication efforts. We take a research-driven approach to develop comprehensive brand strategies that resonate with your target audience and differentiate you from competitors.",
    benefits: [
      "Clear brand positioning that differentiates you in the marketplace",
      "Consistent brand voice and messaging across all touchpoints",
      "Strong brand architecture that supports business growth",
      "Data-driven insights that inform strategic decision-making",
      "Comprehensive guidelines that ensure brand consistency"
    ],
    process: [
      {
        title: "Discovery & Research",
        description: "We conduct comprehensive research including market analysis, competitor research, and audience insights."
      },
      {
        title: "Strategy Development",
        description: "Based on research findings, we develop your core brand strategy, positioning, and messaging framework."
      },
      {
        title: "Brand Identity Creation",
        description: "We create the visual and verbal elements that express your brand's personality and values."
      },
      {
        title: "Implementation Planning",
        description: "We develop a roadmap for implementing your brand strategy across all touchpoints and channels."
      },
      {
        title: "Measurement & Refinement",
        description: "We establish metrics to measure brand performance and refine strategy based on results."
      }
    ],
    features: [
      {
        title: "Market & Audience Research",
        description: "In-depth analysis that provides the foundation for effective brand strategy.",
        items: [
          "Competitive landscape analysis",
          "Target audience research and segmentation",
          "Market trend identification",
          "Brand perception studies"
        ]
      },
      {
        title: "Brand Positioning & Messaging",
        description: "Clear articulation of what makes your brand unique and valuable to customers.",
        items: [
          "Brand positioning statement",
          "Value proposition development",
          "Messaging framework and hierarchy",
          "Tone of voice guidelines"
        ]
      },
      {
        title: "Brand Identity Development",
        description: "Visual and verbal elements that express your brand's personality and values.",
        items: [
          "Logo design and brand marks",
          "Color palette and typography",
          "Visual language and imagery style",
          "Brand voice and copywriting guidelines"
        ]
      },
      {
        title: "Brand Architecture",
        description: "Strategic framework for organizing multiple brands, products, or services.",
        items: [
          "Brand relationship mapping",
          "Sub-brand strategy",
          "Product naming systems",
          "Brand extension planning"
        ]
      },
      {
        title: "Brand Guidelines & Tools",
        description: "Comprehensive resources that ensure consistent brand implementation.",
        items: [
          "Brand style guides and manuals",
          "Digital asset management",
          "Template systems",
          "Brand training and workshops"
        ]
      }
    ],
    technologies: [
      "Market Research Tools", "Brand Tracking Software", "Social Listening Platforms", 
      "Design Systems", "Adobe Creative Suite", "DAM Solutions", "Analytics Tools"
    ],
    faqs: [
      {
        question: "How long does it take to develop a brand strategy?",
        answer: "A comprehensive brand strategy typically takes 8-12 weeks to develop, though timelines can vary based on project scope and complexity."
      },
      {
        question: "Is brand strategy only important for large companies?",
        answer: "No, brand strategy is crucial for businesses of all sizes. In fact, clear positioning and messaging can be especially valuable for startups and small businesses competing against larger, established competitors."
      },
      {
        question: "How do you measure the success of a brand strategy?",
        answer: "We establish key performance indicators aligned with your business goals, which may include metrics like brand awareness, perception shifts, customer acquisition costs, retention rates, and ultimately, revenue growth."
      },
      {
        question: "Should we rebrand completely or refresh our existing brand?",
        answer: "This depends on your specific situation. We'll evaluate your current brand equity, market position, and business goals to recommend the appropriate approach, which might range from a subtle evolution to a complete reimagining."
      },
      {
        question: "How often should we review and update our brand strategy?",
        answer: "While core brand elements should remain relatively stable, we recommend reviewing your brand strategy annually and making tactical adjustments as needed based on market changes, business evolution, and performance data."
      }
    ],
    prevService: {
      title: "App Development",
      slug: "app-development"
    },
    nextService: null
  }
];
