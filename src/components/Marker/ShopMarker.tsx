import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import MUIStoreIcon from '@material-ui/icons/Store';
import {ChildComponentProps} from 'google-map-react';
import React from 'react';

import {styled} from '@/style/styled';

interface ShopMarkerProps extends ChildComponentProps {
  selected?: boolean;
}

const StoreIcon = styled(MUIStoreIcon)`
  padding: ${({theme}) => theme.spaces[2]}px;
  border-radius: 50%;
  color: ${({theme}) => theme.colors.primary.innerText};
  background: ${({theme}) => theme.colors.primary.default};
`;

export const ShopMarker: React.FC<ShopMarkerProps> = (props) => {
  const {selected = false} = props;
  return selected ? (
    <RoomRoundedIcon color="primary" fontSize="large" />
  ) : (
    <StoreIcon fontSize="large" />
  );
};
