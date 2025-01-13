import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    h-full
  `}
`;

export const DevfolioButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  transition: all 0.1s ease-in 0s;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin: 0;
  ${tw`font-nunito w-full ssm:w-[200px] md:w-[220px]  h-[50px] md:h-[68px]`}
  gap:10px
`;

export const Text = styled.span`
  color: #27333f;
  font-weight: 600;
  white-space: nowrap;
  ${tw` md:text-[18px] text-[16px]`}
`;
