'use client';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function TokenTopUp() {
  const handleClick = async () => {
    await fetch(`/api/addTokens`, {
      method: 'POST',
    });
  };
  return (
    <div>
      <h1>Token Top Up</h1>
      <button
        className='bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer px-4  py-2 rounded-md hover:bg-green-600 transition-colors block'
        onClick={handleClick}
      >
        Add Tokens
      </button>
    </div>
  );
});
