import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Label, Button } from '../src/components';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import ImageSlider from '../src/components/ImageSlider';

const sxStyles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: { xs: '30px', lg: '100px 150px' },
    background:
      'linear-gradient(180deg, rgba(145, 95, 225, 0.4) 0%, rgba(255, 255, 255, 0.4) 18.87%)',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: { xs: '30px', lg: '100px' },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'normal',
    fontSize: { xs: '40px', xl: '60px' },
    lineHeight: { xs: '50px', xl: '80px' },
    textAlign: 'center',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    width: { xs: '100%', md: '70%' },
    marginBottom: '50px',
    alignItems: 'center',
  },
  sectionReverseContainer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: 'space-between',
    width: { xs: '100%', md: '70%' },
    marginBottom: '50px',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    width: { xs: '100%', md: '50%' },
  },
  sectionTitle: {
    display: 'flex',
    alignItems: { xs: 'center', md: 'flex-start' },
    justifyContent: { xs: 'center', md: 'flex-start' },
    whiteSpace: 'normal',
    marginBottom: '20px',
    fontSize: { xs: '28px', xl: '48px' },
    lineHeight: { xs: '35px', xl: '56px' },
    textAlign: { xs: 'center', md: 'left' },
  },
  sectionText: {
    whiteSpace: 'normal',
    width: { xs: '90%', sm: '80%', md: '100%' },
    textAlign: { xs: 'center', md: 'left' },
    fontSize: { xs: '15px', lg: '18px', xl: '20px' },
    lineHeight: { xs: '24px', lg: '26px', xl: '28px' },
    fontWeight: '500',
  },

  imgContainer: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: { xs: '80%', sm: '40%', md: '45%' },
  },
  boldTitle: {
    fontWeight: '800',
    fontStyle: 'italic',
  },
  sectionMainTitle: {
    fontSize: { xs: '30px', lg: '40px' },
    lineHeight: { xs: '38px', lg: '48px' },
    maxWidth: { xs: '100%', lg: 385 },
    textAlign: { xs: 'center', lg: 'left' },
  },
  sectionMainBody: {
    fontSize: { xs: '30px', md: '18px' },
    maxWidth: { xs: '100%', md: 604, lg: 302 },
    textAlign: { xs: 'center', lg: 'left' },
  },
};

const HowToCreate: NextPage = () => {
  const { t } = useTranslation();

  const onLogin = () => {
    console.log('Login!');
  };

  const sliderData = [
    {
      url: 'https://assetsv2.enigma.art/home/slider-4-opensea.jpg',
      alt: 'Ibiza Podcast',
      id: 1,
      href: 'https://open.spotify.com/episode/2FzMj5n18CMGAciolNYnJZ?si=2HsZ7pRNRF-qZyle5z3jxg&nd=1',
    },
    {
      url: 'https://assetsv2.enigma.art/home/crea_vende_enigma.jpg',
      alt: 'Enigma Create',
      id: 2,
      href: 'https://enigma.art/how-to-create',
    },
    {
      url: 'https://assetsv2.enigma.art/home/banner_muchacho.jpg',
      alt: 'Muchacho NTF',
      id: 3,
      href: 'https://enigma.art/detail/811908d0-75ea-46b8-8b87-ff122793ddf0',
    },
  ];

  return (
    <Box sx={sxStyles.mainContainer}>
      <Box sx={sxStyles.titleContainer}>
        <Label variant="h3" text={t('createworks:title')} sx={sxStyles.title} />
        <Label
          variant="h3"
          text={t('createworks:title2')}
          sx={sxStyles.title}
        />
      </Box>
      <Grid container spacing={{ xs: 4, lg: 0 }}>
        <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
          <Stack spacing={5} alignItems={{ xs: 'center', lg: 'flex-start' }}>
            <Typography variant={'h1'} sx={sxStyles.sectionMainTitle}>
              {'Enigma '}
              <Box component={'span'} sx={sxStyles.boldTitle}>
                {'Web3.0 '}
              </Box>
              creative community
            </Typography>
            <Typography variant={'body1'} sx={sxStyles.sectionMainBody}>
              We are a web3 platform for artists and creators looking to
              distribute their content and works in new formats (NFTs), promote
              their communities and monetize without intermediaries.
            </Typography>
            <Button palette="primary">
              {t('createworks:section1_button')}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={7} order={{ xs: 1, lg: 2 }}>
          <ImageSlider data={sliderData} />
        </Grid>
      </Grid>
      <Box sx={sxStyles.sectionReverseContainer}>
        <Box sx={sxStyles.textContainer}>
          <Label
            variant="h3"
            text={t('createworks:section1_title')}
            sx={sxStyles.sectionTitle}
          />
          <Label
            variant="h6"
            text={t('createworks:section1_text1')}
            sx={sxStyles.sectionText}
          />
          <Label
            variant="h6"
            text={t('createworks:section1_text2')}
            sx={sxStyles.sectionText}
          />
        </Box>
        <Box sx={sxStyles.imgContainer}>
          <Image
            alt="createworks-1"
            src="/images/createworks/createworks-1.png"
            width={356}
            height={490}
          />
        </Box>
      </Box>
      <Box sx={sxStyles.sectionContainer}>
        <Box sx={sxStyles.imgContainer}>
          <Image
            alt="createworks-2"
            src="/images/createworks/createworks-2.png"
            width={400}
            height={304}
          />
        </Box>
        <Box sx={sxStyles.textContainer}>
          <Label
            variant="h3"
            text={t('createworks:section2_title')}
            sx={sxStyles.sectionTitle}
          />
          <Label
            variant="h6"
            text={t('createworks:section2_text2')}
            sx={sxStyles.sectionText}
          />
          <Label
            variant="h6"
            text={t('createworks:section2_text1')}
            sx={sxStyles.sectionText}
          />
        </Box>
      </Box>
      <Box sx={sxStyles.sectionReverseContainer}>
        <Box sx={sxStyles.textContainer}>
          <Label
            variant="h3"
            text={t('createworks:section3_title')}
            sx={sxStyles.sectionTitle}
          />
          <Label
            variant="h6"
            text={t('createworks:section3_text')}
            sx={sxStyles.sectionText}
          />
        </Box>
        <Box sx={sxStyles.imgContainer}>
          <Image
            alt="createworks-3"
            src="/images/createworks/createworks-3.png"
            width={329}
            height={287}
          />
        </Box>
      </Box>
      <Button
        onClick={onLogin}
        name="submit-button"
        palette="primary"
        type="submit"
        sx={{
          width: { xs: '100%', sm: '60%', md: '50%', xl: '30%' },
          marginBottom: '20px',
        }}
      >
        {t('createworks:button')}
      </Button>
    </Box>
  );
};

export default HowToCreate;
