# Deployment Checklist

Use this checklist before deploying to production to ensure optimal SEO, performance, and user experience.

## Pre-Deployment

### Content Review
- [ ] All project data is accurate in `data/portfolio.ts`
- [ ] Personal information is up-to-date (email, phone, socials)
- [ ] Project images are placed in `public/images/`
- [ ] Project descriptions are finalized
- [ ] About page bio is complete and proofread
- [ ] Experience timeline is accurate

### SEO Setup
- [ ] Update `metadataBase` URL in `app/layout.tsx` to your production URL
- [ ] Replace placeholder Google verification code in `app/layout.tsx`
- [ ] Update all URLs in `app/sitemap.ts` to production domain
- [ ] Create Open Graph image (`public/og-image.png`) - 1200x630px
- [ ] Create favicon (`public/favicon.ico`)
- [ ] Create PWA icons:
  - `public/icon-192.png` (192x192px)
  - `public/icon-512.png` (512x512px)
- [ ] Review `robots.txt` for correct sitemap URL
- [ ] Test structured data at https://search.google.com/test/rich-results

### Performance Optimization
- [ ] All images are optimized (use WebP format when possible)
- [ ] Images are appropriately sized (not larger than displayed)
- [ ] No console errors or warnings
- [ ] Test build locally: `pnpm build && pnpm start`
- [ ] Check bundle size: `pnpm build` (should see size report)
- [ ] Verify no unused dependencies in `package.json`

### Accessibility
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Verify focus states are visible
- [ ] Test with screen reader (NVDA on Windows / VoiceOver on Mac)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Motion respects `prefers-reduced-motion`

### Environment Configuration
- [ ] Create `.env.local` for local development
- [ ] Add environment variables to Vercel/Netlify:
  - `NEXT_PUBLIC_GA_ID` (if using Google Analytics)
  - Any API keys or secrets
- [ ] Never commit `.env.local` to Git
- [ ] Update `.env.example` with required variables

### Code Quality
- [ ] Run linter: `pnpm lint` (0 errors)
- [ ] Run type check: `pnpm build` (0 type errors)
- [ ] Remove all `console.log` statements
- [ ] Remove all TODO comments or create issues
- [ ] Code is formatted: `pnpm format` (if configured)

## Deployment

### Git & GitHub
- [ ] Create GitHub repository: `Saqib7khan/portfolio`
- [ ] Initialize Git: `git init`
- [ ] Add all files: `git add .`
- [ ] Initial commit: `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin <repository-url>`
- [ ] Push to GitHub: `git push -u origin main`

### Vercel Deployment
- [ ] Sign in to Vercel with GitHub account
- [ ] Import repository from GitHub
- [ ] Configure project settings:
  - Framework: Next.js
  - Build Command: `pnpm build` (or default)
  - Output Directory: `.next` (default)
  - Install Command: `pnpm install` (or default)
- [ ] Add environment variables
- [ ] Deploy and wait for build to complete
- [ ] Verify deployment URL works correctly

### Custom Domain (Optional)
- [ ] Purchase domain (recommended: `mohdsaqibkhan.com`)
- [ ] Add domain in Vercel project settings
- [ ] Configure DNS records:
  - A record: `76.76.21.21` (Vercel IP)
  - CNAME www: `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify SSL certificate is active

## Post-Deployment

### Testing
- [ ] Visit production URL and test all pages
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Run Lighthouse audit (target: >90 on all metrics)
- [ ] Test Open Graph preview (LinkedIn, Twitter, Facebook)
- [ ] Check network tab for large bundle sizes or slow requests

### SEO Configuration
- [ ] Set up Google Search Console
  - Add property
  - Verify ownership (use meta tag from `layout.tsx`)
  - Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Set up Google Analytics (optional)
  - Create GA4 property
  - Add tracking ID to environment variables
  - Verify tracking is working
- [ ] Submit to Bing Webmaster Tools (optional)

### Monitoring
- [ ] Set up Vercel Analytics (free tier)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Check for errors in Vercel deployment logs
- [ ] Set up uptime monitoring (optional: UptimeRobot)

### Documentation
- [ ] Update README.md with production URL
- [ ] Document any custom configurations
- [ ] Create backup of production environment variables
- [ ] Tag release in Git: `git tag v1.0.0 && git push --tags`

## Maintenance

### Regular Updates
- [ ] Update dependencies monthly: `pnpm update`
- [ ] Test after updates: `pnpm build && pnpm start`
- [ ] Review analytics for user behavior insights
- [ ] Update content as new projects are completed
- [ ] Monitor Google Search Console for indexing issues

### Performance Monitoring
- [ ] Run Lighthouse monthly
- [ ] Check bundle size after adding features
- [ ] Monitor Core Web Vitals in production
- [ ] Review and optimize slow pages

---

**Last Updated:** February 11, 2026

**Production URL:** _To be added after deployment_

**Vercel Project:** _To be added after deployment_
