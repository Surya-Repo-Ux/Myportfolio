# Portfolio Web Application

## Overview

This is a modern portfolio web application built for Suryaprasanth T, a software and AI developer. The application showcases projects, experience, and provides a contact form for potential clients or collaborators. It features a sophisticated tech stack with a React frontend, Express backend, and PostgreSQL database with a sleek, space-themed UI design.

## User Preferences

Preferred communication style: Simple, everyday language.

**Personal Information:**
- LinkedIn: https://www.linkedin.com/in/suryaprasantht
- GitHub: https://github.com/Surya-Repo-Ux
- Projects are currently being uploaded to GitHub repositories

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **3D Graphics**: Three.js for interactive particle systems and floating geometry

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Error Handling**: Centralized error middleware with structured responses

### Database & ORM
- **Database**: PostgreSQL (configured for use, currently using in-memory storage)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: Type-safe schema definitions with Zod validation
- **Database Provider**: Neon Database (@neondatabase/serverless)

## Key Components

### Contact System
- Contact form with validation using Zod schemas
- Email field validation and required field checks
- PostgreSQL storage for contact submissions
- Error handling for invalid form data

### Portfolio Sections
- **Hero Section**: Interactive introduction with enhanced Three.js particle effects and shimmer text animations
- **About Section**: Skills showcase with categorized technology badges, hover animations, and card glow effects
- **Projects Section**: Detailed project cards with features and technologies, development status indicators
- **Experience Section**: Professional timeline with achievements and enhanced visual effects
- **Contact Section**: Form for visitor inquiries with enhanced styling and animations

### Enhanced Visual Features (Latest Update)
- **Advanced Animations**: Multiple animation classes including shimmer text, hover-lift effects, card glow, pulse animations
- **Enhanced Three.js**: Spiral galaxy particle pattern with 1500+ particles, wave motion, enhanced color palette (cyan, purple, gold)
- **Interactive Elements**: Improved hover effects, card transitions, floating animations
- **Modern UI**: Glass morphism effects, gradient borders, enhanced visual feedback

### UI Components
- Comprehensive component library using Radix UI primitives
- Consistent theming with CSS custom properties
- Responsive design with mobile-first approach
- Glass morphism effects and gradient animations
- Toast notifications for user feedback

## Data Flow

1. **Frontend Request Flow**:
   - React components use TanStack Query for data fetching
   - API requests go through centralized `queryClient` with error handling
   - Form submissions are validated client-side before server submission

2. **Backend Processing**:
   - Express middleware handles JSON parsing and request logging
   - Routes validate input using Zod schemas
   - Contact submissions are stored in database
   - Error responses include appropriate HTTP status codes

3. **Database Operations**:
   - Drizzle ORM provides type-safe database operations
   - Schema definitions ensure data consistency
   - Migration system for database version control

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI/UX**: Radix UI components, Tailwind CSS, Lucide React icons
- **Animations**: Class Variance Authority, CLSX for conditional styling
- **Data Fetching**: TanStack React Query
- **Form Handling**: React Hook Form with Hookform Resolvers
- **3D Graphics**: Three.js (loaded dynamically)

### Backend Libraries
- **Core**: Express.js, TypeScript execution via TSX
- **Database**: Drizzle ORM, PostgreSQL drivers
- **Development**: Vite plugins for development environment
- **Utilities**: Date-fns, Zod for validation

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict mode with path mapping
- **Linting**: ESBuild for production builds
- **Database**: Drizzle Kit for migrations

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- Express server with Vite middleware integration
- TypeScript compilation via TSX for development
- Replit-specific plugins for development environment integration

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Deployment**: Single Node.js application serving both frontend and API

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development mode switching via `NODE_ENV`
- Replit-specific optimizations for cloud development environment

## Recent Changes (January 2025)
- **URLs Updated**: LinkedIn and GitHub URLs updated to user's actual profiles
- **Project Status**: All project links set to development mode with GitHub upload indicators
- **Enhanced Animations**: Added complex CSS animations including shimmer text, hover-lift, card glow effects
- **Three.js Improvements**: Enhanced particle system with spiral galaxy pattern, wave motion, and richer color palette
- **Visual Polish**: Improved hover states, transitions, and interactive feedback across all components
- **Performance**: Optimized animations and enhanced visual hierarchy

The architecture follows modern web development best practices with type safety, component reusability, and scalable data management. The application is designed to be easily maintainable and extendable for future features.
