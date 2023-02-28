import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";
import { Role } from "./enum";


builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    email: t.exposeString("email", { nullable: true }),

    image: t.exposeString("image", { nullable: true }),

    role: t.expose("role", { type: Role }),
  }),
});

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: "User",
    args: {
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const user = await prisma.user.findUnique({
        ...query,
        where: { id: args?.email },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  }),
  getUsers: t.prismaField({
    type: ["User"],
    resolve: (query) => prisma.user.findMany(query),
  }),
}));
