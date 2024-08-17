import River_number_sm from "Assets/img/projects/river/river_number 390.jpg";
import River_number_md from "Assets/img/projects/river/river_number 768.jpg";
import River_number_lg from "Assets/img/projects/river/river_number 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Result = () => {
  return (
    <>
      <ItemText
      title="Results"
      content={`《CSR在天下》過去的努力和累積，為這一計畫奠定了堅實的基礎，並在流域平台計畫加入後，取得了更加顯著的成就。以下是平台創造的影響力數據，展示了我們在推動流域生態保護方面的影響力。`}
      />
      <FlexImage
        smImage={River_number_sm}
        mdImage={River_number_md}
        lgImage={River_number_lg}
        altName="River_number"
      />
    </>
  )
}

export default Result