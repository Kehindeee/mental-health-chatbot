// pages/auth/signin.tsx
import { signIn } from 'next-auth/react';
import Head from 'next/head';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-6">Continue with Google</p>
        <button
          onClick={() => signIn('google')}
          className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.9 0 6.6 1.6 8.1 2.9L38 7C34.2 4 29.6 2 24 2 14.8 2 7.1 7.7 3.6 15.3l8 6.2C13.3 15 18.2 9.5 24 9.5z" />
            <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-2.7-.4-3.9H24v8h13c-.6 3-2.2 5.5-4.6 7.2l7.3 5.7C43 36.7 46.1 31.4 46.1 24.5z" />
            <path fill="#FBBC05" d="M9.9 28.8C9.2 27.3 8.7 25.5 8.7 24s.5-3.3 1.3-4.8L2 13.3C.7 16 0 19 0 22s.7 6 2 8.7l7.9-6.2z" />
            <path fill="#EA4335" d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-7.3-5.7c-2.2 1.5-5 2.4-8.5 2.4-6.9 0-12.7-4.7-14.8-11.1l-7.9 6.1C7.1 42.3 14.8 48 24 48z" />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
