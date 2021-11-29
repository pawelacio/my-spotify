import Image from 'next/image'
import { useSpring } from 'react-spring';
import { AlbumDescriptionStyled, AlbumNameStyled, AlbumNameWrapperStyled, AlbumRateStyled, ArtistInfoStyled, ArtistPageWrapperStyled, ArtistPhotoOverlayStyled, ArtistBackgroundStyled, RatingStarStyled, ArtistPhotoOverlayStyled2, ArtistContentStyled, UpgradeButtonWrapperStyled } from "./ArtistPageStyled"
import { AiFillStar } from 'react-icons/ai';
import artistPhoto from '../../public/sia-photo-2.png'
import Button from '../Button';

const ArtistPage = () => {
  const artistContentAnimation = useSpring({ to: { top: 0 }, from: { top: 200 }, delay: 200  })
  const artistPhotoAnimation = useSpring({ to: { background: 'rgba(44, 47, 52, 0.6)'}, from: { background: 'rgba(44, 47, 52, 1)'}, delay: 200 });

  const rate = 4;

  return (
    <ArtistPageWrapperStyled>
      <ArtistBackgroundStyled>
        <Image
          src={artistPhoto}
          alt="Sia"
          layout="fill"
          objectFit="contain"
        />
        <ArtistPhotoOverlayStyled style={artistPhotoAnimation} />
        <ArtistPhotoOverlayStyled2 />
      </ArtistBackgroundStyled>
      <ArtistContentStyled style={artistContentAnimation}>
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
