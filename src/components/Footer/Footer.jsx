'use client';

import React from 'react';
import { footer } from '@/config/content/Footer/index';
import { BackgroundWrapper, FooterContainer, InitialCont, SecondPendulumContainer } from './styles';
import TermsNCredits from './TermsNCredits';
import AboutContainer from './AboutBox';
import Cradle from './Cradle';

export const Footer = () => {
  return (
    <FooterContainer>
      {/* <BackgroundWrapper> */}
      <InitialCont>
        <AboutContainer
          AbtLogo={footer.Nitr}
          aboutContent={footer.cards[0]}
          abtLinks={footer.links}
        />
        <TermsNCredits copyw={footer.impLinks} />
      </InitialCont>
      <SecondPendulumContainer>
        <Cradle socials={footer.socials} text={footer.icons} />
      </SecondPendulumContainer>
      {/* </BackgroundWrapper> */}
    </FooterContainer>
  );
};
