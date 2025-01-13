import './globals.css';

import { GeistSans } from 'geist/font/sans';

import HOC from '@/components/shared/hoc/HOC';
import GlobalStyles from '@/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';

import { dmsans, inter, poppins, prompt, proza, satoshi } from '../fonts/fonts';

export const metadata = {
  title: 'HackNITR 6.0',
  description: 'HackNitR is a hackathon hosted by the National Institute of Technology, Rourkela.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${GeistSans.variable} ${poppins.variable} ${proza.variable} ${inter.variable} ${prompt.variable} ${dmsans.variable} ${satoshi.variable} antialiased`}
        suppressHydrationWarning
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <HOC>{children}</HOC>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
