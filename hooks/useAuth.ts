import { AuthContext } from '@/context/auth';
import { useContext } from 'react';

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("AuthContext's value is undefined");
  return value;
}
