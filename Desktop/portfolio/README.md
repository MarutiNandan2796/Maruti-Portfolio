# 🎨 Professional Animated Portfolio

A modern, attractive portfolio website built with React and Framer Motion. Perfect for showcasing your projects to companies and clients.

## ✨ Features

- **Smooth Animations**: Beautiful transitions and animations using Framer Motion
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth interactions
- **Professional Sections**:
  - Hero section with eye-catching introduction
  - About section with skills highlights
  - Projects showcase with links to code and live demos
  - Skills & expertise section with stats
  - Contact form with validation
  - Footer with social links
- **Dark Theme**: Easy on the eyes with modern color palette
- **Optimized Performance**: Fast loading with optimized animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About you section
│   │   ├── Projects.jsx        # Featured projects showcase
│   │   ├── Skills.jsx          # Skills and expertise
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── hooks/
│   │   └── useInView.js        # Custom intersection observer hook
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## 🎨 Customization Guide

### 1. **Personal Information**
Edit `src/components/Hero.jsx` to update:
- Your name and title
- Professional summary
- Social media links
- Call-to-action buttons

### 2. **Projects**
Edit `src/components/Projects.jsx`:
- Add/remove projects from the `projects` array
- Update project titles, descriptions, and technologies
- Add links to GitHub and live demos

### 3. **Skills**
Edit `src/components/Skills.jsx`:
- Update skill categories and individual skills
- Modify stats (projects completed, years of experience, etc.)

### 4. **About Section**
Edit `src/components/About.jsx`:
- Update your bio and professional experience
- Add achievements and highlights
- Customize the profile image (emoji or actual image)

### 5. **Contact Information**
Edit `src/components/Contact.jsx`:
- Update phone, email, and location
- Configure form submission (connect to your backend)
- Add more social media links

### 6. **Colors & Theme**
Edit `tailwind.config.js` to customize:
```javascript
colors: {
  primary: '#6366f1',      // Main color (purple/indigo)
  secondary: '#ec4899',    // Accent color (pink)
  dark: '#0f172a',         // Dark background
  darkCard: '#1e293b',     // Card background
}
```

## 🎬 Animation Customization

All animations use Framer Motion. Key animation files:
- Component-level animations use `motion` components
- Global animations defined in `src/index.css`
- Hover effects and transitions can be modified in each component

Common animation properties:
```jsx
// Fade in animation
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}

// Scale animation
whileHover={{ scale: 1.05 }}

// Slide animation
initial={{ x: -50 }}
animate={{ x: 0 }}
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

#### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📚 Technologies Used

- **React 18** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation build tool
- **React Icons** - Icon library

## 💡 Pro Tips

1. **Add a profile picture**: Replace the emoji in the About section with an actual image
2. **SEO Optimization**: Update the meta tags in `index.html`
3. **Analytics**: Add Google Analytics or similar tracking
4. **Email Form**: Connect the contact form to a backend service (Formspree, EmailJS, etc.)
5. **Custom Domain**: Purchase a domain and point it to your deployed site

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

Feel free to use this template for your personal portfolio.

## 🎯 Ready to Impress Companies?

Your portfolio is now:
- ✅ Modern and professional
- ✅ Fast and responsive
- ✅ Fully animated and interactive
- ✅ Easy to customize
- ✅ Ready to deploy

Good luck! 🚀
