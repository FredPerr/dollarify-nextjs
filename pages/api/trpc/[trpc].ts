import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { serverRouter } from 'server/router';
import { createContext } from 'server/context';

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hi ${input?.text ?? 'world'}`,
      };
    },
  });

  // export API handler
export default trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext: createContext,
});