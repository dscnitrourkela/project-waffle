import React from 'react';

import Image from 'next/image';

import {
  BULLET_POINTS,
  COMMUNITY_PARTNER,
  COMMUNITY_PARTNER_LINK,
  DETAILS,
} from '@/config/content/CommunityPartners/index.js';
import { handleRedirect } from '@/utils/handleRedirect';

import { GalleryHeading } from '../gallery/styles';
import { PrimaryButton } from '../shared/typography/Button';
import SvgIcon from './Daimond';
import {
  Container,
  ContentSection,
  Description,
  End,
  IllustrationSection,
  InnerCover,
  ItemContainer,
  Text,
  TitleContainer,
} from './styles';

const CommunityPartnerSection = () => {
  return (
    <>
      <>
        <TitleContainer className='mt-28'>
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
            <InnerCover>
              <End>{DETAILS.end}</End>
              <PrimaryButton
                text={DETAILS.button}
                onClick={() => handleRedirect(COMMUNITY_PARTNER_LINK)}
              />
            </InnerCover>
          </ContentSection>

          <IllustrationSection>
            <Image
              src={COMMUNITY_PARTNER}
              alt='Community partner'
              width={500}
              height={500}
              className='w-full h-auto'
            />
          </IllustrationSection>
        </Container>
      </>
    </>
  );
};

export default CommunityPartnerSection;
