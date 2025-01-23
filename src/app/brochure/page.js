'use client';
import { useEffect, useRef } from 'react';

const Brochure = () => {
  const openedRef = useRef(false);

  useEffect(() => {
    if (!openedRef.current) {
      window.open('/brochure.pdf', '_blank', 'fullscreen=yes');
      openedRef.current = true;
    }
  }, []);
};

export default Brochure;
