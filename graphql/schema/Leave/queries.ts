import { builder } from "../../builder";
import { LeaveType } from "./enum";

builder.prismaObject("Leave", {
  fields: (t) => ({
    id: t.exposeID("id"),
    type: t.expose("type", { type: LeaveType }),
    startDate: t.exposeString("startDate"),
    endDate: t.exposeString("endDate"),
    daysRequested: t.exposeFloat("daysRequested"),
    requestedAt: t.expose("requestedAt", { type: "DateTime" }),
    requestedBy: t.exposeString("requestedBy"),
    requesterNote: t.exposeString("requesterNote"),
    requesterEmail: t.exposeString("requesterEmail"),
    approved: t.exposeBoolean("approved"),
    rejected: t.exposeBoolean("rejected"),
    moderatedBy: t.exposeString("moderatedBy"),
    moderatorNote: t.exposeString("moderatorNote"),
  }),
});
