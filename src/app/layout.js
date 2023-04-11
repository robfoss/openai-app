import './globals.css';
import Providers from './providers';
import { Inconsolata, IBM_Plex_Mono } from 'next/font/google';

export const metadata = {
  title: "Rob's AI Blog Generator",
  description: 'Generate a blogs using AI',
};

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

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inconsolata.variable}, ${ibmPlexMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
