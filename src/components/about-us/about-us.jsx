import { DESCRIPTION } from '@/config/content/about-us';

import {
  AboutUsHeading,
  AboutUSHeadingContainer,
  DescriptionContainer,
  SectionContainer,
} from './styles';

const AboutUs = () => {
  return (
    <SectionContainer>
      <AboutUSHeadingContainer>
        <AboutUsHeading>About Us</AboutUsHeading>
      </AboutUSHeadingContainer>
      <DescriptionContainer>{DESCRIPTION}</DescriptionContainer>
    </SectionContainer>
  );
};

export default AboutUs;
