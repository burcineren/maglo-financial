# Maglo Financial Platform

Modern, responsive financial management platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Authentication

- ✅ Clean sign-in/sign-up form with validation
- ✅ Real-time form validation with custom hooks
- ✅ Loading states with smooth animations
- ✅ Google Sign-In integration (UI)
- ✅ Responsive design (mobile-first)

### Dashboard

- ✅ Financial statistics cards
- ✅ Transaction list with proper formatting
- ✅ Turkish Lira currency formatting
- ✅ Smooth page transitions
- ✅ Staggered animations

### Code Quality

- ✅ Feature-based architecture
- ✅ Kebab-case naming convention
- ✅ Custom validation hooks
- ✅ Reusable components
- ✅ TypeScript strict mode
- ✅ Proper separation of concerns

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server (requires Node.js 20.19+ or 22.12+)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **ESLint** - Code quality

## 🎨 Best Practices Implemented

### 1. Form Validation (Zod)

- Custom `useFormValidation` hook with Zod
- Type-safe schema validation
- Real-time validation
- Error clearing on input change
- Comprehensive validation rules
- Type inference from schemas

### 2. Component Architecture

- Small, focused components
- Named exports
- Props interfaces
- Proper TypeScript typing

### 3. State Management

- useState for local state
- useEffect for side effects
- Proper cleanup
- No prop drilling

### 4. Styling

- Tailwind utility classes
- Responsive breakpoints
- Smooth transitions
- Custom animations

### 5. Code Organization

- Feature-based structure
- Barrel exports (index.ts)
- Kebab-case file names
- Clear separation of concerns

### 6. User Experience

- Loading states
- Smooth animations
- Form feedback
- Responsive design

## 📝 License

MIT
