'use client';

import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <h1 className="text-xl mb-2">Log to join a chat room</h1>
      <button type="button" onClick={login}>
        Login with Google
      </button>
    </>
  );
}
