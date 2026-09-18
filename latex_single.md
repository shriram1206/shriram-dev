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
\usepackage{needspace}
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
\addtolength{\topmargin}{-.7in}
\addtolength{\textheight}{1.4in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-7pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-7pt}]

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
    \needspace{4\baselineskip}
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
    \textbf{\Huge \scshape Shriram M} \\ \vspace{2pt}
    \small Namakkal, India $|$ +91 96008 35006 $|$ \href{mailto:shriram.coder@gmail.com}{\underline{shriram.coder@gmail.com}} \\ \vspace{2pt}
    \href{https://www.linkedin.com/in/shriram-m-sde}{\underline{linkedin.com/in/shriram-m-sde}} $|$
    \href{https://github.com/shriram1206}{\underline{github.com/shriram1206}} $|$
    \href{https://shriram-codecanvas.vercel.app/}{\underline{Personal Portfolio}}
\end{center}

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Selvam College of Technology}{Namakkal, TN}
      {Bachelor of Engineering in Computer Science and Engineering $|$ \textbf{CGPA: 8.0/10.0}}{2022 -- May 2026}
\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {Software Development Engineer Intern}{Feb 2026 -- Mar 2026}
      {Servimos Technologies Pvt Ltd (WeServeTech LLC)}{Chennai, TN}
      \resumeItemListStart
        \resumeItem{\textbf{Automated weekly compliance reporting} by building an AI report generator in Python and FastAPI, cutting manual preparation time from approximately 4 hours to under 10 minutes per cycle.}
        \resumeItem{\textbf{Implemented RAG-based context injection} via pgvector + PostgreSQL for semantic document retrieval and applied MCP (SSE transport, JSON-RPC tool calling) to automate recurring reporting pipelines.}
        \resumeItem{\textbf{Delivered a production-ready AI backend} over 3 Agile sprints with end-to-end ownership from schema design through deployment, with code and architecture reviewed and approved by senior engineers.}
        \resumeItem{\textbf{Added per-endpoint latency and error-rate visibility} to the reporting service using structured logging and custom middleware metrics, enabling rapid incident debugging after go-live.}
      \resumeItemListEnd

    \resumeSubheading
      {AI/ML Intern}{Jan 2025 -- Feb 2025}
      {YBI Foundation}{Remote}
      \resumeItemListStart
        \resumeItem{\textbf{Built and evaluated three ML models} (Random Forest, SVM, and Neural Network), achieving up to 89\% validation accuracy on 10,000+ data points.}
        \resumeItem{\textbf{Implemented automated data cleaning and feature engineering pipelines} using Pandas and Scikit-Learn, reducing manual preprocessing effort by 70\%.}
        \resumeItem{\textbf{Documented comprehensive experiments, metrics, and reproducible pipelines} with an emphasis on validation methodology.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd
\vspace{-10pt}
%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart
% CHRONICLE:PROJECTS
    \resumeProjectHeading
      {\textbf{Prompt Forge} -- AI Meta-Framework Synthesis Engine $|$ \emph{Python, FastAPI, Supabase, Groq}}{2026 $|$ \href{https://prompt-forge-qd29.onrender.com/}{Live}}
      \resumeItemListStart
        \resumeItem{\textbf{Designed a full-stack SaaS compiler} that transforms vague user inputs into structured, tiered XML prompts by dynamically evaluating input complexity and applying a multi-stage cognitive framework pipeline.}
        \resumeItem{\textbf{Integrated Groq's Llama 3 API} via a Python/FastAPI backend, using strict metaprompting and Best-of-N gating to reduce hallucinations and improve output consistency.}
        \resumeItem{\textbf{Implemented API rate limiting and tier-based usage tracking} on Supabase using RLS, JWT auth, and a custom Debounce API to enforce cost controls without cross-tenant data leakage.}
      \resumeItemListEnd

    \resumeProjectHeading
      {\textbf{Axiom} -- Multi-Agent RAG Boardroom $|$ \emph{Python, FastAPI, Llama 3.1, ChromaDB, React}}{2026 $|$ \href{https://github.com/shriram1206/axiom-multi-agent-rag}{Source}}
      \resumeItemListStart
        \resumeItem{\textbf{Built a multi-agent RAG system} that simulates a corporate C-suite, utilizing asyncio.gather for concurrent, sub-second orchestration of 3 distinct LLM personas via the Groq API.}
        \resumeItem{\textbf{Implemented tenant isolation} using ChromaDB metadata filtering, ensuring department-scoped knowledge retrieval without data leakage.}
        \resumeItem{\textbf{Designed a shared-memory boardroom architecture} where agents dynamically evaluate, negotiate, and push back on cross-department proposals based on conflicting system prompts.}
      \resumeItemListEnd

    \resumeProjectHeading
      {\textbf{PharmaGraph Knowledge Engine} -- NL2Cypher Graph DB Tool $|$ \emph{Python, FastAPI, Neo4j, Groq (Llama-3)}}{2026 $|$ \href{https://github.com/shriram1206/pharmagraph-knowledge-engine}{Source}}
      \resumeItemListStart
        \resumeItem{\textbf{Integrated a Neo4j graph database} coupled with Llama-3 (Groq API) to execute zero-shot NL2Cypher queries, dynamically resolving complex pharmacological entities with high precision.}
        \resumeItem{\textbf{Developed a Graph RAG pipeline} to map medical ontology queries into executable Cypher graph traversals, avoiding the multi-join overhead of equivalent relational queries.}
        \resumeItem{\textbf{Built a full-stack React/Vite dashboard} to natively visualize the executed analytical nodes in real-time, bridging plain language medical inquiries with robust data representations.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd

%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AI \& Agentic Systems}{: Python, LangChain, AI-Assisted Development, RAG, Prompt Engineering, Llama 3} \\
     \textbf{Backend \& APIs}{: FastAPI, Node.js, REST/JSON-RPC, SSE Transport} \\
     \textbf{Databases (Vector \& SQL)}{: ChromaDB, pgvector, PostgreSQL, Supabase, MySQL} \\
     \textbf{Frontend \& Cloud}{: React.js, Tailwind CSS, Docker, Vercel, Git}
    }}
 \end{itemize}

%-------------------------------------------
\end{document}
