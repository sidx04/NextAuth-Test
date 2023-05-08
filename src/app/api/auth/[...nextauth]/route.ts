import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "John Doe",
          email: "johndoe@example.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
