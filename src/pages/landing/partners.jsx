import PropTypes from "prop-types";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css/animate.min.css";
import SubTitleText from "Components/subTitleText";


import profile_Huang_rethink from "Assets/img/profile/profile_Huang_rethink.png";
import profile_Lin from "Assets/img/profile/profile_Lin.png";
import profile_Tsao from "Assets/img/profile/profile_Tsao.png";
import profile_Wang from "Assets/img/profile/profile_Wang.png";
import profile_Chao from "Assets/img/profile/profile_Chao.png";
import profile_Huang_csr from "Assets/img/profile/profile_Huang_csr.png";
import profile_Yang from "Assets/img/profile/profile_Yang.png";
import profile_Huang_open from "Assets/img/profile/profile_Huang_open.png";

import icon_Huang_rethink from "Assets/img/eco_tag_1-2.png"
import icon_Lin from "Assets/img/icon_whale.png"
import icon_Tsao from "Assets/img/icon_doctor.png"
import icon_Wang from  "Assets/img/eco_tag_1-3.png"
import icon_Chao from  "Assets/img/icon_hearing.png"
import icon_Huang_csr from "Assets/img/icon_earth.png"
import icon_Yang from "Assets/img/icon_case.png"
import icon_Huang_open from "Assets/img/icon_pintoo.png"

import BackgroundColorAnimation from "Components/BackgroundColorAnimation";

const PartnersWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

const generateUniqueSlides = (data) => {
  let uniqueSlides = [];
  for (let i = 0; i < 5; i++) {
    uniqueSlides = uniqueSlides.concat(data);
  }
  return uniqueSlides;
};

const CustomSwiper = ({ data, speed, reverse }) => (
  <Swiper
    slidesPerView="auto"
    spaceBetween={24}
    centeredSlides={false}
    speed={speed}
    loop={true}
    freeMode={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }}
    modules={[Autoplay]}
    breakpoints={{
      769: {
        spaceBetween: 30,
      },
    }}
  >
    {data.map((item, index) => (
      <SwiperSlide className="w-[325px] md:w-[337px] h-[127px] md:h-[135px]" key={`${item.id}-${index}`}>
        <div
          className="mx-auto flex  items-center gap-6 
                  rounded-bl-[20px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[20px] 
                  bg-pure_white px-[18px] md:px-[20px] pb-[20px] shadow-[0_10px_20px_-14px_rgba(20,20,20,0.05)] 
                  md:gap-[18px] lg:px-[20px]"
        >
          <img
            src={item.profile}
            alt={item.name}
            className="mt-[20px] h-[87px] w-[87px] md:h-[95px] md:w-[95px]"
          />
          <div className="flex-grow">
            <div className="relative mt-[10px]">
              <h2 className={`text-left font-futura text-[15px] font-medium italic 
                              ${item.color} mb-[8px] tracking-[1.08px]`} >
                  {item.name}
              </h2>
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className="absolute right-0 top-[0px] w-[22px] md:w-[23px]
                            leading-[39.6x] md:leading-[41.4px] tracking-[1.76px] md:tracking-[1.84px]"
              />
            </div>
            <p className="mt-1 text-left font-noto font-medium text-[17px] md:text-[18px] text-gray_5_black 
                          leading-[27.2px] md:leading-[28.8px] tracking-[4.76px] md:tracking-[5.04px]">
              {item.chinese_name}
            </p>
            <p className="text-left font-noto font-regular text-[12px] md:text-[13px] 
                          leading-[21.6px] md:leading-[23.4px] tracking-[0.96px] md:tracking-[1.04px]">
              {item.title}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const PartnersSwiper = ({ uniqueRowOneData, uniqueRowTwoData }) => {
  return (
    <PartnersWrapper data-aos="fade-in" data-aos-delay="500">
      <CustomSwiper data={uniqueRowOneData} speed={4200} reverse={false} />
      <div className="h-[26px] md:h-[30px] xl:h-[41px]" />
      <CustomSwiper data={uniqueRowTwoData} speed={4200} reverse={true} />
    </PartnersWrapper>
  );
};

const Partners = () => {
  const rowOneData = [
    {
      id: "row1-slide1",
      profile: profile_Huang_rethink,
      icon: icon_Huang_rethink,
      name: "Waste Reduction",
      chinese_name: "黃之揚",
      title: "重新思考環教協會 執行長",
      color: "text-green_2",
    },
    {
      id: "row1-slide2",
      profile: profile_Lin,
      icon: icon_Lin,
      name: "Marine Education",
      chinese_name: "林東良",
      title: "黑潮海洋文教基金會 執行長",
      color: "text-green_2",
    },
    {
      id: "row1-slide3",
      profile: profile_Tsao,
      icon: icon_Tsao,
      name: "Family Medicine",
      chinese_name: "曹玉婷",
      title: "台大醫院家醫科 主治醫師",
      color: "text-teal_2",
    },
    {
      id: "row1-slide4",
      profile: profile_Wang,
      icon: icon_Wang,
      name: "Eco Education",
      chinese_name: "王書貞",
      title: "環境友善種子 執行長",
      color: "text-green_2",
    },
  ];

  const rowTwoData = [
    {
      id: "row2-slide1",
      profile: profile_Chao,
      icon: icon_Chao,
      name: "Hearing Care",
      chinese_name: "趙藙婷",
      title: "Hearing Action 創辦人",
      color: "text-teal_2",
    },
    {
      id: "row2-slide2",
      profile: profile_Huang_csr,
      icon: icon_Huang_csr,
      name: "Sustainable Media",
      chinese_name: "黃昭勇",
      title: "CSR@天下頻道 總編輯",
      color: "text-green_2",
    },
    {
      id: "row2-slide3",
      profile: profile_Yang,
      icon: icon_Yang,
      name: "First Aid Education",
      chinese_name: "楊翔文",
      title: "安妮急救教育協會 理事長",
      color: "text-teal_2",
    },
    {
      id: "row2-slide4",
      profile: profile_Huang_open,
      icon: icon_Huang_open,
      name: "Systems Thinking",
      chinese_name: "黃意鈞",
      title: "開放智慧 專業引導師",
      color: "text-green_2",
    },
  ];

  const uniqueRowOneData = generateUniqueSlides(rowOneData);
  const uniqueRowTwoData = generateUniqueSlides(rowTwoData);

  return (
    <div className="relative flex min-h-[100dvh] flex-col justify-start pt-[65px]">
      <div className="absolute left-0 top-[200px] z-0 h-full w-full">
        <div className="relative mt-[100px] h-full w-full">
          <BackgroundColorAnimation
            translateXLeft="30%"
            translateXRight="-30%"
            translateXLeftMd="10%"
            translateXRightMd="30%"
            translateXRightSm="60%"
          />
        </div>
      </div>
      <div className="relative z-10 px-5 md:px-20">
        <SubTitleText
          title="Our Mutualist"
          content="在 Futual，我們串連許多願景一致且專業的合作夥伴。"
        />
        <div className="h-[60px] sm:h-[80px] md:h-[95px]" />
        <PartnersSwiper
          uniqueRowOneData={uniqueRowOneData}
          uniqueRowTwoData={uniqueRowTwoData}
        />
      </div>
    </div>
  );
};

PartnersSwiper.propTypes = {
  uniqueRowOneData: PropTypes.instanceOf(Array).isRequired,
  uniqueRowTwoData: PropTypes.instanceOf(Array).isRequired,
};

CustomSwiper.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  speed: PropTypes.number.isRequired,
  reverse: PropTypes.bool,
};

export default Partners;
