import Intro_sm from "Assets/img/projects/greenFinancing/pic 390.svg";
import Intro_md from "Assets/img/projects/greenFinancing/pic 768.svg";
import Intro_lg from "Assets/img/projects/greenFinancing/pic 1440.svg";
import SdgsItem from "Components/SdgsItem";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";

const Intro = () => {
  return (
    <div className="relative mb-[140px] mt-[102px] w-full px-[22px] sm:mb-[160px] sm:mt-[120px] md:mb-[200px] md:mt-[140px]">
      <img
        src={Intro_sm}
        className="mx-auto w-[280px]  sm:hidden"
        alt="Intro"
        loading="lazy"
      />
      <img
        src={Intro_md}
        className="mx-auto w-[360px] ] hidden sm:block md:hidden"
        alt="Intro"
        loading="lazy"
      />
      <img
        src={Intro_lg}
        className="mx-auto w-[400px] hidden md:block"
        alt="Intro"
        loading="lazy"
      />
      <h3 className="title_e_small text-center sm:text-[50px] md:text-[54px]">
        Intro
      </h3>
      <div className="relative">
        <BackgroundColorAnimation
          colorLeft="bg-[#F29A63]"
          colorRight="bg-[#B8C318]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
        <p className="body_medium relative mx-auto mb-[50px] mt-[20px] sm:mb-[40px] sm:mt-[24px] sm:max-w-[486px] md:mb-[70px] md:mt-[30px] md:max-w-[694px] md:text-[16px] ">
          第一銀行綠色金融教育館，座落於擁有近百年歷史的萬華分行四樓，是台灣第一個經環境署認證，以綠色金融為主題的環境教育場所。綠色金融教育館以推廣綠色金融為出發點，結合環境永續、金融教育和在地文史，串連過去、現在到未來，加深觀者對綠色金融的理解、銀行業永續行動的認識，並激發更多的永續實踐。
        </p>
        <div className="relative">
          <SdgsItem numbers={[4, 13]} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
