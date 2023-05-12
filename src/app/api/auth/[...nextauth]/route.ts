import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      /**
       * The name to display on the sign in form (e.g. "Sign in with...")
       */

      name: "Credentials",

      /**
       * `credentials` is used to generate a form on the sign in page.
       * You can specify which fields should be submitted, by adding keys to the `credentials` object.
       * e.g. domain, username, password, 2FA token, etc.
       * You can pass any HTML attribute to the <input> tag through the object.
       */

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
