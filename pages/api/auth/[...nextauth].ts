// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      // Log the user object to see its structure
      console.log('User object:', user);

      // Ensure user.id is properly assigned
      if (session.user && user && user.id) {
        session.user.id = user.id as string;
      } else if (session.user && token && token.sub) {
        // If user.id is not available, try using token.sub
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
});
