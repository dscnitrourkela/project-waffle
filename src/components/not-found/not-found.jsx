'use client';
import {
  ButtonContainer,
  NotFoundContainer,
  NotFoundInnerContainer,
  NotFoundSubTitle,
  NotFoundText,
  NotFoundTitle,
} from './styles';

import { DiscordButton, PrimaryButton } from '../shared/typography/Button';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundInnerContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubTitle>Page Not Found</NotFoundSubTitle>
        <NotFoundText>
          Oops! The page you&apos;re looking for seems to have wandered off into the digital
          wilderness. Let&apos;s get you back on track.
        </NotFoundText>
        <ButtonContainer>
          <PrimaryButton />
          <DiscordButton />
        </ButtonContainer>
      </NotFoundInnerContainer>
    </NotFoundContainer>
  );
}

export default NotFound;
