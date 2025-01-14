'use client';

import React from 'react';

import { Heading3 } from '@/components/shared/typography/Headings';

import {
  AboutBox,
  Content,
  FirstAboutContainer,
  FirstRow,
  FrItems,
  LogoCont,
  LogoImg,
  Para,
} from './styles';

const AboutContainer = ({ AbtLogo, aboutContent, abtLinks }) => (
  <FirstAboutContainer>
    <FirstRow>
      {abtLinks.map((link) => (
        <FrItems href={link.url} key={link.id} target={link.target} rel={link.rel}>
          {link.title}
        </FrItems>
      ))}
    </FirstRow>

    <AboutBox>
      <LogoCont>
        <LogoImg src={AbtLogo.imgSrc} alt={aboutContent.img.alt} />
      </LogoCont>
      <Para>
        <Heading3>{aboutContent.title}</Heading3>
        <Content>{aboutContent.text}</Content>
      </Para>
    </AboutBox>
  </FirstAboutContainer>
);

export default AboutContainer;
