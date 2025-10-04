# Brew & Chill — Coffee Shop Website

Modern, mobile-friendly website for Brew & Chill built with React, Vite, Tailwind CSS, and React Router.

## Features

- Clean, responsive design
- Landing page with hero, story, and gallery
- Menu page with categories and pricing
- Contact page with form and embedded Google Map
- Optional pickup Order page (demo cart)

## Tech Stack

- React + Vite
- Tailwind CSS (v4, via `@tailwindcss/postcss`)
- React Router

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Build & Preview

```bash
npm run build
npm run preview
# Open http://localhost:4173
```

## Project Structure

```
src/
  components/   # Navbar, Footer
  pages/        # Home, Menu, Contact, Order
  App.jsx       # Routes & layout
  main.jsx      # Entry
index.html
postcss.config.js
```

## Deployment

You can deploy the `dist/` folder to any static host (e.g., GitHub Pages, Netlify, Vercel). For GitHub Pages:

```bash
npm run build
# then push the dist/ output to a pages-enabled branch or use your platform’s guide
```

## Customization

- Update branding (colors, logo, copy) in `src/components` and `src/pages`
- Replace gallery images with your own
- Update address and map location in `Contact.jsx`

