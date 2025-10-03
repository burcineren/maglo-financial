import { create } from 'zustand';
import { toast } from 'react-hot-toast';

interface User {
    fullName?: string;
    email: string;
    isGoogleSignIn: boolean;
    lastLogin: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signIn: (fullName: string, email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    logout: () => void;
}

const AUTH_STORAGE_KEY = 'auth_state';

const getStoredState = (): Partial<AuthState> => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
};

export const useAuthStore = create<AuthState>((set, get) => {
    const storedState = getStoredState();

    const setState = (newState: Partial<AuthState>) => {
        const state = { ...get(), ...newState };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
            user: state.user,
            isAuthenticated: state.isAuthenticated
        }));
        set(newState);
    };

    return {
        user: storedState.user || null,
        isAuthenticated: storedState.isAuthenticated || false,
        isLoading: false,

        login: async (email: string, password: string) => {
            try {
                set({ isLoading: true });
                await new Promise(resolve => setTimeout(resolve, 1000));

                const user = {
                    email,
                    password,
                    isGoogleSignIn: false,
                    lastLogin: new Date().toISOString(),
                };

                setState({
                    user,
                    isAuthenticated: true,
                    isLoading: false
                });

                toast.success('Successfully logged in!');
            } catch (error) {
                set({ isLoading: false });
                console.error('Login failed:', error);
                toast.error('Login failed. Please try again.');
                throw error;
            }
        },

        signIn: async (fullName: string, email: string, password: string) => {
            try {
                set({ isLoading: true });
                await new Promise(resolve => setTimeout(resolve, 1000));

                const user = {
                    fullName,
                    email,
                    password,
                    isGoogleSignIn: false,
                    lastLogin: new Date().toISOString(),
                };

                setState({
                    user,
                    isAuthenticated: true,
                    isLoading: false
                });

                toast.success('Successfully signed in!');
            } catch (error) {
                set({ isLoading: false });
                console.error('Sign in failed:', error);
                toast.error('Sign in failed. Please try again.');
                throw error;
            }
        },

        loginWithGoogle: async () => {
            try {
                set({ isLoading: true });
                await new Promise(resolve => setTimeout(resolve, 1000));

                const user = {
                    email: 'google.user@example.com',
                    isGoogleSignIn: true,
                    lastLogin: new Date().toISOString(),
                };

                setState({
                    user,
                    isAuthenticated: true,
                    isLoading: false
                });

                toast.success('Successfully logged in with Google!');
            } catch (error) {
                set({ isLoading: false });
                console.error('Google login failed:', error);
                toast.error('Google login failed. Please try again.');
                throw error;
            }
        },

        logout: () => {
            localStorage.removeItem(AUTH_STORAGE_KEY);
            set({
                user: null,
                isAuthenticated: false,
                isLoading: false
            });
            toast.success('Successfully logged out');
        },
    };
});