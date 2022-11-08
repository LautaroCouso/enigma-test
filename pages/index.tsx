import { Box } from '@mui/material';
import { Label, Button } from '../src/components';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

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
  sectionreverseContainer: {
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
};

const HowToCreate: NextPage = () => {
  const { t } = useTranslation();

  const onLogin = () => {
    console.log('Login!');
  };

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

      <Box sx={sxStyles.sectionreverseContainer}>
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
      <Box sx={sxStyles.sectionreverseContainer}>
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
