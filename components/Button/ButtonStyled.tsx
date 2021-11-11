import styled, { css } from "styled-components";
import { textColor } from "../../styles/variables";

interface ButtonStyledProps {
  isSquare: boolean;
  isSmall: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: 4px 32px;
  border: 1px solid ${ textColor };
  border-radius: 32px;
  font-size: 14px;
  font-weight: 400;
  color: ${ textColor };
  background-color: transparent;
  text-transform: uppercase;

  ${ props => props.isSmall && css`
    padding: 2px 8px;
    font-size: 10px;
  `}

  ${ props => props.isSquare && css`
    border-radius: 2px;
  `}

  &:hover {
    cursor: pointer;
  }
`;