import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useAuthStore } from "./features/auth/store/useAuthStore";
import { useEffect } from "react";

function AppContent() {
  // Initialize auth state from localStorage when component mounts
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth_state');
    if (storedAuth) {
      const { user, isAuthenticated } = JSON.parse(storedAuth);
      if (user && isAuthenticated) {
        useAuthStore.setState({ user, isAuthenticated });
      }
    }
  }, []);

  const routing = useRoutes(routes);
  return routing;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
