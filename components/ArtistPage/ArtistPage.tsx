import Image from 'next/image'
import { AlbumDescriptionStyled, AlbumNameStyled, AlbumNameWrapperStyled, AlbumRateStyled, ArtistInfoStyled, ArtistPageWrapperStyled, ArtistPhotoOverlayStyled, ArtistBackgroundStyled, RatingStarStyled, ArtistPhotoOverlayStyled2, ArtistContentStyled, UpgradeButtonWrapperStyled } from "./ArtistPageStyled"
import { AiFillStar } from 'react-icons/ai';
import artistPhoto from '../../public/sia-photo.jpg'
import Button from '../Button';

const ArtistPage = () => {
  const rate = 4;

  return (
    <ArtistPageWrapperStyled>
      <ArtistBackgroundStyled>
        <Image
          src={artistPhoto}
          alt="Sia"
          layout="fill"
          objectFit="cover"
        />
        <ArtistPhotoOverlayStyled />
        <ArtistPhotoOverlayStyled2 />
      </ArtistBackgroundStyled>
      <ArtistContentStyled>
        <UpgradeButtonWrapperStyled>
          <Button
            onClickFunction={() => console.log('upgrade')}
          >Upgrade</Button>
        </UpgradeButtonWrapperStyled>
        <ArtistInfoStyled>
          <AlbumNameWrapperStyled>
            <AlbumNameStyled>Sia Album</AlbumNameStyled>
            <AlbumRateStyled>
              { [...Array(5)].map((item, index) => (
                <RatingStarStyled key={index} isGold={index < rate ? true : false }>
                  <AiFillStar />
                </RatingStarStyled>
              )) }
            </AlbumRateStyled>
          </AlbumNameWrapperStyled>
          <AlbumDescriptionStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis nisl libero, in dapibus sem interdum sed. Suspendisse sit amet mi feugiat, semper leo et, pharetra sem.
          </AlbumDescriptionStyled>
          <Button
            onClickFunction={() => console.log('view more')}
            isSmall
            isSquare
          >view more</Button>
        </ArtistInfoStyled>
      </ArtistContentStyled>
    </ArtistPageWrapperStyled>
  )
}

export default ArtistPage;
