import React from 'react';
import { H1 } from '../shared/typography/Headings';

import {
  Container,
  ContentSection,
  Description,
  IllustrationSection,
  TitleContainer,
  ItemContainer,
  Text,
  InnerCover,
  OuterCover,
  End,
  Title,
  TextContainer,
  PointContainer,
  SvgIconContainer,
} from './styles';
import { PrimaryButton } from '../shared/typography/Button';
import SvgIcon from '../communityPartners/Daimond';
import {
  BULLET_POINTS,
  CAMPUS_AMBASADOR,
  DETAILS,
} from '@/config/content/CampusAmbasador/index.js';

const CampusAmbasador = () => {
  return (
    <>
      <>
        <TitleContainer>
          <H1>{DETAILS.title}</H1>
        </TitleContainer>

        <Container>
          <IllustrationSection>
            <img src={CAMPUS_AMBASADOR} alt='Community ambassador' className='w-full h-auto' />
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
          </ContentSection>
        </Container>
      </>

      <OuterCover>
        <InnerCover>
          <End>{DETAILS.end}</End>
          <PrimaryButton text={DETAILS.button} />
        </InnerCover>
      </OuterCover>
    </>
  );
};

export default CampusAmbasador;
