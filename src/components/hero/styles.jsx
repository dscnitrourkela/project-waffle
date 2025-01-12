import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';

export const ParentContainer = styled.main`
  ${tw`min-h-[70vh] bg-[#200818] overflow-x-hidden pt-16 sm:pt-20`}
`;
export const HeroImage = styled(Image)`
  ${tw`w-full h-auto pb-10`}
`;
export const TextStyle = styled.div`
  ${tw`text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12`}
`;

export const ButtonContainer = styled.div`
  ${tw`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6`}
`;

export const SectionContainer = styled.div`
  ${tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pb-32 text-center`}
`;

export const SectionContainer2 = styled.div`
  ${tw`max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mx-auto mb-8`}
`;
