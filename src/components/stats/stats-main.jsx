import { STATSCONTENT, STATSROW2 } from '@/config/content/stats';

import { Card } from './cards';
import { CardContainer, SectionContainer, StatsHeading, StatsHeadingContainer } from './styles';

export const StatsMain = () => {
  return (
    <SectionContainer className='mt-20' id='Stats'>
      <StatsHeadingContainer>
        <StatsHeading>Stats till now</StatsHeading>
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
      <div className='-mt-8 px-14 ssm:px-16'>
        <CardContainer>
          {STATSROW2.map((items, index) => (
            <div style={{ marginTop: '-70px' }} key={index}>
              <Card imgUrl={items.image} />
            </div>
          ))}
        </CardContainer>
      </div>
    </SectionContainer>
  );
};

// export default Stats;
