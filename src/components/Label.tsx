import { CSSProperties, FC, PropsWithChildren } from 'react';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, useTheme } from '@mui/system';
import type { Variant } from '@mui/material/styles/createTypography';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { styled } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    warning: true;
  }
}

type LabelProps = {
  text?: string;
  variant?: Variant | 'h7' | 'warning';
  required?: boolean;
  style?: CSSProperties;
  className?: any;
  id?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  noWrap?: boolean;
  dangerouslySetInnerHTML?: any;
};

const Span = styled('span')(() => ({}));

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  text,
  variant = 'body1',
  required,
  style,
  id,
  onClick,
  dangerouslySetInnerHTML,
  sx,
  noWrap = true,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Typography
      style={{ display: 'flex', alignItems: 'center', ...style }}
      variant={variant}
      id={id}
      onClick={onClick}
      sx={sx}
      noWrap={noWrap}
      {...rest}
    >
      {variant === 'warning' && (
        <WarningAmberIcon style={{ width: 18, height: 18, marginRight: 10 }} />
      )}
      {text}
      {children}
      {dangerouslySetInnerHTML && (
        <Span
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          style={style}
          sx={sx}
        ></Span>
      )}
      {required && (
        <span style={{ color: theme.palette.highlight.main }}>*</span>
      )}
    </Typography>
  );
};
