'use client';

import { Footer } from '@/components/marginals/footer/footer';
import Navbar from '@/components/marginals/navbar/navbar';

import BackgroundLayout from '../BackgroundLayout';

function HOC({ children }) {
  return (
    <>
      <Navbar />
      <BackgroundLayout>{children}</BackgroundLayout>
      <Footer />
    </>
  );
}

export default HOC;
