'use client';
import { PrimaryButton } from '@/components/shared/typography/Button';
import { SectionContainer } from './style';
import { useEffect, useState } from 'react';

const Brochure = () => {
  const [showPDF, setShowPDF] = useState(false);
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1K8QSUQ0me8G-iu9YEhs6U78yztD5t4BS';

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
