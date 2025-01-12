import { DESCRIPTION } from '@/config/content/about-us';

import {
  AboutUsHeading,
  AboutUSHeadingContainer,
  DescriptionContainer,
  SectionContainer,
} from './styles';

const AboutUs = () => {
  return (
    <SectionContainer id='About'>
      <AboutUSHeadingContainer>
        <AboutUsHeading>About Us</AboutUsHeading>
      </AboutUSHeadingContainer>
      <DescriptionContainer className='-mt-5'>{DESCRIPTION}</DescriptionContainer>
    </SectionContainer>
  );
};

export default AboutUs;
