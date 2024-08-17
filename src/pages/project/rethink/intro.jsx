import Intro_sm from "Assets/img/projects/rethink/intro_390.jpg";
import Intro_md from "Assets/img/projects/rethink/intro_768.jpg";
import Intro_lg from "Assets/img/projects/rethink/intro_1440.jpg";
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
          colorLeft="bg-[#EB8B55]"
          colorRight="bg-[#6E9FD5]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
        <p className="body_medium relative mx-auto mb-[50px] mt-[20px] sm:mb-[40px] sm:mt-[24px] sm:max-w-[486px] md:mb-[70px] md:mt-[30px] md:max-w-[694px] md:text-[16px] ">
          「RE-Design
          垃圾桶改造計畫」與RE-THINK重新思考合作，以新北市政府為實驗場域，透過重新定義垃圾桶分類、限縮投入口尺寸、斜面設計和資訊圖示設計，讓使用者清楚了解對應的垃圾品項、以及他們的選擇將在循環經濟中所產生的影響，成功引導使用者行為改變。本案獲得2023年社會設計類-金點設計獎。
        </p>
        <div className="relative">
          <SdgsItem numbers={[11, 14]} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
