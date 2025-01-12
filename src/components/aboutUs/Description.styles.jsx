import styled from 'styled-components';
import tw from 'twin.macro';

import { Paragraph } from '../shared/typography/Headings';

export const DescriptionContainer = styled(Paragraph)`
  ${tw`
    font-light text-[20px] leading-[32px] sm:text-[24px] sm:leading-[36px] md:text-[28px] md:leading-[44.8px] lg:text-[32px] lg:leading-[51.2px]
  `}
`;
