import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { agentsInsertSchema } from "../schemas";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const agentsRouter = createTRPCRouter({
    // Todo:change 'getmany' and 'getOne' to 'protectedd procedure'

    getOne: protectedProcedure.input(z.object({id:z.string()})).query(async({input})=>{
        const [exitingAgent]= await db
        .select()
        .from(agents)
        .where(eq(agents.id,input.id))
        // throw new TRPCError({code:"BAD_REQUEST"})
        return exitingAgent;
    }),
    
    getMany: protectedProcedure.query(async()=>{
        const data= await db
        .select()
        .from(agents);
        // throw new TRPCError({code:"BAD_REQUEST"})
        return data;
    }),

    create:protectedProcedure.input(agentsInsertSchema)
    .mutation(async({input,ctx})=>{
        const [createdAgent]= await db.insert(agents)
        .values({
            ...input,
            userId:ctx.auth.user.id,
        })
        .returning();

        return createdAgent;
    })
});