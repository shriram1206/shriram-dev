import type { Project, Experience, Skill } from '../types';

export const personalInfo = {
    name: 'Shriram M',
    title: 'AI Engineer',
    location: 'Tamil Nadu, India',
    phone: '+91 96008 35006',
    email: 'shriram.coder@gmail.com',
    linkedin: 'https://linkedin.com/in/shriram-m-sde',
    github: 'https://github.com/shriram1206',
    tagline: 'Architecting production RAG pipelines, cognitive search engines, and intelligent multi-agent workflows.',
    description: "I am a Computer Science graduate specializing in applied AI and agentic systems. I have hands-on experience implementing production-grade RAG, custom metaprompting engines, and orchestrating LLM tool-calling integrations using Python, Spring AI, and vector databases.",
    techStack: ['Python', 'Spring AI', 'LangChain', 'Llama-3', 'pgvector', 'ChromaDB', 'Java', 'Spring Boot'],
    graduation: 'B.E. Computer Science',
    cgpa: '77%',
    resumeUrl: '/Shriram M - AI Engineer.pdf',
};

export const credibilityCards = [
    {
        id: 'prompt-forge-shipped',
        title: 'Prompt Forge Shipped',
        description: 'Built and shipped a live metaprompting SaaS using Groq & Llama-3',
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
        description: 'Hands-on experience building cognitive search integrations',
        icon: 'cpu',
    },
    {
        id: 'open-to-roles',
        title: 'Open to Full-Time Roles',
        description: 'AI Engineering, Applied AI, and LLM Developer positions',
        icon: 'target',
    },
];

export const heroChips = [
    'Computer Science Graduate',
    'Prompt Forge SaaS Shipped',
    'RAG & Agentic Workflows',
    'Open to AI Engineering Roles',
];

export const projects: Project[] = [
    {
        id: 'axiom-multi-agent-rag',
        title: 'Axiom — Multi-Agent RAG Boardroom',
        description: 'A production-grade multi-agent RAG dashboard that simulates a corporate C-suite with department-scoped vector security policies and boardroom memory.',
        longDescription: 'Simulates a real corporate executive structure with three distinct AI agents (Maya for Marketing, Vibhishana for HR, and Kubera for Finance). Each executive is isolated at the ChromaDB vector retrieval layer using metadata filtering and reasons collectively across a shared memory state to negotiate cross-department proposals.',
        techStack: ['Python', 'FastAPI', 'React', 'ChromaDB', 'Groq API', 'Llama 3.1', 'asyncio', 'Tailwind CSS'],
        achievements: [
            'Architected department-scoped database-level isolation to prevent cross-agent document leakage.',
            'Implemented concurrent executive agent reasoning using Python\'s asyncio.gather for sub-second orchestration.',
            'Designed a boardroom shared-memory architecture where agents react and push back dynamically to each other\'s approvals.',
            'Built an interactive dashboard to simulate corporate boardroom decisions, policies, and constraints.'
        ],
        technicalDetails: [
            'ChromaDB Metadata Filtering',
            'Shared Conversation Memory',
            'Concurrent Async Agents',
            'Executive Policy Enforcer'
        ],
        metrics: [
            { label: 'Type', value: 'Multi-Agent RAG' },
            { label: 'LLM Model', value: 'Llama 3.1 8B' },
            { label: 'Database', value: 'ChromaDB (Isolated)' },
            { label: 'Orchestration', value: 'asyncio.gather' }
        ],
        links: {
            github: 'https://github.com/shriram1206/axiom-multi-agent-rag'
        },
        image: '/projects/personal-ai.png',
        date: '2026',
        highlight: 'Strict vector-level metadata security isolation coupled with collective multi-agent boardroom reasoning.'
    },
    {
        id: 'prompt-forge',
        title: 'Prompt Forge — AI Synthesis Engine',
        description: 'A full-stack SaaS application that acts as a "compiler for AI" by synthesizing vague ideas into highly structured, FAANG-grade LLM prompts.',
        longDescription: 'Architected a custom Meta-Framework Synthesis (MFS) engine that automatically applies over 78 cognitive frameworks (like Tree-of-Thought, SOLVE, and RACE) based on task complexity. Features a zero-dependency frontend and a highly secure FastAPI backend with SaaS tiering logic.',
        techStack: ['Python', 'FastAPI', 'Vanilla JS', 'Supabase', 'PostgreSQL', 'Groq API', 'Llama 3', 'Render'],
        achievements: [
            'Designed a dynamic metaprompting engine routed through Groq\'s Llama 3 70B with sub-200ms latency.',
            'Enforced strict behavioral constraints and anti-hallucination gates to guarantee structured XML outputs.',
            'Integrated Supabase with decoupled JWT keys and strict Row-Level Security (RLS) policies to prevent API abuse.',
            'Engineered complex SaaS tiering and rate-limiting logic to dynamically gate premium frameworks.'
        ],
        technicalDetails: [
            'Meta-Framework Synthesis Engine',
            'Sub-200ms Groq Integration',
            'Supabase RLS & Auth',
            'Dynamic SaaS Tiering'
        ],
        metrics: [
            { label: 'Latency', value: '<200ms' },
            { label: 'LLM Model', value: 'Llama 3 70B' },
            { label: 'Frameworks', value: '78+' },
            { label: 'Status', value: 'Live SaaS' },
        ],
        links: {
            live: 'https://prompt-forge-qd29.onrender.com'
        },
        image: '/projects/prompt-forge.png',
        date: '2026',
        highlight: 'Full-stack AI SaaS featuring a sub-200ms metaprompting engine and strict database security.'
    },
    {
        id: 'llm-medical-adjudicator',
        title: 'Autonomous Medical Claim Adjudicator',
        description: 'An intelligent RPA pipeline bridging proprietary web portals with Generative AI to automate medical claim adjudication.',
        longDescription: 'Designed and engineered a resilient robotic process automation pipeline integrating Google\'s Gemini 2.5 Flash to automatically process unstructured Explanation of Benefits (EOB) data and adjudicate medical claims without human intervention.',
        techStack: ['UiPath', 'Gemini 2.5 API', 'JSON (Newtonsoft)', 'UI Automation', 'HTML5/CSS3'],
        achievements: [
            'Integrated Gemini 2.5 Flash natively into UiPath to rapidly parse unstructured EOB data.',
            'Engineered a flawless web traversal loop using simulated hardware events and fuzzy selectors.',
            'Developed string sanitization and JSON algorithms to accurately parse multi-dimensional LLM responses.',
            'Hardened automation against API limits and UI changes to achieve a 100% completion rate.'
        ],
        technicalDetails: [
            'Agentic AI Integration',
            'Dynamic UI Automation',
            'Complex Data Serialization',
            'Enterprise Fallback Resilience'
        ],
        metrics: [
            { label: 'AI Model', value: 'Gemini 2.5' },
            { label: 'Automation', value: 'UiPath' },
            { label: 'Completion', value: '100% Rate' },
            { label: 'Status', value: 'Production' },
        ],
        links: {
            github: '#',
            live: '#'
        },
        image: '/projects/medical-agent.png',
        date: '2026',
        highlight: 'Native LLM integration with strict RPA loop fallback capabilities for enterprise automation.'
    },
    {
        id: 'second-brain',
        title: 'Second Brain — RAG Chatbot',
        description: 'A production-ready personal knowledge base chatbot powered by Llama-3 and RAG.',
        longDescription: 'Engineered a robust AI assistant that ingests PDFs, web articles, and YouTube transcripts into a local ChromaDB vector store. Optimized for extreme memory efficiency (<512MB RAM) using FastAPI, LangChain, and HuggingFace Inference API with Maximal Marginal Relevance (MMR) retrieval.',
        techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Llama-3', 'HuggingFace'],
        achievements: [
            'Built a lightweight RAG pipeline with multi-modal data ingestion supporting PDFs, web articles, and YouTube transcripts.',
            'Optimized the architecture to run efficiently on 512MB cloud free-tiers using API-based embeddings.',
            'Implemented Maximal Marginal Relevance (MMR) retrieval and sliding window memory.',
            'Bypassed YouTube bot-detection via custom browser-header sessions.'
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
        highlight: 'Highly optimized RAG architecture fitting within strict 512MB RAM constraints.'
    },
    {
        id: 'quro-db',
        title: 'Quro — AI Database Assistant',
        description: 'An intelligent Spring Boot application that translates natural language questions into executable SQL queries using GPT-4o.',
        longDescription: 'Quro acts as an AI-powered database assistant, allowing users to interact with their MySQL databases using plain English. Built with Spring Boot and powered by OpenAI\'s GPT-4o model, it bridges the gap between non-technical users and database management.',
        techStack: ['Java 17', 'Spring Boot 3.5+', 'MySQL', 'Spring Data JPA', 'OpenAI API (GPT-4o)', 'Maven'],
        achievements: [
            'Architected a RESTful backend that converts natural language queries into accurate SQL.',
            'Integrated OpenAI\'s GPT-4o model for intelligent query translation.',
            'Implemented automatic database initialization with schema provisioning on startup.',
            'Built a clean, responsive web interface for querying and viewing results interactively.'
        ],
        technicalDetails: [
            'Spring Boot API & Web Interface',
            'GPT-4o Natural Language Processing',
            'Secure Credential Management',
            'Automatic Schema Provisioning'
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
        highlight: 'Natural language to SQL translation using LLM-powered backend with Spring Boot.'
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
            'Contributed to documentation and delivered an end-to-end AI backend module in an Agile sprint workflow with full ownership.'
        ],
        type: 'internship',
    },
    {
        id: 'ybi-foundation',
        position: 'AI/ML Intern',
        company: 'YBI Foundation (Remote)',
        duration: 'Jan 2025 – Feb 2025',
        achievements: [
            'Built and evaluated three ML models (Random Forest, SVM, and Neural Network), achieving up to 89% validation accuracy on 10,000+ data points.',
            'Implemented automated data cleaning and feature engineering pipelines using Pandas and Scikit-Learn, reducing manual effort by 70%.',
            'Documented comprehensive experiments, metrics, and reproducible pipelines with an emphasis on validation methodology.'
        ],
        type: 'internship',
    },
    {
        id: 'edunet-foundation',
        position: 'Technology Development Intern',
        company: 'EduNet Foundation',
        duration: 'Jul 2025',
        achievements: [
            'Contributed bug fixes and features across all SDLC phases, improving system stability by approximately 25%.',
            'Participated in Agile ceremonies and maintained technical documentation for development workflows.'
        ],
        type: 'internship',
    },
];

export const skills: Skill[] = [
    {
        category: 'AI & Agent Systems',
        skills: [
            { name: 'Spring AI & Python' },
            { name: 'RAG Architectures' },
            { name: 'LangChain & LlamaIndex' },
            { name: 'Prompt Engineering' },
            { name: 'Agentic Workflows' },
            { name: 'Vector DBs (Chroma/pgvector)' },
        ],
    },
    {
        category: 'AI Infrastructure',
        skills: [
            { name: 'Java & Spring Boot' },
            { name: 'FastAPI & Node.js' },
            { name: 'REST & GraphQL APIs' },
            { name: 'Vector Search & SQL' },
            { name: 'Microservices' },
            { name: 'JSON-RPC / SSE' },
        ],
    },
    {
        category: 'Frontend Integration',
        skills: [
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        category: 'Tools & DevOps',
        skills: [
            { name: 'Git & GitHub' },
            { name: 'Docker' },
            { name: 'Supabase & Firebase' },
            { name: 'Vercel & Render' },
            { name: 'Maven' },
            { name: 'Postman' },
        ],
    },
];

export const currentlyBuilding = [
    {
        id: 'prompt-forge-agents',
        title: 'Multi-Agent Simulations in Prompt Forge',
        description: 'Adding a sandbox to evaluate generated prompts against multiple LLM agent personas in parallel.',
    },
    {
        id: 'agentic-workflows',
        title: 'Exploring Cognitive Frameworks & Agentic Workflows',
        description: 'Building practical systems around LLM orchestration, tool-calling, and custom reflection patterns.',
    },
    {
        id: 'spring-ai-tooling',
        title: 'Applied RAG Pipelines & Vector Database Optimizations',
        description: 'Testing Maximal Marginal Relevance (MMR) and hybrid keyword-vector search configurations.',
    },
];
