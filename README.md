# Herlian Abdul Aziz - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and a functional contact form.

## 🚀 Live Demo

**[personal-website-herlian.vercel.app](https://personal-website-herlian.vercel.app/)**

## ✨ Features

- **Modern Design** - Clean, minimalist UI with smooth Framer Motion animations
- **Responsive** - Fully responsive design for all devices
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Project Showcase** - Dynamic project pages with image galleries
- **Tech Stack Marquee** - Animated infinite scroll displaying technologies
- **Contact Form** - Functional contact form powered by Formspree
- **SEO Optimized** - Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React + Simple Icons |
| Email | Formspree |
| Deployment | Vercel |

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/herlian-azis/personal-website.git

# Navigate to directory
cd personal-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Configuration

### Personal Info
Edit `src/lib/config.ts` to update your information.

### Projects
Add projects in `src/lib/projects.ts` with title, description, gallery, features, and links.

### Contact Form
Update Formspree endpoint in `src/components/ContactForm.tsx`.

## 📁 Project Structure

```
src/
├── app/              # Next.js pages
│   └── projects/     # Dynamic project detail pages
├── components/       # React components
│   └── ui/           # Reusable UI components
├── lib/              # Config & data
└── types/            # TypeScript interfaces
```

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production
npm run lint     # Run ESLint
```

## 📄 License

MIT License

## 🤝 Contact

- **Email:** azis6229@gmail.com
- **LinkedIn:** [Herlian Abdul Aziz](https://linkedin.com/in/herlian-aziz)
- **GitHub:** [@herlian-azis](https://github.com/herlian-azis)

---

Built with ❤️ by Herlian Abdul Aziz
