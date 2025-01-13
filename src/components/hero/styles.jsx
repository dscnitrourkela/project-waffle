import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

export const ParentContainer = styled.main`
  ${tw`min-h-[90vh] grid place-items-center`}
`;
export const HeroImage = styled(Image)`
  ${tw`w-full h-auto pb-10`}
`;
export const TextStyle = styled.div`
  ${tw`text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 font-geist`}
`;

export const ButtonContainer = styled.div`
  ${tw`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6`}
`;

export const SectionContainer = styled.div`
  ${tw`max-w-7xl mx-auto  text-center`}
`;

export const SectionContainer2 = styled.div`
  ${tw`max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mx-auto mb-8`}
`;
