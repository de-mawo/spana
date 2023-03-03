import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";
import { LeaveType } from "../Leave/enum";

builder.mutationFields((t) => ({
  AddDays: t.prismaField({
    type: "AddDays",
    args: {
      type: t.arg({ type: LeaveType, required: true }),
      daysRequested: t.arg.float({ required: true }),
      requestedBy: t.arg.string({ required: true }),
      requesterNote: t.arg.string({}),
      requesterEmail: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      // if (!(await context).user) {
      //   throw new Error("You have to be logged in to perform this action");
      // }

      const newRequest = await prisma.addDays.create({
        data: {
          ...args,
        },
      });

      return newRequest;
    },
  }),

  EditAddDays: t.prismaField({
    type: "AddDays",
    args: {
      id: t.arg.string({ required: true }),
      approved: t.arg.boolean({}),
      rejected: t.arg.boolean({}),
      moderatedBy: t.arg.string({ required: true }),
      moderatorNote: t.arg.string({}),
    },
    resolve: async (query, _, args, context) => {
      // if ((await context).user?.role !== "ADMIN") {
      //   throw new Error("You are not authorized to perform this action");
      // }
      const newAddDays = await prisma.addDays.update({
        where: { id: args.id },
        data: { ...args },
      });

      return newAddDays;
    },
  }),
}));
