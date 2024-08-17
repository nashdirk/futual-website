import Mobile_left from "Assets/img/projects/river/mobile1 1440_768_390.png";
import Mobile_right from "Assets/img/projects/river/mobile2 1440_768_390.png";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";

const MobileElement = () => {
  return (
    <div className="relative mx-auto my-[100px] h-[320px] sm:my-[120px] sm:h-[471px] md:my-[140px] md:h-[667px]">
      <div className="absolute left-0 h-full w-full top-[50px] sm:top-[150px]">
        <BackgroundColorAnimation
          colorLeft="bg-[#76ACCD]"
          colorRight="bg-[#899F8A]"
          opacityLeft={0.5}
          opacityRight={0.5}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
      </div>
      <div className="flex h-full justify-center space-x-[26px] sm:space-x-[38px] md:space-x-[55px]">
        <div className="relative">
          <div
            className="relative h-[254px] w-[118px] bg-cover bg-center bg-no-repeat sm:h-[374px] sm:w-[173px] md:h-[530px] md:w-[245px]"
            style={{ backgroundImage: `url(${Mobile_left})` }}
          />
        </div>
        <div className="">
          <div className="h-[50px] sm:h-[73.44px] md:h-[104px]" />
          <div
            className="relative h-[254px] w-[118px] bg-cover bg-center bg-no-repeat sm:h-[374px] sm:w-[173px] md:h-[530px] md:w-[245px]"
            style={{ backgroundImage: `url(${Mobile_right})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileElement;
