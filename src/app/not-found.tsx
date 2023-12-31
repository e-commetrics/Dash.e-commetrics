// not-found.tsx
"use client"
import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
          404 - Página no encontrada
        </h1>
        <p className="mt-2 text-center text-sm text-white">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <div className="mt-5">
            <Link href="/" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Volver a la página principal
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;