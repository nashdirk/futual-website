import ProjectBanner from "Components/projects/banner";
import Banner_lg from "Assets/img/projects/river/hero 1440.jpg";
import Banner_md from "Assets/img/projects/river/hero 768.jpg";
import Banner_sm from "Assets/img/projects/river/hero 390.jpg";
import Icon from "Assets/img/projects/river/river_icon.png";

const RiverBanner = () => {
  return (
    <ProjectBanner
      bannerImage_lg={Banner_lg}
      bannerImage_md={Banner_md}
      bannerImage_sm={Banner_sm}
      iconImage={Icon}
      tagList={["企業CSR", "生態保育", "公民參與"]}
      title={`CSR在天下\n流域共好平台`}
      subtitle="River Protection"
      category="SDG14"
      categoryColor="#007DBC"
      description="品牌識別·社會設計·互動設計"
    />
  );
}

export default RiverBanner;