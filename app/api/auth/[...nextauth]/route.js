import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });
          if (!userExists) {
            const res = await fetch("http:/localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
    async jwt({ token, user }) {
      // google creates an access token signed with their private key
      // this appears to be stored in 'account' (we could add this as a param)
      // we will use our own jwt instead and we store this in token
      // this will be accessible to all components using useSession()
      // this jwt will be used to authenticate users and authorise database queries
      if (user) {
        // We create our own JWT instead of using google's

        // after google sign in, we get a user object
        // this contains name, email, user id, image link
        // let's sign the email in our jwt; we don't need the other fields
        // our database will identify users by their email address
        const accessToken = jwt.sign(
          {
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" } // TODO: lower this and test that it does expire
        );
        token = { accessToken };
      }

      // we return an object containing our accessToken as well as user data
      // including name, email, user id, image link
      // all this will be accessible to all (client) components using useSession()
      // note server components can also access it in a different way
      return { ...token, ...user };
    },

    // the session that we return is what is accessible on the client side using useSession()
    // thus we need to add the user object so that the client knows the accessToken contained inside
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
