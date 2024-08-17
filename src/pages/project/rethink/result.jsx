import Compared_sm from "Assets/img/projects/rethink/compared_390.jpg";
import Compared_md from "Assets/img/projects/rethink/compared_768.jpg";
import Compared_lg from "Assets/img/projects/rethink/compared_1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";

const Result = () => {
  return (
    <>
      <ItemText
        title="Results"
        content={`此計畫初步與新北市政府合作，經上萬人流壓力測試，成功引導使用者行為、創造回收行為正確度翻倍，預計單座垃圾桶便能引導使用者在一年減少 850 公斤的一般垃圾，以及減少 433 kg CO2e 碳排。`}
      />
      <FlexImage
        smImage={Compared_sm}
        mdImage={Compared_md}
        lgImage={Compared_lg}
        altName="Compared"
      />
    </>
  )
}

export default Result