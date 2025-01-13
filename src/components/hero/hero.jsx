'use client';

import { BROCHURE_LINK, DISCORD_LINK, HNTYPO } from '@/config/content/hero';
import { handleRedirect } from '@/utils/handleRedirect';

import { DiscordButton, PrimaryButton } from '../shared/typography/Button';
import {
  ButtonContainer,
  HeroImage,
  ParentContainer,
  SectionContainer,
  SectionContainer2,
  TextStyle,
} from './styles';

export default function Home() {
  return (
    <ParentContainer id='Home'>
      <SectionContainer>
        <SectionContainer2>
          <HeroImage src={HNTYPO} alt='HackNITR 6.0' width={800} height={200} priority />
          <TextStyle>March 1st-2nd, 2025 | NIT Rourkela</TextStyle>
          {/* <RegisterButton /> */}
          <ButtonContainer>
            <PrimaryButton text='View Brochure' onClick={() => handleRedirect(BROCHURE_LINK)} />
            <DiscordButton onClick={() => handleRedirect(DISCORD_LINK)} />
          </ButtonContainer>
        </SectionContainer2>
      </SectionContainer>
    </ParentContainer>
  );
}
