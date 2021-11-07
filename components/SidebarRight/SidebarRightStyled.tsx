import styled, { css } from "styled-components";
import { brandColor, mainColor } from "../../styles/variables";

interface SidebarRightWrapperStyledPrips {
  isOpened: boolean;
}

export const HideSidebarButtonStyled = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  height: 32px;
  width: 32px;
  background-color: ${ brandColor };
  border-radius: 50%;
  transform: translate(40%, 0);
  font-size: 24px;
  cursor: pointer;

  svg{
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
`;


export const SidebarRightWrapperStyled = styled.div<SidebarRightWrapperStyledPrips>`
  position: relative;
  background-color: ${ mainColor };
  width: 320px;
  transition: all 0.3s;
  ${props => !props.isOpened && css`
    width: 0px;
    ${HideSidebarButtonStyled} {
      svg {
        transform: rotate(180deg);
      }
    }
  `};

  /* left: ${
    (props) => (props.isOpened ? '240px' : '0px')
  }; */
`;
