import { createTheme } from '@mui/material/styles';
import { PaletteMode, Color, PaletteColorOptions } from '@mui/material';
import {
  CommonColors,
  PaletteTonalOffset,
  TypeText,
  TypeDivider,
  TypeAction,
  TypeBackground,
  PaletteAugmentColorOptions,
} from '@mui/material/styles/createPalette';
import React from 'react';

declare module '@mui/material/styles' {
  interface MyPaletteOptions {
    main: string;
    light?: string;
    text?: string;
  }
  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
    variant1?: string;
    variant2?: string;
    variant3?: string;
    text?: string;
  }

  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    variant1: string;
    variant2: string;
    variant3: string;
    text?: string;
  }

  interface Palette {
    highlight: PaletteColor;
    common: CommonColors;
    mode: PaletteMode;
    contrastThreshold: number;
    tonalOffset: PaletteTonalOffset;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Color;
    text: TypeText;
    divider: TypeDivider;
    action: TypeAction;
    background: TypeBackground;
    getContrastText: (background: string) => string;
    augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
  }

  interface PaletteOptions {
    highlight?: PaletteColorOptions & MyPaletteOptions;
    common?: Partial<CommonColors>;
    mode?: PaletteMode;
    contrastThreshold?: number;
    tonalOffset?: PaletteTonalOffset;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    grey?: Partial<Color>;
    text?: Partial<TypeText>;
    divider?: TypeDivider;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    getContrastText?: (background: string) => string;
    augmentColor?: (options: PaletteAugmentColorOptions) => PaletteColor;
  }

  interface TypographyVariants {
    h7: React.CSSProperties;
    warning: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    warning?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    warning: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#343A40',
      variant1: '#212529',
      variant2: '#495057',
      variant3: '#6C757D',
    },
    secondary: {
      main: '#ADB5BD',
      variant1: '#CED4DA',
      variant2: '#DEE2E6',
      variant3: '#E9ECEF',
    },
    highlight: {
      main: '#F40CC8',
      light: '#F69FE7',
      text: '#F8F9FA',
      dark: '#D10AAC',
      variant1: '#556EE6',
    },
    background: {
      paper: '#F8F9FA',
    },
  },
  typography: {
    h3: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '48px',
      lineHeight: '56px',
    },
    h4: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '34px',
      lineHeight: '36px',
    },
    h5: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '0.18px',
    },
    h6: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    h7: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: '#ADB5BD',
    },
    subtitle2: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
    body1: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0.25px',
    },
    warning: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      color: '#F40CC8',
    },
    button: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '1.25px',
    },
    caption: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
  },
});

export default theme;
