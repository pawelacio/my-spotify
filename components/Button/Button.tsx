import { FC } from 'react';
import { ButtonStyled } from './ButtonStyled';

interface ButtonProps {
  onClickFunction: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClickFunction }) => {
  return (
    <ButtonStyled onClick={() => onClickFunction()}>
      { children }
    </ButtonStyled>
  )
}

export default Button;
