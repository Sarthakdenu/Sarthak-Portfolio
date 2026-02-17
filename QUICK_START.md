# 🚀 Quick Start Guide - Sarthak Vyas Portfolio

## ⚡ Installation & Setup (5 minutes)

### Step 1: Prerequisites
Make sure you have Node.js installed (v16 or higher)
```bash
node --version  # Should show v16.x.x or higher
```

### Step 2: Install Dependencies
```bash
cd sarthak-portfolio
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open your browser to `http://localhost:5173` 🎉

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.jsx`)
   - Line 13-17: Update achievements array
   - Line 75: Update your name
   - Line 85: Update subtitle

2. **About Section** (`src/sections/About.jsx`)
   - Line 16-39: Update highlights
   - Line 42-54: Update timeline
   - Line 66-76: Update personal story

3. **Projects Section** (`src/sections/Projects.jsx`)
   - Line 11-77: Update projects array with your projects
   - Add GitHub links and live demo links

4. **Contact Section** (`src/sections/Contact.jsx`)
   - Line 45-63: Update contact information
   - Update email, phone, location

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: {
    purple: '#a855f7',  // Change this
    cyan: '#06b6d4',     // Change this
    neon: '#00ffff',     // Change this
  }
}
```

### Add Resume Download

1. Add your resume PDF to `public/resume.pdf`
2. The download button in Hero section will work automatically

## 📱 Testing Checklist

- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iOS Safari, Chrome Mobile)
- [ ] Test on tablet
- [ ] Check all animations work
- [ ] Verify all links open correctly
- [ ] Test contact form
- [ ] Check scroll behavior
- [ ] Verify navigation menu

## 🚀 Deploy to Vercel (Fastest)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your portfolio is live! 🎉

## 🎯 Performance Tips

- Images: Use WebP format and compress
- Fonts: Already optimized with font-display: swap
- Animations: Using GPU-accelerated properties
- Code splitting: Handled by Vite automatically

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check error messages and fix accordingly
```

## 📚 Tech Stack Reference

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animation library
- **React Icons**: Icon components

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 💡 Tips for Customization

1. **Add more sections**: Copy existing section structure
2. **Change fonts**: Update Google Fonts link in `index.html`
3. **Add blog**: Create new section in `src/sections/`
4. **Add analytics**: Add Google Analytics in `index.html`
5. **Dark/Light mode**: Implement theme toggle in Navbar

## 🔥 Advanced Features to Add

- [ ] Blog section with markdown support
- [ ] Theme switcher (dark/light)
- [ ] Cursor effects
- [ ] Particle.js background
- [ ] Three.js 3D elements
- [ ] Spotify now playing widget
- [ ] GitHub contribution graph

## 📧 Support

If you need help:
1. Check existing issues on GitHub
2. Read documentation carefully
3. Search for similar problems online
4. Ask in web dev communities

---

**Remember**: This is YOUR portfolio. Make it unique! 

Good luck! 🌟
