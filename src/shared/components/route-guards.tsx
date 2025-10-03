import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

interface RouteGuardProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: RouteGuardProps) {
  return <>{children}</>;
}

export function ProtectedRoute({ children }: RouteGuardProps) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
