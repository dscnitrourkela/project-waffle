import styled from 'styled-components';
import tw from 'twin.macro';

import { QuestionsHeadingContainer } from '../questions/styles';
import { H1 } from '../shared/typography/Headings';

export const SectionContainer = styled.div`
  ${tw`
    flex flex-col justify-center items-center gap-[40px] sm:gap-[50px] md:gap-[67px] max-w-[1200px]
  `}
`;

export const StatsHeadingContainer = styled(QuestionsHeadingContainer)``;

export const StatsHeading = styled(H1)``;

export const CardContainer = styled.div`
  ${tw`flex gap-[20px] items-center my-10`}
`;

export const FirstCard = styled.div`
  ${tw`h-full w-full z-10 rounded-[23px] bg-[#f6dfc2]`}
`;

export const SecondCard = styled.div`
  ${tw`h-full absolute -z-10 top-[4.82px] left-[6.42px] w-full rounded-[23px] bg-[#E84B7D]`}
`;

export const Circle = styled.div`
  ${tw`h-full absolute -z-10 top-[4.82px] left-[6.42px] w-full rounded-[23px] bg-[#E84B7D]`}
`;

// export const CardSubContainer =
//   styled.div <
//   { isActive: Number } >
//   `
//   ${({ isActive }) => [
//     tw`transition-transform`,
//     isActive === 1 ? tw`scale-100 mt-0` : tw`scale-[0.96] mt-[15px]`,
//   ]}
// `;
