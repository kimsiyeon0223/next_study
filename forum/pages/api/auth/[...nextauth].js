import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "df8dae9c55feafa62202",
      clientSecret: "f7f4d904d961c4a5d61248c42798b5a799ccee04",
    }),
  ],
  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
