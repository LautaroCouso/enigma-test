import React from 'react';
import { topArtistCardContents, topArtistCardInfo } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import ArtistCard from './ArtistCard';
import { Container, Typography } from '@mui/material';

interface Props {
  data: topArtistCardContents;
}

const sxSwiperStyles = {
  mainContainer: {
    maxWidth: { xs: '340px', md: '620px', lg: '100%' },
  },
  swiper: {
    width: '100%',
    maxWidth: '1290px',
    paddingBottom: '30px',
    height: '390px',
  },
};

const breakpoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  901: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1201: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1537: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const ArtistCardSlider = (props: Props) => {
  const { data } = props;
  return (
    <Container sx={sxSwiperStyles.mainContainer}>
      <Swiper
        style={sxSwiperStyles.swiper}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={breakpoints}
      >
        {data.map((item: topArtistCardInfo) => {
          return (
            <SwiperSlide key={item.id}>
              <ArtistCard
                media={item.media}
                avatar={item.avatar}
                artist={item.artist}
                followers={item.followers}
                description={item.description}
                link={item.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default ArtistCardSlider;
