import Finance_data_sm from "Assets/img/projects/greenFinancing/fiance_data 390.jpg";
import Finance_data_md from "Assets/img/projects/greenFinancing/fiance_data 768.jpg";
import Finance_data_lg from "Assets/img/projects/greenFinancing/fiance_data 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Result = () => {
  return (
    <>
      <ItemText
      title="Results"
      subTitle="參觀民眾回饋"
      content={`展館開放後，透過問卷調查，比較參觀前後的數據，民眾對綠色金融的理解程度提升了33%，而在展館體驗評分方面，也獲得了平均得分達93.8分的優異評價。`}
      />
      <FlexImage
        smImage={Finance_data_sm}
        mdImage={Finance_data_md}
        lgImage={Finance_data_lg}
        altName="Finance_data"
      />
    </>
  )
}

export default Result