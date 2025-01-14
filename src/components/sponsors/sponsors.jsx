import { TimeLineHeading, TimelineHeadingContainer } from '../timeline/styles';
import { AlphaCard, BetaCard, DeltaCard } from './sponsor-card';
import { SponsorsData, PastSponsorsData } from '@/config/content/sponsors';

export const Sponsors = () => {
  return (
    <>
      <div className='flex w-full justify-center mb-12' id='Sponsors'>
        <TimelineHeadingContainer>
          <TimeLineHeading>Sponsors</TimeLineHeading>
        </TimelineHeadingContainer>
      </div>
      <div className='flex flex-col gap-4 md:gap-8 w-full '>
        <AlphaCard sponsors={SponsorsData.Alpha} />
        <BetaCard sponsors={SponsorsData.Beta} />
      </div>
    </>
  );
};

export const PastSponsors = () => {
  return (
    <>
      <div className='flex w-full justify-center mb-12' id='PastSponsors'>
        <TimelineHeadingContainer>
          <TimeLineHeading>Past Sponsors</TimeLineHeading>
        </TimelineHeadingContainer>
      </div>
      <div className='flex flex-col gap-4 md:gap-8 w-full mb-12'>
        <AlphaCard sponsors={PastSponsorsData.Alpha} />
        <BetaCard sponsors={PastSponsorsData.Beta} />
        <DeltaCard sponsors={PastSponsorsData.Delta} />
      </div>
    </>
  );
};
