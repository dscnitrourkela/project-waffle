// import { CardContainer, FirstCard, SecondCard } from './Card.styles';
// 'use client';
import Image from 'next/image';
// import { CardContainer, FirstCard, SecondCard } from './styles';

export const Card = ({ imgUrl }) => {
  return (
    <Image
      src={imgUrl}
      width={229.6}
      height={280.98}
      //   layout='fill'
      alt='Main Image'
    />
  );
};
