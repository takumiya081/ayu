import FlagIcon from '@material-ui/icons/Flag';
import {ChildComponentProps} from 'google-map-react';
import React from 'react';

export const RiverMarker: React.FC<ChildComponentProps> = () => {
  return <FlagIcon color="primary" />;
};
