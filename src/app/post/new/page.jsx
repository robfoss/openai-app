'use client';
import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function NewPost() {
  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/generatePost', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ topic, keywords }),
      });
      const json = await response.json();
      console.log('Result: ', json.post.postContent);
      setPostContent(json.post.postContent);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Generate a blog post on the topic of: </strong>
          </label>
          <textarea
            className='resize-none border border-slate-400 w-full block my-2 px-4 py-2 rounded-sm'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label>
            <strong>Targeting the following keywords: </strong>
          </label>
          <textarea
            className='resize-none border border-slate-400 w-full block my-2 px-4 py-2 rounded-sm'
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer px-4  py-2 rounded-md hover:bg-green-600 transition-colors block'
        >
          Generate
        </button>
      </form>

      <div
        className='max-w-screen-sm p-10'
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  );
});
