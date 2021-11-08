import styled from "styled-components";
import { textColor } from "../../styles/variables";

export const FriendActivityStyled = styled.div`
  position: relative;
  padding: 32px 16px 32px 32px;
`;

export const HeaderStyled = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${ textColor };
`;

export const FriendListWrapperStyled = styled.div`
  margin-top: 64px;
`;

export const FriendListItemStyled = styled.div`
  display: flex;
  align-items: top;
  color: ${ textColor };
  margin-bottom: 32px;
`;

export const FriendImageStyled = styled.div`
  font-size: 36px;
  margin-right: 16px;
`;

export const FriendLastPlayedStyled = styled.div`
  flex-grow: 1;
`;

export const FriendNameStyled = styled.div`
  font-size: 20px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SongNameStyled = styled.div`
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SongArtistStyled = styled.div`
  font-size: 12px;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const AlbumNameStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const PlaylistNameStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const IconStyled = styled.div`
  display: flex;
  font-size: 16px;
  margin-right: 8px;
`;

export const LastSeenStyled = styled.div`
  font-size: 12px;
`;
