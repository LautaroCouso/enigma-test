import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';

interface Props {
  media: string;
  avatar: string;
  artist: string;
  description: string;
  followers: number;
  link: string;
}

const sxArtistCardStyles = {
  fileContainer: {
    objectFit: 'cover',
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
  authorContainer: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    backgroundColor: '#F8F9FA',
    padding: '4px 7px',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: { xs: '18px', sm: '24px' },
  },
  avatar: {
    height: '69px',
    width: '69px',
    position: 'absolute',
    left: '10px',
    bottom: '-34.5px',
    zIndex: 'tooltip',
    border: '4px solid white',
  },
  followersAvatar: {
    backgroundColor: '#212529',
    width: '12px',
    height: '12px',
    fontSize: '6px',
    marginRight: '5px',
  },
  followersText: {
    fontSize: '8px',
    color: 'black',
  },
  mainCard: {
    width: '280px',
    borderRadius: '10px',
  },
  topContainer: {
    position: 'relative',
    height: '170px',
  },
  bottomContainer: {
    backgroundColor: 'white',
    height: '136px',
    position: 'relative',
    padding: '40px 18px 6px 18px',
  },
  addButtonContainer: {
    color: 'black',
    margin: 0,
    position: 'absolute',
    right: '10px',
    height: '40px',
    width: '40px',
    padding: 0,
    borderRadius: '20px',
    zIndex: 'tooltip',
    top: '-20px',
    backgroundColor: 'white',
  },
  addCircle: {
    height: '100%',
    width: '100%',
  },
  artistText: {
    fontSize: '18px',
    fontFamily: 'Manrope',
  },
  descriptionText: {
    fontSize: '11px',
    fontWeight: '400',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    maxHeight: '46px',
    lineHeight: '15px',
  },
};

const ArtistCard = (props: Props) => {
  const { media, avatar, artist, description, followers, link } = props;
  return (
    <Card sx={sxArtistCardStyles.mainCard}>
      <CardActionArea sx={sxArtistCardStyles.topContainer} href={link}>
        <Stack
          sx={sxArtistCardStyles.authorContainer}
          direction={'row'}
          component={Paper}
        >
          <Avatar sx={sxArtistCardStyles.followersAvatar}>{followers}</Avatar>
          <Typography sx={sxArtistCardStyles.followersText}>
            Followers
          </Typography>
        </Stack>
        <CardMedia
          component={'img'}
          height={'100%'}
          src={media}
          sx={sxArtistCardStyles.fileContainer}
        />
        <Avatar alt={artist} src={avatar} sx={sxArtistCardStyles.avatar} />
      </CardActionArea>
      <Stack sx={sxArtistCardStyles.bottomContainer}>
        <IconButton
          sx={sxArtistCardStyles.addButtonContainer}
          component={Paper}
        >
          <AddCircle sx={sxArtistCardStyles.addCircle} />
        </IconButton>
        <Typography variant={'h6'} sx={sxArtistCardStyles.artistText}>
          {artist}
        </Typography>
        <Box sx={{ overflow: 'hidden' }}>
          <Typography variant={'body2'} sx={sxArtistCardStyles.descriptionText}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default ArtistCard;
