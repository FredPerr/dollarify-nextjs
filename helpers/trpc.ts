import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../pages/api/trpc/[trpc]';


export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}


/*

Example of use in Component:

const hello = trpc.useQuery(['hello', { text: 'client' }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );




*/