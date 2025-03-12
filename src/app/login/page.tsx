'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import ClientOnly from '@/components/ClientOnly';

export default function LoginPage() {
  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" />
                <div className="text-right mt-1">
                  <Link
                    href="/forgot-password"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t"></div>
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t"></div>
            </div>

            <Button
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-100"
              variant="outline"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </Button>

            <p className="mt-4 text-center text-sm">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
