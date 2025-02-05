'use client';

import { Footer } from '@/components/marginals/footer/footer';
import Navbar from '@/components/marginals/navbar/navbar';
import BackgroundLayout from '../BackgroundLayout';
import { ReactLenis } from '@/lib/lenis';

function HOC({ children }) {
  return (
    <ReactLenis root>
      <Navbar />
      <BackgroundLayout>{children}</BackgroundLayout>
      <Footer />
    </ReactLenis>
  );
}

export default HOC;
