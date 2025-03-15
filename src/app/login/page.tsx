'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import ClientOnly from '@/components/ClientOnly';
import api from '@/config/axios';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post('/api/users/login', { email, password });

      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      router.push('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Invalid email or password');
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            <div className="flex items-center justify-center mt-4">
              <button className="flex items-center space-x-2 border p-2 rounded">
                <FcGoogle size={20} />
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className="text-center mt-4">
              <Link href="/register" className="text-blue-500">
                Don&apos;t have an account?{' '}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
