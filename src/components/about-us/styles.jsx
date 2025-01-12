import styled from 'styled-components';
import tw from 'twin.macro';

import { PrizesHeading, PrizesHeadingContainer } from '../prizes/styles';
import { Paragraph } from '../shared/typography/Headings';

export const DescriptionContainer = styled(Paragraph)`
  ${tw`
    font-light text-[15px] sm:text-[18px]  md:text-[20px] lg:leading-[32px] font-geist max-w-5xl
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
