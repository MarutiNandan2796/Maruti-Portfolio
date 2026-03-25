# 🚀 START HERE - Quick Start Guide

## 30 Seconds to Running Your Portfolio

### 1️⃣ Open Terminal in Portfolio Folder
```bash
cd portfolio
```

### 2️⃣ Install & Run
```bash
npm install
npm run dev
```

### 3️⃣ Open Browser
- Automatically opens at `http://localhost:3000`
- OR manually go to `http://localhost:3000`

**That's it! Your portfolio is running! 🎉**

---

## Next: Customize Your Portfolio (5 Minutes)

### Essential Changes

#### 👤 Update Your Name
**File**: `src/components/Hero.jsx` (Lines 58-62)

Find:
```javascript
<span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
  Creative Developer
</span>
<br />
<span className="text-gray-300">Building Digital Experiences</span>
```

Replace with your title and tagline.

#### 📧 Add Your Email & Contact Info
**File**: `src/components/Contact.jsx` (Lines 44-56)

```javascript
const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',  // ← Update this
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'hello@example.com',  // ← Update this
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'San Francisco, CA',  // ← Update this
  },
]
```

#### 🚀 Add Your Projects
**File**: `src/components/Projects.jsx` (Lines 5-41)

```javascript
const projects = [
  {
    title: 'My Project Name',
    description: 'What this project does...',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '🚀',  // Use any emoji or 404 for image
    link: 'https://my-project-link.com',
    github: 'https://github.com/username/repo',
  },
  // Add more projects...
]
```

#### 💻 Update Your Skills
**File**: `src/components/Skills.jsx` (Lines 5-22)

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  // Update categories and skills...
]
```

---

## Colors & Theme (2 Minutes)

### Change Primary Color
**File**: `tailwind.config.js` (Lines 8-11)

```javascript
colors: {
  primary: '#6366f1',      // Change to your color (hex)
  secondary: '#ec4899',     // Change to your accent color
  dark: '#0f172a',
  darkCard: '#1e293b',
},
```

**Color Ideas**:
- Blue: `#0066ff`
- Green: `#10b981`
- Purple: `#a855f7`
- Red: `#ef4444`
- Orange: `#f97316`

---

## Deploy to Web (5 Minutes)

### Option A: Vercel (Recommended)

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Click Deploy
5. Done! Your site is live 🎉

### Option B: Netlify

1. Go to https://app.netlify.com/signup
2. Connect your GitHub
3. Select your portfolio repo
4. Deploy
5. Done!

---

## File Structure Quick Reference

```
📁 portfolio/
├── 📄 package.json          ← Installed packages
├── 🎨 tailwind.config.js    ← Colors & theme
├── 📄 index.html            ← Main HTML
├── 📁 src/
│   ├── 📄 main.jsx          ← Entry point
│   ├── 📄 App.jsx           ← Main component
│   ├── 📄 index.css         ← Global styles
│   ├── 📁 components/       ← All sections
│   │   ├── Navbar.jsx       ← Top menu
│   │   ├── Hero.jsx         ← Hero section
│   │   ├── About.jsx        ← About section
│   │   ├── Projects.jsx     ← Projects showcase
│   │   ├── Skills.jsx       ← Skills section
│   │   ├── Contact.jsx      ← Contact form
│   │   └── Footer.jsx       ← Footer
│   └── 📁 hooks/
│       └── useInView.js     ← Custom hook
└── 📄 README.md             ← Full documentation
```

---

## Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop server
Ctrl + C
```

---

## Frequently Asked Questions

### Q: Port 3000 is already in use?
```bash
npm run dev -- --port 3001
```

### Q: Changes not showing?
- Ctrl + Shift + R (hard refresh)
- Or restart: Ctrl + C, then npm run dev

### Q: How to check if it works?
- Run `npm run build`
- Check if `dist` folder is created

### Q: How to customize hover effects?
Edit the `whileHover` properties in components:
```javascript
whileHover={{ scale: 1.1 }}  // Change 1.1 to scale amount
```

---

## What's Included

✅ 7 Fully Animated Sections
✅ Responsive Mobile Design
✅ Modern Dark Theme
✅ Smooth Animations
✅ Contact Form
✅ Project Showcase
✅ Skills Display
✅ Social Links
✅ Fast Performance
✅ Easy Customization

---

## Next Steps Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Update your name
- [ ] Add your projects
- [ ] Update contact info
- [ ] Customize colors
- [ ] Test on mobile
- [ ] Run `npm run build`
- [ ] Deploy to Vercel/Netlify

---

## Need More Help?

📖 Read: `README.md` - Full documentation
📋 Setup: `SETUP.md` - Detailed setup guide
✨ Features: `FEATURES.md` - All features explained
🎨 Styling: Edit `src/index.css` for custom styles

---

**🎉 You're all set! Your portfolio is ready to impress companies!**

Happy coding! 🚀
