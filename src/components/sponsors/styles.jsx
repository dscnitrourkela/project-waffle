import styled from 'styled-components';
import tw from 'twin.macro';

export const AlphaCardContainer = styled.div`
  ${tw`
    flex flex-col justify-center items-center 
    w-[290px] h-[140px] md:w-[360px] md:h-[180px] 
    bg-[#f6dfc2] mb-16 rounded-2xl 
    shadow-[7px_7px_0px_0px_#d47384] 
    transition-all duration-300 ease-in-out 
    hover:scale-105
    relative
    overflow-hidden
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      #ffd700 0%,
      #ffec80 25%,
      #fff7d6 55%,
      #ffffff 50%,
      #fff7d6 55%,
      #ffec80 75%,
      #ffd700 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  &:hover::before {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const BetaCardContainer = styled.div`
  ${tw`
    flex flex-col justify-center items-center 
    w-[290px] h-[140px] md:w-[300px] md:h-[150px]
    bg-[#f6dfc2] mb-12 rounded-2xl 
    shadow-[7px_7px_0px_0px_#d47384] 
    transition-all duration-300 ease-in-out 
    hover:scale-105
    relative
    overflow-hidden
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      #6a6a6a 0%,
      #9a9a9a 20%,
      #d8d8d8 40%,
      #f0f0f0 52%,
      #ffffff 50%,
      #f0f0f0 52%,
      #d8d8d8 60%,
      #9a9a9a 80%,
      #6a6a6a 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  &:hover::before {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const DeltaCardContainer = styled.div`
  ${tw`
    flex flex-col justify-center items-center 
    w-[260px] h-[130px]
    bg-[#f6dfc2] rounded-2xl 
    shadow-[7px_7px_0px_0px_#d47384] 
    transition-all duration-300 ease-in-out 
    hover:scale-105
    relative
    overflow-hidden
    mt-1 mb-3
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      #cd7f32 0%,
      #d8a165 25%,
      #e2c497 55%,
      #ffffff 50%,
      #e2c497 55%,
      #d8a165 75%,
      #cd7f32 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  &:hover::before {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
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
        p-4 h-[85px]
    `}
`;

export const SponsorCategory = styled.h4`
  ${tw`
        text-lg text-[#454545] font-medium
    `}
`;
