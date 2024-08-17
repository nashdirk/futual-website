import styled from "styled-components";
import Circle_390 from "Assets/svg/circle 390.svg";
import Circle_768 from "Assets/svg/circle 768.svg";
import Circle_1440 from "Assets/svg/circle 1440.svg";
import Icon_communicate from "Assets/img/process_icon_communicate.png";
import Icon_innovate from "Assets/img/process_icon_innovate.png";
import Icon_strategize from "Assets/img/process_icon_strategize.png";
import Point_bacground from "Assets/svg/point_background.svg";
import SubTitleText from "Components/subTitleText";

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

const Process = () => {
  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-center">
      <Background />
      <div className="sm:px-[57px]">
        <SubTitleText
          title="Our Process"
          content={`共創與同理是 Futual 的核心。為了達成永續發展，\n以策略為前提，發展創新，並用溝通創造影響。`}
        />
        {/* images */}
        <div data-aos="fade-in" data-aos-delay="700" className="mt-[56px] flex flex-col items-center justify-center sm:mt-[80px] md:mt-[70px]">
          <div className="png_sm:hidden relative block w-[220px]">
            <img src={Circle_390} alt="Circle_390" className="block" />
            <div className="absolute top-[53px] flex w-full flex-col  items-center gap-y-[126px]">
              <img
                src={Icon_strategize}
                alt="Icon_strategize"
                className="h-[66px] w-[66px]"
                loading="lazy"
              />
              <img
                src={Icon_innovate}
                alt="Icon_innovate"
                className="h-[66px] w-[66px]"
                loading="lazy"
              />
              <img
                src={Icon_communicate}
                alt="Icon_communicate"
                className="h-[66px] w-[66px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="png_sm:block relative hidden w-[654px] lg:hidden">
            <img src={Circle_768} alt="Circle_768" className="block" />
            <div className="absolute top-[50px] flex w-full  justify-center gap-x-[138px]">
              <img
                src={Icon_strategize}
                alt="Icon_strategize"
                className="h-[70px] w-[70px]"
                loading="lazy"
              />
              <img
                src={Icon_innovate}
                alt="Icon_innovate"
                className="h-[70px] w-[70px]"
                loading="lazy"
              />
              <img
                src={Icon_communicate}
                alt="Icon_communicate"
                className="h-[70px] w-[70px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative hidden w-[820px] lg:block">
            <img src={Circle_1440} alt="Circle_1440" className="block" />
            <div className="absolute top-[71px] flex w-full  justify-center gap-x-[160px]">
              <img
                src={Icon_strategize}
                alt="Icon_strategize"
                className="h-[100px] w-[100px]"
                loading="lazy"
              />
              <img
                src={Icon_innovate}
                alt="Icon_innovate"
                className="h-[100px] w-[100px]"
                loading="lazy"
              />
              <img
                src={Icon_communicate}
                alt="Icon_communicate"
                className="h-[100px] w-[100px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
