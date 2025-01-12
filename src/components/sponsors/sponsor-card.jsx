import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  AlphaCardContainer,
  BetaCardContainer,
  DeltaCardContainer,
  InnerCardContainer,
  SponsorImage,
  SponsorCategory,
} from './styles';
import { SponsorsData } from '@/config/content/sponsors';

export const AlphaCard = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
      {SponsorsData.Alpha.map((sponsor) => (
        <AlphaCardContainer key={sponsor.name}>
          <InnerCardContainer>
            <SponsorImage src={sponsor.imageURL} alt={sponsor.name} />
            <SponsorCategory>{sponsor.SponsorsCategory}</SponsorCategory>
          </InnerCardContainer>
        </AlphaCardContainer>
      ))}
    </div>
  );
};

export const BetaCard = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-8 gap-y-5 justify-center items-center'>
      {SponsorsData.Beta.map((sponsor) => (
        <BetaCardContainer key={sponsor.name}>
          <InnerCardContainer>
            <SponsorImage src={sponsor.imageURL} alt={sponsor.name} />
            <SponsorCategory>{sponsor.SponsorsCategory}</SponsorCategory>
          </InnerCardContainer>
        </BetaCardContainer>
      ))}
    </div>
  );
};

export const DeltaCard = () => {
  return (
    <>
      {/* Mobile view with marquee */}
      <div className='block md:hidden'>
        <Marquee gradient={false} speed={50} pauseOnHover={true} className='w-full gap-x-8'>
          <div className='flex gap-8'>
            {SponsorsData.Delta.map((sponsor) => (
              <DeltaCardContainer key={sponsor.name}>
                <InnerCardContainer>
                  <SponsorImage src={sponsor.imageURL} alt={sponsor.name} />
                  <SponsorCategory>{sponsor.SponsorsCategory}</SponsorCategory>
                </InnerCardContainer>
              </DeltaCardContainer>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Desktop view without marquee */}
      <div className='hidden md:flex flex-row gap-8 justify-center items-center flex-wrap'>
        {SponsorsData.Delta.map((sponsor) => (
          <DeltaCardContainer key={sponsor.name}>
            <InnerCardContainer>
              <SponsorImage src={sponsor.imageURL} alt={sponsor.name} />
              <SponsorCategory>{sponsor.SponsorsCategory}</SponsorCategory>
            </InnerCardContainer>
          </DeltaCardContainer>
        ))}
      </div>
    </>
  );
};
