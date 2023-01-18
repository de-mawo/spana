import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN"],
  description: "User role",
});

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
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args) => {
      const user = await prisma.user.findUnique({
        ...query,
        where: { id: args?.userId },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  }),
  getUsers: t.prismaField({
    type: ['User'],
    resolve: (query) => prisma.user.findMany(query),
  }),
}));
