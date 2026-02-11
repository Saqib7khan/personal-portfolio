# Asset Creation Guide

This guide helps you create all required images and assets for optimal SEO and user experience.

## Required Assets

### 1. Open Graph Image (OG Image)
- **File:** `public/og-image.png`
- **Dimensions:** 1200 x 630 pixels
- **Format:** PNG or JPG
- **Purpose:** Social media previews (LinkedIn, Twitter, Facebook)

#### Design Guidelines:
- Background: White (#FFFFFF)
- Text: Black (#000000)
- Content:
  - Name: "Mohd Saqib Khan"
  - Title: "Developer & CS Student"
  - Subtitle: "AI/ML • Web Development • Cloud Architecture"
- Typography: Large, bold sans-serif
- Keep text in "safe zone" (center 80% of image)

#### Tools to Create:
- **Figma** (recommended) - Use templates from Figma Community
- **Canva** - Search for "Open Graph Image" templates
- **Photoshop/GIMP** - Manual design
- **Code** - Generate programmatically with `@vercel/og`

#### Quick Creation with Figma:
1. Create new file: 1200 x 630 px
2. Set background: #FFFFFF
3. Add text:
   - "Mohd Saqib Khan" - 72px, bold
   - "Developer & CS Student" - 36px, regular
   - "AI/ML • Web Dev • Cloud" - 24px, regular
4. Center align all text
5. Export as PNG

### 2. Favicon
- **File:** `public/favicon.ico`
- **Dimensions:** 32 x 32 pixels (multi-size ICO recommended)
- **Format:** ICO
- **Purpose:** Browser tab icon

#### Create Favicon:
1. Design a simple icon (your initials "MSK" or a logo)
2. Use tools:
   - **RealFaviconGenerator**: https://realfavicongenerator.net
   - **Favicon.io**: https://favicon.io
   - **Canva**: Create 512x512, then convert
3. Upload 512x512 PNG and download all sizes

### 3. PWA Icons
Required for Progressive Web App support:

#### Icon 192x192
- **File:** `public/icon-192.png`
- **Dimensions:** 192 x 192 pixels
- **Format:** PNG

#### Icon 512x512
- **File:** `public/icon-512.png`
- **Dimensions:** 512 x 512 pixels
- **Format:** PNG

#### Design Guidelines:
- Simple, recognizable icon
- Works at small sizes
- Transparent or white background
- Your initials or a logo

#### Quick Creation:
1. Design one 512x512 icon
2. Use **RealFaviconGenerator** to generate all sizes
3. Or use this script to resize:
   ```bash
   # Using ImageMagick
   convert icon-512.png -resize 192x192 icon-192.png
   ```

### 4. Project Images (Optional)
- **Location:** `public/images/projects/`
- **Naming:** `<project-slug>.jpg` or `.png`
- **Dimensions:** 800 x 600 pixels (4:3 ratio recommended)
- **Format:** WebP (preferred) or JPG

#### For Each Project:
1. Screenshot or mockup of the project
2. Optimize for web (compress to < 200KB)
3. Use descriptive filenames

## Tools & Resources

### Design Tools
- **Figma**: https://figma.com (Free tier available)
- **Canva**: https://canva.com (Templates for OG images)
- **Photopea**: https://photopea.com (Free Photoshop alternative)

### Icon Generators
- **RealFaviconGenerator**: https://realfavicongenerator.net
- **Favicon.io**: https://favicon.io
- **App Icon Generator**: https://appicon.co

### Image Optimization
- **TinyPNG**: https://tinypng.com (Compress PNG/JPG)
- **Squoosh**: https://squoosh.app (Image compression)
- **ImageOptim**: https://imageoptim.com (Mac only)

### OG Image Testing
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug
- **Open Graph Preview**: https://www.opengraph.xyz

## Automated Generation (Advanced)

### Using @vercel/og (Generate OG images programmatically)

Install:
```bash
pnpm add @vercel/og
```

Create API route `app/api/og/route.tsx`:
```tsx
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 40,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold' }}>
          Mohd Saqib Khan
        </div>
        <div style={{ fontSize: 36, marginTop: 20 }}>
          Developer & CS Student
        </div>
        <div style={{ fontSize: 24, marginTop: 20, color: '#888' }}>
          AI/ML • Web Development • Cloud Architecture
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

## Quick Start Checklist

- [ ] Create OG image (1200x630) → `public/og-image.png`
- [ ] Create favicon (32x32) → `public/favicon.ico`
- [ ] Create PWA icon 192 → `public/icon-192.png`
- [ ] Create PWA icon 512 → `public/icon-512.png`
- [ ] Add project screenshots → `public/images/projects/`
- [ ] Test OG image with social media validators
- [ ] Verify favicon appears in browser tab
- [ ] Check PWA icons in mobile "Add to Home Screen"

## Placeholder Templates

If you don't have custom images ready, use these placeholders:

### OG Image Placeholder
1. Go to https://placehold.co/1200x630/000000/FFFFFF/png
2. Add text: "?text=Mohd+Saqib+Khan&font=Inter"
3. Download and rename to `og-image.png`

### Favicon Placeholder
1. Go to https://favicon.io/favicon-generator/
2. Enter "MSK" as text
3. Choose colors: Background #000000, Text #FFFFFF
4. Download and extract to `public/`

---

**Note:** Replace all placeholder images with professional designs before production deployment.
