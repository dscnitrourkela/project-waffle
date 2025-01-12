import styled from 'styled-components';
import tw from 'twin.macro';

import { PrizesHeading, PrizesHeadingContainer } from '../prizes/styles';

export const SectionContainer = styled.div`
  ${tw`
     flex flex-col justify-center items-center gap-[40px] sm:gap-[50px] md:gap-[67px] max-w-[1200px]
  `}
`;
export const StatsHeadingContainer = styled(PrizesHeadingContainer)`
  ${tw`max-w-[608px]`}
`;
export const StatsHeading = styled(PrizesHeading)``;
