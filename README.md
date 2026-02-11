# Mohd Saqib Khan - Portfolio

A minimalist, high-performance portfolio built with Next.js, TypeScript, and Tailwind CSS. Inspired by the "Edwin Le" aesthetic with a focus on typography, smooth interactions, and clean design.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Smooth Scroll:** Lenis
- **Package Manager:** pnpm (recommended) / npm
- **Deployment:** Vercel

## 📁 Project Structure

```
personal-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── features/          # Smart/connected components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Marquee.tsx
│   │   ├── ContactSection.tsx
│   │   └── SmoothScrollProvider.tsx
│   └── ui/                # Dumb/presentational components
│       ├── ProjectCard.tsx
│       └── ProjectGrid.tsx
├── data/
│   └── portfolio.ts       # Source of truth for content
├── hooks/                 # Custom React hooks
│   ├── useScrollProgress.ts
│   ├── useProjectFilter.ts
│   ├── useInView.ts
│   └── useWindowSize.ts
├── libs/
│   ├── types/             # TypeScript interfaces
│   │   └── content.ts
│   └── utils/             # Helper functions
│       ├── animations.ts
│       └── helpers.ts
├── services/
│   └── api/               # API client layer
│       └── apiClient.ts
└── public/                # Static assets

```

## 🏗️ Engineering Standards

This project follows strict engineering principles:

- **SOLID Principles**: Single Responsibility, Dependency Inversion
- **DRY**: Abstracted logic into utilities, hooks, and services
- **Separation of Concerns**: UI components are presentation-only
- **Type Safety**: Comprehensive TypeScript interfaces
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **Performance**: Lazy loading, optimized images, code splitting

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Saqib7khan/portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration (optional)
NEXT_PUBLIC_API_URL=your_api_url_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🎨 Design Philosophy

### Edwin Le Aesthetic

- **Typography-driven**: Large, bold headlines with tight tracking
- **Monochrome palette**: Strict black and white with high contrast
- **Smooth interactions**: Lenis smooth scroll, magnetic buttons, hover reveals
- **Minimalist layout**: Focus on content, generous whitespace

### Accessibility

- Respects `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard-first navigation
- Focus visible states

## 📦 Build & Deploy

### Production Build

```bash
pnpm build
# or
npm run build
```

### Deploy to Vercel (Recommended)

#### Quick Deploy

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Saqib7khan/portfolio.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `pnpm build` (or leave default)
   - **Output Directory**: .next (default)
   - **Install Command**: `pnpm install` (or leave default)

5. Add environment variables (if needed):
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID
   - Any other API keys or configuration

6. Click "Deploy" and wait for the build to complete

7. Your site will be live at `https://your-project.vercel.app`

#### Custom Domain Setup

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `mohdsaqibkhan.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

#### Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - `NEXT_PUBLIC_API_URL` - Your API endpoint
   - `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
3. Select environments: Production, Preview, Development
4. Redeploy to apply changes

### Deploy to Netlify (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy
netlify deploy --prod
```

### SEO Optimization Checklist

Before deploying, ensure:

- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Replace Google verification code in `app/layout.tsx`
- [ ] Create and add OG image at `public/og-image.png` (1200x630px)
- [ ] Create favicon and icons (`public/icon-192.png`, `public/icon-512.png`)
- [ ] Update sitemap URLs in `app/sitemap.ts`
- [ ] Review and update `robots.txt` if needed
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console
- [ ] Test performance with Lighthouse (target: >90 score)

### Performance Optimization

This portfolio is optimized for maximum performance:

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Next.js font optimization with `next/font`
- **Smooth Scroll**: Hardware-accelerated with Lenis
- **Lazy Loading**: Images and heavy components load on demand

**Expected Lighthouse Scores:**
- Performance: 90-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

## 🧪 Testing

```bash
# Run linter
pnpm lint

# Format code
pnpm format
```

## 📂 Key Files

- **`data/portfolio.ts`**: Source of truth for all content (projects, experience, skills)
- **`libs/types/content.ts`**: TypeScript interface definitions
- **`libs/utils/animations.ts`**: Framer Motion animation variants
- **`services/api/apiClient.ts`**: Centralized API client

## 🎯 Customization

### Update Content

Edit `data/portfolio.ts` to update:
- Personal information
- Projects
- Experience
- Services
- Skills

### Modify Design

Edit `tailwind.config.ts` to customize:
- Colors
- Typography scale
- Animations

### Add New Pages

Create new directories in `app/` following Next.js App Router conventions.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Mohd Saqib Khan**
- Email: mohdsaqibkhan7008@gmail.com
- GitHub: [@Saqib7khan](https://github.com/Saqib7khan)
- LinkedIn: [saqib-khan-0070sk33515](https://linkedin.com/in/saqib-khan-0070sk33515)

---

Built with ❤️ using Next.js and TypeScript
