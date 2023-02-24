import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "text",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //     },
    //   },

    //   async authorize(credentials) {
    //     const user = await prisma.user.findFirst({
    //       where: {
    //         email: credentials?.email,
            
    //       },
    //     });

    //     // console.log(user);
        
    //     // Email Not found
    //     if (!user) {
    //       throw new Error("Authorization error !");
    //     }

    //     // Unverified User
    //     if (user.emailVerified == null) {
    //       throw new Error("Authorization error 2 !");
    //     }

    //     // If no error and we have user data, return it
    //     if (user) {
    //       const isPasswordCorrect = await compare(
    //         credentials!.password,
    //         user.password
    //       );
    //       if (!isPasswordCorrect) {
    //         throw new Error("Password is incorrect");
    //       }

    //       return user;
    //     }
    //     // Return null if user data could not be retrieved
    //     return null;
    //   },
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  callbacks: {
    
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      // console.log(token);

      return token;
    },

    // async signIn({  user }) {
    //   if (!user.email?.endsWith(process.env.ALLOWED_DOMAIN as string)) {
    //     throw new Error('You are not allowed to access this platform')
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
  

    async session({ session, token, user }) {
      // Add role value to user object so it is passed along with session
      if (session.user) {
        session.user.role = token.role;
      }
      // console.log(session)
      return session;
    },
  },
};

export default NextAuth(authOptions);
