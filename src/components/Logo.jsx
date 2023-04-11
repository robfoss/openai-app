import React from 'react';
import { GiArtificialHive } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className='text-2xl text-center py-4 flex items-center font-content space-x-2'>
      <h2 className='font-content font-medium text-xl'>AI Blog Generator</h2>
      <GiArtificialHive className='text-2xl text-slate-400' />
    </div>
  );
};

export default Logo;
