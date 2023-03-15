import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";



builder.prismaObject("Profile", {
  fields: (t) => ({
    id: t.exposeID("id"),
    phone: t.exposeString("phone", { nullable: true }),
    jobTitle: t.exposeString("jobTitle", { nullable: true }),

    userId: t.exposeString("userId"),

  }),
});

builder.queryFields((t) => ({
  getProfile: t.prismaField({
    type: "Profile",
    args: {
        userId: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const user = await prisma.profile.findUnique({
        ...query,
        where: { email: args?.userId },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  }),
  getProfiles: t.prismaField({
    type: ["Profile"],
    resolve: (query) => prisma.profile.findMany(query),
  }),
}));