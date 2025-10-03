# Maglo Financial Platform

Modern, responsive financial management platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Authentication

- ✅ Clean sign-in/sign-up forms with real-time validation
- ✅ Form state management with React Hook Form
- ✅ Loading states with smooth animations
- ✅ Google Sign-In integration
- ✅ Protected routes and authentication flow

### Dashboard

- ✅ Financial overview with statistics cards
- ✅ Transaction list with filtering and sorting
- ✅ Currency formatting (Turkish Lira)
- ✅ Responsive design (mobile-first approach)
- ✅ Smooth page transitions and animations

### Developer Experience

- ⚡ **Vite** for fast development and building
- 🎨 **Tailwind CSS** for utility-first styling
- 🔒 **TypeScript** for type safety
- 🧩 **Feature-based** architecture
- 🧪 **Testing** with Vitest and React Testing Library
- 🎯 **ESLint** and **Prettier** for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/maglo-financial.git
   cd maglo-financial
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## 📂 Project Structure

For a detailed project structure, please see the [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) file.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
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
