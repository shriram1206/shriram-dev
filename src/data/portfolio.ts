import type { Project, Experience, Skill } from '../types';

export const personalInfo = {
    name: 'Shriram M',
    title: 'Full Stack & AI Engineer',
    location: 'Tamil Nadu, India',
    phone: '+91 96008 35006',
    email: 'shriram.coder@gmail.com',
    linkedin: 'https://linkedin.com/in/shriram-m-sde',
    github: 'https://github.com/shriram1206',
    tagline: 'Architecting production SaaS platforms, RAG pipelines, and AI agents using Java, Spring Boot, React/Next.js, and LLM tooling.',
    description: "Computer Science graduate with end-to-end production experience. I build scalable backends, full-stack SaaS applications like FeedbackWall, and intelligent AI features using GPT-4o, Spring AI, and pgvector.",
    techStack: ['Java', 'Spring Boot', 'Spring AI', 'React', 'Next.js', 'Python', 'Docker', 'pgvector'],
    graduation: 'B.E. Computer Science',
    cgpa: '77%',
    resumeUrl: '/Shriram M - full stack developer.pdf',
};

export const credibilityCards = [
    {
        id: 'feedbackwall-shipped',
        title: 'FeedbackWall Shipped',
        description: 'Built and shipped a live SaaS product with real beta users',
        icon: 'rocket',
    },
    {
        id: 'servimos-intern',
        title: 'Servimos Technologies Intern',
        description: 'Spring AI, RAG pipelines, and MCP workflows in production',
        icon: 'briefcase',
    },
    {
        id: 'spring-ai-rag',
        title: 'Spring AI + RAG Systems',
        description: 'Hands-on experience building AI backend integrations',
        icon: 'cpu',
    },
    {
        id: 'open-to-roles',
        title: 'Open to Full-Time Roles',
        description: 'Backend, AI Backend, and Full Stack engineering positions',
        icon: 'target',
    },
];

export const heroChips = [
    'Computer Science Graduate',
    'FeedbackWall shipped',
    'Spring Boot + AI workflows',
    'Open to full-time roles',
];

export const projects: Project[] = [
    {
        id: 'feedbackwall',
        title: 'FeedbackWall',
        description: 'A SaaS product for collecting, organizing, and prioritizing user feedback and feature requests.',
        longDescription: 'Solo-founded and shipped a Canny alternative — a production-grade feedback management platform with multi-tenant architecture, real-time notifications, and embeddable feedback widgets. Built with Next.js and Supabase, focused on practical product workflow and clean MVP execution.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'Tailwind CSS'],
        achievements: [
            'Solo-founded and shipped a public SaaS feedback platform with feature voting and changelog',
            'Designed multi-tenant Supabase architecture with row-level security for data isolation',
            'Built embeddable widget for seamless third-party integration',
            'Deployed on Vercel with full CI/CD pipeline and real beta users onboarded',
        ],
        technicalDetails: [
            'Multi-tenant architecture with RLS',
            'Embeddable widget technology',
            'Full CI/CD pipeline',
            'Real-time notifications system',
        ],
        metrics: [
            { label: 'Status', value: 'Live Production' },
            { label: 'Architecture', value: 'Multi-tenant' },
            { label: 'Build', value: 'Solo-founded' },
            { label: 'Deploy', value: 'Vercel CI/CD' },
        ],
        links: {
            live: 'https://feedbackwall-mu.vercel.app/',
            github: '#',
        },
        image: '/projects/feedbackwall.png',
        date: '2026',
        highlight: 'Authentication, structured feedback pipeline, prioritization workflow, and SaaS-style UX.',
    },
    {
        id: 'quro-db',
        title: 'Quro — AI Database Assistant',
        description: 'An intelligent Spring Boot application that translates natural language questions into executable SQL queries using GPT-4o.',
        longDescription: 'Quro acts as an AI-powered database assistant, allowing users to interact with their MySQL databases using plain English. Built with Spring Boot and powered by OpenAI\'s GPT-4o model, it bridges the gap between non-technical users and database management.',
        techStack: ['Java 17', 'Spring Boot 3.5+', 'MySQL', 'Spring Data JPA', 'OpenAI API (GPT-4o)', 'Maven'],
        achievements: [
            'Architected a RESTful backend converting natural language into accurate SQL queries',
            'Integrated OpenAI GPT-4o model for intelligent query translation',
            'Implemented automatic database initialization with schema provisioning on startup',
            'Built a clean, responsive web interface for querying and viewing results interactively',
        ],
        technicalDetails: [
            'Spring Boot API & Web Interface',
            'GPT-4o natural language processing',
            'Secure credential management',
            'Auto schema provisioning',
        ],
        metrics: [
            { label: 'Backend', value: 'Spring Boot' },
            { label: 'AI Model', value: 'GPT-4o' },
            { label: 'Database', value: 'MySQL' },
            { label: 'Status', value: 'Completed' },
        ],
        links: {
            github: 'https://github.com/shriram1206/quro-db',
        },
        image: '/projects/ai-agent.png',
        date: '2026',
        highlight: 'Natural language to SQL translation using LLM-powered backend with Spring Boot.',
    },
    {
        id: 'multigate-eduflow',
        title: 'Multigate EduFlow',
        description: 'Automated leave management system serving 500+ users with 80% reduction in approval turnaround time.',
        longDescription: 'A backend-focused leave request management system with role-based access control, JWT authentication, and real-time notifications. Reduced approval turnaround from 5 days to 24 hours.',
        techStack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Authentication'],
        achievements: [
            'Architected secure 3-tier workflow with role-based access control and JWT authentication',
            'Optimized MySQL queries to support 500+ concurrent users with stable performance',
            'Built real-time notification system for approval workflow updates',
            'Reduced approval turnaround time by 80% — from 5 days to 24 hours',
        ],
        technicalDetails: [
            'Backend MERN architecture',
            'MySQL with optimized queries',
            'JWT-based authentication',
            'Role-based authorization',
        ],
        metrics: [
            { label: 'Active Users', value: '500+' },
            { label: 'Faster Approvals', value: '80%' },
            { label: 'Turnaround', value: '24hrs' },
            { label: 'Satisfaction', value: '95%' },
        ],
        links: {
            github: '#',
        },
        image: '/projects/eduflow.png',
        date: 'September 2024',
        highlight: 'Role-based workflow automation with real-time notifications serving 500+ users.',
    },
    {
        id: 'second-brain',
        title: 'Second Brain — RAG Chatbot',
        description: 'A production-ready personal knowledge base chatbot powered by Llama-3 and RAG.',
        longDescription: 'Engineered a robust AI assistant that ingests PDFs, web articles, and YouTube transcripts into a local ChromaDB vector store. Optimized for extreme memory efficiency (<512MB RAM) using FastAPI, LangChain, and HuggingFace Inference API with Maximal Marginal Relevance (MMR) retrieval.',
        techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Llama-3', 'HuggingFace'],
        achievements: [
            'Built a lightweight RAG pipeline with multi-modal data ingestion (PDFs, Web, YouTube transcripts)',
            'Optimized architecture to run on 512MB cloud free-tiers using API-based embeddings',
            'Implemented Maximal Marginal Relevance (MMR) retrieval and sliding window memory',
            'Bypassed YouTube bot-detection via custom browser-header sessions'
        ],
        technicalDetails: [
            'FastAPI Backend',
            'ChromaDB Vector Store',
            'LangChain Orchestration',
            'Memory Optimization'
        ],
        metrics: [
            { label: 'Type', value: 'AI Agent' },
            { label: 'Memory', value: '<512MB RAM' },
            { label: 'LLM', value: 'Llama-3' },
            { label: 'Status', value: 'Live' },
        ],
        links: {
            github: 'https://github.com/shriram1206/second-brain',
        },
        image: '/projects/second-brain.png',
        date: '2026',
        highlight: 'Highly optimized RAG architecture fitting within strict 512MB RAM constraints.',
    },
    {
        id: 'ibaco-website',
        title: 'Ibaco — Brand Website',
        description: 'A modern, responsive landing page and brand website built for an ice cream shop.',
        longDescription: 'Designed and developed a clean, attractive digital presence for an ice cream shop inspired by the Ibaco brand. Features responsive design, menu highlights, and seamless navigation.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        achievements: [
            'Developed a fully responsive frontend layout across mobile, tablet, and desktop',
            'Designed a modern UI focusing on product imagery and brand identity',
            'Deployed on Vercel for fast global performance'
        ],
        technicalDetails: [
            'Responsive Design',
            'Frontend Architecture',
            'Vercel Deployment',
            'UI/UX Design'
        ],
        metrics: [
            { label: 'Type', value: 'Freelance' },
            { label: 'Platform', value: 'Web' },
            { label: 'Status', value: 'Live' },
            { label: 'Deploy', value: 'Vercel' },
        ],
        links: {
            live: 'https://ibaco-gules.vercel.app/',
            github: 'https://github.com/shriram1206/ibaco',
        },
        image: '/projects/ibaco.png',
        date: '2026',
        highlight: 'Freelance frontend development focusing on brand identity and responsive design.',
    }
];

export const experiences: Experience[] = [
    {
        id: 'servimos-technologies',
        position: 'Software Development Engineer Intern',
        company: 'Servimos Technologies Pvt Ltd / WeServeTech LLC',
        duration: 'Feb 2026 – Mar 2026',
        achievements: [
            'Implemented MCP-style server functionality using SSE transport, JSON-RPC, and tool-calling patterns for automated reporting pipelines.',
            'Integrated Spring AI into Java-based applications to connect backend services with LLM-powered workflows for context-aware report generation.',
            'Built and tested RAG pipeline components using pgvector + PostgreSQL for semantic document retrieval and automation use cases.',
            'Contributed to documentation and delivered end-to-end AI backend module in Agile sprint workflow with full ownership.',
        ],
        type: 'internship',
    },
    {
        id: 'ybi-foundation',
        position: 'AI/ML Intern',
        company: 'YBI Foundation (Remote)',
        duration: 'Jan 2025 – Feb 2025',
        achievements: [
            'Built and evaluated three ML models (Random Forest, SVM, neural network) achieving up to 89% validation accuracy on 10,000+ data points.',
            'Implemented automated data cleaning and feature engineering pipelines using pandas and scikit-learn, reducing manual effort by 70%.',
            'Documented comprehensive experiments, metrics, and reproducible pipelines with emphasis on validation methodology.',
        ],
        type: 'internship',
    },
    {
        id: 'edunet-foundation',
        position: 'Technology Development Intern',
        company: 'EduNet Foundation',
        duration: 'Jul 2025',
        achievements: [
            'Contributed bug fixes and features across SDLC phases, improving system stability by approximately 25%.',
            'Participated in Agile ceremonies and maintained technical documentation for development workflows.',
        ],
        type: 'internship',
    },
];

export const skills: Skill[] = [
    {
        category: 'Backend',
        skills: [
            { name: 'Java' },
            { name: 'Spring Boot' },
            { name: 'REST APIs' },
            { name: 'SQL' },
            { name: 'Microservices' },
            { name: 'Node.js' },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'HTML / CSS' },
        ],
    },
    {
        category: 'AI / LLM',
        skills: [
            { name: 'Spring AI' },
            { name: 'Python' },
            { name: 'RAG' },
            { name: 'Prompt Engineering' },
            { name: 'Agent Workflows' },
        ],
    },
    {
        category: 'Tools / Infra',
        skills: [
            { name: 'Git' },
            { name: 'Docker' },
            { name: 'Postman' },
            { name: 'Supabase' },
            { name: 'Vercel' },
            { name: 'Maven' },
        ],
    },
];

export const currentlyBuilding = [
    {
        id: 'feedbackwall-improvements',
        title: 'Improving FeedbackWall as a product',
        description: 'Iterating on features, UX, and growth for the live SaaS platform.',
    },
    {
        id: 'agentic-workflows',
        title: 'Exploring backend AI workflows and agentic automation',
        description: 'Building practical systems around LLM orchestration and tool-calling patterns.',
    },
    {
        id: 'spring-ai-tooling',
        title: 'Building systems around Spring AI, RAG, and developer tooling',
        description: 'Creating reusable backend components for AI-powered applications.',
    },
];
