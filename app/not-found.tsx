import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-background rounded-xl shadow-lg text-center">
        <div className="mb-6">
          <AlertCircle className="mx-auto text-red-500 dark:text-red-400 w-16 h-16" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col gap-4">
          <Link
            href="/auth/login"
            className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Go to Login Page
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          If you believe this is an error, please contact support.
        </div>
      </div>
    </div>
  );
}