import React from 'react';
import Image from 'next/image';
import HeroImage from '../../public/hero.webp';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={HeroImage} alt='Hero Image' fill className='absolute' />
      <div className='relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-800/80 rounded-md backdrop-blur-sm'>
        <Logo />
        <p className=''>
          AI Blog-Gen is a AI-powered SAAS solution to generate SEO-optimized
          blog posts in minutes. Get ultra high-quality content in no time.
        </p>
        <Link
          href={'/post/new'}
          className='bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer px-4  py-2 rounded-md hover:bg-green-600 transition-colors block'
        >
          Begin
        </Link>
      </div>
    </main>
  );
}
