import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { H1 } from '../shared/typography/Headings';
import {
  Card,
  CardContainer,
  CardFooter,
  CarouselContainer,
  Head,
  Name,
  TestimonialsHeadingContainer,
  TestimonialsPara,
  Tweet,
  Username,
} from './styles';
import Image from 'next/image';
import Arrow from '@/assets/icons/Arrow.svg';
import Verified from '@/assets/icons/Verified.svg';
import { testimonialsData } from '@/config/content/testimonials';

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className='absolute left-0 z-10 p-2  rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-600 hover:bg-opacity-50'
  >
    <Image src={Arrow} className='rotate-180' alt='Arrow Right' width={25} height={25} />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className='absolute right-0 z-10 p-2  rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-600 hover:bg-opacity-50'
  >
    <Image src={Arrow} alt='Arrow Right' width={25} height={25} />
  </button>
);

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedTime = date.toLocaleString('en-US', timeOptions);
  const formattedDate = date.toLocaleString('en-US', dateOptions);

  return `${formattedTime} · ${formattedDate}`;
}

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul className='slick-dots !flex justify-center mt-5'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 rounded-full bg-[#f6dfc2] hover:bg-[#ecbe84] transition-all duration-300'></div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <TestimonialsHeadingContainer>
        <H1>Testimonials</H1>
      </TestimonialsHeadingContainer>
      <TestimonialsPara>
        New to hackathon? Don&#39;t worry we got you covered with all the basic information you
        need.
      </TestimonialsPara>

      <CarouselContainer>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <CardContainer key={testimonial.id}>
              <Card>
                <Head>
                  <Image
                    src={testimonial.profile_image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className='w-11 h-11 rounded-full'
                  />
                  <div>
                    <Name>
                      {testimonial.name}
                      <span className='mx-2 my-auto'>
                        {testimonial.verified && (
                          <Image src={Verified} width={20} height={20} alt='verified' />
                        )}
                      </span>
                    </Name>
                    <Username
                      href={testimonial.profile_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className=''
                    >
                      {testimonial.username}
                    </Username>
                  </div>
                </Head>
                <Tweet>{testimonial.tweet}</Tweet>
                <CardFooter>
                  {formatTimestamp(testimonial.timestamp)}
                  <a href='https://twitter.com' target='_blank' className='text-blue-500 mx-3'>
                    Twitter Web App
                  </a>
                </CardFooter>
              </Card>
            </CardContainer>
          ))}
        </Slider>
      </CarouselContainer>
    </>
  );
};

export default TestimonialCarousel;
