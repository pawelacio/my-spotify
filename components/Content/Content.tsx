import { FC } from 'react';
import ArtistPage from '../ArtistPage';
import { ContentWrapperStyled } from './ContentStyled';

const Content: FC = () => {
  return (
    <ContentWrapperStyled>
      <ArtistPage />
    </ContentWrapperStyled>
  )
}

export default Content;