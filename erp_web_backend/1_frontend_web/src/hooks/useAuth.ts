import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithCustomToken, signOut, User } from 'firebase/auth';
import { auth } from '../services/firebaseClient';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      const token = u ? await u.getIdToken() : undefined;
      (window as any).__authToken = token;
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return {
    user,
    loading,
    signInWithCustomToken: (token: string) => signInWithCustomToken(auth, token),
    signOut: () => signOut(auth)
  };
}





