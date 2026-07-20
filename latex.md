%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generated pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{document}

%----------HEADING----------
\begin{center}
    \textbf{\Huge \scshape Shriram M} \\ \vspace{1pt}
    \small Namakkal, India $|$ \href{mailto:shriram.coder@gmail.com}{\underline{shriram.coder@gmail.com}} $|$
    \href{https://www.linkedin.com/in/shriram-m-sde}{\underline{linkedin.com/in/shriram-m-sde}} $|$
    \href{https://github.com/shriram1206}{\underline{github.com/shriram1206}} $|$
    \href{https://shriram-codecanvas.vercel.app/}{\underline{Personal Portfolio}}
\end{center}

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Selvam College of Technology}{Namakkal, TN}
      {Bachelor of Engineering in Computer Science and Engineering}{2022 -- May 2026}
\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {Software Development Engineer Intern}{Feb 2026 -- Mar 2026}
      {Servimos Technologies Pvt Ltd (WeServeTech LLC)}{Chennai, TN}
      \resumeItemListStart
        \resumeItem{\textbf{Automated weekly compliance reporting} by building an AI report generator in Java 17 and Spring Boot 3.x, cutting manual preparation time from $\sim$4 hours to $<$10 minutes per cycle.}
        \resumeItem{\textbf{Implemented RAG-based context injection} via pgvector + PostgreSQL for semantic document retrieval and applied MCP (SSE transport, JSON-RPC tool calling) to automate recurring reporting pipelines.}
        \resumeItem{\textbf{Delivered a production-ready AI backend} over 3 Agile sprints with end-to-end ownership from schema design through deployment, with code and architecture reviewed and approved by senior engineers.}
        \resumeItem{\textbf{Established production-grade observability} for the reporting service using structured logging and Spring Boot Actuator metrics, enabling rapid incident debugging and SLA monitoring after go-live.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart

    \resumeProjectHeading
      {\textbf{Axiom} --- Multi-Agent RAG Boardroom $|$ \emph{Python, FastAPI, Llama 3.1, ChromaDB, React}}{2026 $|$ \href{https://github.com/shriram1206/axiom-multi-agent-rag}{Source}}
      \resumeItemListStart
        \resumeItem{\textbf{Architected a multi-agent RAG system} that simulates a corporate C-suite, utilizing \texttt{asyncio.gather} for concurrent, sub-second orchestration of 3 distinct LLM personas via the Groq API.}
        \resumeItem{\textbf{Engineered strict database-level security isolation} using ChromaDB metadata filtering, ensuring department-scoped knowledge retrieval and zero cross-agent data leakage.}
        \resumeItem{\textbf{Designed a shared-memory boardroom architecture} where agents dynamically evaluate, negotiate, and push back on cross-department proposals based on conflicting system prompts.}
      \resumeItemListEnd

    \resumeProjectHeading
      {\textbf{Prompt Forge} --- AI Meta-Framework Synthesis Engine $|$ \emph{Python, FastAPI, Supabase, Groq}}{2026 $|$ \href{https://prompt-forge-qd29.onrender.com/}{Live}}
      \resumeItemListStart
        \resumeItem{\textbf{Designed a full-stack SaaS compiler} that transforms vague user inputs into structured, FAANG-grade XML prompts by dynamically evaluating complexity and applying 78+ advanced cognitive frameworks.}
        \resumeItem{\textbf{Integrated Groq's Llama 3 API} via a Python/FastAPI backend, using strict metaprompting and Best-of-N gating to reduce hallucinations while maintaining sub-200ms prompt compilation latency.}
        \resumeItem{\textbf{Hardened API security} by enforcing strict Pydantic payload validation to prevent LLM Denial-of-Wallet attacks, implementing a Debounce API to block disposable emails, and tightening CORS controls.}
        \resumeItem{\textbf{Implemented tier-based usage tracking} on Supabase with RLS and JWT auth to enforce Base vs. ML-Elite rate limits without cross-tenant data leakage.}
      \resumeItemListEnd

    \resumeProjectHeading
      {\textbf{Quro} --- AI-Powered Database Assistant $|$ \emph{Java 17, Spring Boot 3.2, PostgreSQL, Docker, Kubernetes}}{2026 $|$ \href{https://quro-db-production.up.railway.app/}{Live}}
      \resumeItemListStart
       \resumeItem{\textbf{Built a natural-language-to-SQL engine} using Spring Boot 3.x, the GPT-4o API, PostgreSQL, and Redis caching, enabling non-technical stakeholders to query databases in plain English instead of writing SQL, significantly cutting analytics turnaround time.}
       \resumeItem{\textbf{Improved query accuracy to 92\%+} on a test suite of 200+ patterns by iteratively tuning prompts, refining schema context, and adding guardrails around joins, filters, and aggregations.}
       \resumeItem{\textbf{Developed a read-only SQL validation layer} that parses and sanitizes all generated queries, preventing injection attacks, blocking unsafe operations, and enforcing SELECT-only execution on allowed tables.}
       \resumeItem{\textbf{Deployed the engine as a secure REST API} behind Docker/Kubernetes, with observability and audit logging for each natural-language request, generated query, and result set size.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd

%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AI \& Agentic Systems}{: Python, LangChain, Spring AI, RAG Architectures, Agent Orchestration (MCP, asyncio), Prompt Engineering, Llama 3} \\
     \textbf{Backend \& APIs}{: FastAPI, Java 17, Spring Boot 3.x, Node.js, REST/JSON-RPC, SSE Transport} \\
     \textbf{Databases (Vector \& SQL)}{: ChromaDB, pgvector, PostgreSQL, Supabase, MySQL} \\
     \textbf{Frontend \& Cloud}{: React.js, Next.js, Tailwind CSS, Docker, Kubernetes, Vercel, Git}
    }}
 \end{itemize}

%-------------------------------------------
\end{document}