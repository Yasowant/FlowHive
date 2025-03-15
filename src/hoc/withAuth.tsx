'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return function ProtectedRoute(props: P) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAuth;
