import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    my-4
    sm:my-6
  `}
`;

export const DevfolioButton = styled.button`
  align-items: center;
  background-color: #3770ff;
  border-radius: 4px;
  border: 2px solid transparent;
  color: #fff;
  font-weight: 600;
  height: 44px;
  outline: none;
  padding: 0 32px;
  transition: all 0.1s ease-in 0s;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin: 0;
  ${tw`font-nunito sm:w-auto w-full`}
  gap:10px
`;

export const Text = styled.span`
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  ${tw`sm:text-[20px] text-[16px]`}
`;
