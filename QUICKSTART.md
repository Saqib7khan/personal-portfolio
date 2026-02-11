# 🚀 Quick Deployment Guide

Get your portfolio live in under 15 minutes!

## Pre-Flight Checklist (5 minutes)

### 1. Content Review
```bash
# Open and verify your data
code data/portfolio.ts
```
- [ ] Personal info is correct (name, email, phone)
- [ ] All projects are listed
- [ ] Social links are accurate

### 2. Create Essential Images (3 minutes)

#### Quick Method (Placeholders):
```bash
# Download these placeholders (right-click → save as):
```
1. **OG Image** → [Download](https://placehold.co/1200x630/000000/FFFFFF/png?text=Mohd+Saqib+Khan&font=inter)
   - Save as: `public/og-image.png`

2. **Icon 512** → [Download](https://placehold.co/512x512/000000/FFFFFF/png?text=MSK&font=inter)
   - Save as: `public/icon-512.png`

3. **Icon 192** → [Download](https://placehold.co/192x192/000000/FFFFFF/png?text=MSK&font=inter)
   - Save as: `public/icon-192.png`

4. **Favicon** → Use [favicon.io generator](https://favicon.io/favicon-generator/)
   - Text: "MSK"
   - Colors: Background #000000, Text #FFFFFF
   - Save `favicon.ico` to `public/`

### 3. Check Assets
```bash
npm run check-assets
```

### 4. Update URLs
Open `app/layout.tsx` and update line 17:
```typescript
metadataBase: new URL("https://your-actual-domain.com"),
```

---

## Deployment (10 minutes)

### Method 1: Vercel (Recommended) ⚡

#### Step 1: Push to GitHub
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: Portfolio ready for deployment"

# Create repo on GitHub: https://github.com/new
# Name: portfolio

# Connect and push
git remote add origin https://github.com/Saqib7khan/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your `portfolio` repository
4. **Leave all settings as default** (Vercel auto-detects Next.js)
5. Click "Deploy"
6. Wait 2-3 minutes ☕

#### Step 3: Your Site is Live! 🎉
- URL: `https://your-project.vercel.app`
- Share it: LinkedIn, Twitter, Email

---

### Method 2: Netlify 🌐

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Follow the prompts, and you're live!

---

## Post-Deployment (5 minutes)

### 1. Test Your Site
- [ ] Visit your live URL
- [ ] Test all navigation links
- [ ] Check mobile view (use browser DevTools)
- [ ] Share link on LinkedIn and verify OG image appears

### 2. Set Up Custom Domain (Optional)

#### Buy Domain
- Namecheap: ~$10/year
- GoDaddy: ~$12/year
- Google Domains: ~$12/year

#### Connect to Vercel
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `mohdsaqibkhan.com`)
3. Follow DNS instructions:
   - **A Record**: `76.76.21.21`
   - **CNAME www**: `cname.vercel-dns.com`
4. Wait for DNS propagation (5 minutes to 48 hours)

### 3. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://yourdomain.com`
3. Verify ownership (HTML tag is already in your site!)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 4. Monitor Performance
1. Vercel Dashboard → Analytics (Free tier)
2. Run Lighthouse in Chrome DevTools
   - Target: 90+ score on all metrics

---

## Troubleshooting

### Build Fails on Vercel
```bash
# Test build locally first
npm run build

# Fix any errors, then push again
git add .
git commit -m "Fix build errors"
git push
```

### Images Not Loading
- Make sure all images are in `public/` folder
- Use `/image.png` not `./image.png` in your code

### OG Image Not Showing on Social Media
1. Clear cache: [opengraph.xyz](https://www.opengraph.xyz)
2. Verify image exists at: `https://yourdomain.com/og-image.png`
3. Dimensions must be exactly 1200x630px

### Custom Domain Not Working
- DNS can take up to 48 hours
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify A record points to `76.76.21.21`

---

## Next Steps

### Improve Your Portfolio
- [ ] Replace placeholder images with professional designs
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Write detailed project descriptions
- [ ] Add blog/case studies (create `app/blog/` directory)

### SEO & Marketing
- [ ] Share on LinkedIn with project highlights
- [ ] Add to GitHub profile README
- [ ] Submit to portfolio directories (Dribbble, Behance)
- [ ] Tweet about it with #buildinpublic

### Keep It Updated
- [ ] Update monthly with new projects
- [ ] Monitor analytics quarterly
- [ ] Update dependencies every 3 months:
  ```bash
  npm update
  npm run build
  git commit -am "Update dependencies"
  git push
  ```

---

## Commands Cheat Sheet

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Build for production
npm run start           # Start production server locally
npm run lint            # Check for errors
npm run check-assets    # Verify all images exist
npm run pre-deploy      # Run all checks before deploying

# Git
git status              # Check what changed
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to GitHub

# Deployment
vercel                  # Deploy to preview
vercel --prod           # Deploy to production
```

---

## Support

Need help? Check these resources:

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Issues**: See `DEPLOYMENT.md`
- **Asset Creation**: See `ASSETS.md`

---

**Ready? Let's deploy! 🚀**

```bash
npm run pre-deploy && git push
```

Then go to Vercel and click "Deploy". Your portfolio will be live in 3 minutes!
