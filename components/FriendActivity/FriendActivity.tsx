import { FriendActivityStyled, HeaderStyled, FriendListWrapperStyled, FriendListItemStyled, FriendImageStyled, FriendLastPlayedStyled, FriendNameStyled, SongNameStyled, AlbumNameStyled, LastSeenStyled, SongArtistStyled, PlaylistNameStyled, IconStyled, ButtonWrapperStyled } from "./FriendActivityStyled";
import { FaUserCircle } from 'react-icons/fa'
import { CgMusic } from 'react-icons/cg';
import { RiAlbumLine } from 'react-icons/ri'
import Button from "../Button";

const FriendList = [
  {
    image: '',
    name: 'John Doe',
    currentSong: {
      name: 'SCOOP',
      artist: 'Lil Nas X',
      album: 'MONTERO',
      playlist: '2021 Top of the top'
    },
    lastActiveTime: '7 h'
  },
  {
    image: '',
    name: 'Vanessa Cart',
    currentSong: {
      name: 'Chandelier',
      artist: 'Sia',
      album: '1000 Forms of Fear',
      playlist: ''
    },
    lastActiveTime: '4 h'
  },
  {
    image: '',
    name: 'John Doe',
    currentSong: {
      name: 'Lazaretto',
      artist: 'Jack White',
      album: 'Lazaretto',
      playlist: 'My Epic Music'
    },
    lastActiveTime: '1 d'
  }
];

const findFriends = () : void => {
  console.log('findFriends function');
}

const FriendActivity = () => {
  return (
    <FriendActivityStyled>
      <HeaderStyled>Friend Activity</HeaderStyled>
      <FriendListWrapperStyled>
        { FriendList.map((friend, index) => {
          return (
            <FriendListItemStyled key={index}>
              <FriendImageStyled>
                <FaUserCircle />
              </FriendImageStyled>
              <FriendLastPlayedStyled>
                <FriendNameStyled>{friend.name}</FriendNameStyled>
                <SongNameStyled>{friend.currentSong.name}</SongNameStyled>
                <SongArtistStyled>{friend.currentSong.artist}</SongArtistStyled>
                { friend.currentSong.playlist ? (
                    <PlaylistNameStyled>
                      <IconStyled>
                        <CgMusic />
                      </IconStyled>
                      {friend.currentSong.playlist}
                    </PlaylistNameStyled>
                  ) : (
                    <AlbumNameStyled>
                      <IconStyled>
                        <RiAlbumLine />
                      </IconStyled>
                      {friend.currentSong.album}
                    </AlbumNameStyled>
                  )
                }
                  </FriendLastPlayedStyled>
              <LastSeenStyled>{friend.lastActiveTime}</LastSeenStyled>
            </FriendListItemStyled>
          )
        })}
        <ButtonWrapperStyled>
          <Button onClickFunction={() => findFriends()}>Find Friends</Button>
        </ButtonWrapperStyled>
      </FriendListWrapperStyled>
    </FriendActivityStyled>
  )
}

export default FriendActivity;