import { AlphaCard, BetaCard, DeltaCard } from './sponsor-card';
import { TimeLineHeading, TimelineHeadingContainer } from '../timeline/styles';

export const Sponsors = () => {
  return (
    <>
      <div className='flex w-full justify-center mb-12'>
        <TimelineHeadingContainer>
          <TimeLineHeading>Sponsors</TimeLineHeading>
        </TimelineHeadingContainer>
      </div>
      <div className='flex flex-col gap-4 md:gap-8 w-full '>
        <AlphaCard />
        <BetaCard />
        <DeltaCard />
      </div>
    </>
  );
};
