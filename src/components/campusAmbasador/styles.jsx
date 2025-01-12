import styled from 'styled-components';
import tw from 'twin.macro';
import { GalleryHeadingContainer } from '../gallery/styles';

const Container = styled.div`
  ${tw`relative flex flex-col items-center justify-between w-full px-4 mx-auto sm:max-w-md sm:px-6 md:max-w-full md:px-8 md:flex-row lg:max-w-6xl lg:px-12 xl:max-w-7xl`}
`;

const ContentSection = styled.div`
  ${tw`flex flex-col w-full mb-8 space-y-4 
      sm:space-y-6 
      md:w-[45%] md:mb-0 md:pr-2
      lg:w-1/2 lg:pr-6 
      xl:pr-8`}
`;

const Description = styled.p`
  ${tw`mb-4 text-lg font-semibold text-white leading-relaxed
      sm:mb-5 sm:text-2xl
      md:text-xl md:leading-[1.6]
      lg:text-[28px]
      xl:text-[32px] xl:leading-[1.73]`}
`;

const End = styled.p`
  ${tw`mb-4 text-[20px] text-[#FC952A] font-bold leading-[1.73]
      sm:mb-5`}
`;

const IllustrationSection = styled.div`
  ${tw`w-full pl-0 mt-6 sm:mb-3.5
      sm:mt-8 
      md:w-[55%] md:mt-0 md:pl-2
      lg:w-1/2 lg:pl-6 
      xl:pl-8`}
`;

const TitleContainer = styled(GalleryHeadingContainer)`
  ${tw`flex justify-center px-4 py-3 mx-auto mt-32 mb-2 rounded-lg w-fit sm:mb-6 sm:px-6 sm:py-4 md:px-4 md:mb-24 lg:px-8 xl:py-5`}
  background: #f6dfc2;
  border-radius: 1.125rem;
`;

const ItemContainer = styled.li`
  ${tw`flex items-center gap-2 py-4 sm:gap-4 md:gap-3`}
  align-self: stretch;
`;

const PointContainer = styled.div`
  ${tw`flex flex-wrap items-center sm:flex-nowrap md:flex-wrap lg:flex-nowrap`}
`;

const SvgIconContainer = styled.div`
  ${tw`flex-shrink-0 mr-2 sm:mr-4 md:mr-3 lg:mr-6`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col flex-1 min-w-0`}
`;

const Title = styled.p`
  ${tw`text-[#FC952A] font-satoshi truncate text-sm
      sm:text-base
      md:text-sm
      lg:text-base`}
`;

const Text = styled.p`
  ${tw`text-sm text-white font-satoshi sm:text-base md:text-sm lg:text-base`}
`;

const OuterCover = styled.div`
  ${tw`flex w-full px-4 mt-8 justify-end
      sm:px-6 
      md:px-8 lg:justify-end md:w-[95%]
      lg:w-[100%] 
      xl:w-[85%]
      2xl:w-[80%]
      lg:mr-8
      `}
`;

const InnerCover = styled.div`
  ${tw`ml-7 sm:ml-5 md:ml-4 lg:ml-1 xl:ml-4 2xl:ml-11`}
`;

export {
  Container,
  ContentSection,
  Description,
  IllustrationSection,
  TitleContainer,
  ItemContainer,
  Text,
  OuterCover,
  InnerCover,
  End,
  Title,
  TextContainer,
  PointContainer,
  SvgIconContainer,
};
