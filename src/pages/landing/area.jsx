/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";
import AreaTagSwiper from "Components/areaTagSwiper";
import ProjectSwiper from "Components/projectSwiper";
import ENVIRONMENT_IMG from "Assets/img/area_environment.jpg";
import ENVIRONMENT_ICON from "Assets/svg/area_environment_icon.svg";

const AreaBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100dvh;
  z-index: 0;
  overflow: hidden;
`;

const ScalableImage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${ENVIRONMENT_IMG}) lightgray 50% / cover no-repeat;
  background-position: center;
  @media (min-width: 1440px) {
    background-position: left;
  }
  animation: scaleAnimation 25s infinite;

  @keyframes scaleAnimation {
    0%,
    100% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }
  }

  @media (min-width: 1440px) {
    background-position: left;
  }
`;

const BlurWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 425px;
  @media (min-width: 480px) {
    height: 450px;
  }
  @media (min-width: 750px) {
    height: 500px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.73) 53.7%,
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
    <div>
      <div className="flex h-[100px] nav_md:h-[120px] xl:h-[140px]">
        <img
          className="h-[90px] w-[90px] nav_md:h-[100px] nav_md:w-[100px] xl:h-[120px] xl:w-[120px]"
          src={ENVIRONMENT_ICON}
          alt="Environment Icon"
        />
        <p className="flex items-center font-noto text-[34px] leading-[160%] tracking-[0.24em] text-gray_5_black nav_md:text-[38px] xl:text-[40px]">
          環境保護
        </p>
      </div>
      <p className="mt-[-10px] max-w-[653px] pr-[23px] text-left font-noto text-[15px] font-normal leading-[200%] tracking-[1.2px] text-gray_5_black nav_md:pr-0 lg:text-[16px]">
        在氣候變遷和生態危機下，解決環境問題和企業品牌的營運同樣重要。
        <span className="mr-2">Futual</span>
        相信透過創新設計，能為環境和品牌找到永續發展的平衡，創造互利共生之道。
      </p>
    </div>
  );
};

const StyledComponent = styled.div`
  opacity: ${(props) => props.opacityRatio}%;
  transition: opacity 0.3s;
`;

const Area = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opacityRatio, setOpacityRatio] = useState(100);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(currentScrollY);

      const fifthBlockStart = 7 * windowHeight;
      const fifthBlockEnd = 8 * windowHeight;
      const fadeOutStart = fifthBlockEnd - 100; // 開始淡出的滾動位置
      const fadeOutEnd = fifthBlockEnd; // 完全淡出的滾動位置

      if (
        currentScrollY >= fifthBlockStart &&
        currentScrollY <= fifthBlockEnd
      ) {
        const scrollPercentage =
          (currentScrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        const ratio = 100 - Math.round(scrollPercentage * 100);
        setIsSticky(true);
        setOpacityRatio(ratio);
      } else if (currentScrollY > fifthBlockEnd) {
        setIsSticky(false);
        setOpacityRatio(0); // 當超過第六個區塊時，完全透明
      } else {
        setIsSticky(true);
        setOpacityRatio(100); // 當不在第五區塊時，設置透明度為100
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, opacityRatio]);

  return (
    <div className={`${isSticky ? "sticky top-0" : "relative"} z-20 h-full`}>
      <StyledComponent opacityRatio={opacityRatio}>
        <AreaBackground>
          <ScalableImage>
            <BlurWrapper />
          </ScalableImage>
        </AreaBackground>
        <div className="relative mx-auto pl-0 pt-[65px] lg:container nav_md:pt-[44px] xl:px-[78px] xl:pt-[50px]">
          <div className=":top-[44px] absolute left-[18px] top-[65px] nav_md:left-[24px] xl:left-[78px] xl:top-[50px] ">
            <h3 className="text-left font-jost text-[39px] font-normal leading-[180%] tracking-[0.1em] text-pure_white opacity-[0.6] nav_md:text-[80px] xl:text-[120px] ">
              ENVIRONMENT
            </h3>
          </div>
          <div className="relative justify-between gap-[29px] xl:flex xl:w-[1334px]">
            <div className="mt-[33px] nav_md:mt-[114px] xl:mt-[163px] xl:flex xl:justify-between">
              <div className="pb-[50px] pl-[23px] nav_md:pb-[64px] nav_md:pl-[60px] lg:pl-[0px] xl:w-[450px]">
                <AreaDescription />
                <div className="h-[24px] sm:h-[34px] md:h-[40px]" />
                <AreaTagSwiper />
              </div>
            </div>
            <div className="pb-[80px] pt-[34px] sm:pb-[115px] sm:pt-[89px] md:pt-[89px] xl:w-[840px] xl:pb-[70px] xl:pt-[390px]">
              <ProjectSwiper />
            </div>
          </div>
        </div>
      </StyledComponent>
    </div>
  );
};

export default Area;
