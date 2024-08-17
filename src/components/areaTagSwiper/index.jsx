import styled from "styled-components";
import Icon1 from "Assets/img/eco_tag_1-1.png";
import Icon2 from "Assets/img/eco_tag_1-2.png";
import Icon3 from "Assets/img/eco_tag_1-3.png";
import Icon4 from "Assets/img/eco_tag_1-4.png";
import Icon5 from "Assets/img/eco_tag_1-5.png";
import Icon6 from "Assets/img/eco_tag_1-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./styles.scss";

// 左右都要有遮罩，所以這邊要用 mask-image
const AreaTagSwiperWrapper = styled.div`
  width: 309.132px;
  @media (min-width: 480px) {
    width: 364.33px;
  }

  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`;

const AreaTagSwiper = () => {
  const rowOneData = [
    { id: "row1-slide1", icon: Icon1, text: "氣候行動" },
    { id: "row1-slide2", icon: Icon2, text: "循環減廢" },
    { id: "row1-slide3", icon: Icon3, text: "生態保育" },
    { id: "row1-slide4", icon: Icon4, text: "綠色金融" },
    { id: "row1-slide5", icon: Icon5, text: "食農教育" },
    { id: "row1-slide6", icon: Icon6, text: "地方創生" },
  ];

  const rowTwoData = [
    { id: "row2-slide1", sdg_id: 6, color: '#04ADD8', text: "淨水衛生" },
    { id: "row2-slide2", sdg_id: 7, color: '#FDB615', text: "潔淨能源" },
    { id: "row2-slide3", sdg_id: 11, color: '#F99D23', text: "永續城鄉" },
    { id: "row2-slide4", sdg_id: 12, color: '#CC8B29', text: "責任產銷" },
    { id: "row2-slide5", sdg_id: 13, color: '#48773C', text: "氣候行動" },
    { id: "row2-slide6", sdg_id: 14, color: '#007DBC', text: "保育海洋" },
    { id: "row2-slide7", sdg_id: 15, color: '#3FAE49', text: "保育陸域" },
  ];

  return (
    <AreaTagSwiperWrapper className="mx-auto sm:ml-0">
      <Swiper
        slidesPerView={2.6}
        spaceBetween={14}
        centeredSlides={true}
        speed={4200}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
      >
        <swiper-wrapper>
          {rowOneData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="area flex items-center">
                <img src={item.icon} alt={item.id} className="mr-[5px] h-[20px] w-[20px]" />
                <span className="font-noto text-[14px] leading-[1.6] tracking-[0.08em] text-new_black">
                  {item.text}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </swiper-wrapper>
      </Swiper>
      <div className="h-0 sm:h-auto">
        <div className="h-[14px]" />
        <Swiper
          slidesPerView={3}
          spaceBetween={14}
          centeredSlides={true}
          speed={4200}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
        >
          <swiper-wrapper>
            {rowTwoData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="area flex items-center">
                  {/* <img src={item.icon} alt={item.id} className="mr-[2px] h-[20px] w-[20px]" /> */}

                  <div
                    className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center mr-[6px] opacity-80"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-pure_white text-[13px] font-futura font-medium leading-[16.8px]">
                      {item.sdg_id}
                    </span>
                  </div>
                  <span className="font-noto text-[14px] leading-[1.6] tracking-[0.08em] text-new_black">
                    {item.text}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </swiper-wrapper>
        </Swiper>
      </div>
    </AreaTagSwiperWrapper>
  );
};

AreaTagSwiper.displayName = "AreaTagSwiper";

export default AreaTagSwiper;
