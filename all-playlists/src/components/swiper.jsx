// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={"auto"}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{"height": "50vh", "backgroundColor": "red"}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{"height": "50vh", "backgroundColor": "limegreen"}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{"height": "50vh", "backgroundColor": "blue"}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{"height": "50vh", "backgroundColor": "orange"}}>Slide 4</SwiperSlide>
    </Swiper>
  );
};