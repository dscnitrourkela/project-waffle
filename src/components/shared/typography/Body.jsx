import styled from 'styled-components';
import tw from 'twin.macro';

export const Body1 = styled.p`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-base
   leading-6

   md:text-lg
   md:leading-7

   text-white
   font-poppins
`}
`;
