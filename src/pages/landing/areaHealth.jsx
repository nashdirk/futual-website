import styled from "styled-components";
import AreaTagSwiper from "Components/areaTagSwiper";
import ProjectSwiper from "Components/projectSwiper";
import HEALTH_IMG from "Assets/img/area_health.jpeg";
import HEALTH_ICON from "Assets/svg/area_health_icon.svg";

const AreaBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  background: url(${HEALTH_IMG}) lightgray 50% / cover no-repeat;
  background-position: center;
  @media (min-width: 1440px) {
    background-position: left;
  }
  min-height: 100dvh;
  vertical-align: middle;
  animation: scaleAnimation 25s infinite;

  @keyframes scaleAnimation {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const BlurWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 410px;
  @media (min-width: 769px) {
    height: 500px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.86) 53.7%,
    rgba(255, 255, 255, 0.09) 106.46%
  );
  @media (min-width: 1440px) {
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.1) -4.52%,
      rgba(255, 255, 255, 0.92) 100%
    );
  }
  backdrop-filter: blur(5px);
`;

const AreaDescription = () => {
  return (
    <div className="">
      <div className="flex h-[100px] md:h-[120px] xl:h-[140px]">
        <img
          className="h-[90px] w-[90px] md:h-[100px] md:w-[100px] xl:h-[120px] xl:w-[120px]"
          src={HEALTH_ICON}
          alt="Environment Icon"
        />
        <p className="flex items-center font-noto text-[34px] leading-[160%] tracking-[0.24em] text-gray_5_black md:text-[38px] xl:text-[40px]">
         醫療健康
        </p>
      </div>
      <p className="max-w-[630px] text-left font-noto text-[16px] leading-[200%] tracking-[0.08em] text-gray_5_black">
      感受到國家淨零候風險，本行汰換節碳排政策及氣候推本行以環境永續為經營重點，降低溫室氣體排放、減少廢棄物守護我們的環境與生物確保環境生態的永續。
      </p>
    </div>
  );
};

const Area = () => {
  return (
    <div className="relative w-full">
      <AreaBackground>
        <BlurWrapper />
      </AreaBackground>
      <div className="relative mx-auto pl-0 pt-[65px] lg:container md:pt-[44px] xl:px-[78px] xl:pt-[50px]">
        <div className="absolute left-[18px] top-[65px] md:left-[24px] md:top-[44px] xl:left-[78px] xl:top-[50px] ">
          <h3 className="text-left font-['Jost'] text-[39px] leading-[180%] tracking-[0.1em] text-pure_white opacity-[0.6] md:text-[80px] xl:text-[120px] ">
            HEALTH
          </h3>
        </div>
        <div className="relative justify-between gap-[29px] xl:flex xl:w-[1334px]">
          <div className="mt-[33px] md:mt-[114px] xl:mt-[163px] xl:flex xl:justify-between">
            <div className="pb-[50px] pl-[23px] nav_md:pl-[60px] md:pb-[64px] xl:w-[450px]">
              <AreaDescription />
              <div className="h-[40px]" />
              <AreaTagSwiper />
            </div>
          </div>
          <div className="pb-[80px] pt-[34px] md:pb-[115px] md:pt-[89px] xl:w-[840px] xl:pb-[70px] xl:pt-[390px]">
            <ProjectSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
