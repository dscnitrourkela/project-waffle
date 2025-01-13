import styled from 'styled-components';
import tw from 'twin.macro';

import { GalleryHeadingContainer } from '../gallery/styles';

const Container = styled.div`
  ${tw`relative flex flex-col-reverse items-center justify-between w-full max-w-6xl mx-auto slg:flex-row my-10`}
`;

const ContentSection = styled.div`
  ${tw`flex flex-col w-full mt-8 mb-8 space-y-0 sm:space-y-6 slg:w-1/2 md:mb-0`}
`;

const Description = styled.p`
  ${tw`mb-4 text-xl text-white font-semibold leading-[1.73] font-geist
      sm:mb-5 sm:text-2xl 
      lg:text-[32px]`}
`;

const End = styled.p`
  ${tw`mb-4 text-[18px] text-center ssm:text-start md:text-[20px] text-[#FC952A] font-bold leading-[1.73] font-geist
      sm:mb-5`}
`;

const IllustrationSection = styled.div`
  ${tw`w-full pl-0 mt-6 slg:w-1/2 md:mt-0 md:pl-8 sm:mb-3.5 md:w-[70%]`}
`;

const TitleContainer = styled(GalleryHeadingContainer)``;

const ItemContainer = styled.li`
  ${tw`flex items-center gap-3 py-3 sm:gap-4 sm:py-4`}
  align-self: stretch;
`;

const Text = styled.p`
  ${tw`text-white font-satoshi sm:text-base`}
`;

const OuterCover = styled.div`
  ${tw`w-full max-w-6xl mx-auto  md:flex-row `}
`;

const InnerCover = styled.div`
  ${tw`flex flex-col items-center justify-start ssm:ml-10 ssm:items-start`}
`;

export {
  Container,
  ContentSection,
  Description,
  End,
  IllustrationSection,
  InnerCover,
  ItemContainer,
  OuterCover,
  Text,
  TitleContainer,
};
