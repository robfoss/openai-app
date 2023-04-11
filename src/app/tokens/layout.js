'use client';
import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import Providers from '../providers';

import Logo from '@/components/Logo';

export default function PostLayout({ children }) {
  const { user } = useUser();
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
            <div className='flex flex-col text-white overflow-hidden'>
              <div className='bg-slate-700'>
                <Logo />
                <Link href={'/post/new'}>New Post</Link>
                <Link href={'/tokens/token-topup'}>0 tokens available</Link>
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
