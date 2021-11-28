import styled, { css } from 'styled-components';
import { secondaryColor } from '../../styles/variables';

interface InputWrapperStyled {
  withIcon: boolean
}

export const InputIconStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translate(0, -50%);
  color: ${ secondaryColor };
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  padding: 4px 4px 4px 32px;
  border-radius: 20px;
`;

export const InputWrapperStyled = styled.div<InputWrapperStyled>`
  position: relative;

  ${props => !props.withIcon && css`
    ${InputStyled} {
      padding: 4px 4px 4px 12px;
    }
  `}
`;