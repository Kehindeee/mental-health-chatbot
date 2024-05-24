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
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub || ''; // Ensure id is a string
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.id = user.id;
      }
      return token;
    },
  },
  debug: true, // Enable debug logging for troubleshooting
});
