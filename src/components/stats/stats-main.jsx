import { STATSCONTENT } from '@/config/content/stats';

import { Card } from './cards';
import { CardContainer, SectionContainer, StatsHeading, StatsHeadingContainer } from './styles';

export const StatsMain = () => {
  return (
    <SectionContainer className='mt-20' id='Stats'>
      <StatsHeadingContainer>
        <StatsHeading>Stats HackNITR 5.0</StatsHeading>
      </StatsHeadingContainer>
      <CardContainer>
        {STATSCONTENT.map((items, index) => (
          <div
            style={{ scale: index === 1 ? 1 : 0.96, marginTop: index === 1 ? '0' : '15px' }}
            key={index}
          >
            <Card imgUrl={items.image} />
          </div>
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

// export default Stats;
