// components/LandingPage.tsx
import { signIn } from 'next-auth/react';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight mb-4">Your Personal Mental Health Companion</h1>
          <p className="text-lg mb-6">Connect with our AI-powered chatbot and get the support you need, anytime.</p>
          <div className="flex">
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200 mr-2"
              onClick={() => alert('Chatbot will be implemented')}
            >
              Try the Chatbot
            </button>
            <button
              className="p-3 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          {/* Placeholder for image */}
          <div className="bg-gray-300 h-64 w-full rounded-lg flex items-center justify-center">
            <span>Image Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
