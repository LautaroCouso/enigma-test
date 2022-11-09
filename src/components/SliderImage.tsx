import React from 'react';
import { Box, Link } from '@mui/material';

const sxSliderStyles = {
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: {
      xs: '0 0 0 0',
      lg: '250px 0 0 250px',
      xl: '300px 0 0 300px',
    },
    overflow: 'hidden',
  },
  link: { display: 'flex', height: '100%', width: '100%' },
  img: { height: 'auto', width: '100%' },
};

interface Props {
  url: string;
  alt: string;
  href: string;
}

const SliderImage = (props: Props) => {
  const { url, alt, href } = props;
  return (
    <Box sx={sxSliderStyles.container}>
      <Link href={href} sx={sxSliderStyles.link}>
        <img src={url} alt={alt} style={sxSliderStyles.img} />
      </Link>
    </Box>
  );
};

export default SliderImage;
