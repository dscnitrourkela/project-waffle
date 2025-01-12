import React from 'react';
import tw, { styled } from 'twin.macro';

const BackgroundContainer = styled.div`
  ${tw`relative w-full min-h-screen`}
`;

const BackgroundWrapper = styled.div`
  ${tw`fixed inset-0 w-full h-full`}
`;

const BackgroundImage = styled.img`
  ${tw`absolute inset-0 object-cover w-full h-full`}
`;

const Overlay = styled.div`
  ${tw`absolute inset-0`}
`;

const ContentWrapper = styled.div`
  ${tw`relative z-10 flex items-center justify-center w-full min-h-screen`}
`;

const CenteredContent = styled.div`
  ${tw`w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8`}
`;

const BackgroundLayout = ({ children }) => {
  return (
    <BackgroundContainer>
      <BackgroundWrapper>
        <BackgroundImage
          src='https://res.cloudinary.com/dqqyuvg1v/image/upload/v1736695907/Background_1_p1vgak.png'
          alt='Background'
        />
        <Overlay />
      </BackgroundWrapper>
      <ContentWrapper>
        <CenteredContent>{children}</CenteredContent>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default BackgroundLayout;
