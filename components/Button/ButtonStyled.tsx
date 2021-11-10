import styled from "styled-components";
import { textColor } from "../../styles/variables";

export const ButtonStyled = styled.button`
  padding: 8px 32px;
  border: 1px solid ${ textColor };
  border-radius: 32px;
  font-size: 14px;
  font-weight: 400;
  color: ${ textColor };
  background-color: transparent;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;