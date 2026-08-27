import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 z-10 relative">
      <div className="glass-panel p-12 max-w-md w-full border-[#E5A93B]/30 shadow-2xl">
        <span className="text-6xl font-extrabold gold-gradient-text block mb-4">404</span>
        <h1 className="text-2xl font-bold text-white mb-2">Scene Not Found</h1>
        <p className="text-sm text-gray-400 mb-8">
          The frame or page you are searching for does not exist in this domain.
        </p>
        <Link to="/" className="btn-primary w-full justify-center">
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
