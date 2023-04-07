'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user } = useUser();

  return (
    <main>
      <h1>This is the Home Page</h1>
      <div>
        {user ? (
          <>
            <div>
              <Image
                src={user.picture}
                alt={user.name}
                height={50}
                width={50}
              />
              {user.email}
            </div>
            <Link href={'/api/auth/logout'}>Logout</Link>
          </>
        ) : (
          <Link href={'/api/auth/login'}>Login</Link>
        )}
      </div>
    </main>
  );
}
