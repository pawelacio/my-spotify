import styled from "styled-components";
import { mainColor, textColor } from "../../styles/variables";

export const HeaderWrapperStyled = styled.header`
  position: relative;
  height: 100px;
  padding: 32px 48px 32px 32px;
  background-color: ${ mainColor };
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  color: ${ textColor };
`;

export const SectionLeftStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapperStyled = styled.div`
  display: flex;
  font-size: 32px;
  color: #1DB954;
  margin-right: 16px;
`;

export const ButtonsSectionStyled = styled.div``;

export const ButtonStyled = styled.button`
  color: ${ textColor };
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 16px;
  cursor: pointer;
`;

export const SectionRightStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInputStyled = styled.input`
  display: flex;
  align-items: center;
`;

export const MoreStyled = styled.div`
  font-size: 32px;
`;

export const UserInfoStyled = styled.div``;

export const UserPhotoStyled = styled.img``;

export const UsernameStyled = styled.span``;
