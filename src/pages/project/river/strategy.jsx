import River_strategy1_sm from "Assets/img/projects/river/river_strtegy1 390.jpg";
import River_strategy1_md from "Assets/img/projects/river/river_strtegy1 768.jpg";
import River_strategy1_lg from "Assets/img/projects/river/river_strtegy1 1440.jpg";
import River_strategy2_sm from "Assets/img/projects/river/river_strategy2 390.jpg";
import River_strategy2_md from "Assets/img/projects/river/river_strategy2 768.jpg";
import River_strategy2_lg from "Assets/img/projects/river/river_strategy2 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Strategy = () => {
  return (
    <>
      <ItemText
        title="Strategy"
        subTitle="前期研究"
        content={`透過使用者研究，團隊整合企業、政府及民間單位的需求，設計了一個可互動媒合的流域共好平台，並結合遊戲化參與機制，吸引一般民眾共同參與。目標在於讓每個人都能找到適合的角色，共同加入台灣的流域生態保育行動。`}
      />
      <FlexImage
        smImage={River_strategy1_sm}
        mdImage={River_strategy1_md}
        lgImage={River_strategy1_lg}
        altName="River_strategy1"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="公民參與策略"
        content={`針對公民參與，平台能發揮串連功能，促進媒合民間保育單位與企業/政府資源，提供一般民眾共同響應的流域行動方案。`}
      />
      <FlexImage
        smImage={River_strategy2_sm}
        mdImage={River_strategy2_md}
        lgImage={River_strategy2_lg}
        altName="River_strategy2"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
    </>
  );
};

export default Strategy;
