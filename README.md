# Portfolio Website

A clean, professional portfolio website built with React, TypeScript, and Tailwind CSS. Features a minimal design, dark theme, and a working contact form that sends emails via EmailJS.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
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

3. Set up environment variables:
```bash
cp .env.example .env
```

Then edit `.env` and add your EmailJS credentials (see [Contact Form Setup](#contact-form-setup) below).

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails without a backend. Follow these steps to configure it:

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) and connect your account
4. Copy the **Service ID** (e.g., `service_xxxxxxxx`)

### Step 3: Create an Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

   **Subject:** `Portfolio Contact: {{from_name}}`

   **Content:**
   ```
   You have a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

4. Save the template and copy the **Template ID** (e.g., `template_xxxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxx`)

### Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_YOUR_EMAIL=your.email@example.com
```

3. Restart your development server for changes to take effect

### Important Notes

- **Never commit your `.env` file** to version control (it's already in `.gitignore`)
- The free EmailJS plan includes 200 emails per month
- For production deployment, add these environment variables in your hosting platform (Vercel, Netlify, etc.)

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
   - Update email address and social media links
   - The contact form is already configured to use EmailJS (see [Contact Form Setup](#contact-form-setup))

### Styling

- **Colors**: Modify the primary color scheme in `tailwind.config.js`
- **Global Styles**: Update `src/index.css` for custom styles
- **Component Styles**: Each component uses Tailwind classes for easy customization

## 📝 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark theme by default
- ✅ Clean, minimal design optimized for recruiters
- ✅ Interactive navigation with mobile menu
- ✅ Working contact form with EmailJS integration
- ✅ Professional, confident content presentation
- ✅ TypeScript for type safety
- ✅ Modern, maintainable code architecture

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
4. **Important:** Add your environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env` file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_YOUR_EMAIL)

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. **Important:** Add your environment variables in Netlify:
   - Go to Site Settings → Environment Variables
   - Add all variables from your `.env` file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_YOUR_EMAIL)

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
- [EmailJS](https://www.emailjs.com/) for contact form email functionality
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ using React + TypeScript + Vite
