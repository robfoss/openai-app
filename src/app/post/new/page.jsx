'use client';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function NewPost() {
  const handleClick = async () => {
    const response = await fetch('/api/generatePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Result: ', json);
  };

  return (
    <div>
      New Post
      <button
        className='bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer px-4  py-2 rounded-md hover:bg-green-600 transition-colors block'
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
});
