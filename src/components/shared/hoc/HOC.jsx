'use client';

import Navbar from '@/components/marginals/navbar/navbar';
import BackgroundLayout from '../BackgroundLayout';

function HOC({ children }) {
  return (
    <>
      <Navbar />
      <BackgroundLayout>{children}</BackgroundLayout>
    </>
  );
}

export default HOC;
