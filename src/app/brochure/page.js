'use client';
import { PrimaryButton } from '@/components/shared/typography/Button';
import { SectionContainer } from './style';

const Brochure = () => {
  return (
    <SectionContainer>
      <PrimaryButton
        text='Open Brochure'
        onClick={() => window.open('/brochure.pdf', '_blank', 'fullscreen=yes')}
      />
    </SectionContainer>
  );
};

export default Brochure;
