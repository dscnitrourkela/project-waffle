'use client';
import { PrimaryButton } from '@/components/shared/typography/Button';
import { SectionContainer } from './style';
import { useEffect, useState } from 'react';

const Brochure = () => {
  const [showPDF, setShowPDF] = useState(false);
  const pdfUrl =
    'https://res.cloudinary.com/dehegwbs0/image/upload/v1737283847/yfqn3zf21quokqn9oneo.pdf';

  useEffect(() => {
    setShowPDF(true);
  }, []);

  return (
    <SectionContainer>
      {showPDF ? (
        <object data={pdfUrl} type='application/pdf' width='100%' height='600px'>
          <div className='p-4 text-center'>
            <p className='mb-4'>Unable to display PDF file. You can:</p>
            <PrimaryButton text='Download PDF' onClick={() => window.open(pdfUrl, '_blank')} />
          </div>
        </object>
      ) : (
        <PrimaryButton text='See Brochure' onClick={() => setShowPDF(true)} />
      )}
    </SectionContainer>
  );
};

export default Brochure;
