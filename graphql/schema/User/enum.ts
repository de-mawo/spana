import { builder } from "../../builder";

export const Role = builder.enumType("Role", {
    values: ["USER", "ADMIN"],
    description: "User Role",
  }); 