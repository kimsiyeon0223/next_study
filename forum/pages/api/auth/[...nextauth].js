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
};
export default NextAuth(authOptions);
