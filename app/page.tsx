import React from 'react';
import { ModeToggle } from '@/components/theme-toggler';

export default function page() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-3xl">Hello</div>
      <div className="flex space-x-4">
        <a href="/login" className="p-2 bg-blue-500 text-white rounded-md">
          Login
        </a>
        <a href="/register" className="p-2 bg-blue-500 text-white rounded-md">
          Register
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}
