import { create } from "zustand";

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    setAuthenticated: (authStatus: boolean) => void;
    setUser: (userInfo: User | null) => void;
}

interface User {
    id: string;
    name: string;
    email: string;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    setAuthenticated: (authStatus: boolean) => set({ isAuthenticated: authStatus }),
    setUser: (userInfo: User | null) => set({ user: userInfo }),
}));

export default useAuthStore;