import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import PropTypes from "prop-types";

const AlbumComponent = ({ imageList = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = imageList.length || 1;
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center py-[80px] sm:py-[100px] lg:py-[140px]">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        className="w-full"
      >
        {imageList.map((image) => (
          <SwiperSlide key={image.id} className="relative">
            <img
              src={image.mdSrc}
              alt={image.alt}
              className="mx-auto h-[260px] rounded-[24px] object-cover sm:h-[480px] lg:hidden"
              loading="lazy"
            />
            <img
              src={image.lgSrc}
              alt={image.alt}
              className="mx-auto hidden h-[720px] rounded-[30px] object-cover lg:block"
              loading="lazy"
            />
            <div className="absolute bottom-[19px] left-1/2 inline-flex h-[40px] -translate-x-1/2 transform items-center space-x-[19px] rounded-[50px] border-[1.2px] border-pure_white bg-[rgba(250,250,250,0.55)] px-[11px] shadow-[0px_4px_10px_rgba(20,20,20,0.02)] backdrop-blur-[4px] lg:bottom-[30px] lg:h-[44px] lg:space-x-[21px] lg:border-[1.5px] lg:px-[14px]">
              <button
                className="flex h-[25px] w-[58px] items-center justify-center rounded-[70px] bg-pure_white font-sarabun text-[14px] font-light italic leading-[120%] tracking-[0.08em] text-gray_5_black lg:w-[60px] lg:text-[15px]"
                onClick={handlePrev}
              >
                Prev
              </button>
              <span className="font-sarabun text-[15px] font-normal leading-[180%] tracking-[0.08em] text-gray_5_black lg:text-[16px]">
                {currentSlide}/{totalSlides}
              </span>
              <button
                className="flex h-[25px] w-[58px] items-center justify-center rounded-[70px] bg-pure_white font-sarabun text-[14px] font-light italic leading-[120%] tracking-[0.08em] text-gray_5_black lg:w-[60px] lg:text-[15px]"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="mt-[24px] text-center font-sarabun text-[13px] font-light leading-[120%] tracking-[0.08em] text-gray_5_black lg:mt-[30px] lg:text-[14px]">
        Click to switch images
      </p>
    </div>
  );
};

AlbumComponent.propTypes = {
  imageList: PropTypes.array,
};

export default AlbumComponent;
