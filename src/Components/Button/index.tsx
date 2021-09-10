import React from 'react';
import Styled from 'styled-components';

interface ContainerProps {
  readonly backgroundColor: string;
}

const Container = Styled.div<ContainerProps>`
  text-align: left;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  }
`;

const Label = Styled.div`
color: #FFFFFF;
font-size: 16px;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

//export default Button;
export const Button = ({
  label,
  backgroundColor = '#304FFE',
  hoverColor = '#1E40FF',
  onClick
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};