'use client';
import React from 'react';

import Hero from '@/components/hero/hero';
import AboutUs from '@/components/about-us/about-us';
//import Gallery from '@/components/gallery/gallery';
import Prizes from '@/components/prizes/prizes';
import { StatsMain } from '@/components/stats/stats-main';
import Timeline from '@/components/timeline/timeline';
import CommunityPartnerSection from '@/components/communityPartners/CommunityPartners';
import CampusAmbasador from '@/components/campusAmbasador/CampusAmbasador';

const Playground = () => {
  return (

    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      <Hero />
      <AboutUs />
      <StatsMain />
      <Prizes />
      {/* <Gallery /> */}
      <Timeline />
      <CommunityPartnerSection />
      <CampusAmbasador />
    </div>
  );
};

export default Playground;
