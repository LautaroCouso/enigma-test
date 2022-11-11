import React from 'react';
import { Contents, Content } from '../types';
import SliderImage from './SliderImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

interface Props {
  data: Contents;
}

const ImageSlider = (props: Props) => {
  const { data } = props;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Swiper
      style={{ height: '100%', width: '100%' }}
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay
      speed={500}
      pagination={{
        clickable: true,
      }}
      effect={'fade'}
      fadeEffect={{
        crossFade: true,
      }}
    >
      {data.map((item: Content) => {
        return (
          <SwiperSlide key={item.id}>
            <SliderImage url={item.url} alt={item.alt} href={item.href} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
