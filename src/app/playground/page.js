'use client';
import React from 'react';

import AboutUs from '@/components/about-us/about-us';
import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import Stats from '@/components/stats/stats';
import Timeline from '@/components/timeline/timeline';

const Playground = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      <AboutUs />
      <Stats />
      <Prizes />
      <Gallery />
      <Timeline />
    </div>
  );
};

export default Playground;
