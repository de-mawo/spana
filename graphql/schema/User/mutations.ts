import { builder } from "../../builder";
import prisma from "../../../lib/prismadb";
import bcrypt from "bcrypt";

builder.mutationFields((t) => ({
  // signUp: t.prismaField({
  //   type: "User",
  //   args: {
  //     email: t.arg.string({ required: true }),
  //     name: t.arg.string({ required: true }),
  //     password: t.arg.string({ required: true }),
  //   },
  //   resolve: async (query, _, args, context) => {
  //     const user = await prisma.user.findFirst({
  //       ...query,
  //       where: { email: args.email },
  //     });

  //     //Check if email is allowed to register
  //     if(!args.email.endsWith('spana.com')){
  //       throw new Error('Email Not Allowed')
  //     }
  //     //Check if User Already Exist. 
  //     if (user) {
  //       return user;
  //     }
  //     const hashedPassword = await bcrypt.hash(args.password, 12);
  //     const newUser = await prisma.user.create({
  //       data:{ ...args, password: hashedPassword}
  //     });

  //     return newUser;
  //   },
  // }),

  
}));
