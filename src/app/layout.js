import './globals.css';

export const metadata = {
  title: "Rob's AI Blog Generator",
  description: 'Generate a blogs using AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
