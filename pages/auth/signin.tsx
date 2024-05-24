// pages/auth/signin.tsx
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const { query } = useRouter();
  const { error } = query;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Welcome</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Sign in to continue</h2>
        {error && <p className="text-red-500 text-center mb-4">Error: {error}</p>}
        <button
          onClick={() => signIn('google')}
          className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
