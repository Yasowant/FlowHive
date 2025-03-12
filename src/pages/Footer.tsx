import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-700">FlowHive</span>
          <p className="text-sm text-gray-500">
            Free Effortless Collaboration for Teams
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <Link href="/pricing" className="hover:text-blue-500 transition">
            Pricing
          </Link>
          <Link href="/tutorials" className="hover:text-blue-500 transition">
            Tutorials
          </Link>
          <Link href="/download" className="hover:text-blue-500 transition">
            Download iOS - Android - Desktop
          </Link>
          <Link href="/chat" className="hover:text-blue-500 transition">
            Chat iOS - Android
          </Link>
          <Link href="/blog" className="hover:text-blue-500 transition">
            Blog
          </Link>
          <Link href="/developers" className="hover:text-blue-500 transition">
            Developers API - Zapier
          </Link>
          <Link href="/community" className="hover:text-blue-500 transition">
            Community
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center">
          All Rights Reserved © FlowHive Inc. 2025 |{' '}
          <Link href="/terms" className="hover:text-blue-500">
            Terms and Conditions
          </Link>{' '}
          |{' '}
          <Link href="/privacy" className="hover:text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
