import styled from 'styled-components';
import tw from 'twin.macro';

export const AlphaCardContainer = styled.div`
  ${tw`
     flex flex-col justify-center items-center w-[300px] h-[150px] md:w-[360px] md:h-[180px] bg-[#f6dfc2] mb-16 rounded-2xl shadow-[7px_7px_0px_0px_#d47384]
  `}
`;

export const BetaCardContainer = styled.div`
  ${tw`
        flex flex-col justify-center items-center w-[300px] h-[150px] bg-[#f6dfc2] mb-16 rounded-2xl shadow-[7px_7px_0px_0px_#d47384]
    `}
`;

export const DeltaCardContainer = styled.div`
  ${tw`
        flex flex-col justify-center items-center w-[260px] h-[130px] bg-[#f6dfc2] mb-16 rounded-2xl shadow-[7px_7px_0px_0px_#d47384] gap-x-2
    `}
`;

export const InnerCardContainer = styled.div`
  ${tw`
        flex flex-col justify-center items-center
    `}
`;

export const SponsorImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  ${tw`
        w-[180px] h-[80px]
    `}
`;

export const SponsorCategory = styled.h4`
  ${tw`
        text-lg text-black font-medium
    `}
`;
