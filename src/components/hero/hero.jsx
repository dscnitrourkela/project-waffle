'use client';

import { BROCHURE_LINK, DEVFOLIO_LINK, DISCORD_LINK, HNTYPO } from '@/config/content/hero';
import { handleRedirect } from '@/utils/handleRedirect';
import RegisterButton from '@/components/shared/devfolio/button';
import { DiscordButton, PrimaryButton } from '@/components/shared/typography/Button';
import {
  ButtonContainer,
  HeroImage,
  ParentContainer,
  SectionContainer,
  SectionContainer2,
  TextStyle,
} from './styles';

export default function Hero() {
  return (
    <ParentContainer id='Home'>
      <SectionContainer>
        <SectionContainer2>
          <HeroImage src={HNTYPO} alt='HackNITR 6.0' width={800} height={200} priority />
          <TextStyle>April 5th-6th, 2025 | NIT Rourkela</TextStyle>
          <ButtonContainer>
            {/* <RegisterButton /> */}
            <PrimaryButton text='Apply on Devfolio' onClick={() => handleRedirect(DEVFOLIO_LINK)} />
            {/* <PrimaryButton text='View Brochure' onClick={() => handleRedirect(BROCHURE_LINK)} /> */}
            <DiscordButton onClick={() => handleRedirect(DISCORD_LINK)} text='Join Discord' />
          </ButtonContainer>
        </SectionContainer2>
      </SectionContainer>
    </ParentContainer>
  );
}
