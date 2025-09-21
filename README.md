# I.C.G. Global - Portfolio Website

A portfolio website built with cutting-edge web technologies. This project is currently **in development** and showcases innovative design patterns and user interactions.

## 🚧 Project Status

**Status**: In Development  
**Version**: 0.1.0  
**Last Updated**: December 2024

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Styled Components](https://styled-components.com)
- **3D Graphics**: [Three.js](https://threejs.org)

## ✨ Features

### Current Features
- 🎨 **Interactive Card System** - Draggable project cards with smooth animations
- 🎬 **Video Background** - Immersive background video with overlay effects
- 🔍 **Advanced Search & Filtering** - Real-time project filtering by categories
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎭 **Modal System** - Detailed project views with rich content
- 🎪 **Circular Menu** - Unique navigation with staggered animations
- 🎯 **TypeScript** - Full type safety and better development experience

### Planned Features
- 🌐 **3D Scene Integration** - Three.js powered 3D environments
- 🎵 **Audio Integration** - Sound design and audio feedback
- 🌍 **Internationalization** - Multi-language support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/icg-global.git
cd icg-global
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Background/        # Video background
│   ├── Cards/            # Interactive cards
│   ├── Menu/             # Navigation menu
│   └── Modal/            # Project modals
├── config/               # Configuration files
│   └── projects.ts       # Project data
├── hooks/                # Custom React hooks
├── styles/               # Style utilities
│   ├── designTokens.ts   # Design system tokens
│   └── mixins.ts         # CSS mixins
└── types/                # TypeScript definitions
    └── index.ts          # Type definitions
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#9ACD32` (Lime Green)
- **Background**: Dark with video overlay
- **Glass Effect**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Text**: White with various opacity levels

### Typography
- **Font Family**: System fonts with fallbacks
- **Weights**: 300, 400, 500, 600
- **Responsive**: Fluid typography scaling

### Animations
- **Staggered Animations**: Sequential element reveals
- **Smooth Transitions**: CSS transitions with cubic-bezier easing
- **Hover Effects**: Interactive feedback on user actions

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Style
- **ESLint**: Configured for Next.js and TypeScript
- **Prettier**: Code formatting (recommended)
- **TypeScript**: Strict mode enabled

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+


**Note**: This is a work in progress. Features and documentation will be updated as development continues.