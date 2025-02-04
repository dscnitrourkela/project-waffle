'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { GALLERYCONTENT } from '@/config/content/gallery';
import {
  GalleryContainer,
  GalleryHeading,
  GalleryHeadingContainer,
  GalleryImage,
  RowContainer,
} from './styles';

const InfiniteGallery = () => {
  const firstRow = [...GALLERYCONTENT.slice(0, Math.floor(GALLERYCONTENT.length / 3))];
  const secondRow = [
    ...GALLERYCONTENT.slice(
      Math.floor(GALLERYCONTENT.length / 3),
      Math.floor((2 * GALLERYCONTENT.length) / 3),
    ),
  ];
  const thirdRow = [...GALLERYCONTENT.slice(Math.floor((2 * GALLERYCONTENT.length) / 3))];

  return (
    <>
      <div className='flex justify-center !mt-32 mb-20'>
        <GalleryHeadingContainer>
          <GalleryHeading>Gallery</GalleryHeading>
        </GalleryHeadingContainer>
      </div>
      <GalleryContainer>
        <Marquee
          direction='left'
          speed={40}
          gradient={false}
          className='h-full'
          style={{
            overflowX: 'visible',
          }}
        >
          <RowContainer>
            {firstRow.map((image, index) => (
              <GalleryImage
                key={`top-${image.id}`}
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className='w-[200px] h-[112px] sm:w-[300px] sm:h-[169px] md:w-[400px] md:h-[225px]'
                width={500}
                height={500}
              />
            ))}
          </RowContainer>
        </Marquee>

        <Marquee
          direction='right'
          speed={30}
          gradient={false}
          style={{
            overflowX: 'visible',
          }}
        >
          <RowContainer>
            {secondRow.map((image, index) => (
              <GalleryImage
                key={`middle-${image.id}`}
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className='w-[250px] h-[163px] sm:w-[375px] sm:h-[244px] md:w-[500px] md:h-[325px]'
                width={500}
                height={500}
              />
            ))}
          </RowContainer>
        </Marquee>

        <Marquee
          direction='left'
          speed={35}
          gradient={false}
          style={{
            overflowX: 'visible',
          }}
        >
          <RowContainer>
            {thirdRow.map((image, index) => (
              <GalleryImage
                key={`bottom-${image.id}`}
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className='w-[200px] h-[112px] sm:w-[300px] sm:h-[169px] md:w-[400px] md:h-[225px]'
                width={500}
                height={500}
              />
            ))}
          </RowContainer>
        </Marquee>
      </GalleryContainer>
    </>
  );
};

export default InfiniteGallery;
