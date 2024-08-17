import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import video_1_1 from "Assets/img/projects/greenFinancing/pic 1-1.svg";
import video_1_2 from "Assets/img/projects/greenFinancing/pic 1-2.svg";
import video_1_3 from "Assets/img/projects/greenFinancing/pic 1-3.svg";
import video_2_1 from "Assets/img/projects/greenFinancing/pic 2-1.svg";
import video_2_2 from "Assets/img/projects/greenFinancing/pic 2-2.svg";
import video_2_3 from "Assets/img/projects/greenFinancing/pic 2-3.svg";

import "swiper/css";

const videoImageList_1 = [
  {
    id: 1,
    image: video_1_1,
    alt: "video_1_1",
  },
  {
    id: 2,
    image: video_1_2,
    alt: "video_1_2",
  },
  {
    id: 3,
    image: video_1_3,
    alt: "video_1_3",
  },
  {
    id: 4,
    image: video_1_1,
    alt: "video_1_1",
  },
  {
    id: 5,
    image: video_1_2,
    alt: "video_1_2",
  },
  {
    id: 6,
    image: video_1_3,
    alt: "video_1_3",
  },
];

const videoImageList_2 = [
  {
    id: 1,
    image: video_2_1,
    alt: "video_2_1",
  },
  {
    id: 2,
    image: video_2_2,
    alt: "video_2_2",
  },
  {
    id: 3,
    image: video_2_3,
    alt: "video_2_3",
  },
  {
    id: 4,
    image: video_2_1,
    alt: "video_2_1",
  },
  {
    id: 5,
    image: video_2_2,
    alt: "video_2_2",
  },
  {
    id: 6,
    image: video_2_3,
    alt: "video_2_3",
  },
];

const VideoSwiper = () => {
  const swiperConfig = {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,
    speed: 20000,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    modules: [Autoplay],
    className: "mySwiper",
    breakpoints: {
      480: {
        spaceBetween: 40,
      },
      769: {
        spaceBetween: 60,
      },
    },
  };

  const renderSlides = (data) => (
    <>
      {data.map((item, index) => (
        <SwiperSlide
          className="h-[200px] w-[355px] sm:h-[240px] sm:w-[426px] md:h-[320px] md:w-[568px]"
          key={`${item.id}-${index}`}
        >
          <img src={item.image} alt={item.alt} />
        </SwiperSlide>
      ))}
    </>
  );

  return (
    <div className="w-full py-[60px] sm:py-[70px] md:py-[80px]">
      <Swiper {...swiperConfig}>{renderSlides(videoImageList_2)}</Swiper>
      <div className="h-[30px] sm:h-[60px]" />
      <Swiper
        {...swiperConfig}
        slidesOffsetBefore={-135}
        autoplay={{ delay: 0, reverseDirection: true }}
      >
        {renderSlides(videoImageList_1)}
      </Swiper>
      <p className="pt-[40px] text-center font-noto text-[16px] font-normal leading-[200%] tracking-[0.08em] sm:pt-[50px] md:pt-[60px] md:text-[18px]">
        在地文史巡禮動畫
      </p>
    </div>
  );
};

export default VideoSwiper;
