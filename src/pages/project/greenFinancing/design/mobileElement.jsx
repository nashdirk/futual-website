import Mobile_sm from "Assets/img/projects/greenFinancing/fiance_mobile 390.png";
import Mobile_md from "Assets/img/projects/greenFinancing/fiance_mobile 768.png";
import Mobile_lg from "Assets/img/projects/greenFinancing/fiance_mobile 1440.png";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";
import FlexImage from "Components/flexImage";

const MobileElement = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 h-full w-full top-[350px] sm:top-[150px]">
        <BackgroundColorAnimation
          colorLeft="bg-[#B8C318]"
          colorRight="bg-[#F29A63]"
          opacityLeft={0.5}
          opacityRight={0.5}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
      </div>
      <div className="relative">
        <FlexImage
          smImage={Mobile_sm}
          mdImage={Mobile_md}
          lgImage={Mobile_lg}
          altName="Mobile"
        />
      </div>
    </div>
  );
};

export default MobileElement;
