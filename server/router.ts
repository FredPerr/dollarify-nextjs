import * as trpc from "@trpc/server";
import { z } from "zod";

import { Context } from "./context";

export const serverRouter = trpc
  .router<Context>()
  .query("findAll", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("createOne", {
    input: z.object({
      id: z.string(),
      email: z.string(),
      password: z.string()
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.user.create({
        data: { id: input.id, email: input.email, password: input.password },
      });
    },
  })
  .mutation("deleteAll", {
    input: z.object({
      ids: z.string().array(),
    }),
    resolve: async ({ input, ctx }) => {
      const { ids } = input;

      return await ctx.prisma.user.deleteMany({
        where: {
          id: { in: ids },
        },
      });
    },
  });

export type ServerRouter = typeof serverRouter;