import { Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Label } from './Label';
import useTranslation from 'next-translate/useTranslation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';

type User = {
  name: string;
};

export const Login = ({ handleProfileMenuOpen }: any) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [user, setUser] = useState<User | null>(null);

  const onLogin = () => setUser({ name: 'Test User' });

  return (
    <>
      {user && user.name.split(' ')[0] ? (
        <Button
          data-testid="user-menu"
          startIcon={<PersonOutlineIcon style={{ fontSize: '30px' }} />}
          onClick={handleProfileMenuOpen}
          sx={{
            overflow: 'clip',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Label
            style={{
              whiteSpace: 'nowrap',
              textTransform: 'none',
              color: theme.palette.primary.main,
              font: 'normal 700 16px/21.86px Manrope ',
            }}
            text={user.name.split(' ')[0]}
            sx={{
              maxWidth: {
                lg: '120px',
                xl: '210px',
              },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
        </Button>
      ) : isMobile ? (
        <IconButton
          size="large"
          aria-label="profile"
          aria-haspopup="true"
          data-testid="login-mobile"
          onClick={onLogin}
          sx={{
            color: 'primary.variant2',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <PersonOutlineIcon />
        </IconButton>
      ) : (
        <Button
          data-testid="login"
          startIcon={<PersonOutlineIcon style={{ fontSize: '30px' }} />}
          onClick={onLogin}
          sx={{
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {t('common:login')}
        </Button>
      )}
    </>
  );
};
