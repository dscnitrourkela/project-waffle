import styled from 'styled-components';
import tw from 'twin.macro';

import { QuestionsHeadingContainer } from '../questions/styles';
import { H1, Paragraph } from '../shared/typography/Headings';

export const DescriptionContainer = styled(Paragraph)`
  ${tw`
    font-light text-[15px] sm:text-[18px] md:text-[25px] lg:leading-[32px] font-geist max-w-5xl my-10
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
     flex flex-col justify-center items-center gap-[40px] sm:gap-[50px] md:gap-[67px] max-w-[1200px] md:min-h-[70vh]
  `}
`;
export const AboutUSHeadingContainer = styled(QuestionsHeadingContainer)``;
export const AboutUsHeading = styled(H1)``;
