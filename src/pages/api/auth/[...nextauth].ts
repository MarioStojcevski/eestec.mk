import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const loggedInUserResponse = await axios.post(
            `http://localhost:1337/auth/local`,
            {
              identifier: credentials?.username,
              password: credentials?.password,
            }
          );

          console.log(loggedInUserResponse);

          return {
            id: loggedInUserResponse.data.user.id,
            ...loggedInUserResponse,
          };
        } catch (error) {
          throw Error(error as string);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  //TODO: add a secret from env file
  secret: "blabla",
  session: {
    strategy: "jwt",
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
