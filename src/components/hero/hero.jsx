'use client';

import { HNTYPO } from '@/config/content/hero/index';

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
          <TextStyle>December 15th-17th, 2025 | NIT Rourkela</TextStyle>
          <ButtonContainer>
            <PrimaryButton /> <DiscordButton />
          </ButtonContainer>
        </SectionContainer2>
      </SectionContainer>
    </ParentContainer>
  );
}
