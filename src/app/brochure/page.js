'use client';
import { PrimaryButton } from '@/components/shared/typography/Button';
import { SectionContainer } from './style';

const Brochure = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <SectionContainer>
      <PrimaryButton
        text='See Brochure'
        onClick={() =>
          handleRedirect(
            'https://drive.google.com/uc?export=download&id=1K8QSUQ0me8G-iu9YEhs6U78yztD5t4BS',
          )
        }
      />
    </SectionContainer>
  );
};

export default Brochure;
