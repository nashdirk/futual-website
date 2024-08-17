import Classification_sm from "Assets/img/projects/rethink/classification_390.jpg";
import Classification_md from "Assets/img/projects/rethink/classification_768.jpg";
import Classification_lg from "Assets/img/projects/rethink/classification_1440.jpg";
import BarrelBody_sm from "Assets/img/projects/rethink/barrel_body_390.jpg";
import BarrelBody_md from "Assets/img/projects/rethink/barrel_body_768.jpg";
import BarrelBody_lg from "Assets/img/projects/rethink/barrel_body_1440.jpg";
import Info_sm from "Assets/img/projects/rethink/info_390.jpg";
import Info_md from "Assets/img/projects/rethink/info_768.jpg";
import Info_lg from "Assets/img/projects/rethink/info_1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Design = () => {
  return (
    <>
      <ItemText
        title="Design Detail"
        subTitle="①新增細分類"
        content={`整合前端分類需求和後端回收流程，針對民眾最常製造的回收物，新增紙餐盒與廚餘類別。`}
      />
      <FlexImage
        smImage={Classification_sm}
        mdImage={Classification_md}
        lgImage={Classification_lg}
        altName="Classification"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="②外觀改造"
        content={`根據訪談結果，進行洞口及桶身改造：將開口設定不同形狀並限縮大小，幫助使用者判別分類，同時防止丟棄家庭垃圾；桶身斜面設計，杜絕垃圾被堆放在垃圾桶上的常見問題。`}
      />
      <FlexImage
        smImage={BarrelBody_sm}
        mdImage={BarrelBody_md}
        lgImage={BarrelBody_lg}
        altName="BarrelBody"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="③整合資訊設計"
        content={`以資訊圖表圖解常見的回收迷思和回收流程，結合同理心元素，讓民眾看見清潔人員的故事，以提高對回收工作的重視。指示設計採用簡明的顏色及圖示，引導民眾進行正確的垃圾分類，進一步提升回收效率。`}
      />
      <FlexImage
        smImage={Info_sm}
        mdImage={Info_md}
        lgImage={Info_lg}
        altName="Info"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
    </>
  );
};

export default Design;
