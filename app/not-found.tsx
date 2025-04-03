import Link from 'next/link';
import { CommandLineIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
      <nav className="container mx-auto px-6 py-6">
       
      </nav>

      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-bold text-emerald-400 mb-6">404</div>
          
          <h1 className="text-3xl text-slate-100 mb-4">Component Not Found</h1>
          
          <p className="text-slate-400 mb-8">
            The module you're looking for has been deprecated or doesn't exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black px-6 py-3 rounded-lg text-sm font-medium"
          >
            <HomeIcon className="w-4 h-4" />
            Return to Workspace
          </Link>

          <div className="mt-12 border-t border-emerald-500/20 pt-8">
            <p className="text-slate-500 text-sm">
              Error Code: <span className="font-mono text-emerald-400">404_NOT_FOUND</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-emerald-900/50 mt-24">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} ReactQwen
          </p>
        </div>
      </div>
    </div>
  );
}