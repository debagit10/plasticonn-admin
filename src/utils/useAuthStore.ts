import { create } from "zustand";

interface User {
  _id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
  // firstName: string;
  // lastName: string;
  address: string;
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
  authLoading: false,

  setUser: (user) => set({ user, authLoading: false }),
  clearUser: () => set({ user: null, authLoading: false }),
  setAuthLoading: (value: any) => set({ authLoading: value }),
}));

export const useAuth = () => {
  const { user, authLoading } = useAuthStore();

  return {
    user,
    authLoading,
  };
};
