import './globals.css';

import { GeistSans } from 'geist/font/sans';

import HOC from '@/components/shared/hoc/HOC';
import GlobalStyles from '@/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import { dmsans, inter, poppins, prompt, proza, satoshi, nunitosans } from '../fonts/fonts';
import { description, images, metadataBase, title, url } from '@/config/seo';

export const metadata = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${nunitosans.variable} ${GeistSans.variable} ${poppins.variable} ${proza.variable} ${inter.variable} ${prompt.variable} ${dmsans.variable} ${satoshi.variable} antialiased`}
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
