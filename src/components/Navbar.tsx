import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Grid,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useTranslation from 'next-translate/useTranslation';
import { LocaleSelector, Login, Label, Button, SmartSearchBar } from './index';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: `1px solid ${theme.palette.secondary.variant2}`,
}));

const OnlyDesktopGrid = styled(Grid)(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1300px)': {
    display: 'flex',
  },
}));
const OnlyMobileGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  '@media (min-width: 1300px)': {
    display: 'none',
  },
}));

const sxStyles = {
  searchBar: {
    position: 'absolute',
    backgroundColor: 'background.paper',
  },
  userMenu: {
    top: { xs: '10px', md: '29px' },
    '& .MuiPaper-root': {
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0px',
    },
  },
  hamburgerMenu: {
    top: '10px',
    '& .MuiPaper-root': {
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0px',
    },
  },
  Text: {
    fontSize: '14px',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: '800',
  },
  TextHighlight: {
    fontSize: '14px',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: '800',
    color: 'highlight.main',
  },
  Icon: {
    fontSize: '16px',
    marginRight: '10px',
    color: 'primary.varian3',
  },
  IconHighlight: {
    fontSize: '16px',
    marginRight: '10px',
    color: 'highlight.main',
  },
};

export const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      sx={sxStyles.hamburgerMenu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link href={'/dashboard'} passHref legacyBehavior>
          <a>
            <Button
              palette={'highlight'}
              style={{
                width: '160px',
                height: '40px',
              }}
            >
              {t('common:marketplace')}
            </Button>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <LiveHelpOutlinedIcon sx={sxStyles.Icon} />
        <Link href="/faq" passHref prefetch={false} legacyBehavior>
          <a
            style={{
              fontSize: '14px',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: '800',
            }}
          >
            {t('common:howItWorks')}
          </a>
        </Link>
      </MenuItem>
      <Divider sx={{ width: '85%', margin: 'auto' }} />
      <MenuItem>
        <ArticleOutlinedIcon sx={sxStyles.Icon} />
        <Link href="/about-us" passHref prefetch={false} legacyBehavior>
          <a
            style={{
              fontSize: '14px',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: '800',
            }}
          >
            {t('common:about')}
          </a>
        </Link>
      </MenuItem>
      <Divider sx={{ width: '85%', margin: 'auto' }} />
      <MenuItem>
        <SettingsOutlinedIcon sx={sxStyles.Icon} />
        <LocaleSelector />
      </MenuItem>
      <Divider sx={{ width: '85%', margin: 'auto' }} />
      <MenuItem>
        <Grid
          item
          container
          sx={{
            columnGap: '15px',
            marginLeft: '0px',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item>
            <a
              href="https://www.instagram.com/_enigmanft/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                sx={{ color: theme.palette.common.black }}
                data-testid="instagram-icon-header-mobile"
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://twitter.com/_enigmanft"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon
                sx={{ color: theme.palette.common.black }}
                data-testid="twitter-icon-header-mobile"
              />
            </a>
          </Grid>
        </Grid>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '70px', md: '100px' },
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            p: {
              xs: '0 20px 0 28px',
              lg: '0 50px 0 50px',
              xl: '0 131px 0 110px',
            },
            maxWidth: '1920px',
            justifyContent: 'center',
            padding: '0px',
          }}
        >
          <Grid
            item
            container
            rowGap={'22px'}
            sx={{
              alignItems: 'center',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* // LOGO IMAGE */}
            <Grid
              item
              sx={{
                width: '50%',
                '@media (min-width: 450px)': {
                  width: '237px',
                },
              }}
              id="logo-grid-navbar"
            >
              <Link href={`/`} passHref legacyBehavior>
                <a rel="noopener noreferrer">
                  <div
                    style={{
                      width: 'auto',
                      height: '50px',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src="/images/header-logo-new.svg"
                      alt="Enigma logo"
                      fill
                      priority={true}
                    />
                  </div>
                </a>
              </Link>
            </Grid>
            {/* // Search Bar */}
            <Grid
              item
              sx={{
                display: { xs: 'none', md: 'block' },
                padding: { lg: '0 20px' },
                width: '100px',
                '@media (min-width: 800px)': {
                  width: 'calc(100% - 237px - 40px - 300px)',
                },
                '@media (min-width: 1000px)': {
                  width: 'calc(100% - 237px - 40px - 400px)',
                },
                '@media (min-width: 1300px)': {
                  width: '300px',
                  padding: '0 20px',
                },
                '@media (min-width: 1650px)': {
                  width: '400px',
                },
              }}
            >
              <Search>
                <SmartSearchBar />
              </Search>
            </Grid>

            <OnlyDesktopGrid item>
              <MenuItem
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Link href={'/dashboard'} passHref legacyBehavior>
                  <a>
                    <Button
                      palette={'primary'}
                      sx={{
                        width: { lg: '160px', xl: '180px' },
                      }}
                    >
                      {t('common:marketplace')}
                    </Button>
                  </a>
                </Link>
              </MenuItem>
            </OnlyDesktopGrid>
            <OnlyDesktopGrid item>
              <Link href="/faq" prefetch={false} passHref legacyBehavior>
                <a>
                  <Label
                    style={{
                      whiteSpace: 'nowrap',
                      textTransform: 'none',
                      color: theme.palette.primary.main,
                      font: 'normal 700 16px/21.86px Manrope ',
                    }}
                    text={t('common:howItWorks')}
                  />
                </a>
              </Link>
            </OnlyDesktopGrid>
            <OnlyDesktopGrid item>
              <Link href="/about-us" prefetch={false} passHref legacyBehavior>
                <a>
                  <Label
                    style={{
                      whiteSpace: 'nowrap',
                      textTransform: 'none',
                      color: theme.palette.primary.main,
                      font: 'normal 700 16px/21.86px Manrope ',
                    }}
                    text={t('common:about')}
                  />
                </a>
              </Link>
            </OnlyDesktopGrid>
            <OnlyDesktopGrid item>
              <Login handleProfileMenuOpen={() => {}} />
            </OnlyDesktopGrid>
            <OnlyDesktopGrid item container sx={{ width: '206px' }}>
              <Grid item>
                <LocaleSelector />
              </Grid>
              <Grid
                item
                container
                sx={{
                  columnGap: '5px',
                  marginLeft: '20px',
                  width: '100px',
                  alignContent: 'center',
                }}
              >
                <Grid item>
                  <a
                    href="https://www.instagram.com/_enigmanft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      sx={{ color: theme.palette.common.black }}
                      data-testid="instagram-icon-header"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://twitter.com/_enigmanft"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      sx={{ color: theme.palette.common.black }}
                      data-testid="twitter-icon-header"
                    />
                  </a>
                </Grid>
              </Grid>
            </OnlyDesktopGrid>
            <OnlyMobileGrid
              item
              sx={{
                width: 'auto',
                justifyContent: 'end',
                '@media (min-width: 500px)': {
                  width: '200px',
                },
                '@media (min-width: 900px)': {
                  width: '300px',
                },
                '@media (min-width: 1000px)': {
                  width: '400px',
                },
              }}
            >
              <Login handleProfileMenuOpen={() => {}} />
              <IconButton
                size="large"
                aria-label="search"
                aria-haspopup="true"
                sx={{ color: 'primary.variant2' }}
                onClick={() => {
                  setShowSearchBar(true);
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{ color: 'primary.variant2' }}
              >
                <Image
                  src="/icons/menu-icon.svg"
                  width={24}
                  height={24}
                  alt="Menu"
                />
              </IconButton>
            </OnlyMobileGrid>
          </Grid>
        </Toolbar>
        {showSearchBar && (
          <Grid container spacing={2} px={2} sx={sxStyles.searchBar}>
            <Grid item xs={10}>
              <Search>
                <SmartSearchBar />
              </Search>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                sx={{
                  backgroundColor: 'highlight.main',
                  color: 'background.paper',
                }}
                onClick={() => {
                  setShowSearchBar(false);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </AppBar>
      {renderMobileMenu}
    </>
  );
};
