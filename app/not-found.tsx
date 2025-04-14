// pages/404.js
import { Button } from "@/components/ui/button";  // Adjust the import path as needed
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-indigo-950 to-indigo-950 text-white">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-6">
        The page you're looking for does not exist. It might have been removed, or the URL could be incorrect.
      </p>
      
      <Link href="/">
        <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-indigo-600 hover:bg-indigo-500">
          Go Back Home
        </Button>
      </Link>
      
      <div className="mt-12 text-sm">
        <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NotFound;
