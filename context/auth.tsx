'use client';

import { loginWithGoogle } from '@/services/firebase';
import { QuarrelUser } from '@/types/QuarrelUser';
import { ReactNode, createContext, useState } from 'react';

interface AuthContextProps {
  user: QuarrelUser | null;
  login: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: function (): Promise<void> {
    throw new Error('Function not implemented.');
  }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<QuarrelUser | null>(null);

  const login = async () => {
    const user = await loginWithGoogle();
    if (!user) {
      // TODO: Handle failed login
      console.error('Login failed...');
    }

    setUser(user);
  };

  const value = { user, login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
