import styled from 'styled-components';
import tw from 'twin.macro';
import { QuestionsHeadingContainer } from '../questions/styles';
import { Paragraph } from '../shared/typography/Headings';

export const TestimonialsHeadingContainer = styled(QuestionsHeadingContainer)`
  ${tw`mt-32`}
`;

export const TestimonialsPara = styled.div`
  ${tw`my-7 mx-auto font-extralight text-sm text-gray-300 text-wrap text-center max-w-[450px] font-poppins `}
`;

export const CarouselContainer = styled.div`
  ${tw`w-full max-w-3xl mt-10 font-poppins mb-20`}
`;
export const CardContainer = styled.div`
  ${tw`md:px-28`}
`;
export const Card = styled.div`
  ${tw`flex flex-col py-6 bg-[#f6dfc2] rounded-lg px-10 sm:px-20 md:px-6`}
`;
export const Head = styled.div`
  ${tw`flex space-x-3`}
`;

export const Name = styled.p`
  ${tw`font-bold text-gray-900 flex text-sm`}
`;
export const Username = styled.a`
  ${tw`text-gray-400 font-light text-xs`}
`;

export const Tweet = styled.p`
  ${tw`my-4 text-gray-800 text-sm md:text-base`}
`;

export const CardFooter = styled.p`
  ${tw`text-gray-500 text-xs`}
`;
