import { useState } from 'react';
import { SignIn } from './features/auth';
import { Dashboard } from './features/dashboard';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onSignOut={handleSignOut} />
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </>
  );
}
