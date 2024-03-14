import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthenticateTeam } from "@/prisma/team";
import prisma from "@/prisma/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { pid } = credentials;
        let team = await prisma.team.findUnique({
          where: {
            pid: pid,
          },
        });
        if (team) {
          return {
            name: team.name,
            email: team.pid,
            id: team.pid,
            arena: team.arena,
            members: team.members,
          };
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (!session) return;

      let team = await prisma.team.findUnique({
        where: {
          pid: session.user.email,
        },
      });

      if (team) {
        session.user = {
          ...session.user,
          name: team.name,
          email: team.gmail,
          id: team.pid,
          arena: team.arena,
          members: team.members,
        };

        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
