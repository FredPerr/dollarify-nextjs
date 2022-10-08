import { createReactQueryHooks } from '@trpc/react';
import type { ServerRouter } from 'server/router';


export const trpc = createReactQueryHooks<ServerRouter>();
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