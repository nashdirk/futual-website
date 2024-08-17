import Intro_sm from "Assets/img/projects/river/pic 390.svg";
import Intro_md from "Assets/img/projects/river/pic 768.svg";
import Intro_lg from "Assets/img/projects/river/pic 1440.svg";
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
          colorLeft="bg-[#899F8A]"
          colorRight="bg-[#76ACCD]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
        <p className="relative body_medium mx-auto mb-[50px] mt-[20px] sm:mb-[40px] sm:mt-[24px] sm:max-w-[486px] md:mb-[70px] md:mt-[30px] md:max-w-[694px] md:text-[16px] ">
          《CSR在天下》自2020年開始投入台灣流域保護議題，於2023年與 Futual
          合作策略推廣，打造專屬的「流域共好平台」，串連企業、政府、民間組織和一般民眾的力量，共同推動流域生態保護，以更創新的方式保護台灣河流。透過展示永續投入、提供專業知識和遊戲化參與，平台將持續媒合跨領域單位的合作，共同促進台灣流域的保護意識與永續發展。
        </p>
        <div className="relative">
          <SdgsItem numbers={[11, 13, 14]} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
