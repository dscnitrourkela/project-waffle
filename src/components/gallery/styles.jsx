import styled from 'styled-components';
import tw from 'twin.macro';

import { QuestionsHeadingContainer } from '../questions/styles';
import { H1 } from '../shared/typography/Headings';

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

export const CanvasContainer = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
