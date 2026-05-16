# Alvaro Montero Portfolio - Astro

Modern portfolio website built with Astro 5 and Tailwind CSS 4.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
cd astro
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view your site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets (images, favicons, etc.)
│   ├── img/
│   │   └── projects/   # Project images
│   ├── favicon/
│   └── manifest.json
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Intro.astro
│   │   ├── ProjectList.astro
│   │   ├── Stack.astro
│   │   ├── Comments.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── app.json    # Portfolio content data
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── project/
│   │       └── [name].astro
│   └── styles/
│       └── main.css    # Tailwind CSS with custom theme
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Features

- **Modern Stack**: Astro 5 + Tailwind CSS 4
- **Static Generation**: Fast, SEO-friendly pages
- **Dynamic Routing**: Individual project pages
- **Responsive Design**: Mobile-first approach
- **Custom Styling**: CSS-based Tailwind v4 configuration
- **Zero JavaScript**: Ships minimal JS by default

## 📝 Content Management

All content is managed through `/src/data/app.json`. Edit this file to update:

- Hero section
- About/Intro content
- Projects
- Skills/Stack
- Testimonials
- Social links

## 🛠️ Technologies

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS
- TypeScript - Type safety

## 📄 License

Private project - All rights reserved.
