<div align="center">

# Ibrahim Tareq

### Junior Software Engineer

*Computer Engineering Graduate · Alexandria University, 2026*

[![Compile Resume](https://github.com/Ibrahimtareq952001/Resume/actions/workflows/compile.yml/badge.svg)](https://github.com/Ibrahimtareq952001/Resume/actions/workflows/compile.yml)
![Built with LaTeX](https://img.shields.io/badge/Built%20with-LaTeX-008080?style=flat&logo=latex&logoColor=white)
![Engine](https://img.shields.io/badge/Engine-XeLaTeX-4B8BBE?style=flat)
![Pages](https://img.shields.io/badge/Pages-2-brightgreen?style=flat)
![Last Commit](https://img.shields.io/github/last-commit/Ibrahimtareq952001/Resume?style=flat)

**[📄 Download Latest Resume PDF](resume.pdf)**

</div>

---

## About

My professional resume, maintained as version-controlled LaTeX source. Every push auto-compiles the PDF via GitHub Actions. Built on the [Russell CV](russell.cls) template.

I build things across the full stack — distributed systems, stream-processing pipelines, production SaaS, HPC parallel solvers, and applied ML/NLP. Currently seeking an entry-level software engineering role.

---

## Tech Stack

<div align="center">

**Languages**

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C%2FC%2B%2B-00599C?style=flat-square&logo=c%2B%2B&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

**Web & Backend**

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![REST APIs](https://img.shields.io/badge/REST_APIs-FF6C37?style=flat-square&logo=postman&logoColor=white)

**Distributed Systems & DevOps**

![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=flat-square&logo=apache-kafka&logoColor=white)
![Spark](https://img.shields.io/badge/Apache_Spark-E25A1C?style=flat-square&logo=apache-spark&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

**ML / AI**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

</div>

---

## Projects Snapshot

| Project | Domain | Highlights |
|---------|--------|------------|
| **Contabo Cloud Portal** | Full-Stack SaaS | Multi-tenant VPS reseller + Git-based CD pipeline, 3-tier RBAC |
| **IoT Weather Station** | Distributed Systems | Kafka → Kafka Streams → BitCask/Parquet → Kubernetes, 10 stations |
| **TPC-H Data Warehouse** | Data Engineering | MySQL → Spark ELT pipeline, **19.5× query speedup** |
| **RTM Wave Solver** | HPC / Parallel | C + OpenMP (**7.2×**) + MPI (**14.1×**), geophysical imaging |
| **Java-to-Bytecode Compiler** | Compilers | NFA→DFA lexer (Thompson's) + LL(1) parser in C++ |
| **NLP Course Labs** | ML / NLP | N-grams, Word2Vec, Transformer NMT, Q-LoRA + DPO fine-tuning |
| **Distributed Systems Labs** | Course Work | Java RMI graph, Hadoop K-Means, Cassandra CAP, Kafka vs JMS |

---

## Build Locally

**Prerequisites:** LaTeX distribution with XeLaTeX
- macOS: `brew install --cask mactex` or [MacTeX](https://www.tug.org/mactex/)
- Linux: `sudo apt-get install texlive-xetex texlive-fonts-extra`

```bash
git clone https://github.com/Ibrahimtareq952001/Resume.git
cd Resume
xelatex resume.tex
open resume.pdf
```

---

## Repository Structure

```
Resume/
├── resume.tex          # Main document (layout, order, margins)
├── russell.cls         # Russell CV document class
├── cv/
│   ├── summary.tex
│   ├── education.tex
│   ├── projects.tex
│   ├── experience.tex
│   ├── skills.tex
│   ├── interests.tex
│   └── languages.tex
├── fonts/              # Roboto + FontAwesome
├── resume.pdf          # Latest compiled output
└── .github/workflows/
    └── compile.yml     # Auto-compile on push
```

---

## Auto-Compilation

Every push to `main` triggers a GitHub Actions workflow that compiles the LaTeX source and uploads the PDF as a build artifact. The workflow badge at the top shows the current build status.

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ibrahim_Tareq-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/ibrahim-tareq-aaa403223/)
[![GitHub](https://img.shields.io/badge/GitHub-Ibrahimtareq952001-181717?style=flat&logo=github&logoColor=white)](https://github.com/Ibrahimtareq952001)
[![Email](https://img.shields.io/badge/Email-ibrahimtareq952%40gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:ibrahimtareq952@gmail.com)

</div>
