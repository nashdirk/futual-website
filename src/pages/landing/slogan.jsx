import { useEffect, useState } from "react";
import Slogan_Desktop from "Assets/img/Slogan_Desktop.png";
import Slogan_Tablet from "Assets/img/Slogan_Tablet.png";
import Slogan_Mobile from "Assets/img/Slogan_Mobile.png";
import Video from "Assets/img/Video_temp.png";
import Video_small from "Assets/img/Video_temp_small.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";

const Slogan = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, offset: 0 });
  }, []);

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setShowText(true);
    }, 100);
  };

  return (
    <div className="relative flex min-h-[100vh] flex-col items-center justify-center">
      <BackgroundColorAnimation
        colorLeft="bg-teal_1"
        colorRight="bg-green_1"
        opacityLeft={0.3}
        opacityRight={0.3}
        translateXLeft="20%"
        translateXRight="-20%"
      />
      <div className="z-10 flex flex-col items-start px-[20px] lg:px-[163px]">
        <div
          className="relative"
          data-aos="fade-in"
          onTransitionEnd={handleAnimationEnd}
        >
          {/* Slogan Images */}
          <img
            src={Slogan_Mobile}
            alt="Slogan"
            className="block h-auto w-full max-w-[360px] sm:hidden"
          />
          <img
            src={Slogan_Tablet}
            alt="Slogan"
            className="hidden h-auto w-[680px] sm:block video_lg:hidden"
          />
          <img
            src={Slogan_Desktop}
            alt="Slogan"
            className="hidden h-auto w-[1060px] video_lg:block"
          />

          {/* Video for Mobile */}
          <img
            src={Video_small}
            alt="Video Small"
            className="absolute left-[15.5%] top-[29%] block w-[191px] max-w-[50%] sm:hidden"
          />
          {/* Video for Tablet */}
          <img
            src={Video_small}
            alt="Video Small"
            className="absolute right-[120px] top-[50px] hidden w-[183px] sm:block md:hidden"
          />
          {/* Video for 992px to 1100px */}
          <img
            src={Video_small}
            alt="Video Small"
            className="absolute right-[120px] top-[50px] hidden w-[183px] md:block video_lg:hidden"
          />
          {/* Video for Desktop */}
          <img
            src={Video}
            alt="Video"
            className="absolute bottom-[258px] right-[184px] hidden w-[281px] video_lg:block"
          />
        </div>
        {showText && (
          <div
            className="ml-[6px] max-w-[550px] sm:ml-[48px] lg:ml-[78px] lg:max-w-[900px]"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <p className="block text-left font-noto text-[15px] font-normal leading-[200%] tracking-[0.08em] text-gray_5_black md:text-[16px]">
              <span className="mr-1 font-futura font-regular text-gray_5_black">
                Futual
              </span>
              是專注於
              <span className="mx-1 font-futura">ESG</span>
              <span>永續設計的設計顧問公司，我們運用設計與創新，</span>
              <br className="hidden nav_md:block"/>
              <span>致力於實現一個互利共生、萬物共好的永續未來。</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slogan;
