import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Dashboard } from "./features/dashboard";
import { Login } from "./features/auth/pages/login";
import { SignUp } from "./features/auth/pages/sign-up";
import { useAuthStore } from "./features/auth/store/useAuthStore";
import { ProtectedRoute, PublicRoute } from "./shared/components/route-guards";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard onSignOut={() => useAuthStore.getState().logout()} />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
