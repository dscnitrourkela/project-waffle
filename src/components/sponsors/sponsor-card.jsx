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

const Card = ({ sponsors, CardContainer }) => {
  return (
    <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
      {sponsors.map((sponsor) => (
        <CardContainer key={sponsor.name}>
          <InnerCardContainer>
            <SponsorImage src={sponsor.imageURL} alt={sponsor.name} />
            <SponsorCategory>{sponsor.SponsorsCategory}</SponsorCategory>
          </InnerCardContainer>
        </CardContainer>
      ))}
    </div>
  );
};

export const AlphaCard = ({ sponsors }) => {
  return <Card sponsors={sponsors} CardContainer={AlphaCardContainer} />;
};

export const BetaCard = ({ sponsors }) => {
  return <Card sponsors={sponsors} CardContainer={BetaCardContainer} />;
};

export const DeltaCard = ({ sponsors }) => {
  return (
    <>
      {/* Mobile view with marquee */}
      <div className='block md:hidden mr-[-6px] ml-[-3px]'>
        <Marquee gradient={false} speed={50} pauseOnHover={false} className='w-full gap-x-8'>
          <div className='flex gap-8'>
            {sponsors.map((sponsor) => (
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
      <div className='hidden md:flex flex-row gap-10 justify-center items-center flex-wrap'>
        {sponsors.map((sponsor) => (
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
