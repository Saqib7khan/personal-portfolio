Here is the updated **Master System Prompt**. I have merged your new **Engineering Standards & AI Priming** text with the **Edwin Le Design Identity** and your **Personal Resume Context**.

Save this as `CURSOR_RULES.md`, `.cursorrules`, or pin it in your AI chat.

---

# System Prompt: Mohd Saqib Khan Portfolio (Engineering & Design Spec)

**Purpose:** This document pins the engineering standards, AI priming prompt, and design rules for the "Mohd Saqib Khan Portfolio" project. Treat this as the canonical standard for all code generation.

**Context:** We are building a scalable, high-performance portfolio for **Mohd Saqib Khan** (B.Tech CSE).

* **Design Target:** Visual inspiration from the "Edwin Le" aesthetic (Minimalist, Grayscale, Typography-driven, "Vibe Coding"). Do not copy or reproduce copyrighted text, images, or proprietary interactions — use the aesthetic as inspiration only.
* **Engineering Target:** Production-grade architecture with strict SOLID principles and type safety.

---

### **1. Tech Stack & Tooling**

* **Runtime:** Node.js LTS (18.x or 20.x).
* **Framework:** Next.js (App Router) + TypeScript.
* **Package Manager:** pnpm (preferred) or npm.
* **Styling:** Tailwind CSS (Utility-first).
* **Animation:** Framer Motion (Primary) & GSAP (for complex storytelling).
* **Scrolling:** Lenis (Essential for the "Edwin Le" smooth scroll feel).
* **Linting:** ESLint + Prettier.

---

### Legal & IP Guidance

* Use the "Edwin Le" site only as visual inspiration. Do not copy wording, layout that is a direct reproduction, images, or proprietary interactions.
* If using third-party templates, fonts, or images with license requirements, include attribution and license references in `README.md`.
* When producing public code or deploying to a public domain, avoid publishing any private contact details unless the owner expressly permits it.

If any request would require reproducing another creator's exact content, stop and ask for permission or alternate phrasing.

---

### **2. Engineering Standards (Pin these before codegen)**

* **SOLID:** Focus on Single Responsibility & Dependency Inversion. Separate concerns across files: controllers, services, repositories.
* **DRY:** Abstract repeated logic into shared utilities or hooks (`libs/utils/*` or `hooks/*`).
* **Separation of Concerns:** UI components must be **dumb** (presentation-only) and receive props. State and side-effects belong in custom hooks (e.g., `useProjects`, `useParallax`).
* **Law of Demeter:** Modules must call only their immediate interfaces. No chaining through distant dependencies.
* **Small Interfaces (ISP):** Avoid giant "god" interfaces. Break them down.
* **Liskov Substitution:** Implementations must strictly honor their contracts.
* **Typed Boundaries:** Define TypeScript interfaces for all external boundaries (`libs/types/*`).
* **Testing:** Unit tests for every service & hook; snapshot/e2e for critical story flows.
* **Accessibility:** Respect `prefers-reduced-motion`; keyboard-first navigation; ARIA for interactive elements.
* **Security:** Never hardcode API keys. Use environment variables.

---

### **3. AI Priming Prompt (Verbatim Instructions)**

*Use the following rules strictly when generating code:*

**Generation Protocol:**

1. **Interface First:** Always generate the TypeScript interface (contract) first. **Never** create an implementation without defining its contract in `types/` first.
2. **Scaffold First:** When asked to design architecture, provide the folder tree and data-flow description first. Do not generate code until the structure is approved.
3. **Isolation:** Presentation components must be free of side-effects. Move all logic to `hooks/` and `services/`.
4. **Network I/O:** Use a single `apiClient` wrapper located at `services/api/apiClient.ts`. **Never** import raw `fetch` or `axios` directly into UI components.
5. **ML/AI Demos:** For machine learning features (like the Livestock project), create an abstraction `IModelInference` and provide a `RecordedDemo` fallback implementation so the site works without a live backend.
6. **Error Handling:** Services must return typed result objects or throw defined errors. Centralize logging.

---

### **4. Domain Context (Source of Truth)**

*Use this data to populate the content. Do not use placeholder text if real data exists below.*

**User Identity:**

* **Name:** Mohd Saqib Khan
* **Role:** Developer & Computer Science Student (Final Year)
* **Location:** Greater Noida / Lucknow, India
* **Contact:** `mohdsaqibkhan7008@gmail.com` | `+91 8874799298`
* **Socials:** GitHub: `Saqib7khan` | LinkedIn: `saqib-khan-0070sk33515`

**Key Projects (For "Selected Work" Section):**

1. **AI-Powered Disease Diagnosis (Livestock):**
* *Tech:* AI/ML, Sensors, IoT.
* *Description:* Early detection of Foot and Mouth Disease (FMD) using temperature and motion data.


2. **Wordsmith (Writing Assistant):**
* *Tech:* Python, HTML/CSS, JS.
* *Features:* Spelling correction, grammar fixes.


3. **Hand Sign Detection:**
* *Tech:* YOLO, TensorFlow, Computer Vision.
* *Description:* Real-time recognition of static hand gestures.


4. **Student Management System:**
* *Tech:* Web-based (Full Stack).
* *Focus:* Streamlining administratives tasks and academic tracking.



**Skills & Services:**

* **Languages:** C++, Python, JavaScript (ES6+).
* **Web:** React.js, HTML/CSS, Next.js.
* **Cloud/DB:** AWS (EC2, S3, RDS, Lambda), MySQL.
* **Tools:** Git, GitHub, VS Code.

---

### **5. Visual Guidelines ("Edwin Le" Vibe)**

* **Typography:** Large, bold sans-serif headers (e.g., "Sup, I'm Saqib.").
* **Marquee:** "Me in brief" section must feature an infinite scroll loop of skills/interests.
* **Palette:** Strict Black & White. No colors except in images.
* **Interaction:** Magnetic buttons, hover-reveal images, and smooth (Lenis) scrolling are mandatory.