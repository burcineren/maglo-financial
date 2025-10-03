# Maglo Financial - Project Structure

## 📁 File Organization (Best Practices)

```
src/
├── features/                    # Feature-based architecture
│   ├── auth/                   # Authentication feature
│   │   ├── pages/
│   │   │   ├── sign-in.tsx    # Sign in page
│   │   │   └── sign-up.tsx    # Sign up page
│   │   ├── components/
│   │   │   └── google-sign-in-button.tsx
│   │   ├── store/
│   │   │   └── useAuthStore.ts # Authentication state management
│   │   └── index.ts           # Public exports
│   │
│   └── dashboard/              # Dashboard feature
│       ├── pages/
│       │   └── dashboard.tsx  # Dashboard page
│       ├── components/
│       │   ├── dashboard-header.tsx
│       │   ├── stat-card.tsx
│       │   ├── transaction-list.tsx
│       │   └── transaction-item.tsx
│       └── index.ts           # Public exports
│
├── shared/                     # Shared components and utilities
│   ├── components/            # Reusable UI components
│   │   ├── loading-spinner.tsx
│   │   └── index.ts
│   ├── hooks/                 # Custom React hooks
│   │   └── useForm.tsx
│   └── utils/                 # Utility functions
│       └── validation.ts
│
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
├── routes.tsx                 # Application routes
└── index.css                  # Global styles (Tailwind)
```

## 🎯 Naming Conventions

- **Files**: kebab-case (e.g., `sign-in.tsx`, `dashboard-header.tsx`)
- **Components**: PascalCase (e.g., `SignIn`, `DashboardHeader`)
- **Functions**: camelCase (e.g., `handleSignIn`, `validateEmail`)
- **Hooks**: `use` prefix (e.g., `useAuth`, `useForm`)
- **Types/Interfaces**: PascalCase with 'I' prefix (e.g., `IUser`, `IAuthState`)
- **Folders**: kebab-case (e.g., `features`, `shared`)

## 🏗️ Architecture Patterns

### Feature-Based Structure

Each feature is organized in its own directory:

- **pages/**: Page components (top-level route components)
- **components/**: Feature-specific components
- **store/**: State management (Zustand stores)
- **utils/**: Helper functions and utilities
- **hooks/**: Custom React hooks
- **index.ts**: Public API (barrel exports)

### State Management

- **Zustand** for global state management
- React Context for theme and auth state
- React Query for server state management (if applicable)

### Styling & Component Organization

- **Tailwind CSS** for utility-first styling
- CSS Modules for component-scoped styles (if needed)
- Responsive design with mobile-first approach
- Small, single-responsibility components
- Reusable components in `shared/` directory
- Feature-specific components in their respective feature directories
- Inline className usage with Tailwind

## 🚀 Teknolojiler

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

## 📝 Code Style

- Named exports (default export yerine)
- Type annotations
- Functional components
- React hooks (useState)
- Semicolons kullanımı
