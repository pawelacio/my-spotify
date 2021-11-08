import styled, { css } from "styled-components";
import { brandColor, mainColor, textColor } from "../../styles/variables";

interface SidebarRightWrapperStyledPrips {
  isOpened: boolean;
}

export const HideSidebarButtonStyled = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  height: 48px;
  width: 48px;
  background-color: ${ brandColor };
  color: ${ textColor };
  border-radius: 50%;
  transform: translate(40%, 0);
  font-size: 30px;
  cursor: pointer;
  transition: transform .2s;

  &:hover {
    transform: translate(40%, 0) scale(1.10);
  }

  svg{
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
`;


export const SidebarRightWrapperStyled = styled.div<SidebarRightWrapperStyledPrips>`
  position: relative;
  background-color: ${ mainColor };
  width: 280px;
  transition: all 0.3s;
  ${props => !props.isOpened && css`
    width: 0px;
    ${HideSidebarButtonStyled} {
      svg {
        transform: rotate(180deg);
      }
    }
  `};
`;

export const SidebarContent = styled.div`
  position: relative;
`;
