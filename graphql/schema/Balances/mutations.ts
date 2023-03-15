import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";

builder.mutationFields((t) => ({
  AddBalances: t.prismaField({
    type: "Balances",
    args: {
      period: t.arg.string({required: true}),
      annualCredit: t.arg.float({}),
      healthCredit: t.arg.float({}),
      studyCredit: t.arg.float({}),
      maternityCredit: t.arg.float({}),
      familyCredit: t.arg.float({}),
      paternityCredit: t.arg.float({}),
      email: t.arg.string({ required: true }),
      name: t.arg.string({required: true})
    },
    resolve: async (query, _, args, context) => {

      const balances = await prisma.balances.findFirst({
        ...query,
        where: {
          OR: [ {email: args.email}],
          AND: [{period: args.period}]
        }
      })

      if(balances) {
        throw new Error("Credits for this period have already been added")
      }

      const newBalances = await prisma.balances.create({
        data: { ...args },
      });

      return newBalances;
    },
  }),

  EditBalances: t.prismaField({
    type: "Balances",
    args: {
      id: t.arg.string({ required: true }),
      annualCredit: t.arg.float({}),
      annualUsed: t.arg.float({}),
      annualRemaining: t.arg.float({}),
      healthCredit: t.arg.float({}),
      healthUsed: t.arg.float({}),
      healthRemaining: t.arg.float({}),
      studyCredit: t.arg.float({}),
      studyUsed: t.arg.float({}),
      studyRemaining: t.arg.float({}),
      maternityCredit: t.arg.float({}),
      maternityUsed: t.arg.float({}),
      maternityRemaining: t.arg.float({}),
      familyCredit: t.arg.float({}),
      familyUsed: t.arg.float({}),
      familyRemaining: t.arg.float({}),
      paternityCredit: t.arg.float({}),
      paternityUsed: t.arg.float({}),
      paternityRemaining: t.arg.float({}),
      unpaidUsed: t.arg.float({}),
    },
    resolve: async (quey, _, args, context) => {
      const newBalances = await prisma.balances.update({
        where: { id: args.id },
        data: { ...args },
      });

      return newBalances; 
    },
  }),
}));
