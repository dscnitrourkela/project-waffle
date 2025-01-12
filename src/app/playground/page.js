'use client';
import React from 'react';

import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import Timeline from '@/components/timeline/timeline';
import { AboutUsMain } from '@/components/aboutUs/AboutUsMain';
import { StatsMain } from '@/components/stats/StatsMain';

const Playground = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      <AboutUsMain />
      <StatsMain />
      <Prizes />
      <Gallery />
      <Timeline />
    </div>
  );
};

export default Playground;
