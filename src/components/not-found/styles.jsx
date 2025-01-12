import styled from 'styled-components';
import tw from 'twin.macro';

export const NotFoundContainer = styled.div`
  ${tw`grid min-h-[90vh] place-items-center`}
  background: 
    /* linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.45) 100%),  */
    url('https://res.cloudinary.com/dqqyuvg1v/image/upload/v1736692603/Background_v64hmu.png'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
`;

export const NotFoundTitle = styled.h1`
  text-align: center;
  font-size: 9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.27rem;
  text-transform: uppercase;
  background: var(--Primary, linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${tw`font-prompt`};
`;

export const NotFoundText = styled.p`
  color: var(--Grey000, #fff);
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: 0.0375rem;
  ${tw`max-w-2xl font-satoshi`};
`;

export const NotFoundSubTitle = styled.h2`
  color: var(--Grey000, #fff);
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  ${tw`-mt-5 font-proza`}
`;

export const NotFoundInnerContainer = styled.div`
  ${tw`flex flex-col items-center justify-center gap-5`}
`;

export const GoBack = styled.button``;

export const ButtonContainer = styled.div`
  ${tw`flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6`}
`;
