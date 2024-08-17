import { useState, useEffect } from "react";
import { throttle } from "lodash";
import styled from "styled-components";
import Step_all from "Assets/img/Strategize.png";
import Step_sm from "Assets/img/Strategize_sm.png";
import Icon_step_1 from "Assets/img/icon_step_1.png";
import Icon_step_2 from "Assets/img/icon_step_2.png";
import Icon_step_3 from "Assets/img/icon_step_3.png";
import Point_bacground from "Assets/svg/point_background.svg";

const textContent = [
  {
    title: "Strategize",
    title_zh: "策略",
    step_icon: Icon_step_1,
    subtitle:
      "針對議題現況進行深入分析，全面理解利害關係人的潛在需求，並整合多領域專家觀點，深入了解議題全貌、制定明確的未來目標，提出全面的永續發展路徑。",
    description: "永續策略顧問·主題系統工作坊·永續路徑規劃",
  },
  {
    title: "Innovate",
    title_zh: "創新",
    step_icon: Icon_step_2,
    subtitle:
      "串聯設計師、使用者及永續專家，延伸永續發展策略，開創以人為本，顧及治理、社會和環境的創新永續解方。將挑戰化為機會，創造正向且持續的改變。",
    description: "數位內容設計·教育體驗設計·策展活動設計",
  },
  {
    title: "Communicate",
    title_zh: "溝通",
    step_icon: Icon_step_3,
    subtitle:
      "創新解方需要被有效的擴散。打造有故事的永續品牌，針對不同目標對象，設計最適合且好懂的溝通內容，讓創新想法得以擴散，延伸更多永續影響力。",
    description: "品牌識別設計·解釋影片·永續報告",
  },
];

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: url(${Point_bacground}) lightgray 50% / cover no-repeat;
  background-position: center;
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  z-index: 20;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #9c9c9c; //bg-gray_3
  transition: top 0.3s ease;

  @media (min-width: 480px) {
    height: 10px;
    width: 10px;
  }

  @media (min-width: 769px) {
    height: 12px;
    width: 12px;
  }

  top: ${(props) => {
    switch (props.currentstep) {
      case 0:
        return "calc(50% - 58px)";
      case 1:
        return "calc(50% - 4px)";
      case 2:
        return "calc(50% + 52px)";
      default:
        return "";
    }
  }};

  @media (min-width: 480px) {
    top: ${(props) => {
      switch (props.currentstep) {
        case 0:
          return "calc(50% - 115px)";
        case 1:
          return "calc(50% - 5px)";
        case 2:
          return "calc(50% + 107px)";
        default:
          return "";
      }
    }};
  }

  @media (min-width: 769px) {
    top: ${(props) => {
      switch (props.currentstep) {
        case 0:
          return "calc(50% - 118px)";
        case 1:
          return "calc(50% - 6px)";
        case 2:
          return "calc(50% + 106px)";
        default:
          return "";
      }
    }};
  }
`;

const Steps = () => {
  const [currentstep, setCurrentStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(currentScrollY);

      const fifthBlockStart = 3 * windowHeight;
      const fifthBlockEnd = 6 * windowHeight;

      if (
        currentScrollY >= fifthBlockStart &&
        currentScrollY <= fifthBlockEnd
      ) {
        const scrollPercentage =
          (currentScrollY - fifthBlockStart) /
          (fifthBlockEnd - fifthBlockStart);
        setIsSticky(true);
        if (scrollPercentage >= 1 / 2) {
          setCurrentStep(2);
        } else if (scrollPercentage >= 1 / 4 && scrollPercentage < 1 / 2) {
          setCurrentStep(1);
        } else {
          setCurrentStep(0);
        }
      } else if (currentScrollY > fifthBlockEnd) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    }, 100); // 每100毫秒最多執行一次

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // 取消任何待處理的節流調用
    };
  }, [scrollY, currentstep]);

  return (
    <div className={`${isSticky ? "sticky top-0" : "relative"}`}>
      <Background />
      <div className="flex h-[100vh] flex-col items-center justify-center px-[20px] sm:px-[60px] steps_lg:flex-row steps_lg:gap-x-[40px]">
        <img
          src={Step_all}
          alt="Step_all"
          className="z-10 mb-[20px] hidden sm:mb-0 sm:block sm:w-[495px] sm:px-0 steps_lg:order-2 steps_lg:w-[495px] xl:w-[660px]"
        />
        <img
          src={Step_sm}
          alt="Step_sm"
          className="z-10 mb-[20px] block w-[363px] sm:hidden"
        />
        <div className="items-left relative flex w-full text-left sm:pl-[20px] md:mr-[35px] md:w-auto lg:max-w-[513px] lg:pl-0">
          <div className="absolute -top-[25px] right-[22px] flex flex-col items-center justify-center gap-y-[46.5px] sm:relative sm:right-0 sm:top-0 sm:gap-y-[100px]">
            <div className="top-50% lefr-[2px] absolute z-0 h-[117px] w-[2px] bg-gray_1 sm:left-[4px] sm:h-[230px] md:left-[5px] md:h-[236px] md:w-[2.5px]" />
            {textContent.map((_, index) => (
              <div
                key={index}
                className="z-10 h-2 w-2 rounded-full bg-gray_1 sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]"
              ></div>
            ))}
            <Indicator currentstep={currentstep} />
          </div>
          <div className="relative flex max-w-[466px] flex-col justify-between sm:pl-[60px] md:max-w-[501px] lg:pl-[70px]">
            <div className="mb-[68px] sm:mb-[82px] md:mb-[92px]">
              <div className="flex items-center gap-[8px]">
                <img
                  src={textContent[currentstep].step_icon}
                  alt="step_icon"
                  className="w-[22px] sm:w-[28px] md:w-[30px]"
                />
                <span className="font-sarabun text-[20px] italic leading-[160%] tracking-[0.08em] text-gradient sm:text-[22px] md:text-[24px]">
                  Step{currentstep + 1}
                </span>
                <span className="font-noto text-[18px] font-normal leading-[180%] tracking-[0.34em] sm:text-[20px] md:text-[22px]">
                  {textContent[currentstep].title_zh}
                </span>
              </div>
              <h2 className="absolute top-[25px] font-jost text-[38px] font-light leading-[160%] tracking-[0.08em] sm:top-[35px] sm:text-[46px] md:top-[41px] md:text-[50px]">
                {textContent[currentstep].title}
              </h2>
            </div>
            <div>
              <p className="mb-[26px] text-left font-noto text-[15px] font-normal leading-[200%] tracking-[0.08em] md:mb-[30px] md:text-[16px] ">
                {textContent[currentstep].subtitle}
              </p>
              <p className="text-left font-noto text-[15px] font-normal leading-[180%] tracking-[0.08em] text-blue_2 md:text-[16px]">
                {textContent[currentstep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
