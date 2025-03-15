'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ClientOnly from '@/components/ClientOnly';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter(); // Initialize router

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Client-side validation
    if (!fullName || !email || !password) {
      setError('All fields are required');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://flowhive-be-1.onrender.com/api/users/register',
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
      localStorage.setItem('userEmail', email);
      setFullName('');
      setEmail('');
      setPassword('');

      // Redirect after 200ms delay
      setTimeout(() => {
        router.push('/otp');
      }, 200);
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
        <div className="w-full max-w-sm shadow-lg border border-gray-200 p-6 rounded-lg">
          <h2 className="text-center text-xl font-semibold mb-4">Register</h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </ClientOnly>
  );
}
