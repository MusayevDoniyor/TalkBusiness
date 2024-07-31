import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-4">Oops! Page not found.</p>
      <p className="text-lg mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
