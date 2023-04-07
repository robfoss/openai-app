import Providers from '../providers';
export const metadata = {
  title: "Rob's AI Blog Generator",
  description: 'Generate a blogs using AI',
};

export default function TokensLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}