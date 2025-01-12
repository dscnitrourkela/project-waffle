import styled from 'styled-components';
import tw from 'twin.macro';

export const QuestionsHeadingContainer = styled.div`
  ${tw`
      mt-32
      border-2
      flex
      bg-[#f6dfc2]
      rounded-[1.125rem]
      w-fit
      mx-auto
      md:py-4
      md:px-12
      px-6
    `}
  align-items: center;
  gap: 0.625rem;
`;

export const ParagrapgContainer = styled.div`
  ${tw`
    md:w-[600px] 
    my-10
  `}
`;

export const QuestionsContainer = styled.div`
  ${tw`
      grid
      md:grid-cols-2
      md:w-[70%]
      gap-6
      mb-10
    `}
`;

export const Question = styled.div`
  ${tw`
    p-4
    rounded-xl
    font-poppins
    bg-[#f6dfc2]
    shadow-custom
  `}
`;

export const QuestionAnswer = styled.div`
  ${tw`
    mt-3
    md:text-xl
    text-lg
    font-[350]
    text-[#212529A8]
    text-wrap
  `}
`;

export const QuestionHeading = styled.div`
  ${tw`
    md:text-2xl
    text-xl
    font-[350]
  `}
  background: linear-gradient(91deg, #E84B7D 0.34%, #B02753 99.81%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
