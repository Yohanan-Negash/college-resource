import localFont from 'next/font/local';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { ThemeProviderWrapper } from '@/components/theme-provider-wrapper';

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
  title: 'PhazeOne | Tech Career Launchpad for SWE Students',
  description:
    'Your tech career launchpad. Curated resources, roadmaps, and tools for SWE freshmen and sophomores. Write your first line of code, ace interviews, and start building your future in tech.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProviderWrapper
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
