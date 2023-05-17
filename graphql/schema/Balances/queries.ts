import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";



builder.prismaObject("Balances", {
  fields: (t) => ({
    id: t.exposeID("id"),
    period: t.exposeString("period"),
    annualCredit: t.exposeFloat("annualCredit", { nullable: true }),
    annualUsed: t.exposeFloat("annualUsed", { nullable: true }),
    annualRemaining: t.exposeFloat("annualRemaining", { nullable: true }),
    healthCredit: t.exposeFloat("healthCredit", { nullable: true }),
    healthUsed: t.exposeFloat("healthUsed", { nullable: true }),
    healthRemaining: t.exposeFloat("healthRemaining", { nullable: true }),
    studyCredit: t.exposeFloat("studyCredit", { nullable: true }),
    studyUsed: t.exposeFloat("studyUsed", { nullable: true }),
    studyRemaining: t.exposeFloat("studyRemaining", { nullable: true }),
    maternityCredit: t.exposeFloat("maternityCredit", { nullable: true }),
    maternityUsed: t.exposeFloat("maternityUsed", { nullable: true }),
    maternityRemaining: t.exposeFloat("maternityRemaining", { nullable: true }),
    familyCredit: t.exposeFloat("familyCredit", { nullable: true }),
    familyUsed: t.exposeFloat("familyUsed", { nullable: true }),
    familyRemaining: t.exposeFloat("familyRemaining", { nullable: true }),
    paternityCredit: t.exposeFloat("paternityCredit", { nullable: true }),
    paternityUsed: t.exposeFloat("paternityUsed", { nullable: true }),
    paternityRemaining: t.exposeFloat("paternityRemaining", { nullable: true }),
    unpaidUsed: t.exposeFloat("unpaidUsed", { nullable: true }),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
  }),
});

builder.queryFields((t) => ({
  getUserBalances: t.prismaField({
    type: "Balances",
    args: {
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const balances = await prisma.balances.findFirst({
        ...query,
        where: { email: args.email },
      });
      if (!balances) {
        throw new Error("Leave not found");
      }
      return balances;
    },
  }),

  getAllBalances: t.prismaField({
    type: ["Balances"],
    resolve: (query) => prisma.balances.findMany(query),
  }),
}));
