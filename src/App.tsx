import { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { SignIn } from "./features/auth/pages/sign-in";
import { Login } from "./features/auth/pages/login";
import { Dashboard } from "./features/dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already authenticated
    const user = localStorage.getItem("user");
    return !!user;
  });

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    return <Navigate to="/login" replace />;
  };

  // Create router configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? (
        <Dashboard onSignOut={handleSignOut} />
      ) : (
        <Navigate to="/sign-up" replace />
      ),
    },
    {
      path: "/login",
      element: isAuthenticated ? (
        <Navigate to="/" replace />
      ) : (
        <Login onSignIn={handleSignIn} />
      ),
    },
    {
      path: "/sign-up",
      element: isAuthenticated ? (
        <Navigate to="/" replace />
      ) : (
        <SignIn onSignIn={handleSignIn} />
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  // Update isAuthenticated when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem("user");
      setIsAuthenticated(!!user);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
