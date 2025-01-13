import React from 'react';

import Image from 'next/image';

import {
  BULLET_POINTS,
  CAMPUS_AMBASADOR,
  CAMPUS_AMBASADOR_LINK,
  DETAILS,
} from '@/config/content/CampusAmbasador/index.js';

import SvgIcon from '../communityPartners/Daimond';
import { GalleryHeading } from '../gallery/styles';
import { PrimaryButton } from '../shared/typography/Button';
import {
  Container,
  ContentSection,
  Description,
  End,
  IllustrationSection,
  InnerCover,
  ItemContainer,
  PointContainer,
  SvgIconContainer,
  Text,
  TextContainer,
  Title,
  TitleContainer,
} from './styles';
import { handleRedirect } from '@/utils/handleRedirect';

const CampusAmbasador = () => {
  return (
    <>
      <>
        <TitleContainer className='mt-10 md:mt-20'>
          <GalleryHeading>{DETAILS.title}</GalleryHeading>
        </TitleContainer>

        <Container>
          <IllustrationSection>
            <Image
              src={CAMPUS_AMBASADOR}
              alt='Campus ambassador'
              width={500}
              height={500}
              className='w-full h-auto'
            />
          </IllustrationSection>
          <ContentSection>
            <Description>{DETAILS.des}</Description>
            <ul>
              {BULLET_POINTS.map((item, index) => (
                <ItemContainer key={index}>
                  <PointContainer>
                    <SvgIconContainer>
                      <SvgIcon />
                    </SvgIconContainer>
                    <TextContainer>
                      <Title>{item.title}</Title>
                      <Text>{item.description}</Text>
                    </TextContainer>
                  </PointContainer>
                </ItemContainer>
              ))}
            </ul>
            <InnerCover>
              <End>{DETAILS.end}</End>
              <PrimaryButton
                text={DETAILS.button}
                onClick={() => handleRedirect(CAMPUS_AMBASADOR_LINK)}
              />
            </InnerCover>
          </ContentSection>
        </Container>
      </>
    </>
  );
};

export default CampusAmbasador;
