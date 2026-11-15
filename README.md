# TechNova - Modern Professional Landing Page

**CodSoft Web Development Internship – Level 1 Task 2**  
**Developer:** [Vijiayaragavan V](https://www.linkedin.com/in/vijiyaragavan/) | [LinkedIn Profile](https://www.linkedin.com/in/vijiyaragavan/)

A modern, high-performance, responsive landing page for **TechNova**, a fictional technology platform concept. Built with pure **HTML5**, **CSS3**, and **vanilla JavaScript** following modern UI/UX design standards.

---

## 🚀 Live Preview & Overview

- **Platform Name**: TechNova
- **Theme**: Next-Generation Technology Solutions
- **Primary Palette**: White, Dark Navy (`#0B132B`, `#0F172A`), Electric Blue (`#0066FF`, `#00D2FF`)
- **Typography**: Plus Jakarta Sans, JetBrains Mono
- **Dependencies**: Zero external runtime libraries or frameworks (100% lightweight vanilla code)

---

## 📁 Project Structure

```text
landing page/
│
├── index.html       # Semantic HTML5 structure with embedded SVG vectors & accessible ARIA attributes
├── style.css        # CSS3 variables, Flexbox & Grid layouts, animations, and responsive breakpoints
├── script.js        # Vanilla JavaScript (ES6+) for interactivity, animations, and form validation
└── README.md        # Project documentation and local setup instructions
```

---

## 🌟 Key Features & Sections

1. **Header & Navigation**:
   - Sticky navigation bar with frosted-glass backdrop blur (`backdrop-filter: blur(14px)`).
   - Animated SVG brand logo.
   - Interactive navigation links with hover underline animations and active section scroll-spy.
   - Fully responsive mobile drawer menu with animated hamburger-to-cross transformation.
   - Prominent "Get Started" call-to-action button.

2. **Hero Section**:
   - Main Headline: *"Build Your Digital Future With Innovation"*.
   - Subtitle: *"Discover powerful digital solutions designed to simplify your work, improve productivity and accelerate your growth."*
   - Dual action buttons: **Explore Services** (with dynamic arrow interaction) and **Get Started**.
   - Custom SVG dashboard preview mockup featuring live status pulse, growth chart gradient, and realistic code snippet.
   - Animated floating badge cards ("Ultra-Fast Execution", "Protected Solutions", "Cloud Native").

3. **Features Section ("Why Choose TechNova?")**:
   - 4 Interactive cards with hover elevation and border glowing effects:
     1. **Smart Technology**: Adaptive logic & API-first integration.
     2. **Fast Performance**: Sub-second execution targets and 60 FPS smooth interactions.
     3. **Modern Design**: Intuitive UX hierarchy and accessible contrast.
     4. **Secure Solutions**: Zero-trust architecture & data privacy safeguards.

4. **Services Section**:
   - 3 Curated service cards:
     - **Web Development**: Responsive, mobile-first frontend engineering.
     - **Artificial Intelligence**: Automated workflows, predictive analytics & context-aware processing.
     - **Digital Solutions**: Cloud architecture, API ecosystems & continuous scaling.
   - Interactive **Learn More** buttons opening an accessible details modal.

5. **About Section ("Innovation Starts Here")**:
   - Narrative describing the TechNova concept as an showcase of modern web design and frontend development skills.
   - Isometric vector artwork highlighting clean code and responsive standards.
   - Value checklist and secondary CTA actions.

6. **Demonstration Statistics Section**:
   - Illustrative sample metrics with dynamic JavaScript count-up animation:
     - **10+** Technologies
     - **20+** Demo Projects
     - **5+** Service Categories
     - **100%** Responsive Design Goal
   - Explicit disclaimer identifying the figures as demonstration targets.

7. **Call-to-Action (CTA) Section**:
   - High-contrast electric blue gradient banner with ambient glow.
   - *"Ready to Transform Your Digital Experience?"*

8. **Contact Section with Client-Side Form Validation**:
   - Input fields: Full Name, Email Address, Subject, and Message.
   - Real-time and on-submit client-side validation (regex email check, character length limits).
   - Dynamic error messaging, invalid/valid status indicators, and animated button submit spinner.
   - Success confirmation feedback banner with explicit client-side demo disclaimer.

9. **Footer**:
   - TechNova logo & conceptual summary.
   - Quick navigation links & service highlights.
   - CodSoft internship credentials badge.
   - Social media vector icon placeholders (GitHub, LinkedIn, X/Twitter, Discord).
   - Copyright notice (`© 2026 TechNova. All Rights Reserved.`) and smooth Back-to-Top button.

---

## 🛠️ Instructions to Run Locally

### Option 1: Direct Browser Launch (Simplest)
1. Navigate to the project folder:
   ```text
   C:\Users\vijiy\OneDrive\Desktop\landing page\
   ```
2. Double-click **`index.html`** or right-click and select **Open with > Google Chrome** (or Edge / Firefox).

### Option 2: Using VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `index.html` and choose **Open with Live Server**.
4. The site will automatically open at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python HTTP Server (Terminal)
Open PowerShell or Command Prompt in the project folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📱 Responsiveness & Browser Compatibility

- **Mobile First**: Fluid layouts using CSS Flexbox & CSS Grid.
- **Breakpoints**:
  - `> 1024px`: Desktop layout with multi-column grids and floating badges.
  - `768px - 1024px`: Tablet layout with 2-column grids.
  - `< 768px`: Mobile view with full-width stacked components and hamburger drawer navigation.
  - `< 480px`: Small mobile adjustments with fluid button sizing and responsive typography.
- **Accessibility**:
  - Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`, `role="alert"`).
  - High contrast ratio meeting WCAG AA standards.
  - Respects user preferences via `prefers-reduced-motion` media query.

---

*Submitted for CodSoft Web Development Internship – Level 1 Task 2.*
