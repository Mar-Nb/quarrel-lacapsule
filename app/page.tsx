'use client';

import QuarrelHome from '@/components/authenticated/QuarrelHome';
import Navbar from '@/components/misc/Navbar';
import Login from '@/components/unauthenticated/Login';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main className="mx-6 mt-2">{user ? <QuarrelHome /> : <Login />}</main>
    </>
  );
}
