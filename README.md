# Grafterr Landing Page

A modern, responsive landing page for Grafterr - a restaurant technology platform. Built with React 18, Vite, and custom CSS with design tokens.

## Stack

**React** - Functional components with hooks  
**Vite** - Fast build tool and dev server  
**CSS** - Custom CSS with design tokens (no CSS frameworks)

## Features Implemented

✅ **Fully Responsive Design** - Mobile (375px), Tablet (768px), Desktop (1440px)  
✅ **Dynamic Content Loading** - All content loaded from `public/content.json`  
✅ **Loading States** - Skeleton components with smooth fade-in animation  
✅ **Error Handling** - Error states with retry functionality  
✅ **Gradient Text & Buttons** - Custom gradient implementations  
✅ **Product Carousel** - Responsive carousel with touch swipe support  
✅ **Carousel Navigation** - Previous/Next buttons with disabled states  
✅ **Floating Decorative Shapes** - Animated shapes with CSS animations  
✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard support  
✅ **Performance** - CSS animations, optimized re-renders, code splitting  

## Project Structure

```
grafterr-landing/
├── public/
│   ├── images/           # Product images and logo
│   └── content.json      # All dynamic content
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GradientText.jsx
│   │   │   ├── GradientButton.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── FloatingShape.jsx
│   │   │   └── Skeleton.jsx
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       └── FeaturesSection.jsx
│   ├── hooks/
│   │   ├── useContent.js   # Data fetching with loading/error states
│   │   └── useCarousel.js  # Carousel logic and state
│   ├── services/
│   │   └── api.js          # API service with simulated delay
│   ├── styles/
│   │   ├── variables.css   # Design tokens
│   │   └── global.css      # Global styles and animations
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Architecture & Design Decisions

### Component Composition
- Small, reusable UI components (GradientText, GradientButton, etc.)
- Section components that combine UI elements
- Clear separation of concerns

### Custom Hooks
- **useContent**: Handles data fetching with loading/error states
- **useCarousel**: Manages carousel state and responsive behavior

### Design Tokens (CSS Variables)
- Centralized color palette
- Consistent typography scale
- Responsive spacing system
- Shadow and radius definitions
- Smooth transitions and animations

### API Simulation
- `api.js` simulates network delay (1000-1500ms)
- Returns promises for realistic async behavior
- All content is dynamic from JSON

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px
- Carousel adapts: 1 item (mobile), 2 items (tablet), 3 items (desktop)

## Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
```bash
npm run build
# Upload dist/ folder
```

## Key Implementation Details

- **Content Management**: All content from `public/content.json`
- **Carousel**: Smooth animations with CSS transform
- **Accessibility**: Semantic HTML, ARIA labels, keyboard support
- **Loading**: Skeleton placeholders with simulated delay
- **Error Handling**: Clear error messages with retry button
- **Performance**: GPU-accelerated animations, efficient re-renders

---

**Chosen Stack**: React (Option B)  
**Rationale**: Demonstrates modern component architecture, custom hooks, and best practices for larger applications.
# grafterr-landing
# grafterr-landing
