import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput, {OutlinedInputProps} from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import {styled} from '@/style/styled';

type SearchTextFieldProps = OutlinedInputProps;

const SearchInput = styled(OutlinedInput)<OutlinedInputProps>`
  background: #fff;
`;

export const SearchTextField: React.FC<SearchTextFieldProps> = (props) => {
  // TODO: autocomplete対応
  // https://material-ui.com/components/autocomplete/#asynchronous-requests
  return (
    <SearchInput
      fullWidth
      {...props}
      inputProps={{'aria-label': '検索'}}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="検索する" type="button">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
