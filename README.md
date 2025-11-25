# Ibrahim Tareq's Resume

A professional LaTeX-based resume built with the Russell CV template. This document showcases software engineering and cybersecurity expertise, experience, and certifications.

## Overview

This resume is a 2-page document highlighting:
- **Professional Experience** in cybersecurity, SOC operations, and security engineering
- **Technical Skills** including programming languages, network security, SIEM tools, and software engineering
- **Education & Certifications** including CCNA, Security+, CEH, and various cybersecurity specializations
- **Courses & Internships** covering full-stack development, Linux administration, and advanced security topics
- **Languages & Interests** in CTF challenges, Linux, technical writing, and coding competitions

## Features

- **Clean, Professional Design** — uses the Russell CV LaTeX template for elegant formatting
- **Compact Layout** — optimized to fit exactly 2 pages without sacrificing readability
- **Modular Structure** — separate `.tex` files for each section (experience, skills, projects, interests, etc.) for easy editing
- **XeLaTeX Build** — supports modern fonts (Roboto, SourceSansPro) and FontAwesome icons for visual appeal

## File Structure

```
.
├── resume.tex              # Main document (10pt, A4 paper)
├── russell.cls             # Custom CV document class
├── cv/
│   ├── summary.tex         # Professional summary
│   ├── education.tex       # Education & certifications
│   ├── experience.tex      # Work experience
│   ├── projects.tex        # Courses & internships
│   ├── skills.tex          # Technical skills
│   ├── interests.tex       # Personal interests
│   ├── languages.tex       # Language proficiency
│   ├── achievements.tex    # (optional) Additional achievements
│   ├── publications.tex    # (optional) Publications
│   ├── references.bib      # Bibliography
│   └── [other sections]
├── fonts/                  # Custom fonts directory
├── README.md               # This file
└── resume.pdf              # Compiled output (2 pages)

```

## Building the Resume

### Prerequisites

Ensure you have a LaTeX distribution installed with XeLaTeX:
- **macOS**: `brew install texlive` or MacTeX
- **Linux**: `sudo apt-get install texlive-xetex` (Ubuntu/Debian)
- **Windows**: MiKTeX or TeX Live

### Build Instructions

```bash
# Navigate to the project directory
cd /path/to/Ibrahim_s_Resume

# Rebuild the PDF with latexmk
latexmk -pdf -xelatex -f resume.tex

# View the generated PDF
open resume.pdf  # macOS
xdg-open resume.pdf  # Linux
start resume.pdf  # Windows
```

### Continuous Build (Watch Mode)

```bash
# Watch for changes and automatically rebuild
latexmk -pdf -xelatex -pvc resume.tex
```

## Customization

### Edit Content

1. Open the appropriate `.tex` file in `cv/` directory
2. Modify the content (text is preserved; only formatting meta-commands change)
3. Rebuild with `latexmk -pdf -xelatex -f resume.tex`

### Adjust Layout

- **Font Size**: Change `10pt` in `resume.tex` line 2 to `11pt` or `12pt`
- **Page Margins**: Edit `\geometry` parameters in `resume.tex` line 7
- **Section Colors**: Modify color definitions in `resume.tex` (lines 12-26)

### Add/Remove Sections

- Uncomment or comment out `\input{cv/section.tex}` lines in `resume.tex` (lines ~100-107)

## Current Optimizations

- **Document Class**: 10pt font for compact 2-page layout
- **Spacing**: Reduced inter-entry vertical gaps (`\vspace{2mm}`) and adjusted `\parskip` in multi-entry sections
- **Font Scaling**: Applied `\small` to skills, interests, and languages sections for space efficiency
- **Removed Trailing Fill**: Eliminated `\vspace*{\fill}` to prevent unnecessary page breaks

## Known Issues

- **Overfull \hbox Warnings**: Minor alignment warnings in skills and interests sections (visual output unaffected)
- **ToUnicode CMap Warnings**: FontAwesome icon fonts don't embed full Unicode mappings (does not affect PDF rendering; only impacts text copy/search)

## Technologies Used

- **LaTeX Engine**: XeTeX (modern font support via fontspec)
- **Build Tool**: latexmk (automated build orchestration)
- **Bibliography**: biblatex + Biber
- **Fonts**: Roboto, SourceSansPro, FontAwesome 5
- **Version Control**: Git + GitHub

## Author

Ibrahim Tareq  
📧 [ibrahimtareq952@gmail.com](mailto:ibrahimtareq952@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/ibrahim-tareq-aaa403223)  
🐙 [GitHub](https://github.com/Ibrahimtareq952001)  
📝 [Medium](https://medium.com/@d19cyber)

## License

This project is open source. Feel free to use the template and structure for your own resume.

---

**Last Updated**: November 25, 2025  
**Status**: 2 pages, optimized for ATS and human reviewers
