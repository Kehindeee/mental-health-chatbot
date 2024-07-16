
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';
import DetailsSection from '../components/DetailsSection';
import Chatbot from '../components/Chatbot';
import UserDetailsSection from '../components/UserDetailsSection';
// import Header from '@/components/Header';

const Home = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout>
        {/* <Header /> */}
        <LandingPage />
        <DetailsSection /> {/* General page details section */}
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
      <div className="flex justify-between">
        <div className="w-1/2 p-4">
          <Chatbot />
        </div>
        <div className="w-1/2 p-4">
          <UserDetailsSection /> {/* Signed-in user's details section */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { session: null },
    };
  }

  return {
    props: { session },
  };
};
