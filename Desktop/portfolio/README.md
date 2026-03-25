# 🎨 Professional Animated Portfolio

A modern, attractive portfolio website built with **React**, **Framer Motion**, **Vite**, and **Tailwind CSS**. Perfect for showcasing your projects to companies and clients with stunning animations and professional design.

**Live Demo:** [Visit Portfolio](https://your-portfolio-url.com)  
**GitHub Repo:** [MarutiNandan2796/portfolio-full-stack01](https://github.com/MarutiNandan2796/portfolio-full-stack01)

## ✨ Features

- **✨ Advanced Animations**: 
  - Mesmerizing loading screen with 15+ synchronized animations
  - Floating particles, rotating rings, and pulsing energy waves
  - Animated circuit paths and scanning beams
  - Enhanced footer with decorative elements
  - Smooth component transitions and hover effects

- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

- **🎨 Modern UI**: 
  - Gradient backgrounds and glassmorphism effects
  - Cyberpunk aesthetic with neon glows
  - Dark theme optimized for presentation
  - Professional color palette (cyan, pink, purple)

- **🌟 Professional Sections**:
  - Landing page with eye-catching hero section
  - About section with professional summary
  - Projects showcase with live demos and GitHub links
  - Skills & expertise section with technology highlights
  - Contact form with validation
  - Animated footer with interactive elements
  - Certifications and education sections

- **⚡ Performance Optimized**: 
  - Fast loading with Vite
  - Optimized animations for smooth 60fps
  - Lazy loading for images
  - Code splitting and minification

- **🌙 Dark Mode**: Beautiful dark theme perfect for tech portfolios

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn** package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MarutiNandan2796/portfolio-full-stack01.git
cd portfolio-full-stack01
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

5. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Loader.jsx              # ⚡ Advanced loading screen with animations
│   │   ├── Navbar.jsx              # Navigation with smooth scroll
│   │   ├── Hero.jsx                # Landing section
│   │   ├── About.jsx               # About section
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Skills.jsx              # Skills & expertise
│   │   ├── Education.jsx           # Education details
│   │   ├── Certifications.jsx      # Certificates display
│   │   ├── Contact.jsx             # Contact form
│   │   ├── CodingPlatforms.jsx     # Coding profiles (LeetCode, etc.)
│   │   ├── ExpertiseShowcase.jsx   # Expertise highlights
│   │   └── Footer.jsx              # Footer with animations
│   ├── context/
│   │   └── DarkModeContext.jsx     # Dark mode state management
│   ├── hooks/
│   │   └── useInView.js            # Intersection observer hook
│   ├── App.jsx                     # Main App component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   ├── resume.pdf                  # Your resume
│   ├── internship-certificate.pdf  # Certificates
│   └── mern-stack.pdf              # MERN stack certificate
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── postcss.config.js               # PostCSS config
└── README.md                       # This file
```

## 🎨 Customization Guide

### 1. **Personal Information**
Edit `src/components/Hero.jsx`:
- Update your name and professional title
- Change your bio and introduction
- Add/update social media links
- Customize call-to-action buttons

### 2. **Projects Showcase**
Edit `src/components/Projects.jsx`:
- Add/remove projects from the projects array
- Update titles, descriptions, and technologies used
- Add GitHub repository links
- Add live demo URLs
- Update project images

### 3. **Skills & Technologies**
Edit `src/components/Skills.jsx`:
- Add/remove skill categories
- Update individual technologies
- Modify proficiency levels
- Update statistics

### 4. **About Section**
Edit `src/components/About.jsx`:
- Write your professional bio
- Add work experience details
- Include achievements
- Update profile picture

### 5. **Education & Certifications**
- Edit `src/components/Education.jsx` for degrees and courses
- Edit `src/components/Certifications.jsx` for certificates and achievements
- Upload certificate PDFs to `public/` folder

### 6. **Contact Information**
Edit `src/components/Contact.jsx`:
- Update email address
- Add phone number
- Update location
- Configure form submission

### 7. **Colors & Theme**
Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  colors: {
    primary: '#00d9ff',    // Cyan - Main color
    secondary: '#ec4899',  // Pink - Accent color
    dark: '#0f172a',       // Dark background
    darkCard: '#1e293b',   // Card background
  }
}
```

## 🎬 Animation Features

### Loading Screen (Loader.jsx)
- 60+ animated particles with fade and scale effects
- Rotating rings with 3+ synchronized orbital circles
- Pulsing energy waves expanding from center
- Floating symbols (✦, ◈, ✧, ●, ○, etc.)
- Animated scanning beams and wave lines
- Interactive code compilation display
- Typewriter effect for status text
- Percentage counter with glow effects

### Footer (Footer.jsx)
- Animated gradient background
- Floating particles with opacity effects
- Bouncing dot patterns (8 dots with staggered animation)
- Rotating center accents
- Pulsing decorative lines
- Enhanced heart animation for "Made with ❤️"
- Interactive hover effects on text elements

### Component Animations
- Smooth fade-in animations on scroll into view
- Scale and slide effects on hover
- Staggered animations for list items
- Color transition effects
- Glowing text shadows and effects

## 🛠️ Technologies Used

### Frontend
- **React 18+** - UI library
- **Vite** - Fast build tool
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first CSS
- **React Icons** - Icon library

### Development
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control
- **PostCSS** - CSS processing

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# GitHub push
git push origin main
```

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Update package.json with homepage URL
git push origin main
```

### AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

## 📸 Screenshots

- **Loader Screen**: Stunning 15+ animation effects
- **Hero Section**: Eye-catching introduction
- **Projects Showcase**: Interactive project cards
- **Skills Section**: Modern skill display with stats
- **Footer**: Animated footer with interactive elements

## 📝 Environment Variables

Create a `.env.example` file for configuration:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email@gmail.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Pull requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Maruti Nandan**
- GitHub: [@MarutiNandan2796](https://github.com/MarutiNandan2796)
- Email: contact@yourportfolio.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com)

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vite for ultra-fast development experience
- React team for the amazing library

## 📞 Support

Have questions or need help? Feel free to:
- Open an issue on GitHub
- Check existing documentation
- Review component comments for implementation details

---

⭐ If you found this helpful, please give it a star! It helps others discover the project.

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
