import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import {ChildComponentProps} from 'google-map-react';
import React, {useEffect, useState} from 'react';

import {LayoutBox} from '@/components/LayoutBox';
import {SearchShopsQuery} from '@/lib/apollo';

type ShopType = Pick<SearchShopsQuery['shops'][0], 'address' | 'name' | 'id'>;

interface ShopMarkerProps extends ChildComponentProps, ShopType {
  selected?: boolean;
  onClick: (id: string) => void;
}

export const ShopMarker: React.FC<ShopMarkerProps> = (props) => {
  const {selected = false, onClick, ...shop} = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (!selected && anchorEl) {
      setAnchorEl(null);
    }
  }, [selected]);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (selected) {
      return;
    }
    setAnchorEl(e.currentTarget);
    onClick(shop.id);
  }
  const id = selected ? 'transitions-popper' : undefined;
  return (
    <>
      <IconButton onClick={handleClick} aria-label="shop icon button">
        <RoomIcon color="error" fontSize="large" />
      </IconButton>
      <Popper id={id} open={!!selected} anchorEl={anchorEl} transition placement="top">
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <LayoutBox px="3" py="2">
                <Typography variant="h5" component="h5">
                  {shop.name}
                </Typography>
                <MuiLink
                  href={encodeURI(
                    `https://www.google.com/maps/search/?api=1&query=${shop.address}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  地図アプリで表示する
                </MuiLink>
              </LayoutBox>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};
