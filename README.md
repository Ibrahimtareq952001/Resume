# Professional CV/Resume Creator

A modern, production-ready LaTeX-based CV/Resume template builder using the Russell CV document class. Designed for professionals who want a clean, ATS-friendly, and visually appealing resume without the hassle of manual formatting.

## Overview

This project provides a complete resume/CV creation system with:
- **Modular Architecture** — separate `.tex` files for each section (experience, skills, education, projects, interests, languages)
- **Easy Customization** — swap content in section files without touching LaTeX formatting code
- **Professional Design** — Russell CV template with modern fonts and FontAwesome icon support
- **Optimized Layout** — automatically fits content to 2 pages while maintaining readability
- **Quick Build** — single command to regenerate PDF from source files
- **Version Control Ready** — git-friendly structure with all source files tracked

Perfect for:
- Job seekers building tailored resumes for different roles
- Professionals maintaining an up-to-date CV
- Students creating competitive internship applications
- Teams that want to share a consistent resume template

## Key Features

- **Clean, Professional Design** — Russell CV template with elegant formatting and visual hierarchy
- **Compact 2-Page Layout** — optimized spacing and fonts to fit exactly 2 pages without cramping
- **Modular Structure** — edit individual section files in plain text (`.tex`), no LaTeX knowledge required
- **XeLaTeX Build System** — modern font rendering (Roboto, SourceSansPro) and FontAwesome icons for polish
- **Automated Build Process** — `latexmk` orchestration handles bibliography, formatting, and PDF conversion
- **ATS-Optimized** — clean, structured formatting works well with resume parsing systems

## Quick Start

### Prerequisites

Ensure you have a LaTeX distribution installed with XeLaTeX:
- **macOS**: `brew install texlive` or [MacTeX](https://www.tug.org/mactex/)
- **Linux**: `sudo apt-get install texlive-xetex` (Ubuntu/Debian) or equivalent for your distro
- **Windows**: [MiKTeX](https://miktex.org/) or [TeX Live](https://www.tug.org/texlive/)

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/Ibrahimtareq952001/Resume.git
cd Resume
```

### 2. Customize Your Content

Edit the section files in the `cv/` directory:
- `cv/summary.tex` — Professional summary/objective
- `cv/education.tex` — Education and degrees
- `cv/experience.tex` — Work experience (using `\cventry` macro)
- `cv/projects.tex` — Projects, courses, internships (using `\cventry` macro)
- `cv/skills.tex` — Technical and soft skills (using `\cvskill` macro)
- `cv/interests.tex` — Personal interests/hobbies
- `cv/languages.tex` — Language proficiency

### 3. Build the PDF

```bash
latexmk -pdf -xelatex -f resume.tex
```

The compiled `resume.pdf` will be generated in the project root.

### 4. View Your Resume

```bash
open resume.pdf  # macOS
xdg-open resume.pdf  # Linux
start resume.pdf  # Windows
```

## Complete Usage Guide

### File Structure

```
Resume/
├── resume.tex              # Main document driver (10pt, A4 paper)
├── russell.cls             # Russell CV document class (custom template)
├── cv/
│   ├── summary.tex         # Professional summary section
│   ├── education.tex       # Education and degrees
│   ├── experience.tex      # Work experience entries
│   ├── projects.tex        # Projects, courses, internships
│   ├── skills.tex          # Technical and soft skills
│   ├── interests.tex       # Personal interests
│   ├── languages.tex       # Language proficiency
│   ├── achievements.tex    # (optional) Additional achievements
│   ├── publications.tex    # (optional) Publications/papers
│   └── references.bib      # Bibliography source
├── fonts/                  # Custom fonts directory (Roboto, SourceSansPro)
├── resume.pdf              # Compiled output (2 pages)
├── README.md               # This file
├── .gitignore              # Git ignore patterns
└── *.log, *.aux, *.xdv     # Build artifacts (git-ignored)
```

### Editing Content Files

Each section uses specific LaTeX macros. Here are the main ones:

**Experience & Projects** (`\cventry` macro):
```tex
\cventry
  {Job Title}                    % Position/Title
  {Company Name}                 % Organization
  {City, Country}                % Location
  {Start Date -- End Date}       % Date range
  {
    \begin{cvitems}
      \item {Description of responsibility/achievement}
      \item {Another bullet point}
    \end{cvitems}
  }
```

**Skills** (`\cvskill` macro):
```tex
\cvskill
  {Skill Category}               % e.g., "Programming", "Tools"
  {Specific skills}              % e.g., "Python, Java, C++"
```

**No LaTeX knowledge required** — just edit the text inside braces `{}`.

### Advanced Customization

#### Change Font Size
Edit `resume.tex` line 1:
```tex
\documentclass[11pt,a4paper]{russell}  % Change 11pt to 10pt, 12pt, etc.
```

#### Adjust Page Margins
Edit `resume.tex` line 7:
```tex
\geometry{left=1.4cm, top=.8cm, right=1.4cm, bottom=1.8cm, footskip=.5cm}
```

#### Change Colors
Edit `resume.tex` lines 12–26:
```tex
\colorlet{russell}{russell-black}  % Change to russell-emerald, russell-blue, etc.
```

#### Show/Hide Sections
In `resume.tex` around line 100, uncomment/comment out `\input{}` lines:
```tex
\input{cv/summary.tex}
\input{cv/education.tex}
\input{cv/experience.tex}
% \input{cv/achievements.tex}  % Uncomment to show
```

### Rebuild Options

**Standard build** (rebuild everything):
```bash
latexmk -pdf -xelatex -f resume.tex
```

**Watch mode** (auto-rebuild on file changes):
```bash
latexmk -pdf -xelatex -pvc resume.tex
```

**Clean build artifacts**:
```bash
latexmk -c resume.tex
```

**Force complete rebuild** (ignore caches):
```bash
latexmk -pdf -xelatex -f -g resume.tex
```

## Customization

## Tips & Best Practices

### Writing Effective Resume Content

1. **Use Action Verbs** — Start bullet points with strong verbs: "Developed," "Managed," "Implemented," "Designed"
2. **Quantify Achievements** — Include numbers when possible: "Reduced page load time by 40%", "Led team of 5"
3. **Match Job Descriptions** — Tailor the `cv/skills.tex` and experience section to job postings
4. **Keep It Concise** — Each bullet point should be 1–2 lines max
5. **Proofread** — Spell-check before submitting to employers

### Maintaining Multiple Versions

For role-specific resumes, create branches:
```bash
git checkout -b resume/data-engineer
# Edit cv/skills.tex, cv/summary.tex for data engineering role
# Rebuild and test
git push origin resume/data-engineer
```

### Automating Updates

Set up a pre-commit hook to auto-rebuild:
```bash
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
latexmk -pdf -xelatex -f resume.tex
git add resume.pdf
EOF
chmod +x .git/hooks/pre-commit
```

## Troubleshooting

### Common Issues

**Issue**: `xelatex command not found`
- **Fix**: Install TeX Live or MacTeX (see Prerequisites)

**Issue**: `Package fontspec Error: The font "Roboto" cannot be found`
- **Fix**: Install system fonts or ensure `fonts/` directory is populated

**Issue**: PDF shows 3+ pages instead of 2
- **Fix**: Reduce content or increase spacing compression (see Advanced Customization)

**Issue**: Overfull \hbox warnings in build log
- **Fix**: This is cosmetic; the PDF still renders correctly. Consider shortening long section titles or splitting entries.

**Issue**: Bibliography not showing
- **Fix**: Run `biber resume` after `latexmk`, or use `latexmk -pdf -xelatex -f resume.tex` to automate it.

## Template Comparison

| Feature | This Template | Google Docs | MS Word |
|---------|---------------|------------|--------|
| Version Control | ✅ Git-friendly | ❌ | ❌ |
| Custom Fonts | ✅ XeLaTeX | ✅ Limited | ✅ Limited |
| ATS-Friendly | ✅ | ⚠️ Depends | ⚠️ Depends |
| Reproducible Builds | ✅ | ❌ | ❌ |
| Export Formats | ✅ PDF, XDV | ✅ PDF, Docs | ✅ PDF, DOCX |
| Learning Curve | ⚠️ Text editing | ✅ Easy | ✅ Easy |
| Collaboration | ✅ Git workflows | ✅ Native | ✅ Native |

## Performance & File Size

- **Build Time**: ~3–5 seconds (first build) → ~1 second (cached)
- **PDF Size**: ~42 KB (optimized)
- **Source Files**: ~25 KB total text content
- **Build Artifacts**: ~500 KB (git-ignored)

## Contributing

This template is open source. Contributions welcome:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "Add feature XYZ"`
5. Push to your fork and open a pull request

## Support & Resources

- **LaTeX Documentation**: [TeXLive Docs](https://www.tug.org/texlive/)
- **Russell CV Class**: Original template source in `russell.cls`
- **FontAwesome Icons**: [FontAwesome 5 Free](https://fontawesome.com/v5/)
- **Typesetting Tips**: [The TeXbook](https://en.wikipedia.org/wiki/The_TeXbook)

## Project Status

- **Current Version**: 2.0 (2-page optimized)
- **Last Updated**: November 25, 2025
- **Status**: Production-ready, actively maintained
- **Layout**: Exactly 2 pages A4, 10pt font

## Example Use Cases

✅ **Job Applications** — Tailor and submit in minutes  
✅ **LinkedIn Updates** — Keep PDF version in sync with profile  
✅ **Networking** — Print or email a polished, professional resume  
✅ **Portfolio** — Include as part of portfolio website  
✅ **Learning** — Understand LaTeX document structure and build systems  
✅ **Team Templates** — Use as company-wide resume standard
