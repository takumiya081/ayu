import Fab from '@material-ui/core/Fab';
import LocationSearchingRoundedIcon from '@material-ui/icons/LocationSearchingRounded';
import GoogleMapReact from 'google-map-react';
import React, {useState} from 'react';

import {LayoutBox} from '@/components/LayoutBox';
import {ShopMarker, UserMarker} from '@/components/Marker';
import {styled} from '@/style/styled';

// TODO: 一旦空でおいておく
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MapProps {}

const MapWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const BottomController = styled(LayoutBox)`
  z-index: ${({theme}) => theme.zIndices.fab};
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Map: React.FC<MapProps> = (_props) => {
  const [userPosition, setUserPosition] = useState<{lat: number; lng: number} | undefined>();

  function handleOnGpsClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}}
        defaultZoom={11}
        defaultCenter={{lat: 59.955413, lng: 30.337844}}
        center={userPosition}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {userPosition && <UserMarker {...userPosition} />}
        <ShopMarker lat={59.955413} lng={30.337844} />
        <ShopMarker lat={59.855413} lng={30.237844} selected />
      </GoogleMapReact>
      <BottomController>
        <Fab color="secondary" aria-label="現在地から探す" onClick={handleOnGpsClick}>
          <LocationSearchingRoundedIcon />
        </Fab>
      </BottomController>
    </MapWrapper>
  );
};
