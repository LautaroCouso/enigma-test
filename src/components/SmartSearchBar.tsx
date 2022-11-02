import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Label } from './Label';
import { FC, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export const SmartSearchBar: FC = () => {
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [shouldShowNoOptionsMessage, setShouldShowNoOptionsMessage] =
    useState(false);
  const { t } = useTranslation();

  return (
    <>
      <style jsx>{`
        p {
          margin: 0;
        }
      `}</style>
      <Autocomplete
        value={null}
        noOptionsText={t('common:search.emptyResults')}
        fullWidth
        disableClearable
        open={open && shouldShowNoOptionsMessage}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={options}
        groupBy={(option) => option.groupBy}
        getOptionLabel={(option) => option.title || ''}
        loading={isLoading}
        loadingText={t('common:search.loading')}
        filterOptions={(x) => x}
        onBlur={(event) => {
          setShouldShowNoOptionsMessage(false);
        }}
        inputValue={searchKeyword}
        onInputChange={(event, newInputValue) => {
          setShouldShowNoOptionsMessage(true);
          setIsLoading(true);
          setSearchKeyword(newInputValue);
          // TODO: debounce search
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            hiddenLabel
            placeholder={t('common:search.placeholder')}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: <SearchIcon />,
              endAdornment: (
                <>
                  {isLoading && shouldShowNoOptionsMessage ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(props, option) => {
          return (
            <Box key={option.id}>
              <Box component="li" {...props}>
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    marginRight: 2,
                  }}
                >
                  {option.img && (
                    <Image
                      fill
                      src={option.img}
                      alt=""
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </Box>
                <Box>
                  <Label
                    variant="h7"
                    sx={{ color: 'primary.variant1' }}
                    text={option.title}
                  ></Label>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 'normal',
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '18px',
                      letterSpacing: '0.25px',
                      color: 'secondary.main',
                    }}
                  >
                    {option.username}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        }}
      />
    </>
  );
};
