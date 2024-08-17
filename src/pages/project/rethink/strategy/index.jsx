import Nudge_sm from "Assets/img/projects/rethink/nudge_390.jpg";
import Nudge_md from "Assets/img/projects/rethink/nudge_768.jpg";
import Nudge_lg from "Assets/img/projects/rethink/nudge_1440.jpg";
import Strategy_sm from "Assets/img/projects/rethink/strategy_390.jpg";
import Strategy_md from "Assets/img/projects/rethink/strategy_768.jpg";
import Strategy_lg from "Assets/img/projects/rethink/strategy_1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";
import Album from "./album";

const Strategy = () => {
  return (
    <>
      <ItemText
      title="Strategy"
      content={`調查顯示*，92% 的台灣民眾有回收習慣，但在垃圾桶抽查中，分類正確度僅26%。70% 民眾認為垃圾桶是回收問題的關鍵，66%認為現有回收資訊紛亂且標示不明。垃圾桶作為回收減廢行為的最後一哩路，是極佳的環境教育載體。`}
      remark={`*資料來源：RE-THINK重新思考於2022年發放之「2022台灣回收意願調查」問卷，有效樣本數共2,915份。`}
      />
      <FlexImage
        smImage={Nudge_sm}
        mdImage={Nudge_md}
        lgImage={Nudge_lg}
        altName="Nudge"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="使用者研究"
        content={`透過使用者研究與深度訪談，逐步梳理兩類利害關係人：清潔人員與民眾對垃圾桶的行為、態度、需求與痛點，以此發展為設計重點。`}
      />
      <FlexImage
        smImage={Strategy_sm}
        mdImage={Strategy_md}
        lgImage={Strategy_lg}
        altName="Strategy"
      />
      <Album />
    </>
  )
}

export default Strategy
