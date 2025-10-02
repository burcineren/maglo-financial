# Maglo Financial - Proje Yapısı

## 📁 Dosya Organizasyonu (Best Practices)

```
src/
├── features/                    # Feature-based architecture
│   ├── auth/                   # Authentication feature
│   │   ├── pages/
│   │   │   └── sign-in.tsx    # Sign in page
│   │   ├── utils/
│   │   │   └── validation.ts  # Email validation
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
├── shared/                     # Shared/common components
│   └── components/
│       ├── loading-spinner.tsx
│       └── index.ts
│
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles (Tailwind)
```

## 🎯 Naming Conventions

- **Files**: kebab-case (örn: `sign-in.tsx`, `dashboard-header.tsx`)
- **Components**: PascalCase (örn: `SignIn`, `DashboardHeader`)
- **Functions**: camelCase (örn: `handleSignIn`, `validateEmail`)
- **Folders**: kebab-case (örn: `features`, `shared`)

## 🏗️ Architecture Patterns

### Feature-Based Structure
Her özellik kendi klasöründe organize edilmiş:
- **pages/**: Sayfa bileşenleri
- **components/**: Feature-specific bileşenler
- **utils/**: Yardımcı fonksiyonlar
- **index.ts**: Public API (barrel exports)

### Component Organization
- Küçük, tek sorumluluk prensibi
- Reusable components `shared/` altında
- Feature-specific components kendi feature'ında

### Styling
- Tailwind CSS utility-first approach
- Inline className kullanımı
- Responsive design (mobile-first)

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
