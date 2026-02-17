# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest platform for deploying Vite + React apps.

### Steps:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

Your site will be live in minutes!

## 🌐 Netlify

### Steps:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

## 📦 GitHub Pages

### Steps:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```js
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/'
})
```

4. Deploy:
```bash
npm run deploy
```

## 🔥 Firebase Hosting

### Steps:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configuration:
   - Public directory: `dist`
   - Single-page app: Yes
   - Overwrite index.html: No

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## 📋 Pre-Deployment Checklist

- [ ] Update personal information in all sections
- [ ] Add real project links
- [ ] Test on multiple devices
- [ ] Check all animations work smoothly
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Optimize images (if any added)
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test site speed with Lighthouse

## 🎯 Custom Domain

Most platforms (Vercel, Netlify) allow custom domains:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. Add custom domain in platform settings
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

## 🔒 Environment Variables

If you add features requiring API keys:

1. Create `.env` file (already in .gitignore)
2. Add variables:
```
VITE_API_KEY=your_key_here
```
3. Add to platform's environment settings
4. Access in code: `import.meta.env.VITE_API_KEY`

---

Happy deploying! 🎉
