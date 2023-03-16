import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";



builder.prismaObject("Profile", {
  fields: (t) => ({
    id: t.exposeID("id"),
    phone: t.exposeString("phone", { nullable: true }),
    jobTitle: t.exposeString("jobTitle", { nullable: true }),

    email: t.exposeString("email"),

  }),
});

builder.queryFields((t) => ({
  getProfile: t.prismaField({
    type: "Profile",
    args: {
        email: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const profile = await prisma.profile.findUnique({
        ...query,
        where: { email: args?.email },
      });
      if (!profile) {
        throw new Error("User not found");
      }
      return profile;
    },
  }),
  getProfiles: t.prismaField({
    type: ["Profile"],
    resolve: (query) => prisma.profile.findMany(query),
  }),
}));