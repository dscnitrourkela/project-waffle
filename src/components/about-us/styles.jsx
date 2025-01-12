import styled from 'styled-components';
import tw from 'twin.macro';

import { PrizesHeading, PrizesHeadingContainer } from '../prizes/styles';
import { Paragraph } from '../shared/typography/Headings';

export const DescriptionContainer = styled(Paragraph)`
  ${tw`
    font-light text-[20px] leading-[32px] sm:text-[24px] sm:leading-[36px] md:text-[28px] md:leading-[44.8px] lg:text-[32px] lg:leading-[51.2px]
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
     flex flex-col justify-center items-center pb-[141px] gap-[40px] sm:gap-[50px] md:gap-[67px] max-w-[1200px]
  `}
`;
export const AboutUSHeadingContainer = styled(PrizesHeadingContainer)`
  ${tw`max-w-[340px]`}
`;
export const AboutUsHeading = styled(PrizesHeading)``;
