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
  border-radius: 16px;
`;

export const MoreStyled = styled.div`
  display: flex;
  font-size: 32px;
  margin-left: 32px;
  cursor: pointer;
`;

export const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

export const UserPhotoStyled = styled.div`
  display: flex;
`;

export const UsernameStyled = styled.span`
  margin-left: 8px;
`;
