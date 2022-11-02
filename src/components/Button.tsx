import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';

interface Props {
  palette: 'primary' | 'secondary' | 'highlight';
  fullWidth?: boolean;
}

export const Button = styled(MuiButton)<Props>(
  ({ palette, fullWidth, theme }) => {
    const paletteColor: any = {
      primary: {
        backgroundColor: theme.palette.primary.variant1,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:disabled': {
          backgroundColor: theme.palette.secondary.variant2,
          color: theme.palette.common.white,
        },
      },
      secondary: {
        backgroundColor: theme.palette.secondary.variant3,
        color: theme.palette.primary.variant2,
        '& > .MuiButton-startIcon > svg': {
          color: theme.palette.highlight.main,
          fontSize: '32px',
        },
        '&:hover': {
          backgroundColor: theme.palette.primary.variant3,
          color: theme.palette.common.white,
        },
        '&:disabled': {
          backgroundColor: theme.palette.secondary.variant2,
          color: theme.palette.common.white,
        },
      },
      highlight: {
        backgroundColor: theme.palette.highlight.main,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.highlight.dark,
        },
        '&:disabled': {
          backgroundColor: theme.palette.highlight.light,
          color: theme.palette.common.white,
        },
      },
    };
    return {
      ...paletteColor[palette],
      borderRadius: 48,
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : '240px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& :hover': {
        cursor: 'pointer',
      },
    };
  }
);
