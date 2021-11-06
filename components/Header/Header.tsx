import { BsSpotify } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi"

import {
  HeaderWrapperStyled,
  SectionLeftStyled,
  LogoWrapperStyled,
  ButtonsSectionStyled,
  ButtonStyled,
  SectionRightStyled,
  SearchInputStyled,
  MoreStyled,
  UserInfoStyled,
  UserPhotoStyled,
  UsernameStyled
} from './HeaderStyled';

const Header = () => {
  return (
    <HeaderWrapperStyled>
      <SectionLeftStyled>
        <LogoWrapperStyled>
          <BsSpotify />
        </LogoWrapperStyled>
        <ButtonsSectionStyled>
          <ButtonStyled>Your Library</ButtonStyled>
          <ButtonStyled>Playlists</ButtonStyled>
        </ButtonsSectionStyled>
      </SectionLeftStyled>
      <SectionRightStyled>
        <SearchInputStyled />
        <MoreStyled>
          <FiMoreHorizontal />
        </MoreStyled>
        <UserInfoStyled>
          <UserPhotoStyled />
          <UsernameStyled>pawelacio</UsernameStyled>
        </UserInfoStyled>
      </SectionRightStyled>
    </HeaderWrapperStyled>
  )
}

export default Header;
