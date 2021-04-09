// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import {SiSpotify, SiDeezer, SiYoutube} from "react-icons/si";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/login-swiper.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="login-swiper-container"
    >
      <SwiperSlide className="login-slide-1">
        <em><h6>Connect your accounts and listen to </h6></em>
        <h2>Your favorite music in one place.</h2>
        <div className="login-platforms-slide1">
                    <SiSpotify className="login-spotify"/>
                    <SiDeezer className="login-deezer"/>
                    <SiYoutube className="login-youtube"/>
                </div>
      </SwiperSlide>
      <SwiperSlide className="login-slide-3">
        <h2>Search and get results from <span style={{"color": "#5773ff"}}>all platforms.</span></h2>
      </SwiperSlide>
      <SwiperSlide className="login-slide-2">
        <h2>Create your own playlists.</h2>
      </SwiperSlide>
    </Swiper>
  );
};
