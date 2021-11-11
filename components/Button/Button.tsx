import { FC } from 'react';
import { ButtonStyled } from './ButtonStyled';

interface ButtonProps {
  isSmall?: boolean;
  isSquare?: boolean;
  onClickFunction: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClickFunction, isSmall = false, isSquare = false }) => {
  return (
    <ButtonStyled
      onClick={() => onClickFunction()}
      isSmall={isSmall}
      isSquare={isSquare}
    >
      { children }
    </ButtonStyled>
  )
}

export default Button;
