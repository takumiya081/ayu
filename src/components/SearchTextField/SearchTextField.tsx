import CircularProgress from '@material-ui/core/CircularProgress';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import Autocomplete, {AutocompleteRenderInputParams} from '@material-ui/lab/Autocomplete';
import React, {useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';

import {SearchRiverQuery, useSearchRiverLazyQuery} from '@/lib/apollo';

type RiverOption = SearchRiverQuery['searchRiver'][0];

interface SearchTextFieldProps extends Pick<TextFieldProps, 'placeholder'> {
  onChange: (value: RiverOption) => void;
}

const useSearchInputStyle = makeStyles(() =>
  createStyles({
    route: {
      background: '#fff',
      borderRadius: '4px',
      minWidth: '250px',
    },
  }),
);

export const SearchTextField: React.FC<SearchTextFieldProps> = (props) => {
  const {placeholder, onChange} = props;
  const [open, setOpen] = useState(false);
  const [query, {data, loading}] = useSearchRiverLazyQuery();
  const classes = useSearchInputStyle();

  const renderInputNode = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      classes={{
        root: classes.route,
      }}
      variant="outlined"
      inputProps={{
        ...params.inputProps,
        'aria-label': '検索',
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress color="secondary" size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        ),
        placeholder,
      }}
    />
  );

  // eslint-disable-next-line @typescript-eslint/ban-types
  const [handleInputChange] = useDebouncedCallback<[React.ChangeEvent<{}>, string]>(
    async (_e, value) => {
      const trimValue = value.trim();
      if (trimValue === '') {
        return;
      }
      query({variables: {query: trimValue}});
    },
    500,
  );

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function optionSelected(option: RiverOption, value: RiverOption) {
    return option.id === value.id;
  }

  function optionLabel(option: RiverOption) {
    return option.name;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleChange(_e: React.ChangeEvent<{}>, value: RiverOption | null) {
    if (value === null) {
      return;
    }
    onChange(value);
  }

  return (
    <Autocomplete
      fullWidth
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={renderInputNode}
      loading={loading}
      getOptionSelected={optionSelected}
      getOptionLabel={optionLabel}
      options={data ? data.searchRiver : []}
    />
  );
};
