import { builder } from "../../builder";
import prisma from "../../../lib/prismadb";
import { Role } from "./enum";

builder.mutationFields((t) => ({
  EditUser: t.prismaField({
    type: "User",
    args: {
      role: t.arg({ type: Role, required: true }),
      id: t.arg.string({ required: true }),
    },
    resolve: async (_query, _, args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new Error("You are not authorized to perform this action");
      }

      const roleEnum: any = args.role; //TODO: The any type here is a quick fix ,investigate how to properly deal with this enum

      const newProfile = await prisma.user.update({
        where: { id: args.id },
        data: { role: roleEnum },
      });

      return newProfile;
    },
  }),
}));
