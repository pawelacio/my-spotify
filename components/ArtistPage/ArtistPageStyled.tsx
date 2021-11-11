import styled from 'styled-components';
import { goldColor, textColor } from '../../styles/variables';

export const ArtistPageWrapperStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ArtistBackgroundStyled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ArtistPhotoOverlayStyled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
`;

export const ArtistPhotoOverlayStyled2 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(transparent 0%, #2c2f34 75%);;
`;

export const ArtistInfoStyled = styled.div`
  position: relative;
  width: 400px;
  color: ${ textColor };
  margin-top: 100px;
`;

export const AlbumNameWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const AlbumNameStyled = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-right: 32px;
`;

export const AlbumRateStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;

  div {
    display: flex;
    margin-right: 4px;
  }
`;

export const AlbumDescriptionStyled = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 16px;
`;

interface RatingStarStyledProps {
  isGold: boolean;
}

export const RatingStarStyled = styled.div<RatingStarStyledProps>`
  /* display: flex; */
  color: ${ props => props.isGold ? goldColor : 'gray' };
`;

export const ArtistContentStyled = styled.div`
  position: relative;
  height: 100%;
  padding: 30px 110px;
`;

export const UpgradeButtonWrapperStyled = styled.div``;
