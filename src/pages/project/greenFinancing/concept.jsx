import Finance_three_sm from "Assets/img/projects/greenFinancing/fiance_three 390.jpg";
import Finance_three_md from "Assets/img/projects/greenFinancing/fiance_three 768.jpg";
import Finance_three_lg from "Assets/img/projects/greenFinancing/fiance_three 1440.jpg";
import Finance_section_sm from "Assets/img/projects/greenFinancing/fiance_section 390.jpg";
import Finance_section_md from "Assets/img/projects/greenFinancing/fiance_section 768.jpg";
import Finance_section_lg from "Assets/img/projects/greenFinancing/fiance_section 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Concept = () => {
  return (
    <>
      <ItemText
      title="Concept"
      subTitle="策展核心"
      content={`「綠色金融」議題對一般民眾來說生硬難懂，設計團隊由盤點利害關係人及深度訪談著手，從文史考證、營運需求，到動線規劃、展區主題設定與永續材料選用，輔以淺顯易懂的文字與資訊圖表，以「自然質理、永續循環、文史脈絡」為策展核心，結合品牌吉祥物強化視覺識別，展示金融業如何藉由綠色金融，帶領產業共同對抗氣候變遷，將永續作為以生動形式呈現於觀者面前。`}
      />
      <FlexImage
        smImage={Finance_three_sm}
        mdImage={Finance_three_md}
        lgImage={Finance_three_lg}
        altName="Finance_three"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="展區規劃"
        content={`展館為圓弧扇形空間，中央有天井採光。展館依照動線與主題，劃分為五大展區，從日常消費到產業融資，逐步引導觀者深入綠色金融。`}
      />
      <FlexImage
        smImage={Finance_section_sm}
        mdImage={Finance_section_md}
        lgImage={Finance_section_lg}
        altName="Finance_section"
      />
    </>
  )
}

export default Concept