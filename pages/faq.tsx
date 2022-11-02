import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Label } from '../src/components';

const sxStyles = {
  FaqContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    width: '85%',
    marginTop: '70px',
    marginBottom: { xs: '10px', md: '70px' },
    gap: { xs: '50px', md: '100px' },
  },
  AccordionContainer: {
    marginBottom: '60px',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'fit-content',
  },
  questionPink: {
    color: 'highlight.main',
    whiteSpace: 'normal',
  },
  accordionPink: {
    backgroundColor: 'highlight.main',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
  },
  question: {
    color: 'background.paper',
    whiteSpace: 'normal',
  },
  accordion: {
    borderRadius: '10px',
    marginBottom: '20px',
    borderTop: 'none',
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
  },
  imgContainer: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifycontent: 'center',
  },
  img: {
    display: 'flex',
    marginTop: '50px',
    marginBottom: '70px',
    alignItem: 'center',
    justifyContent: 'center',
  },
  text: {
    whiteSpace: 'normal',
    marginBottom: '10px',
  },
  whiteText: {
    color: 'background.paper',
    whiteSpace: 'normal',
    marginBottom: '10px',
  },
};

const FAQ: NextPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        padding: { xs: '10px', sm: '30px', md: '40px', lg: '40px' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12}>
        <div
          style={{
            display: 'flex',
            columnGap: '36px',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: isMobile ? 60 : 110,
              height: 5,
              backgroundColor: '#F40CC8',
            }}
          ></div>
          <Label variant={isMobile ? 'h6' : 'h4'} text={t('faq:title')} />
        </div>
      </Grid>
      <Grid sx={sxStyles.FaqContainer}>
        <Grid item xs={12} sm={6} sx={sxStyles.columnContainer}>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section1_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section1_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section2_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section2_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordionPink}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section3_title')}
                sx={sxStyles.question}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section3_description')}
                sx={sxStyles.whiteText}
              />
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12} sx={sxStyles.imgContainer}>
            <Image
              src="/images/faq-1.png"
              alt="FAQ 1"
              width={486}
              height={264}
            />
          </Grid>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section4_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section4_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} sm={6} sx={sxStyles.columnContainer}>
          <Grid item xs={12} sx={sxStyles.imgContainer}>
            <Image
              src="/images/faq-2.png"
              alt="FAQ 2"
              width={424}
              height={211}
            />
          </Grid>
          <Accordion sx={sxStyles.accordionPink}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section5_title')}
                sx={sxStyles.question}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section5_description')}
                sx={sxStyles.whiteText}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section6_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section6_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section7_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section7_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordion}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section8_title')}
                sx={sxStyles.questionPink}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section8_description')}
                sx={sxStyles.text}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={sxStyles.accordionPink}>
            <AccordionSummary>
              <Label
                variant="h6"
                text={t('faq:section9_title')}
                sx={sxStyles.question}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Label
                variant="body1"
                text={t('faq:section9_description')}
                sx={sxStyles.whiteText}
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={sxStyles.img}>
        <Image src="/images/faq.png" alt="FAQ" width={1261} height={280} />
      </Grid>
    </Grid>
  );
};

export default FAQ;
