import River_datavis_sm from "Assets/img/projects/river/river_datavis 390.jpg";
import River_datavis_md from "Assets/img/projects/river/river_datavis 768.jpg";
import River_datavis_lg from "Assets/img/projects/river/river_datavis 1440.jpg";
import River_impact1_sm from "Assets/img/projects/river/river_impact1 390.jpg";
import River_impact1_md from "Assets/img/projects/river/river_impact1 768.jpg";
import River_impact1_lg from "Assets/img/projects/river/river_impact1 1440.jpg";
import River_impact2_sm from "Assets/img/projects/river/river_impact2 390.jpg";
import River_impact2_md from "Assets/img/projects/river/river_impact2 768.jpg";
import River_impact2_lg from "Assets/img/projects/river/river_impact2 1440.jpg";
import River_gamification_sm from "Assets/img/projects/river/river_gamification 390.jpg";
import River_gamification_md from "Assets/img/projects/river/river_gamification 768.jpg";
import River_gamification_lg from "Assets/img/projects/river/river_gamification 1440.jpg";
import River_illustration_sm from "Assets/img/projects/river/river_illustration 390.jpg";
import River_illustration_md from "Assets/img/projects/river/river_illustration 768.jpg";
import River_illustration_lg from "Assets/img/projects/river/river_illustration 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Strategy = () => {
  return (
    <>
      <ItemText
        title="Design Detail"
        subTitle="視覺化監督流域現況"
        content={`為了更直觀地協助政府與民眾溝通流域現況，平台藉由資料視覺化和插畫設計，同步串接環境部即時監測數據，提供流域完整的現況監測。不僅有助於辨識污染程度，亦能指引有興趣加入的企業或公民，針對自己的所在地或關注的流域區段採取保護行動。`}
      />
      <FlexImage
        smImage={River_datavis_sm}
        mdImage={River_datavis_md}
        lgImage={River_datavis_lg}
        altName="River_datavis"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="企業參與：展現行動影響力"
        content={`針對企業的參與成果，平台從 UI 規劃著手，讓企業的豐富行動成果在首頁即可被充分的展示曝光，並在專屬頁面中進一步詳細說明行動內容、執行步驟與單位介紹等細節。`}
      />
      <FlexImage
        smImage={River_impact1_sm}
        mdImage={River_impact1_md}
        lgImage={River_impact1_lg}
        altName="River_impact1"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="企業行動評估指標"
        content={`為求一致評估企業所達成的影響力，平台展示了兩個重要指標：投入指標和影響力指標，呈現企業投入的資源數與達成了哪些改變，彰顯其在流域保護上的努力，也能促使其他企業參考效仿可行的行動方案。`}
      />
      <FlexImage
        smImage={River_impact2_sm}
        mdImage={River_impact2_md}
        lgImage={River_impact2_lg}
        altName="River_impact2"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="公民參與：遊戲化獎勵機制"
        content={`一般民眾對流域保護議題關注度不高，必須以有吸引力的方案提高參與動機。平台針對一般民眾加入遊戲化機制，結合積分升等及獎勵兌換，鼓勵民眾參與流域保護行動。`}
      />
      <FlexImage
        smImage={River_gamification_sm}
        mdImage={River_gamification_md}
        lgImage={River_gamification_lg}
        altName="River_gamification"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="結合插畫，增加視覺吸引力"
        content={`透過插畫視覺設計，軟化流域保護議題的說教感與沈重性，並提高公民的參與意願和興趣。`}
      />
      <FlexImage
        smImage={River_illustration_sm}
        mdImage={River_illustration_md}
        lgImage={River_illustration_lg}
        altName="River_illustration"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
    </>
  );
};

export default Strategy;
