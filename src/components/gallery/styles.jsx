import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { QuestionsHeadingContainer } from '../questions/styles';
import { H1 } from '../shared/typography/Headings';
import Image from 'next/image';

export const GalleryHeadingContainer = styled(QuestionsHeadingContainer)``;

export const SectionContainer = styled.div`
  ${tw`
    mx-auto
    max-w-[1540px]
    w-full
    mb-12
  `}
`;

export const GalleryHeading = styled(H1)`
  ${tw`text-center`}
`;

export const GalleryContainer = styled.div`
  ${tw`w-screen overflow-hidden py-10 space-y-[5rem] md:space-y-[7rem]`}
`;

export const RowContainer = styled.div`
  ${tw`flex`}
`;

export const GalleryImage = styled(Image)`
  ${tw`bg-[#F6DFC2] p-2 shadow-[6px_6px_0px_0px_#DC4475] object-cover rounded-lg hover:scale-105 transition-transform duration-300 mx-20 `}
`;
