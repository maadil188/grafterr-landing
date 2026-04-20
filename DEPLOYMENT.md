# Deployment Guide - Grafterr Landing Page

## Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- GitHub account
- Vercel or Netlify account (for live deployment)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
# Navigate to project directory
cd grafterr-landing

# Create a new GitHub repository
# Then run:
git remote add origin https://github.com/YOUR-USERNAME/grafterr-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select GitHub and authenticate
4. Find and select `grafterr-landing` repository
5. Vercel will automatically detect it's a Vite/React app
6. Click "Deploy"
7. Your app will be live at `https://grafterr-landing-YOUR-USERNAME.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel Dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR-USERNAME/grafterr-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Choose GitHub
4. Authenticate and authorize Netlify
5. Select `grafterr-landing` repository
6. Build settings will be auto-filled:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Your app will be live at `https://YOUR-SITE-NAME.netlify.app`

## Option 3: Deploy to GitHub Pages

### Step 1: Update vite.config.js
```javascript
export default {
  base: '/grafterr-landing/', // Add this line
  plugins: [react()],
}
```

### Step 2: Build and Deploy
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Local Development

### Start Development Server
```bash
npm install
npm run dev
# Visit http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output will be in `dist/` folder
```

### Preview Production Build
```bash
npm run preview
```

## Environment Setup

### For Local Testing

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/grafterr-landing.git
   cd grafterr-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: http://localhost:5173
   - Network: http://YOUR-IP:5173

## Performance Optimization

The build is already optimized with:
- CSS minification (~3.26 kB gzip)
- JavaScript minification (~62.85 kB gzip)
- Code splitting for efficient loading
- CSS animations on GPU (using transform)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`
- Check Node version: `node -v` (should be 18+)

### Content Not Loading
- Verify `public/content.json` exists
- Check browser console for fetch errors
- Ensure JSON is valid

### Images Not Showing
- Placeholder SVG shows if image file is missing
- Add image files to `public/images/`
- Path format: `/images/filename.jpg`

## Deployment Checklist

- [ ] All code committed to git
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Content loading works (check for loading state)
- [ ] Carousel navigation works
- [ ] Links are functional
- [ ] Images load correctly
- [ ] Performance is acceptable
- [ ] SEO metadata is set

## CI/CD Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Monitoring & Analytics (Optional)

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support & Questions

For issues or questions:
1. Check the README.md for setup instructions
2. Review error messages in browser console
3. Check the troubleshooting section above
4. Open a GitHub issue for bugs

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

**Note**: This deployment guide covers the most common deployment scenarios. For additional deployment options or custom configurations, refer to the official documentation of your chosen platform.
