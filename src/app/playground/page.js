'use client';
import React from 'react';

import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import Timeline from '@/components/timeline/timeline';
import { Footer } from '@/components/Footer/Footer';

const Playground = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      <Prizes />
      {/* <Gallery /> */}
      <Timeline />
      <Footer />
    </div>
  );
};

export default Playground;
