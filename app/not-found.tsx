import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <div
          className="text-7xl font-bold text-[#0e0973] mb-4"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          404
        </div>
        <h1
          className="text-2xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-500 text-base mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0e0973] text-white font-semibold rounded-lg hover:bg-[#080659] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
