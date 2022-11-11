import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Stack,
  Typography,
} from '@mui/material';
import {
  MovieOutlined,
  CameraAltOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';

interface Props {
  fileType: string;
  file: string;
  cardTitle: string;
  author: string;
  currency: string;
  price: string;
  currencyType: string;
  authorAvatar: string;
  link: string;
}

const sxArtCardStyles = {
  mainContainer: {
    display: 'block',
    alignItems: 'center',
    width: { xl: '302px' },
    height: { xl: '472px' },
    padding: { xs: '10px', sm: '14px' },
    backgroundColor: 'white',
    borderRadius: 5,
    alignContent: 'center',
  },
  fileContainer: {
    objectFit: 'cover',
    height: { xs: '130px', sm: '275px' },
    width: { xs: '130px', sm: '100%' },
    borderRadius: { xs: '10px 10px 0 10px', sm: 0 },
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: { xs: 'row' },
    justifyContent: 'space-between',
    width: { xs: '100%' },
    alignItems: 'center',
    height: 'auto',
    position: 'absolute',
    zIndex: 'toolTip',
    top: 0,
    left: 0,
    padding: { xs: '11px', sm: '16px' },
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
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    width: { xs: '100%', md: '50%' },
  },
  cardTitle: {
    margin: 0,
    fontWeight: 800,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  authorContainer: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    backgroundColor: '#E9ECEF',
    padding: { xs: '1px 6px', sm: '6px 16px' },
    marginBottom: '16px',
    marginLeft: '10px',
    marginTop: '8px',
    alignSelf: 'flex-start',
  },
  author: {
    fontWeight: 800,
    fontSize: { xs: '8px', sm: '12px' },
    padding: 0,
    margin: 0,
    textTransform: 'none',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#1E1F1F',
  },
  priceContainer: {
    marginTop: 0,
    height: 'auto',
    borderRadius: { xs: '0px 0px 10px 0px', sm: '0px 0px 10px 10px' },
    width: '100%',
    backgroundColor: '#ADB5BD',
    padding: { xs: '6px 10px' },
    alignItems: 'flex-start',
  },
  instantPriceText: {
    fontWeight: '800',
    fontFamily: 'Manrope',
    fontSize: { xs: '7px', sm: '11px' },
    color: 'white',
    lineHeight: { xs: '14px' },
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 'auto',
    width: '100%',
    alignItems: 'center',
  },
  price: {
    fontWeight: '800',
    fontFamily: 'Manrope',
    fontSize: { xs: '10px', sm: '16px' },
    lineHeight: { xs: '13px', sm: '30px' },
    color: 'white',
    marginLeft: '8px',
  },
  avatar: {
    height: { xs: '18px', sm: '24' },
    width: { xs: '18px', sm: '24' },
    marginLeft: '2px',
  },
  fileTypeAvatar: {
    backgroundColor: 'white',
    width: '36px',
    height: '36px',
  },
  favorite: {
    backgroundColor: '#343A40',
  },
  cardMediaContainer: { width: { xs: '130px', sm: '100%' } },
  fileIcon: { color: 'black', width: '15px', height: '15px' },
  favoriteIcon: { width: '15px', height: '15px' },
  bottomContainer: {
    height: { xs: '130px', sm: 'auto' },
    justifyContent: 'space-between',
  },
  cardContent: {
    width: { xs: '350px', sm: '100%' },
    padding: { xs: '0 0 0 10px', sm: '16px' },
  },
  cardTitleStyle: { fontSize: { xs: '16px', sm: '20px' } },
  currencyIcon: {
    width: { xs: '11px', sm: '16px' },
    justifyContent: 'center',
    display: 'flex',
  },
};

const ArtCard = (props: Props) => {
  const {
    fileType,
    file,
    cardTitle,
    author,
    currency,
    price,
    currencyType,
    authorAvatar,
    link,
  } = props;

  return (
    <Card sx={sxArtCardStyles.mainContainer}>
      <Stack direction={{ xs: 'row', sm: 'column' }}>
        <CardActionArea
          href={link}
          sx={sxArtCardStyles.cardMediaContainer}
          target={'_blank'}
        >
          {fileType === 'video' ? (
            <CardMedia
              component={'video'}
              src={file}
              autoPlay={true}
              muted
              sx={sxArtCardStyles.fileContainer}
            />
          ) : (
            <CardMedia
              component={'img'}
              height={275}
              src={file}
              sx={sxArtCardStyles.fileContainer}
            />
          )}
          <Box sx={sxArtCardStyles.iconsContainer}>
            {fileType === 'video' ? (
              <Avatar sx={sxArtCardStyles.fileTypeAvatar}>
                <MovieOutlined style={sxArtCardStyles.fileIcon} />
              </Avatar>
            ) : (
              <Avatar sx={sxArtCardStyles.fileTypeAvatar}>
                <CameraAltOutlined style={sxArtCardStyles.fileIcon} />
              </Avatar>
            )}
            <Avatar sx={sxArtCardStyles.favorite}>
              <FavoriteBorderOutlined style={sxArtCardStyles.favoriteIcon} />
            </Avatar>
          </Box>
        </CardActionArea>
        <Stack sx={sxArtCardStyles.bottomContainer}>
          <CardActionArea>
            <CardContent sx={sxArtCardStyles.cardContent}>
              <Typography
                variant={'h6'}
                noWrap
                sx={sxArtCardStyles.cardTitleStyle}
              >
                {cardTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            variant="contained"
            sx={sxArtCardStyles.authorContainer}
            startIcon={
              <Avatar
                sx={sxArtCardStyles.avatar}
                alt={author}
                src={authorAvatar}
              />
            }
          >
            <Typography sx={sxArtCardStyles.author} noWrap>
              {author}
            </Typography>
          </Button>
          <CardActionArea sx={sxArtCardStyles.priceContainer}>
            <Stack height={'auto'}>
              <Typography sx={sxArtCardStyles.instantPriceText}>
                Precio Instantaneo
              </Typography>
              <Box sx={sxArtCardStyles.currencyContainer}>
                <Icon sx={sxArtCardStyles.currencyIcon}>
                  <img
                    src="/icons/eth_icon.svg"
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Icon>
                <Typography sx={sxArtCardStyles.price}>
                  {price} {currencyType}
                </Typography>
              </Box>
            </Stack>
          </CardActionArea>
        </Stack>
      </Stack>
    </Card>
  );
};

export default React.memo(ArtCard);
