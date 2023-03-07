import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";
import { LeaveType } from "./enum";

builder.prismaObject("Leave", {
  fields: (t) => ({
    id: t.exposeID("id"),
    type: t.expose("type", { type: LeaveType }),
    startDate: t.expose("startDate", { type: "DateTime" }),
    endDate: t.expose("endDate", { type: "DateTime" }),
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
  getLeave: t.prismaField({
    type: "Leave",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      if (!(await context).user) {
        throw new Error("You have to be logged in to perform this action");
      }
      const leave = await prisma.leave.findUnique({
        ...query,
        where: { id: args.id },
      });
      if (!leave) {
        throw new Error("Leave not found");
      }
      return leave;
    },
  }),

  getUserLeaves: t.prismaField({
    type: ["Leave"],
    args: {
      email: t.arg.string({required: true})
    },
    resolve: async(query, _, args, context) => {
    const leaves = await  prisma.leave.findMany({
        ...query,
        where: {requesterEmail: args.email},
        orderBy: [
          { requestedAt: 'desc'}
        ]
      })
      return leaves

    } 
  }),

  getAllLeaves: t.prismaField({
    type: ["Leave"],
    resolve: (query) => prisma.leave.findMany(query),
  }),

  getUnModeratedLeaves: t.prismaField({
    type: ["Leave"],
    resolve: (query) => prisma.leave.findMany({
      ...query,
      where: {moderatedBy: {
        equals: "null"
      }}
    }),
  })
}));
