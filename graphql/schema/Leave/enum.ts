import { builder } from "../../builder";

export const LeaveType = builder.enumType("LeaveType", {
    values: [ "ANNUAL",
    "HEALTH",
    "STUDY",
    "MATERNITY",
    "UNPAID",
    "FAMILY",
    "PATERNITY"] as const,
    description: "Leave Types",
  }); 