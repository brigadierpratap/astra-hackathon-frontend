import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import {
  CarouselCont,
  CarouselText,
  Home2Cont,
  SwiperImage,
} from "./Home.styles";

SwiperCore.use([Navigation]);
function Home2() {
  const CarouselObj = [
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/fettuccine-alfredo2-small.jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/biryani1.jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/download+(1).jpg",
      text: "Hi there how are ya?",
    },

    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/download+(4).jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/download+(2).jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/download+(6).jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/download.jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Mumbai-restaurant-COVID-19-2-1.jpg",
      text: "Hi there how are ya?",
    },
  ];
  return (
    <Home2Cont>
      <CarouselCont>
        <Swiper
          spaceBetween={50}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={4}
          className="mySwiperHome"
        >
          {CarouselObj.map((co, i) => {
            return (
              <SwiperSlide
                className="swiper-slide-home"
                style={{
                  maxWidth: "90%",
                  width: "10em",
                  height: "15em",
                  position: "relative",
                }}
                key={i}
              >
                <SwiperImage src={co.image} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselCont>
    </Home2Cont>
  );
}

export default Home2;
