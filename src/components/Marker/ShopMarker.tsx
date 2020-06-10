import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MUIStoreIcon from '@material-ui/icons/Store';
import {ChildComponentProps} from 'google-map-react';
import React from 'react';

import {SearchShopsQuery} from '@/lib/apollo';
import {styled} from '@/style/styled';

type ShopType = SearchShopsQuery['shops'][0];

interface ShopMarkerProps extends ChildComponentProps, ShopType {
  selected?: boolean;
}

const MakerWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const InformationWrapper = styled.div`
  position: absolute;
  padding: ${({theme}) => theme.spaces[3]}px;
  width: 200px;
  cursor: default;
  z-index: ${({theme}) => theme.zIndices.tooltip};
  bottom: 105%;
  left: 0;
  border: 1px solid ${({theme}) => theme.colors.foundation.light[1]};
  background: #fff;
`;

const InfoComment: React.FC<ShopType> = (props) => {
  const {name, address} = props;
  return (
    <InformationWrapper>
      <Typography variant="h5" component="h5">
        {name}
      </Typography>
      <MuiLink
        href={encodeURI(`https://www.google.com/maps/search/?api=1&query=${address}`)}
        target="_blank"
        rel="noopener noreferrer"
      >
        地図アプリで表示する
      </MuiLink>
    </InformationWrapper>
  );
};

const StoreIcon = styled(MUIStoreIcon)`
  position: relative;
  padding: ${({theme}) => theme.spaces[2]}px;
  border-radius: 50%;
  color: ${({theme}) => theme.colors.primary.innerText};
  background: ${({theme}) => theme.colors.primary.default};
`;

export const ShopMarker: React.FC<ShopMarkerProps> = (props) => {
  const {selected = false} = props;
  return (
    <MakerWrapper>
      <StoreIcon fontSize="large" />
      {selected && <InfoComment {...props} />}
    </MakerWrapper>
  );
};
