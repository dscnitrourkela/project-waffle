import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

import { QuestionsHeadingContainer } from '../questions/styles';
import { H1 } from '../shared/typography/Headings';

export const PrizeCardContainer = styled.div`
  ${tw`
    relative
    flex
    flex-col
    items-center
    justify-center
  `}
`;

export const PrizeCardImage = styled(Image)`
  ${tw`
    relative
    h-[300px]
    w-[250px]
  `}
`;

export const PrizeAmount = styled(H1)`
  ${tw`
    absolute
    top-[35%]
    sm:top-[32%]
    ssm:top-[30%]
    msm:top-[25%]
    smd:top-[20%]
    text-center
    w-full
    z-10
    text-2xl
    ssm:text-3xl
    msm:text-4xl
    md:text-5xl
  `}
`;

export const PrizesContainer = styled.div`
  ${tw`max-w-6xl mx-auto flex flex-col items-center justify-center`}
`;

export const PrizesHeadingContainer = styled(QuestionsHeadingContainer)``;
export const PrizesHeading = styled(H1)``;

export const PrizesContent = styled.div`
  ${tw` md:my-10
        flex
        items-center
        justify-center
        w-full
        gap-3`}
`;
