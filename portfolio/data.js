// =============================================================
//  Portfolio content — single source of truth.
//  Edit here to update the site; no HTML changes needed.
// =============================================================

const ROLES = [
  "Software Engineer",
  "Distributed Systems Enthusiast",
  "Full-Stack Developer",
  "Data & HPC Engineer",
  "ML / NLP Tinkerer",
];

const SKILLS = [
  {
    group: "Languages",
    icon: "fa-solid fa-code",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C / C++", "SQL"],
  },
  {
    group: "Web & Full-Stack",
    icon: "fa-solid fa-window-maximize",
    items: ["React", "Angular", "Node.js", "REST APIs", "HTML5", "CSS3"],
  },
  {
    group: "Distributed & Streaming",
    icon: "fa-solid fa-network-wired",
    items: ["Kafka", "Kafka Streams", "Apache Spark", "Cassandra", "ElasticSearch", "Kibana"],
  },
  {
    group: "DevOps & Infra",
    icon: "fa-solid fa-server",
    items: ["Docker", "Kubernetes", "Linux / Bash", "Git", "CI/CD", "Apache NiFi"],
  },
  {
    group: "Databases",
    icon: "fa-solid fa-database",
    items: ["PostgreSQL", "MySQL", "Oracle DB", "Apache Parquet", "NoSQL (Cassandra)"],
  },
  {
    group: "ML / AI",
    icon: "fa-solid fa-brain",
    items: ["PyTorch", "HuggingFace", "PEFT (LoRA / Q-LoRA)", "scikit-learn", "NumPy", "NLP"],
  },
  {
    group: "HPC & Systems",
    icon: "fa-solid fa-microchip",
    items: ["OpenMP", "MPI", "HDF5", "Finite-difference methods", "Performance profiling"],
  },
  {
    group: "Security",
    icon: "fa-solid fa-shield-halved",
    items: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit", "Network security", "Cryptography"],
  },
];

// tag values drive the filter buttons
const PROJECTS = [
  {
    title: "Contabo Cloud Portal",
    subtitle: "Graduation Project — Multi-Tenant Cloud Reseller & CD Platform",
    year: "2025 – 2026",
    tags: ["Full-Stack", "Distributed"],
    featured: true,
    description:
      "Production-grade multi-tenant SaaS: resellers manage Contabo VPS for clients through a built-in Git-based CD pipeline (Heroku-style). Three-tier RBAC (Admin → Resellers → Clients) with isolated billing, dashboards, and resource quotas.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/CloudDeploy" },
    ],
  },
  {
    title: "IoT Weather Station Monitoring Platform",
    subtitle: "Distributed Systems & Stream Processing",
    year: "2025",
    tags: ["Distributed"],
    featured: true,
    description:
      "10-station distributed pipeline: Kafka ingestion → Kafka Streams anomaly detection → dual persistence (a custom BitCask LSM store + Parquet archival) → Kubernetes orchestration. Applied 6 Enterprise Integration Patterns end-to-end.",
    tech: ["Java", "Kafka", "Kafka Streams", "Parquet", "ElasticSearch", "Kibana", "Docker", "Kubernetes"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/IoT-Weather-Station-Monitoring-Platform" },
    ],
  },
  {
    title: "TPC-H Data Warehouse & Analytics Pipeline",
    subtitle: "Data Engineering — OLTP-to-OLAP",
    year: "2025",
    tags: ["Data"],
    featured: true,
    description:
      "End-to-end ELT: the TPC-H benchmark (22 tables, 1 GB+) flows from MySQL into a star-schema warehouse processed with Apache Spark — achieving a ~19.5× query speedup over the MySQL baseline.",
    tech: ["MySQL", "Apache NiFi", "Apache Spark", "Python", "Apache Parquet", "SQL"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/OLAP" },
    ],
  },
  {
    title: "Reverse Time Migration — 3D Seismic Solver",
    subtitle: "High-Performance Computing & Parallel Programming",
    year: "2025",
    tags: ["HPC"],
    featured: true,
    description:
      "RTM algorithm for geophysical subsurface imaging: a C finite-difference stencil (O(n³·t)) parallelized with OpenMP (7.2× on 8 cores) and MPI (14.1× on 16 cores, multi-node), using cache-blocking with halo-exchange overlap.",
    tech: ["C", "OpenMP", "MPI", "HDF5", "Finite-difference", "Profiling"],
    links: [],
  },
  {
    title: "Java-to-Bytecode Compiler",
    subtitle: "Programming Languages & Compilers",
    year: "2025",
    tags: ["Systems"],
    description:
      "Multi-phase Java compiler in C++: an NFA→DFA lexer via Thompson's construction, and an LL(1) parser built from FIRST/FOLLOW sets and a predictive parse table producing leftmost derivations.",
    tech: ["C++", "Finite automata", "LL(1) parsing", "Compiler design", "JVM bytecode"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/Compilar-Generator" },
    ],
  },
  {
    title: "NLP Course Labs",
    subtitle: "NLP & Machine Learning — built from scratch with PyTorch",
    year: "2024",
    tags: ["ML/NLP"],
    featured: true,
    description:
      "N-gram LMs + a Naïve Bayes / LR emotion classifier (94% macro-F1); Word2Vec on CONLL2003 with FFNN vs. HMM/Viterbi NER (9 classes); Transformer & Bi-LSTM seq2seq NMT (Fr→En, beam search, BLEU). Plus Q-LoRA fine-tuning of Qwen 1.5B for code generation and DPO alignment with β-sensitivity analysis.",
    tech: ["Python", "PyTorch", "HuggingFace", "PEFT", "NumPy", "wandb"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/Natural-Language-Processing-Labs" },
    ],
  },
  {
    title: "Distributed Systems Course Work",
    subtitle: "CS432 Labs & Experiments",
    year: "2025",
    tags: ["Distributed"],
    description:
      "A suite of distributed-systems experiments — RMI Graph (BFS/Dijkstra with concurrent Q/A/D ops), K-Means MapReduce on Hadoop & Spark, Cassandra CAP/quorum testing across 18+ failure scenarios (6 modes × 3 RF), and Kafka-vs-JMS throughput/latency benchmarking (10K-message medians).",
    tech: ["Java", "RMI", "Hadoop", "Spark", "Cassandra", "Kafka", "ActiveMQ", "JMeter", "Docker"],
    links: [],
  },
  {
    title: "Spark WordCount (MapReduce)",
    subtitle: "CS432 Distributed Systems",
    year: "2025",
    tags: ["Distributed", "Data"],
    description:
      "Apache Spark WordCount implemented against the Java MapReduce API with a Maven build — a compact reference for the classic distributed map/reduce workflow.",
    tech: ["Java", "Apache Spark", "MapReduce", "Maven"],
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Ibrahimtareq952001/spark-wordcount" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Information Technology Engineer",
    org: "Ezz Al Dekheila Steel Co. (EZDK)",
    place: "Alexandria, Egypt",
    date: "Jul 2025",
    kind: "work",
    points: [
      "Worked hands-on with Oracle E-Business Suite (EBS) and Oracle DB; wrote SQL scripts for data extraction, reporting, and routine operations across production databases.",
      "Diagnosed and resolved infrastructure issues across the plant network — enterprise networking, server configuration, and hardware troubleshooting in an industrial environment.",
    ],
  },
  {
    role: "Cyber Security Engineer",
    org: "Arabian Academy Security",
    place: "Alexandria, Egypt",
    date: "Jun 2024 – Sep 2024",
    kind: "work",
    points: [
      "Applied GRC frameworks (ISO 27001, GDPR, PCI-DSS); conducted risk assessments and contributed to security-policy documentation.",
      "Hands-on with SIEM log analysis and threat detection; penetration testing with Kali Linux, Nmap, Burp Suite, and Metasploit; administered Active Directory environments.",
    ],
  },
  {
    role: "Ethical Hacking — Digital Egypt Youth Program",
    org: "National Institute for Telecommunication Education",
    place: "",
    date: "Nov 2025 – Jan 2026",
    kind: "training",
    points: [
      "72-hour certified course (score: 95%) covering reconnaissance, network scanning, vulnerability analysis, system & web app security, SQL injection, DoS, and basic cryptography.",
      "Reinforced the full ethical-hacking lifecycle — from footprinting through exploitation and reporting.",
    ],
  },
  {
    role: "Microsoft Full Stack Developer — Professional Certificate",
    org: "Microsoft × Coursera",
    place: "",
    date: "Dec 2024",
    kind: "training",
    points: [
      "Full-stack development with React and Node.js, REST API design & integration, relational and NoSQL database management.",
      "Security best practices (authN/authZ, input validation) and DevOps fundamentals: containerization, CI/CD, and deployment monitoring.",
    ],
  },
  {
    role: "Linux Administration (Admin I & II)",
    org: "Information Technology Institute (ITI)",
    place: "",
    date: "Jul 2025",
    kind: "training",
    points: [
      "Core Linux administration: user/group management, permissions, process control, and storage (LVM, RAID, partitioning).",
      "Configured network interfaces, DNS, DHCP, and SSH; automated tasks with Bash; practiced system monitoring and log analysis.",
    ],
  },
];
