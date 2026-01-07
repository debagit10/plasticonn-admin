import { create } from "zustand";

interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  authLoading: boolean;

  setUser: (user: User) => void;
  clearUser: () => void;
  setAuthLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  authLoading: true,
  setUser: (user) => set({ user, authLoading: false }),
  clearUser: () => set({ user: null, authLoading: false }),
  setAuthLoading: (value: any) => set({ authLoading: value }),
}));
