import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1>This is the Home Page</h1>
      <div>
        <Link href={'/api/auth/login'}>Login</Link>
      </div>
    </main>
  );
}
