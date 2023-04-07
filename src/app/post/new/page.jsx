'use client';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function NewPost() {
  return <div>New Post</div>;
});
