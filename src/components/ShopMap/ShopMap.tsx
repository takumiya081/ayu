import Fab from '@material-ui/core/Fab';
import LocationSearchingRoundedIcon from '@material-ui/icons/LocationSearchingRounded';
import GoogleMapReact from 'google-map-react';
import React, {useEffect, useState} from 'react';

import {LayoutBox} from '@/components/LayoutBox';
import {RiverMarker, ShopMarker, UserMarker} from '@/components/Marker';
import {SearchShopsQuery, useSearchShopsQuery} from '@/lib/apollo';
import {styled} from '@/style/styled';

import {RiverOption} from '../SearchTextField';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MapProps {
  river?: RiverOption;
}

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
  bottom: ${({theme}) => theme.spaces[3]}px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

type Location = {lat: number; lng: number};

const defaultCenter: Location = {lat: 34.68639, lng: 135.52};

export const ShopMap: React.FC<MapProps> = (props) => {
  const {river} = props;
  const [userPosition, setUserPosition] = useState<Location | undefined>();
  const [center, setCenter] = useState<Location>(
    river
      ? {lat: river.location.lat, lng: river.location.lng}
      : {lat: defaultCenter.lat, lng: defaultCenter.lng},
  );
  const [selectedShopId, setSelectedShopId] = useState<string | undefined>();

  const {data: dataFromLocation} = useSearchShopsQuery({
    variables: {
      location: {lat: center.lat, lng: center.lng},
    },
  });
  const {data: dataFromRiver} = useSearchShopsQuery({
    variables: {
      riverId: river ? river.id : '',
    },
    skip: !river,
  });

  const shops = new Map<string, SearchShopsQuery['shops'][0]>();
  if (dataFromLocation) {
    dataFromLocation.shops.forEach((s) => shops.set(s.id, s));
  }
  if (dataFromRiver) {
    dataFromRiver.shops.forEach((s) => shops.set(s.id, s));
  }

  useEffect(() => {
    if (river) {
      setCenter(river.location);
    }
  }, [river && river.location]);

  function handleOnGpsClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserPosition(location);
      setCenter(location);
    });
  }

  // libraryがanyになってるので合わせる
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleDragEnd(map: any) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(map);
    }
    const lat = map.center.lat() as number;
    const lng = map.center.lng() as number;
    setCenter({lat, lng});
  }

  function handleDrag() {
    setSelectedShopId(undefined);
  }

  function handleSelectShop(id: string) {
    setSelectedShopId(id);
  }

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}}
        defaultZoom={10}
        defaultCenter={defaultCenter}
        center={center}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {userPosition && <UserMarker {...userPosition} />}
        {river && <RiverMarker lat={river.location.lat} lng={river.location.lng} />}
        {Array.from(shops.values()).map((s) => {
          return (
            <ShopMarker
              onClick={handleSelectShop}
              key={s.id}
              selected={selectedShopId === s.id}
              lat={s.location.lat}
              lng={s.location.lng}
              {...s}
            />
          );
        })}
      </GoogleMapReact>
      <BottomController>
        <Fab color="secondary" aria-label="現在地から探す" onClick={handleOnGpsClick}>
          <LocationSearchingRoundedIcon />
        </Fab>
      </BottomController>
    </MapWrapper>
  );
};
