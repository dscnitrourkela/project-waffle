'use client';
import React from 'react';

import AboutUs from '@/components/about-us/about-us';
import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import Stats from '@/components/stats/stats';
import Timeline from '@/components/timeline/timeline';
import CommunityPartnerSection from '@/components/communityPartners/CommunityPartners';
import CampusAmbasador from '@/components/campusAmbasador/CampusAmbasador';

const Playground = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full px-5'>
      <AboutUs />
      <Stats />
      <Prizes />
      <Gallery />
      <Timeline />
      <CommunityPartnerSection />
      <CampusAmbasador />
    </div>
  );
};

export default Playground;
