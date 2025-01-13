import { DEVFOLIO_ICON } from '@/config/content/hero';
import Image from 'next/image';
import React from 'react';
import { Container, DevfolioButton, Text } from './styles';

const RegisterButton = () => {
  return (
    <Container>
      <DevfolioButton>
        <Image src={DEVFOLIO_ICON} height={24} width={24} alt='devfolio' />
        <Text>Apply on Devfolio</Text>
      </DevfolioButton>
    </Container>
  );
};

export default RegisterButton;
