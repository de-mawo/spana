import { builder } from "../../builder";
import prisma from "../../../lib/prismadb";

builder.mutationFields((t) => ({
  signUp: t.prismaField({
    type: "User",
    args: {
      email: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args) => {
      const user = await prisma.user.findFirst({
        ...query,
        where: { email: args.email },
      });
      if (user) {
        return user;
      }
      const newUser = await prisma.user.create({
        data: args,
      });

      return newUser;
    },
  }),
}));
