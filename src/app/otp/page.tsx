'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ClientOnly from '@/components/ClientOnly';

export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP entered:', otp);

    // Add OTP verification logic here
    if (otp === '123456') {
      alert('OTP verified');
      router.push('/login'); // Redirect to login or another page after success
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-lg">Enter OTP</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">OTP</label>
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
            </form>
            <p className="mt-4 text-center text-sm">
              Didn't receive OTP?{' '}
              <button
                onClick={() => alert('Resend OTP clicked')}
                className="text-blue-500 hover:underline"
              >
                Resend OTP
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}
