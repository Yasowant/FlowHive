'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientOnly from '@/components/ClientOnly';

export default function RegisterPage() {
  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <Input type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
            <p className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
