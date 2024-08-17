import Finance_materials_sm from "Assets/img/projects/greenFinancing/fiance_materials 390.jpg";
import Finance_materials_md from "Assets/img/projects/greenFinancing/fiance_materials 768.jpg";
import Finance_materials_lg from "Assets/img/projects/greenFinancing/fiance_materials 1440.jpg";
import Finance_screen_sm from "Assets/img/projects/greenFinancing/finance_screen 390.jpg";
import Finance_screen_md from "Assets/img/projects/greenFinancing/finance_screen 768.jpg";
import Finance_screen_lg from "Assets/img/projects/greenFinancing/finance_screen 1440.jpg";
import Finance_big_sm from "Assets/img/projects/greenFinancing/fiance_big 390.jpg";
import Finance_big_md from "Assets/img/projects/greenFinancing/fiance_big 768.jpg";
import Finance_big_lg from "Assets/img/projects/greenFinancing/fiance_big 1440.jpg";
import Finance_postit_sm from "Assets/img/projects/greenFinancing/fiance_postit 390.jpg";
import Finance_postit_md from "Assets/img/projects/greenFinancing/fiance_postit 768.jpg";
import Finance_postit_lg from "Assets/img/projects/greenFinancing/fiance_postit 1440.jpg";
import Finance_light_sm from "Assets/img/projects/greenFinancing/fiance_light 390.jpg";
import Finance_light_md from "Assets/img/projects/greenFinancing/fiance_light 768.jpg";
import Finance_light_lg from "Assets/img/projects/greenFinancing/fiance_light 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";
import VideoSwiper from "./videoSwiper";
import MobileElement from "./mobileElement";

const Design = () => {
  return (
    <>
      <ItemText
        title="Design Detail"
        subTitle="永續循環材料"
        content={`在各主題展區中，分別選用了符合該展區主題特色，不同的永續循環材料作為佈展的素材。`}
      />
      <FlexImage
        smImage={Finance_materials_sm}
        mdImage={Finance_materials_md}
        lgImage={Finance_materials_lg}
        altName="Finance_materials"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="數位展示內容"
        content={`為符合營運需求，每年需固定更新的數據資料，均以數位方式展示，並結合互動機制，豐富觀展體驗。`}
      />
      <VideoSwiper />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <MobileElement />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <FlexImage
        smImage={Finance_screen_sm}
        mdImage={Finance_screen_md}
        lgImage={Finance_screen_lg}
        altName="Finance_screen"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <FlexImage
        smImage={Finance_big_sm}
        mdImage={Finance_big_md}
        lgImage={Finance_big_lg}
        altName="Finance_big"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <FlexImage
        smImage={Finance_postit_sm}
        mdImage={Finance_postit_md}
        lgImage={Finance_postit_lg}
        altName="Finance_postit"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="展間體驗亮點"
        content={`各展區設有符合綠色經濟主題的小型體驗裝置，導覽人員可以適時穿插與觀眾的互動體驗。`}
      />
      <FlexImage
        smImage={Finance_light_sm}
        mdImage={Finance_light_md}
        lgImage={Finance_light_lg}
        altName="Finance_light"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
    </>
  );
};

export default Design;
