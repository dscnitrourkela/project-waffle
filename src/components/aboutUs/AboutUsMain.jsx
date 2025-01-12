import { AboutUsHeading, AboutUSHeadingContainer, SectionContainer } from './AboutUsMain.Styles';
import { AboutUsDescription } from './Description';

export const AboutUsMain = () => {
  return (
    <SectionContainer>
      <AboutUSHeadingContainer>
        <AboutUsHeading>About Us</AboutUsHeading>
      </AboutUSHeadingContainer>
      <AboutUsDescription />
    </SectionContainer>
  );
};
