'use client';
import { PrimaryButton } from '@/components/shared/typography/Button';
import { SectionContainer } from './style';

const Brochure = () => {
  const handleViewBrochure = () => {
    window.open('/brochure.pdf', '_blank', 'fullscreen=yes');
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionContainer>
      <PrimaryButton text='View Brochure' onClick={handleViewBrochure} />
      <PrimaryButton text='Download Brochure' onClick={handleDownloadBrochure} />
    </SectionContainer>
  );
};

export default Brochure;
