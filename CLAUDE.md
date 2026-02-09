# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**IMPORTANT**: The development server (`npm run dev`) and build processes are already running. Never ask to start them or suggest running them.

### Available Commands
- `npm run preview` - Preview production build locally
- `npm run generate` - Generate static site
- `npm install` - Install dependencies
 
### Dependencies
This project uses npm as the package manager. Always use `npm install` after pulling changes that modify package.json.

## Architecture Overview

This is a **Nuxt 4 application** with internationalization support, built as a trading community platform called "TradersYard".

### Key Technologies & Modules
- **Nuxt 4** - Vue.js framework with SSR/SSG capabilities
- **@nuxtjs/i18n** - Internationalization (English/German support)
- **@nuxtjs/tailwindcss** - Utility-first CSS framework
- **@nuxtjs/google-fonts** - Google Fonts integration (Clash Display + Inter)
- **Vue 3 + TypeScript** - Modern Vue with type safety

### Project Structure
- `app/app.vue` - Main application component (single-page layout)
- `locales/` - i18n translation files (en.json, de.json)
- `assets/css/main.css` - Global CSS styles
- `nuxt.config.ts` - Nuxt configuration with module setup
- `tailwind.config.js` - Tailwind customization with brand colors

### Design System
- **Primary color palette**: Custom blue/purple theme (`primary-*` classes)
- **Typography**: 
  - `font-clash` - Clash Display for headings/titles
  - `font-inter` - Inter for body text (default sans)
- **Responsive design**: Uses Tailwind's responsive classes

### i18n Configuration
- **Default locale**: English (en)
- **Strategy**: `prefix_except_default` (English has no prefix, German uses `/de`)
- **Locales**: English (en.json), German (de.json)
- Translation keys organized by sections: nav, common, home, features, footer

### Current Implementation
The app is currently a single-page landing page showcasing:
- Header with logo and language switcher
- Hero section with CTAs
- Features grid (3 columns)
- Demo section showing design system
- Footer

This appears to be an early-stage project with a foundation for a trading community platform, ready for feature expansion.