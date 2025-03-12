'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your reset password logic here
    console.log('Password reset link sent to:', email);
  };

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Remember your password?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
