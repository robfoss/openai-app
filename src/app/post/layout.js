'use client';
import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { GiTwoCoins } from 'react-icons/gi';
import Providers from '../providers';

import Logo from '@/components/Logo';

import { Inconsolata, IBM_Plex_Mono } from 'next/font/google';

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

export default function PostLayout({ children }) {
  const { user } = useUser();
  return (
    <html
      lang='en'
      className={`${inconsolata.variable}, ${ibmPlexMono.variable}`}
    >
      <body>
        <Providers>
          <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
            <div className='flex flex-col text-white overflow-hidden'>
              <div className='bg-slate-700 px-2'>
                <Logo />
                <Link
                  className='bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer px-4  py-2 rounded-md hover:bg-green-600 transition-colors block'
                  href={'/post/new'}
                >
                  New Post
                </Link>
                <Link
                  className='mt-2 text-center flex'
                  href={'/tokens/token-topup'}
                >
                  <GiTwoCoins className='text-yellow-500 w-6 h-6' />
                  <span className='pl-1'>0 tokens available</span>
                </Link>
              </div>
              <div className='flex-1 overflow-auto bg-gradient-to-b from-slate-700 to-cyan-700'>
                list of posts
              </div>
              <div className='bg-cyan-700 flex items-center gap-2 border-t border-t-black/50 h-20 px-2'>
                {user ? (
                  <>
                    <div className='min-w-[50px]'>
                      <Image
                        src={user.picture}
                        alt={user.name}
                        height={50}
                        width={50}
                        className='rounded-full'
                      />
                    </div>
                    <div className='flex-1'>
                      <div className='font-semibold'>{user.email}</div>
                      <Link className='text-sm' href={'/api/auth/logout'}>
                        Logout
                      </Link>
                    </div>
                  </>
                ) : (
                  <Link href={'/api/auth/login'}>Login</Link>
                )}
              </div>
            </div>
            <div className='bg-green-500'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
