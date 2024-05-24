// pages/index.tsx
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const { data: session, status } = useSession();

  console.log('Session status:', status);
  console.log('Session data:', session);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Welcome to Mental Health Support</h1>
          <button
            onClick={() => signIn()}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign in to start chatting
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-end p-4">
        <button
          onClick={() => signOut()}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          Sign out
        </button>
      </div>
      <Chatbot />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log('Session from getServerSideProps:', session);

  if (!session) {
    return {
      props: { session: null },
    };
  }

  return {
    props: { session },
  };
};
