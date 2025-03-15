'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

import ClientOnly from '@/components/ClientOnly';
import TestimonialSection from '@/pages/Testimonial';
import CTASection from '@/pages/CTASection';
import Footer from '@/pages/Footer';
import FeaturesSection from '@/pages/FeaturesSection';
import FeatureSection from '@/pages/FeatureSection';
import FAQSection from '@/pages/FAQSection';

export default function Home() {
  const pathname = usePathname();

  return (
    <ClientOnly>
      <Head>
        <title>FlowHive – Buzz through tasks smoothly</title>
        <meta
          name="description"
          content="The first truly intelligent project management solution."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
          {/* Logo */}
          <Link href="/" aria-label="Go to Home">
            <span className="text-2xl font-extrabold text-blue-600 tracking-wide cursor-pointer">
              FlowHive
            </span>
          </Link>

          {/* Menu */}
          {pathname === '/' ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  aria-label="Open Menu"
                  className="hover:bg-blue-100 transition duration-200"
                >
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/login" aria-label="Go to Login">
                    Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button
                aria-label="Go to Login"
                className={`${
                  pathname === '/login'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                } px-4 py-2 rounded-md transition duration-200`}
              >
                Login
              </Button>
            </Link>
          )}
        </nav>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-6 bg-gray-50">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-800 leading-tight">
            Manage your projects <span className="text-blue-600">smarter</span>
            <br />
            with <span className="text-gray-700">FlowHive</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-xl">
            Stay organized and keep your team on track with an easy-to-use
            platform designed to boost productivity.
          </p>

          {/* Input and Button */}
          <div className="mt-6 w-full max-w-md">
            <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-200">
                Start Now!
              </button>
            </div>
          </div>
        </section>
        <FeaturesSection />
        <FAQSection />
        <TestimonialSection />
        <FeatureSection />
        <CTASection />
        <Footer />
      </div>
    </ClientOnly>
  );
}
