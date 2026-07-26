# Deployment Instructions for XtraMetrik Landing Page

## Overview
This is a professional landing page for XtraMetrik built with Next.js 16, React 19, and Tailwind CSS. The site is fully responsive, performs excellently, and is optimized for conversion.

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast performance with Next.js 16 and Turbopack
- ✅ Professional color scheme (Navy Blue #003B7A + Gold #D4AF37)
- ✅ Multiple sections: Hero, Features, Benefits, Pricing, CTA, Footer
- ✅ Navigation with smooth scrolling
- ✅ Contact form integration ready
- ✅ SEO optimized metadata

## Sections
1. **Header** - Fixed navigation with mobile menu
2. **Hero** - Compelling headline with CTAs
3. **Features** - 6 key capabilities with icons
4. **Benefits** - Business value proposition
5. **Pricing** - 3-tier pricing plans
6. **CTA** - Email capture form
7. **Footer** - Links and social connections

## Deployment to xtrametrik.com (Hosted at Zoho)

### Option 1: Deploy to Vercel (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit: XtraMetrik landing page"
git remote add origin https://github.com/YOUR_USERNAME/xtrametrik.git
git push -u origin main

# 2. Import to Vercel
# - Go to vercel.com
# - Click "Import Project"
# - Select your GitHub repository
# - Deploy

# 3. Configure Custom Domain
# - In Vercel settings, add xtrametrik.com
# - Update DNS records at Zoho
```

### Option 2: Deploy to Zoho Hosting Directly

#### Step 1: Export the Project
```bash
# Build the project
npm run build

# The .next folder contains the production build
```

#### Step 2: Upload to Zoho
1. Go to Zoho Sites or your hosting provider
2. Connect your domain (xtrametrik.com)
3. Upload the `.next` and `public` folders
4. Set up Node.js environment variables

#### Step 3: DNS Configuration (in Zoho)
- Add A record pointing to your hosting IP
- Wait 24-48 hours for DNS propagation

### Option 3: Use a Node.js Hosting Service
If Zoho doesn't support Node.js directly:

1. Deploy to platforms like:
   - Railway.app
   - Render.com
   - Fly.io
   - AWS EC2

2. Point xtrametrik.com DNS to the hosting service

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables
None required for this landing page, but add these if implementing backend features:

```env
DATABASE_URL=          # If using database
API_KEY=              # If using external APIs
```

## Customization

### Colors
Edit `/app/globals.css` to change the color scheme:
```css
--primary: #003B7A;      /* Main navy blue */
--accent: #D4AF37;       /* Gold highlights */
```

### Content
- Header/Navigation: `/components/header.tsx`
- Hero: `/components/hero.tsx`
- Features: `/components/features.tsx`
- Pricing: `/components/pricing.tsx`
- CTA/Contact: `/components/cta.tsx`
- Footer: `/components/footer.tsx`

### Forms
To make the email capture form functional:

1. **Email Service Integration** (update `/components/cta.tsx`):
   - Mailchimp
   - SendGrid
   - Zoho CRM (recommended since you use Zoho)

2. **Database** (optional):
   - Add Neon or Supabase for storing leads

## Performance Metrics
- ✅ Core Web Vitals optimized
- ✅ Mobile-first design
- ✅ Zero unused CSS
- ✅ Optimized images
- ✅ Fast time to interactive

## SEO Setup
- Meta tags configured for XtraMetrik
- Open Graph tags for social sharing
- Structured data ready for implementation

## Support & Maintenance
- Regular security updates via npm
- Monitor Core Web Vitals in Google Search Console
- Test on multiple devices and browsers
- Keep Next.js and dependencies updated

## Next Steps
1. Choose a deployment platform
2. Configure domain at Zoho
3. Set up analytics (Google Analytics, Mixpanel)
4. Implement email capture backend
5. Add blog section for content marketing
6. Set up email notifications for leads
