import { DEVFOLIO_ICON, DEVFOLIO_LINK } from '@/config/content/hero';
import Image from 'next/image';
import React from 'react';
import { Container, DevfolioButton, Text } from './styles';
import { handleRedirect } from '@/utils/handleRedirect';
const RegisterButton = () => {
  return (
    <Container>
      <DevfolioButton onClick={() => handleRedirect(DEVFOLIO_LINK)}>
        <Image src={DEVFOLIO_ICON} height={24} width={24} alt='devfolio' />
        <Text>Apply on Devfolio</Text>
      </DevfolioButton>
    </Container>
  );
};

export default RegisterButton;
