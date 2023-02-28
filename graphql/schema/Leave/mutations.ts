
import prisma from "../../../lib/prismadb";
import { builder } from "../../builder";
import { LeaveType } from "./enum";



builder.mutationFields((t) => ({
    AddLeave: t.prismaField({
        type: "Leave",
        args: {
            type: t.arg({ type: LeaveType , required: true}),
            startDate: t.arg({type: "DateTime", required: true}),
            endDate: t.arg({type: "DateTime"}),
            daysRequested: t.arg.float(),
            requestedBy: t.arg.string(),
            requesterNote: t.arg.string(),
            requesterEmail: t.arg.string(),
        },
        resolve:async (query, _, args, context) => {
            const VerifyStartDate = await prisma.leave.findFirst({
                ...query,
                where: {startDate: args.startDate}
            })

            if(VerifyStartDate) {
                throw new Error("Choose another date")
            }

            const newRequest = await prisma.leave.create({
                data: {...args}
            })

            return newRequest
        }
    })
}))