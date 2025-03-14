'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientOnly from '@/components/ClientOnly';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!fullName || !email || !password) {
      setError('All fields are required');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to register');
      }

      setSuccess(
        'Registration successful! Please check your email for the OTP.'
      );
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Registration error:', err);
        setError(err.message || 'Something went wrong. Please try again.');
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && (
                <div className="text-green-500 text-sm">{success}</div>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Registering...' : 'Register'}
              </Button>
            </form>

            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
