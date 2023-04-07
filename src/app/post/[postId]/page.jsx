import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function PostPage() {
  return <div>PostPage</div>;
});
