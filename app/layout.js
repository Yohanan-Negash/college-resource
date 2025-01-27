import localFont from 'next/font/local';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'PhazeOne | Tech Career Launchpad for CS Students',
  description:
    'Your tech career launchpad. Curated resources, roadmaps, and tools for CS freshmen and sophomores. Write your first line of code, ace interviews, and start building your future in tech.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
