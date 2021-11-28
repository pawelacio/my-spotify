import { FC } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { FiMoreHorizontal, FiSearch } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

import {
  HeaderWrapperStyled,
  SectionLeftStyled,
  LogoWrapperStyled,
  ButtonsSectionStyled,
  ButtonStyled,
  SectionRightStyled,
  MoreStyled,
  UserInfoStyled,
  UserPhotoStyled,
  UsernameStyled
} from './HeaderStyled';
import Input from '../Input';

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
        <Input placeholder="Search" icon={FiSearch} />
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
