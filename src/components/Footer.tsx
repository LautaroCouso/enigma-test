import { Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import { FC } from 'react';

const sxStyles = {
  footer_container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: { xs: '0px 20px', md: '0px 70px', lg: '0px 110px' },
    textAlign: 'center',
    width: '100%',
    marginTop: '0px',
  },
  wraper: {
    display: 'flex',
    width: { xs: '100%', lg: '40%' },
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
  },
  logo_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '260px',
    width: { xs: '100%', lg: '50%' },
    height: { xs: '40px', lg: '50px' },
    position: 'relative',
    marginBottom: { xs: '10px', md: '0px' },
  },
  icon_container: {
    width: { xs: '100%', md: '25%' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_margin: {
    marginLeft: '15px',
  },
  links_container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    width: { xs: '100%', md: '55%', lg: '45%', xl: '40%' },
    paddingTop: '0px',
  },
};

export const Footer: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <footer
      style={{
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 'fit-content',
        padding: '25px 0px',
      }}
    >
      <Grid container rowSpacing={1} sx={sxStyles.footer_container}>
        <Grid container item sx={sxStyles.wraper}>
          <Grid id="logo-footer" item sx={sxStyles.logo_container}>
            <Link href="/" passHref legacyBehavior>
              <a>
                <Image
                  src="/images/footer-logo-new.svg"
                  alt="Enigma logo"
                  fill
                  priority={true}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </Link>
          </Grid>

          <Grid item container sx={sxStyles.icon_container}>
            <Grid item sx={sxStyles.icon_margin}>
              <a
                href="https://www.instagram.com/_enigmanft/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon sx={{ color: theme.palette.common.white }} />
              </a>
            </Grid>
            <Grid item sx={sxStyles.icon_margin}>
              <a
                href="https://twitter.com/_enigmanft"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon sx={{ color: theme.palette.common.white }} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={sxStyles.links_container}>
          <Link href="/terms" prefetch={false} passHref legacyBehavior>
            <a>
              <Typography
                color={theme.palette.common.white}
                variant="caption"
                component="span"
              >
                {t('common:termsAndConditions')}
              </Typography>
            </a>
          </Link>
          <Link href="/privacy" prefetch={false} passHref legacyBehavior>
            <a>
              <Typography color={theme.palette.common.white} variant="caption">
                {t('common:privacyPolicy')}
              </Typography>
            </a>
          </Link>
          <Link href="/faq" prefetch={false} passHref legacyBehavior>
            <a>
              <Typography color={theme.palette.common.white} variant="caption">
                {t('common:howItWorks')}
              </Typography>
            </a>
          </Link>
          <Link href="/about-us" prefetch={false} passHref legacyBehavior>
            <a>
              <Typography color={theme.palette.common.white} variant="caption">
                {t('common:about')}
              </Typography>
            </a>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};
