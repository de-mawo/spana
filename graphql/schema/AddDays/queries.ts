import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";
import { LeaveType } from "../Leave/enum";

builder.prismaObject("AddDays", {
  fields: (t) => ({
    id: t.exposeID("id"),
    type: t.expose("type", { type: LeaveType }),
    daysRequested: t.exposeFloat("daysRequested"),
    requestedAt: t.expose("requestedAt", { type: "DateTime" }),
    requestedBy: t.exposeString("requestedBy"),
    requesterNote: t.exposeString("requesterNote", { nullable: true }),
    requesterEmail: t.exposeString("requesterEmail"),
    approved: t.exposeBoolean("approved", { nullable: true }),
    rejected: t.exposeBoolean("rejected", { nullable: true }),
    moderatedBy: t.exposeString("moderatedBy"),
    moderatorNote: t.exposeString("moderatorNote", { nullable: true }),
  }),
});

builder.queryFields((t) => ({
  getAddDays: t.prismaField({
    type: "AddDays",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      // if (!(await context).user) {
      //   throw new Error("You have to be logged in to perform this action");
      // }
      const addDays = await prisma.leave.findUnique({
        ...query,
        where: { id: args.id },
      });
      if (!addDays) {
        throw new Error("AddDays not found");
      }
      return addDays;
    },
  }),

  getAllAddDays: t.prismaField({
    type: ["AddDays"],
    resolve: (query) => prisma.leave.findMany(query),
  }),
}));
