# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode design, and a professional layout perfect for showcasing your work.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx          # About section with skills
│   │   ├── Contact.tsx        # Contact form and social links
│   │   ├── Experience.tsx     # Work experience and achievements
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── Navigation.tsx     # Navigation bar
│   │   └── Projects.tsx       # Featured projects showcase
│   ├── App.tsx                # Main app component
│   ├── index.css              # Global styles and Tailwind imports
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # Vite type definitions
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, role, and intro text
   - Modify social media links (GitHub, LinkedIn)
   - Update resume download link

2. **About Section** (`src/components/About.tsx`):
   - Edit the about me description
   - Update skill categories and technologies

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace project data in the `projects` array
   - Update project titles, descriptions, technologies, and links

4. **Experience Section** (`src/components/Experience.tsx`):
   - Modify the `experiences` array with your work history
   - Add or remove experience/achievement items

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address
   - Modify social media links and handles
   - Connect the contact form to your backend/email service

### Styling

- **Colors**: Modify the primary color scheme in `tailwind.config.js`
- **Global Styles**: Update `src/index.css` for custom styles
- **Component Styles**: Each component uses Tailwind classes for easy customization

## 📝 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode by default
- ✅ Smooth scroll animations
- ✅ Interactive navigation with mobile menu
- ✅ Contact form UI (ready for backend integration)
- ✅ Professional, recruiter-friendly layout
- ✅ SEO-friendly structure
- ✅ TypeScript for type safety
- ✅ Modern, clean code architecture

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ using React + TypeScript + Vite
