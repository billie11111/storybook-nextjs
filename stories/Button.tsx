'use client'
import { styled } from "styled-components";

interface IButtonProps {
  backgroundColor?: 'black' | 'green'
  textColor?: 'white' | 'black'
  variant: string
  onClick?: () => void
}

const Wrapper = styled.button<{ $backgroundColor: string, $textColor: string }>`
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 16px;
  width: 100%;
  display:block;
  color: ${props => props.$textColor};
  background-color: ${props => props.$backgroundColor};
`

export const Button = ({
  textColor = 'white',
  backgroundColor = 'black',
  variant,
  ...props
}: IButtonProps) => {
  return (
    <Wrapper
      type="button"
      $textColor={textColor}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {variant}
    </Wrapper>
  );
};
