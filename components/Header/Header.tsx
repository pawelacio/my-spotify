import { FC } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

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

const Header:FC = () => {
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
        <SearchInputStyled placeholder={'Search'} />
        <MoreStyled>
          <FiMoreHorizontal />
        </MoreStyled>
        <UserInfoStyled>
          <UserPhotoStyled>
            <FaUserCircle />
          </UserPhotoStyled>
          <UsernameStyled>pawelacio</UsernameStyled>
        </UserInfoStyled>
      </SectionRightStyled>
    </HeaderWrapperStyled>
  )
}

export default Header;
