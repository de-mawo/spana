import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";

builder.mutationFields((t) => ({
  AddProfile: t.prismaField({
    type: "Profile",
    args: {
      email: t.arg.string({ required: true }),
      phone: t.arg.string({}),
      jobTitle: t.arg.string({}),
    },
    resolve: async (query, _, args, context) => {
      // if (!(await context).user) {
      //   throw new Error("You have to be logged in to perform this action");
      // }
      // if ((await context).user?.role !== "ADMIN") {
      //   throw new Error("You are not authorized to perform this action");
      // }

      const CheckUser = await prisma.profile.findFirst({
        ...query,
        where: {
          email: args.email,
        },
      });

      if (CheckUser) {
        throw new Error("ERR:Exist"); 
      }

      const newProfile = await prisma.profile.create({
        data: {
          ...args,
        },
      });

      return newProfile;
    },
  }),

  EditProfile: t.prismaField({
    type: "Profile",
    args: {
      email: t.arg.string({ required: true }),
      phone: t.arg.string({}),
      jobTitle: t.arg.string({}),
    },
    resolve: async (query, _, args, context) => {
      // if (!(await context).user) {
      //   throw new Error("You have to be logged in to perform this action");
      // }
      // if ((await context).user?.role !== "ADMIN") {
      //   throw new Error("You are not authorized to perform this action");
      // }

      const editedProfile = await prisma.profile.update({
        where: { email: args.email },
        data: { ...args },
      });

      return editedProfile;
    },
  }),
}));
