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
} from './styles';
import { PrimaryButton } from '../shared/typography/Button';
import SvgIcon from './Daimond';
import {
  BULLET_POINTS,
  COMMUNITY_PARTNER,
  DETAILS,
} from '@/config/content/CommunityPartners/index.js';
import { GalleryHeading } from '../gallery/styles';

const CommunityPartnerSection = () => {
  return (
    <>
      <>
        <TitleContainer>
          <GalleryHeading>{DETAILS.title}</GalleryHeading>
        </TitleContainer>

        <Container>
          <ContentSection>
            <Description>{DETAILS.des}</Description>
            <ul>
              {BULLET_POINTS.map((item, index) => (
                <ItemContainer key={index}>
                  <SvgIcon />
                  <Text>{item.description}</Text>
                </ItemContainer>
              ))}
            </ul>
          </ContentSection>

          <IllustrationSection>
            <img
              src={COMMUNITY_PARTNER}
              alt='Community partners collaborating'
              className='w-full h-auto'
            />
          </IllustrationSection>
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

export default CommunityPartnerSection;
