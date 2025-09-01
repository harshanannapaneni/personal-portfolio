# Overview

This is a personal portfolio website for Harsha Nannapaneni, a software engineer with expertise in Python, Django, and React. The application showcases professional experience, skills, projects, and education through a modern single-page application. It serves as a digital resume and professional presence with sections for about, skills, experience, projects, education, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a React single-page application using modern tooling:
- **React 18** with TypeScript for type safety and developer experience
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui** component library for consistent, accessible UI components
- **Radix UI** primitives providing the foundation for complex components
- **React Query** for server state management and caching
- **Wouter** for lightweight client-side routing

## Backend Architecture
The backend follows a simple Express.js REST API pattern:
- **Express.js** server with TypeScript for API endpoints
- **Contact form API** with Zod validation for form submissions
- **Static file serving** for resume downloads
- **Memory-based storage** for basic user data structures
- **Development/production environment** handling with Vite integration

## Database and ORM
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Database schema** defined in shared folder for reusability between client and server
- **Migration system** using Drizzle Kit for schema changes
- **Neon Database** integration for serverless PostgreSQL hosting

## Styling and Design System
- **Design tokens** implemented through CSS custom properties
- **Responsive design** with mobile-first approach
- **Dark/light theme** support through CSS variables
- **Component variants** using class-variance-authority for consistent styling
- **Accessibility features** built into all UI components

## Development Workflow
- **Monorepo structure** with shared types and schemas
- **TypeScript configuration** spanning client, server, and shared code
- **Hot module replacement** in development via Vite
- **Build optimization** with separate client and server bundling
- **Path aliases** for clean import statements

# External Dependencies

## Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, React Query for state management
- **Build tools**: Vite for development and bundling, TypeScript for type checking
- **Routing**: Wouter for lightweight client-side navigation
- **Styling**: Tailwind CSS with PostCSS for processing

## UI Component Libraries
- **shadcn/ui**: Complete component library with customizable design system
- **Radix UI**: Headless component primitives for accessibility and behavior
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for component variant management

## Backend and Database
- **Express.js**: Web server framework for API endpoints
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database hosting
- **Zod**: Schema validation for form inputs and API data

## Development and Build Tools
- **ESBuild**: Fast JavaScript bundler for server-side code
- **Replit integration**: Development environment plugins and error handling
- **Date-fns**: Date manipulation library for formatting
- **Connect-pg-simple**: PostgreSQL session store for Express

## Validation and Forms
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type checking and validation schemas
- **Hookform/resolvers**: Integration between React Hook Form and Zod

The application is designed to be easily deployable on Replit with seamless development experience while maintaining production-ready code structure and performance optimizations.