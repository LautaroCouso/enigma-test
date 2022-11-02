import { useRouter } from 'next/router';
import * as React from 'react';
import { styled } from '@mui/system';
import { Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FC } from 'react';

const StyledSelect = styled(Select)(({ theme }) => ({
  height: '40px',
  background: theme.palette.secondary.variant3,
  borderRadius: '30px',
  border: 'none',
  font: 'normal 700 16px/21.86px Manrope',
  textTransform: 'uppercase',
  padding: '9px',
  cursor: 'pointer',
  color: theme.palette.primary.main,
  '& > fieldset': {
    borderColor: 'transparent',
  },
  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const LocaleSelector: FC = () => {
  const {
    locales,
    locale: activeLocale,
    pathname,
    query,
    asPath,
    push,
  } = useRouter();

  const changeLang = (event: any) => {
    push(`${pathname}?${query}`, asPath, {
      locale: event.target.value as string,
    });
  };

  return (
    <StyledSelect
      defaultValue={activeLocale}
      onChange={changeLang}
      value={activeLocale}
      IconComponent={ArrowDropDownIcon}
    >
      {locales?.map((locale) => {
        return (
          <MenuItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </MenuItem>
        );
      })}
    </StyledSelect>
  );
};
